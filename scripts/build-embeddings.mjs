// Chunks content/corpus/*.md plus src/data/projects.js and src/data/skills.js,
// embeds each chunk with the Gemini embeddings API, and writes
// api/_data/corpus-embeddings.json for the /api/chat serverless function to
// read at request time.
//
// Usage:
//   GEMINI_API_KEY=your-key node --env-file=.env.local scripts/build-embeddings.mjs
//
// Re-run this any time content/corpus/*.md, src/data/projects.js, or
// src/data/skills.js changes.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const corpusDir = path.join(rootDir, 'content/corpus')
const outputPath = path.join(rootDir, 'api/_data/corpus-embeddings.json')

const GEMINI_EMBED_MODEL = process.env.GEMINI_EMBED_MODEL || 'gemini-embedding-001'
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

function chunkMarkdown(source, text) {
  const sections = text.split(/\n(?=## )/g)
  return sections
    .map((section) => {
      const headingMatch = section.match(/^##\s+(.+)/)
      const heading = headingMatch ? headingMatch[1].trim() : null
      const body = section.replace(/^##\s+.+\n?/, '').trim()
      return { source, heading, text: body }
    })
    .filter((chunk) => chunk.text.length > 0)
}

async function loadMarkdownChunks() {
  const files = (await readdir(corpusDir)).filter((f) => f.endsWith('.md'))
  const chunks = []
  for (const file of files) {
    const text = await readFile(path.join(corpusDir, file), 'utf-8')
    chunks.push(...chunkMarkdown(file.replace(/\.md$/, ''), text))
  }
  return chunks
}

async function loadProjectChunks() {
  const { projects } = await import(path.join(rootDir, 'src/data/projects.js'))
  return projects.map((p) => ({
    source: 'projects',
    heading: p.name,
    text: [
      `${p.name} (${p.status === 'in-progress' ? 'in progress' : 'live'})`,
      p.tagline,
      p.description,
      `Tech: ${p.tech.join(', ')}`,
      p.metric ? `${p.metric.label}: ${p.metric.value}` : null,
      p.demo ? `Live demo: ${p.demo}` : null,
      p.github ? `Code: ${p.github}` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  }))
}

async function loadSkillsChunk() {
  const { skillGroups } = await import(path.join(rootDir, 'src/data/skills.js'))
  const text = skillGroups
    .map((group) => `${group.label}: ${group.items.join(', ')}`)
    .join('\n')
  return [{ source: 'skills', heading: 'Skills', text }]
}

async function embedBatch(texts) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_EMBED_MODEL}:batchEmbedContents?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        requests: texts.map((text) => ({
          model: `models/${GEMINI_EMBED_MODEL}`,
          content: { parts: [{ text }] },
          taskType: 'RETRIEVAL_DOCUMENT',
        })),
      }),
    },
  )

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Gemini embeddings API error (${res.status}): ${errText}`)
  }

  const data = await res.json()
  return data.embeddings.map((e) => e.values)
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error(
      'Missing GEMINI_API_KEY. Set it in your environment, e.g.:\n' +
        '  node --env-file=.env.local scripts/build-embeddings.mjs',
    )
    process.exit(1)
  }

  const chunks = [
    ...(await loadMarkdownChunks()),
    ...(await loadProjectChunks()),
    ...(await loadSkillsChunk()),
  ]

  console.log(`Embedding ${chunks.length} chunks with ${GEMINI_EMBED_MODEL}...`)

  const BATCH_SIZE = 16
  const embeddings = []
  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE)
    const vectors = await embedBatch(batch.map((c) => c.text))
    embeddings.push(...vectors)
  }

  const output = chunks.map((chunk, i) => ({
    id: `${chunk.source}-${i}`,
    source: chunk.source,
    heading: chunk.heading,
    text: chunk.text,
    embedding: embeddings[i],
  }))

  await writeFile(outputPath, JSON.stringify(output), 'utf-8')
  console.log(`Wrote ${output.length} embedded chunks to ${outputPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
