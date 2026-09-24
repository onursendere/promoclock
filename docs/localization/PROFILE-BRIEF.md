# Tool-profile localization brief (durable copy)

Native-level localization of PromoClock tool profiles. Repo: /Users/onur/CascadeProjects/promoclock. Absolute paths.
Never run git, builds, `npm test` or preview servers (workers share this tree). Only run the validator below.

## Read first
1. This file.
2. docs/localization/COMMON.md and docs/localization/<LOCALE>.md — register, typography, glossary.
3. Two existing files in src/content/tool-profiles/<LOCALE>/ (match their tone/terms) and src/dictionaries/<LOCALE>.json → hub.toolPage + hub.categories for the UI terms shown around your text.

## Task, per slug
- Read src/content/tool-profiles/en/<slug>.profile.md.
- Write src/content/tool-profiles/<LOCALE>/<slug>.profile.md (always end `.profile.md`; never plain claude.md).
- Only these frontmatter keys (text-only): summary, metaTitle, metaDescription, bestFor, keyFeatures (name+description), useCases, pricingSummary, savingTips, faq. Then the markdown body. NEVER copy facts keys (pricing, platforms, alternatives, sources, reviewedAt) — they are inherited from English.
- Same list lengths and same number of `## ` body sections as English. Translate the body headings too.
- Facts verbatim: numbers, prices ("$20/month" → your wording around "$20", never convert), plan/model names, dates, platforms, limitations. Don't add or drop claims.
- Validate immediately: `node /Users/onur/CascadeProjects/promoclock/scripts/check-profile.mjs <file>` — fix every ERROR. Limits: metaTitle ≤60 (ja/zh-CN ≤32), metaDescription 120–165 (ja/zh-CN 60–95, ko 70–120), bestFor items ≤40.
- Write each file as soon as it is ready; skip any that already exist and pass.

## Report (≤15 lines)
Validator summary, WARNs left and why, and any English-source problems (don't fix English).
