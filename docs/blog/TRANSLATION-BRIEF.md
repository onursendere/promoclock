# PromoClock blog — translation brief (durable copy)

Native-level localization of PromoClock blog posts. Repo: /Users/onur/CascadeProjects/promoclock. Absolute paths.
Never run git, builds, `npm test` or preview servers (workers share this tree). Only run the validator below.
Do not spawn sub-agents.

## Read first
1. This file.
2. docs/localization/COMMON.md and docs/localization/<LOCALE>.md — register, typography, glossary ("AI" vs "IA"/"KI", sen/du/vous/tú/você…).
3. src/dictionaries/<LOCALE>.json → `hub.blog` and `hub.nav` (the UI words around your text) and one or two finished tool profiles in src/content/tool-profiles/<LOCALE>/ to match tone and terms.

## Task, per slug
- Read src/content/blog/en/<slug>.md.
- Write src/content/blog/<LOCALE>/<slug>.md (same file name as English).
- Frontmatter keys, text only: `title`, `metaTitle`, `metaDescription`, `excerpt`, `imageAlt` (translate English `image.alt`), `keyTakeaways`, `faq` (q + a), `howTo` (name + steps[].name/text) only if English has one. NEVER copy facts keys (category, featured, publishedAt, updatedAt, image, tools, sources) — they are inherited from English.
- Then the markdown body, fully translated, same structure: same number of `##` and `###` headings, same tables (same rows and columns), same lists, same images, same links.

## Rules
- Write as a native tech editor would for a reader searching in your language — natural headings phrased the way people search in your market, not word-for-word English. Keep the answer-first style: the first sentence after each heading answers it.
- Facts verbatim: numbers, prices ("$20/month" → your wording around "$20"; never convert currencies or change decimal separators inside a price), percentages, dates (localize the format: "4 Ekim 2026", "4. Oktober 2026", "2026年10月4日"), times (13:00–19:00 UTC), plan/model/product names (Pro, Max 5x, Claude Code, Google AI Pro, Veo 3.1…). Don't add or drop claims.
- Links: keep every link target exactly as in English (`/tools/claude/`, `/deals/…/`, `/blog/…/`, `https://…`). Translate only the link text. Internal links have no locale prefix; the site adds it.
- Images: keep `![alt](../images/file.jpg)` lines; translate the alt text only.
- Tables: translate header and cell text; keep prices, numbers and names; keep the `|---|` separator rows.
- Code (`GET https://promoclock.co/api/status`, curl lines, JSON field names like `status`, `isPeak`) stays as is.
- Brand voice: short sentences, concrete, no hype, no exclamation marks.
- Lengths: metaTitle ≤ 60 chars (ja/zh-CN ≤ 34, no "|" and no "PromoClock"), metaDescription 110–170 (ja/zh-CN 55–100, ko 65–125), excerpt 30–85 words (ja/zh-CN 70–200 chars). Use the primary keyword people search for in your language early in title, metaTitle and metaDescription.

## Validate immediately
`node /Users/onur/CascadeProjects/promoclock/scripts/check-post.mjs <file>` — fix every ERROR (structure, links, lengths, missing content). WARN about prices means a `$` amount is missing or reformatted: fix it unless the sentence intentionally restates it.
Write each file as soon as it is ready; skip files that already exist and pass.

## Report (≤ 15 lines)
Validator summary, WARNs left and why, and any English-source problems you noticed (don't fix English).
