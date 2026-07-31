# Marvin Wong — Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/` — page sections (Hero, About, Skills, Projects, ResumeCTA, Contact, Footer, Nav)
- `src/data/` — editable content for projects and skills
- `public/Marvin_Wong_Resume.pdf` — resume served for download (replace with an updated version anytime)
- `public/profile.jpg` — hero headshot
- `content/` — source material for the chatbot (see below)
- `api/chat.js` — RAG chatbot serverless function
- `scripts/build-embeddings.mjs` — builds `api/_data/corpus-embeddings.json` from `content/corpus/*.md` plus `src/data/projects.js` and `src/data/skills.js`

## Chatbot (RAG)

The floating chat widget ("Kit and Charlie", Marvin's pets) answers visitor
questions using retrieval-augmented generation, all on Gemini: it embeds the
question with Gemini's embedding model, finds the most relevant chunks of
`content/corpus/*.md` (plus project/skill data) by cosine similarity, and
asks Gemini Flash to answer using only that retrieved context.

**Setup:**

1. Fill in [`content/about-questionnaire.md`](content/about-questionnaire.md), then fold the answers into the files under `content/corpus/` (each `## Heading` becomes one retrievable chunk). Adjust `content/persona.md` to match your preferred tone and boundaries (see questionnaire section 11).
2. Get a free API key from [Google AI Studio](https://ai.google.dev) (no credit card required for the free tier).
3. Add it as an environment variable in the Vercel project (`GEMINI_API_KEY`) — Vercel dashboard → Project → Settings → Environment Variables. For local testing, also add it to `.env.local`.
4. Generate the embeddings (re-run any time corpus content changes):
   ```bash
   node --env-file=.env.local scripts/build-embeddings.mjs
   ```
   This writes `api/_data/corpus-embeddings.json`, which is committed to the repo so the deployed function can read it.
5. Test locally with `vercel dev` (plain `npm run dev` won't serve `/api/*` — Vite has no serverless function support on its own).

Until steps 2–4 are done, the widget stays up but replies with a message
pointing visitors to email Marvin directly.

Model names (`GEMINI_EMBED_MODEL`, `GEMINI_CHAT_MODEL`) are overridable env
vars in case Google renames/retires the defaults (`gemini-embedding-001`,
`gemini-2.5-flash`) after this was written.
