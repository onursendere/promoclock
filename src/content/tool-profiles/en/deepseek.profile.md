---
summary: "DeepSeek is a free AI chat assistant from the Chinese lab DeepSeek, built on its open-weight V4 model family. It pairs a no-subscription assistant with very low per-token API prices, and DeepSeek-V4.1-Flash arrived in September 2026. Budget-minded users, developers and researchers who self-host models use it most."
metaTitle: "Is DeepSeek Free? App, API Pricing & V4.1 (2026)"
metaDescription: "DeepSeek's chat app is free. See 2026 API pricing for deepseek-flash and V4-Pro, off-peak discounts, privacy notes, the UK DSeek name and alternatives."
bestFor:
  - "Budget-conscious everyday users"
  - "Developers cutting API costs"
  - "Researchers using open weights"
keyFeatures:
  - name: "Free web and mobile chat"
    description: "Chat, upload files and search the web at chat.deepseek.com or in the iOS and Android apps without a subscription."
  - name: "1M-token context"
    description: "Since the V4 release in April 2026, a 1M-token context window is the default across DeepSeek's official services."
  - name: "V4-Pro in Expert Mode"
    description: "DeepSeek-V4-Pro, generally available since August 13, 2026, is offered in the app and on the web through Expert Mode."
  - name: "Open weights"
    description: "Weights and technical reports for V4-Pro, V4-Flash and V4.1-Flash are published on Hugging Face for research and self-hosting."
  - name: "Off-peak API pricing"
    description: "Per-token billing with context caching, and off-peak rates that cost half the price of weekday peak windows."
  - name: "Works with coding agents"
    description: "The API accepts both OpenAI and Anthropic request formats, so tools like Claude Code and OpenCode can run on DeepSeek models."
useCases:
  - "Debug a script or walk through a math proof in the free web chat without paying for a plan."
  - "Point Claude Code or OpenCode at DeepSeek's Anthropic-compatible endpoint to run coding agents on cheaper tokens."
  - "Schedule large batch summarization jobs outside peak UTC hours to halve the API bill."
  - "Download open weights from Hugging Face to test a DeepSeek model on your own infrastructure."
pricing:
  freePlan: true
  summary: "The web chat and iOS and Android apps are free. The API is pay-as-you-go: deepseek-flash costs $0.30 per 1M input tokens (cache miss) and $1.20 per 1M output tokens at peak, half that off-peak."
  asOf: 2026-09-17
platforms: [web, ios, android, api]
savingTips:
  - "Run flexible API workloads outside peak hours (01:00–04:00 and 06:00–10:00 UTC, Monday to Friday) to pay 50% less."
  - "Reuse long prompt prefixes: cached deepseek-flash input costs $0.006 per 1M tokens at peak instead of $0.30 on a cache miss."
  - "Pick deepseek-flash over deepseek-v4-pro for routine jobs; its peak output price is $1.20 per 1M tokens versus $3.96."
faq:
  - q: "Is DeepSeek free?"
    a: "Yes. The DeepSeek web chat and its iOS and Android apps cost nothing and have no subscription tier. Only the developer API is paid, deducted per token from a topped-up or granted balance."
  - q: "Where does DeepSeek store my data?"
    a: "In China. DeepSeek's privacy policy, last updated February 10, 2026, says it collects, processes and stores personal data in the People's Republic of China. Weigh that before sharing sensitive personal or company information."
  - q: "Why is DeepSeek called DSeek in the UK?"
    a: "A notice on chat.deepseek.com says that, due to brand restructuring, DeepSeek is now officially DSeek in the UK. The notice adds that all services continue as normal."
  - q: "What is DeepSeek-V4.1-Flash?"
    a: "It's DeepSeek's newest model, released September 10, 2026: a 552B-parameter mixture-of-experts model with native visual understanding. It replaced V4-Flash in the API under the name deepseek-flash, with lower prices."
  - q: "Can I still use DeepSeek-V4-Pro through the API?"
    a: "Yes. DeepSeek first planned to route V4-Pro requests to V4.1-Flash from September 14, 2026, but its pricing page now says V4-Pro stays available with unchanged billing until further notice."
alternatives: [qwen, kimi, mistral, chatgpt, claude]
sources:
  - https://chat.deepseek.com
  - https://api-docs.deepseek.com/quick_start/pricing
  - https://api-docs.deepseek.com/news/news260910
  - https://api-docs.deepseek.com/news/news260424/
  - https://api-docs.deepseek.com/news/news260813/
  - https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html
reviewedAt: 2026-09-17
---
## What is DeepSeek?
DeepSeek is both a Hangzhou-based AI lab and the free assistant it runs in the browser and in mobile apps. Developers reach the same models through a low-cost API or download the open weights to run themselves.

## Recent changes
- **April 24, 2026:** V4 Preview introduced V4-Pro (1.6T total, 49B active parameters) and V4-Flash, and made 1M context standard.
- **July 24, 2026:** the legacy deepseek-chat and deepseek-reasoner API model names were retired.
- **August 2026:** V4-Pro reached general availability, and peak and off-peak API rates took effect.
- **September 10, 2026:** V4.1-Flash replaced V4-Flash with cheaper API pricing.
- **UK:** the service now carries the name DSeek.

## Limitations
DeepSeek stores personal data in China, which may rule it out for regulated or confidential work. In the API, vision input works only with deepseek-flash, and prices double during weekday peak windows. Model names and routing have changed several times in 2026, so API users should check the pricing page before deploying.
