---
summary: "Google AI Studio is Google's free browser workspace for testing Gemini models, creating Gemini API keys and vibe coding apps in Build mode. Developers use it to prototype prompts and export code, while non-coders describe an app and let the Antigravity agent build it with Firebase sign-in and a Firestore database."
metaTitle: "Google AI Studio: Free Plan, Pricing & Build Mode (2026)"
metaDescription: "Google AI Studio is free to use. See what Build mode can create, how Gemini API billing works, and what Google AI Pro and Ultra add in 2026."
bestFor:
  - "Developers prototyping with Gemini"
  - "Non-coders building web apps"
  - "Android app experiments"
keyFeatures:
  - name: "Build mode"
    description: "Describe an app and the Google Antigravity coding agent writes a React, Angular or Next.js project you can preview and refine."
  - name: "Automatic Firebase backend"
    description: "Detects when an app needs sign-in or stored data and provisions Firebase Authentication and Cloud Firestore for it."
  - name: "Native Android projects"
    description: "Generates Kotlin and Jetpack Compose apps, runs them in an in-browser emulator and publishes to Google Play's internal test track."
  - name: "Playground with Get code"
    description: "Tune system instructions, tools and model settings on a prompt, then export working Gemini API code in your language."
  - name: "Free Gemini API keys"
    description: "New users get a project and API key by default and can add prepaid billing later for higher rate limits."
  - name: "Workspace data and export"
    description: "Build apps on top of Sheets and Drive data, then export a project with its chat history to Google Antigravity."
useCases:
  - "Turn a Google Sheets tracker into a shareable dashboard app without setting up hosting yourself."
  - "Compare several Gemini models on the same prompt before choosing one for a production API integration."
  - "Prototype a real-time multiplayer web game with Google sign-in and a shared database from one description."
  - "Generate a Kotlin Android app, test it in the browser emulator and push it to internal testing on Google Play."
pricing:
  freePlan: true
  summary: "AI Studio is free with rate-limited Gemini access. Google AI Pro and Ultra raise AI Studio quotas, and Gemini API usage past the free tier is prepaid from $5, for example $0.30 input and $2.50 output per 1M tokens on Gemini 3.5 Flash-Lite."
  asOf: 2026-09-17
platforms: [web, api]
savingTips:
  - "AI Studio usage stays free until you link a paid API key, so prototype on the free tier first."
  - "The Google Cloud Starter Tier lets you publish up to 2 full-stack apps from Build mode without a billing account."
  - "On the paid Gemini API tier, the Batch API costs 50% less than standard requests for jobs that can wait."
faq:
  - q: "Is Google AI Studio free?"
    a: "Yes. Google AI Studio is free in its available regions, with rate-limited access to certain Gemini models. You only pay once you link a paid Gemini API key and prepay credits for higher limits and paid features."
  - q: "Does Google use AI Studio prompts to improve its products?"
    a: "On the free tier, yes: Google's pricing page says free-tier content is used to improve its products. On the paid tier, prompts and responses are not used that way, so keep sensitive data out of free-tier sessions."
  - q: "Can Google AI Studio build a complete app?"
    a: "Yes. Since March 2026, Build mode creates full-stack web apps with Firebase login and a Firestore database, and since May 2026 it can also generate native Android apps. Up to 2 apps can be deployed without a billing account."
  - q: "What do Google AI Pro and Ultra add in AI Studio?"
    a: "They add higher daily quotas in the AI Studio web interface, premium models such as Gemini Pro and Nano Banana, and the Code Assistant in Build mode. The benefits don't apply to direct API calls, and agents like Deep Research still need a paid key."
  - q: "How much does the Gemini API cost after the free tier?"
    a: "It depends on the model and is billed per 1M tokens from prepaid credits, with a $5 minimum top-up. Gemini 3.8 Flash is $0.75 input and $3.75 output through December 31, 2026, doubling to $1.50 and $7.50 from January 1, 2027."
alternatives: [lovable, bolt, v0, replit, cursor]
sources:
  - https://ai.google.dev/gemini-api/docs/pricing
  - https://ai.google.dev/gemini-api/docs/billing
  - https://ai.google.dev/gemini-api/docs/google-ai-plans
  - https://blog.google/innovation-and-ai/technology/developers-tools/full-stack-vibe-coding-google-ai-studio/
  - https://blog.google/innovation-and-ai/technology/developers-tools/google-ai-studio-io-2026/
reviewedAt: 2026-09-17
---
## What is Google AI Studio?
Google AI Studio is the web console at aistudio.google.com where you try Gemini models and manage Gemini API keys. It began as a prompt playground and now doubles as an app builder.

Google relaunched Build mode as a full-stack vibe coding tool on March 18, 2026. At I/O on May 19, 2026, it added native Android projects, Google Workspace data access and export to Google Antigravity for local development.

## How billing works
- Playground and Build mode are free unless a paid API key is linked to the project.
- Paid Gemini API access starts with a $5 prepayment; prepaid credits expire after 12 months.
- Cloud Billing accounts opened after March 2, 2026 can't spend the $300 Google Cloud Welcome credit on Gemini API or AI Studio usage.
- Google AI Pro and Ultra subscriptions are a separate route to higher quotas inside the AI Studio interface only.

## Limitations
Google doesn't publish a fixed free-tier limit table; you check your active rate limits inside AI Studio. Free-tier content can be used to improve Google products. Subscription quotas reset daily and don't carry over to API keys, and the Deep Research and Antigravity Preview agents in AI Studio require a paid API key.
