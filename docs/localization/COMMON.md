# PromoClock localization — common rules (all locales)

Brand voice: a sharp, friendly consumer-tech site. Short sentences. Concrete. No hype, no exclamation marks in UI, no "revolutionary".
Write as a native professional localizer would for a product like Notion, Spotify or Revolut in your market — never word-for-word.

## Never change
- Product/brand names: PromoClock, Claude, Claude Code, Claude Cowork, Claude Watch (brand feature name — keep in Latin script in all locales), ChatGPT, GitHub Copilot, StackOptic, Digiwings, Onur Şendere, Anthropic, X (the platform).
- Plan names: Free, Pro, Max, Team, Enterprise, Plus, Hobby, Ultra… (Latin script, as the vendor writes them).
- Placeholders `{name}`, `{count}`, `{month}`, `{date}`, `{end}`, `{start}`, `{source}`, `{n}`, `{h}`, `{m}`, `{headline}`, `{price}` — keep exactly, but reorder freely for grammar.
- Codes (`SOLO50`), URLs, `GET /api/status`, `/api/status`, `llms.txt`, times in UTC (`13:00–19:00 UTC`), dates' meaning.
- JSON keys, list lengths, key order. Only the string values change.
- Prices: keep the currency symbol and number verbatim ("$20/month" → localized wording around "$20", never converted).

## "AI"
Use "AI" (Latin) in en, tr, ja, ko, zh-CN and hi. **Manager decision (2026-09-18, SEO):** fr, es and pt use "IA" and de uses "KI" everywhere (nav, badges, titles, prose), because that is what people in those markets search for ("outils IA", "herramientas de IA", "ferramentas de IA", "KI-Tools"). Product and plan names keep their official spelling ("Google AI Pro", "Meta AI", "OpenAI", "AI21").

## Length discipline
- nav/tabs/badges/buttons: as short as the language allows (nav ≤ 14 chars if possible; buttons ≤ 22 chars; CJK ≤ 8 chars).
- Meta titles: ≤ 60 chars incl. "| PromoClock"; CJK ≤ 32.
- Meta descriptions: 120–160 chars (ja/zh-CN 60–95, ko 70–120). Plain sentences, include the key term and the tool name.
- Everything else: as long as it needs to be, never longer.

## Consistency
One term per concept per locale (see glossary in the locale guide). Same register everywhere (see locale guide).
Typographic apostrophes/quotes as your language uses them; en dash for ranges (13:00–19:00); ellipsis "…" not "...".

## Common glossary (source concepts)
| concept | meaning |
| --- | --- |
| peak hours | weekday 13:00–19:00 UTC window when Claude's 5-hour session limits drain faster |
| off-peak | outside that window |
| usage limits / session limit / weekly limit | Claude's 5-hour and 7-day allowances |
| "limits drain faster" | the allowance is consumed faster |
| deal / deals | any tracked offer, promo or limit news (nav: "AI Deals") |
| promo / promotion | a time-limited vendor campaign |
| student offer | education discount/free plan for students |
| free trial | limited-time free access |
| limit boost / limit change | Claude allowance increase / policy change |
| verified | checked against an official source on a date |
| source | the official page the fact comes from |
| countdown / ends in / starts in | timer wording on cards |
| affiliate disclosure | legal page about commission links |
| live | currently active |
| tool / AI tool | a product in the directory |
| alternatives | comparable tools |
| free plan | permanent free tier |
| pricing from | cheapest paid plan |
| last reviewed | date the profile was fact-checked |
