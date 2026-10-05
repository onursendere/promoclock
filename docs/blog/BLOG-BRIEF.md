# PromoClock blog — writing brief (English originals)

Repo: /Users/onur/CascadeProjects/promoclock (absolute paths). The blog lives at `/<lang>/blog/<slug>/`.
Never run git, builds, `npm test` or dev servers (other workers share this tree). Only run the validator:
`node /Users/onur/CascadeProjects/promoclock/scripts/check-post.mjs <file>` — fix every ERROR, aim for zero WARN.
Do not spawn sub-agents.

## Goal
Search traffic (Google, Bing) and citations in AI answers (ChatGPT, Perplexity, Google AI Overviews, Claude).
Every post must be the most useful, most current, most precise page on its query. Today is 2026-10-04.

## Facts: the only rule that can't bend
- Ground every number, price, plan name, limit and date in the repo's verified data first:
  - Tool facts: `src/content/tool-profiles/en/<slug>.profile.md` (pricing summary + `asOf`, platforms, FAQ, body). Facts there were checked against vendor pages in Sept/Oct 2026.
  - Deals and limit news: `src/content/deals.yaml` (status follows `startsAt`/`endsAt`/`ongoing`; today is 2026-10-04).
  - Claude peak hours: `src/data/claude.ts`, `src/lib/llms.ts` (peakSection), `src/dictionaries/en.json` (`faq`, `hub.home.peakFacts`).
- You may WebFetch official vendor pages (pricing, help center, blog) to confirm or add a fact. Max 10 WebFetch and 5 WebSearch per post. Never cite a fact you could not ground; leave it out instead.
- If repo data and a vendor page disagree, use the vendor page, say "as of October 2026", and report the mismatch in your final message (do not edit profiles).
- Prices verbatim in USD as the vendor lists them ("$20/month", "$200/year"). No conversions, no invented discounts, no "up to" claims you cannot source.
- No ratings, scores or "we tested for 30 days" claims. PromoClock tracks pricing, limits and offers; it does not run lab benchmarks. Opinions are fine when framed as recommendations ("best for…", "pick X if…").

## File format
`src/content/blog/en/<slug>.md`:

```yaml
---
title: "H1. 50–90 chars. Primary keyword first, year where natural: 'Claude Peak Hours Explained (2026): …'"
metaTitle: "≤ 60 chars, primary keyword first, no '|' and no 'PromoClock' (the site appends ' | PromoClock')"
metaDescription: "120–160 chars. Answer + hook. Include primary keyword and a concrete number."
excerpt: "35–65 words. Answer-first summary that fully answers the main query on its own (AI engines quote this). Concrete numbers, no hype."
category: guides        # guides | comparisons | deals
publishedAt: 2026-10-04
updatedAt: 2026-10-04
tools: [claude, chatgpt] # 1–14 tool slugs discussed (must exist in src/content/tools); most important first
keyTakeaways:            # 3–5 self-contained fact sentences (8–40 words each), each with a number or name
  - "…"
faq:                     # 4–6; questions people actually type; answers 25–90 words, self-contained, fact-dense
  - q: "…?"
    a: "…"
howTo:                   # OPTIONAL — only when the post teaches a real procedure (3–8 steps)
  name: "How to …"
  steps:
    - name: "Short step name"
      text: "One or two sentences."
sources:                 # 2–12 https URLs, official pages first (pricing, help center, official blog)
  - https://…
---
```
Do not add `image` — hero images are added separately. Quote YAML strings with double quotes; escape inner double quotes or use single quotes inside.

## Body (markdown after the frontmatter)
- 1,200–1,900 words of prose (validator minimum 1,000, excluding FAQ). No H1. Start with a 2–3 sentence intro that answers the query and says "as of October 2026" where facts can change.
- 6–10 `##` sections. Phrase most H2s as the questions people search ("How much does Claude Max cost?", "Which plan should students pick?"). Use `###` for sub-items (e.g. each tool in a roundup).
- **Answer first**: the first sentence after every H2 directly answers it in ≤ 30 words. Then detail.
- At least one markdown table (prices, plans, free tiers, time zones…). Tables must be fact-only and complete.
- Bullet lists for scannable facts; short paragraphs (≤ 4 sentences).
- Attribute facts inline: "according to Anthropic's pricing page", "OpenAI's help center says…". Add 2–5 inline links to official sources.
- Internal links (required, 5–12): write them WITHOUT a locale and WITH a trailing slash; the site adds the reader's language:
  - Tool pages: `[Cursor](/tools/cursor/)` — only slugs in `src/content/tools/`.
  - Deal pages: `[the student offer](/deals/cursor-student-pro-year/)` — only ids in `src/content/deals.yaml`. Prefer live/ongoing deals; if you mention an ended one, say it ended.
  - Sections: `/` (Claude Watch: live peak-hours clock), `/deals/`, `/tools/`, `/calendar/`, `/about/`.
  - Other posts: `/blog/<slug>/` — only the slugs in the post list below.
- End with `## Bottom line` (or a similarly direct verdict) that gives a clear recommendation per reader type.
- Do NOT repeat the FAQ in the body; it is rendered from the frontmatter.
- Voice: PromoClock's — a sharp, friendly consumer-tech editor. Short sentences. Concrete. "We" = PromoClock ("We track 100 AI tools…"). No hype words (revolutionary, game-changer, unleash, dive in, in today's fast-paced world), no exclamation marks, no emojis.
- American English. Numbers as digits. Dates like "October 4, 2026". Ranges with an en dash (13:00–19:00 UTC).
- Write so each section can be quoted alone by an AI answer engine: name the tool and the fact in the same sentence (avoid "it", "this plan" across paragraphs).

## The 10 posts (slugs are final)
1. `claude-peak-hours` — guides
2. `claude-usage-limits` — guides
3. `claude-pro-vs-max` — comparisons
4. `ai-student-discounts` — deals
5. `chatgpt-vs-claude-vs-gemini` — comparisons
6. `best-ai-coding-tools` — comparisons
7. `best-free-ai-tools` — guides
8. `save-money-on-ai-subscriptions` — guides
9. `best-ai-image-generators` — comparisons
10. `best-ai-video-generators` — comparisons

Cross-link related posts where it helps the reader (2–4 per post).

## Final message (≤ 20 lines)
Per post: path, body word count, validator result, the internal links used, and every fact you were unsure about or found stale in the repo (with the URL that shows it).
