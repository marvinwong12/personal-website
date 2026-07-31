// Vercel serverless function (Node runtime): retrieval-augmented chat over
// content/corpus/*.md + project/skill data, answered by Gemini.
//
// Requires env var GEMINI_API_KEY (set in Vercel project settings, or in
// .env.local for `vercel dev`). Requires api/_data/corpus-embeddings.json to
// exist — generate it with
// `node --env-file=.env.local scripts/build-embeddings.mjs`.

import { readFile } from 'node:fs/promises'
import path from 'node:path'

const GEMINI_EMBED_MODEL = process.env.GEMINI_EMBED_MODEL || 'gemini-embedding-001'
const GEMINI_CHAT_MODEL = process.env.GEMINI_CHAT_MODEL || 'gemini-2.5-flash'
const TOP_K = 5
const MAX_MESSAGE_LENGTH = 800
const MAX_HISTORY_TURNS = 6

// Coarse in-memory rate limit. Resets on cold start, so it's a mitigation
// against casual abuse within a warm instance, not a hard guarantee.
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 20
const requestLog = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  )
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

function cosineSimilarity(a, b) {
  let dot = 0
  let normA = 0
  let normB = 0
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

async function embedQuery(text) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_EMBED_MODEL}:embedContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: { parts: [{ text }] },
        taskType: 'RETRIEVAL_QUERY',
      }),
    },
  )

  if (!res.ok) {
    throw new Error(`Gemini embeddings API error (${res.status}): ${await res.text()}`)
  }

  const data = await res.json()
  return data.embedding.values
}

async function loadCorpus() {
  const filePath = path.join(process.cwd(), 'api/_data/corpus-embeddings.json')
  const raw = await readFile(filePath, 'utf-8')
  return JSON.parse(raw)
}

async function loadPersona() {
  const filePath = path.join(process.cwd(), 'content/persona.md')
  return readFile(filePath, 'utf-8')
}

function unavailableReply(res, message) {
  return res.status(503).json({
    error: 'not_configured',
    reply: message,
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown'
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: 'rate_limited',
      reply: "I'm getting a lot of questions right now — try again in a few minutes.",
    })
  }

  const { message, history } = req.body ?? {}

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'invalid_message' })
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      error: 'message_too_long',
      reply: 'Could you ask that a bit more concisely?',
    })
  }

  if (!process.env.GEMINI_API_KEY) {
    return unavailableReply(
      res,
      "This chat isn't fully set up yet — please reach out directly at marvin.cy.wong@gmail.com.",
    )
  }

  try {
    const [corpus, persona, queryEmbedding] = await Promise.all([
      loadCorpus(),
      loadPersona(),
      embedQuery(message),
    ])

    const top = corpus
      .map((chunk) => ({ ...chunk, score: cosineSimilarity(queryEmbedding, chunk.embedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, TOP_K)

    const context = top
      .map((chunk) => `[${chunk.source}${chunk.heading ? ` — ${chunk.heading}` : ''}]\n${chunk.text}`)
      .join('\n\n')

    const systemPrompt = `${persona}\n\nCONTEXT:\n${context || '(no matching context found)'}`

    const priorTurns = Array.isArray(history)
      ? history
          .filter((m) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
          .slice(-MAX_HISTORY_TURNS)
          .map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          }))
      : []

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_CHAT_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: [...priorTurns, { role: 'user', parts: [{ text: message }] }],
          generationConfig: { maxOutputTokens: 500 },
        }),
      },
    )

    if (!geminiRes.ok) {
      console.error('Gemini API error', geminiRes.status, await geminiRes.text())
      return res.status(502).json({
        error: 'upstream_error',
        reply: 'Something went wrong on my end — try again in a moment, or email marvin.cy.wong@gmail.com.',
      })
    }

    const data = await geminiRes.json()
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    return res.status(200).json({
      reply: reply || "Sorry, I couldn't come up with an answer to that — try rephrasing?",
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      error: 'server_error',
      reply: 'Something went wrong — please try again or email marvin.cy.wong@gmail.com.',
    })
  }
}
