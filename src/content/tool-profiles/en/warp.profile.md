---
summary: "Warp is a modern terminal with a built-in coding agent, made by the New York company Warp, whose client became open source under the AGPL in April 2026. Developers use it to run commands and hand multi-step coding work to the Warp Agent, while teams add cloud agents and Warp Factories for automated pipelines."
metaTitle: "Warp Pricing, Free Plan & AI Agent Features (2026)"
metaDescription: "Warp pricing in 2026: the terminal is free, Build is $20/month with 1,500 AI credits, Max $200/month. See features, BYOK options and limits."
bestFor:
  - "Terminal-heavy developers"
  - "DevOps and platform engineers"
  - "Teams automating code review"
keyFeatures:
  - name: "Agentic terminal"
    description: "A fast, modern terminal where you can switch from typing commands to asking the Warp Agent to plan and edit code."
  - name: "Warp Agent CLI"
    description: "Run Warp's coding agent inside any terminal, not just the Warp app, with access included on every plan."
  - name: "Model choice"
    description: "Pick models such as Claude Opus 5, GPT-5.6, Gemini 3.1 Pro or Kimi K3 per task, or run tasks in parallel on different models."
  - name: "Cloud agents and integrations"
    description: "Mention @Warp in Slack, Linear or GitHub to investigate bugs or open pull requests, with shareable live session links."
  - name: "Warp Drive"
    description: "Save and share workflows, notebooks and other objects with teammates; paid plans remove the object limits."
  - name: "Warp Factories"
    description: "An early-access control plane that runs fleets of coding agents from GitHub, Slack, webhooks or schedules, configured as code."
useCases:
  - "Ask the agent to diagnose a failing build from terminal output and apply the fix without leaving the shell."
  - "Let a cloud agent do the first-pass review on every pull request before a teammate looks at it."
  - "Route incoming Slack alerts to an agent that reproduces the issue and summarizes next steps."
  - "Use the terminal for free with your own Anthropic or OpenAI API key instead of a subscription."
pricing:
  freePlan: true
  startingPrice: 20
  currency: USD
  billing: month
  summary: "Free covers the terminal and Agent CLI but no bundled AI usage. Build is $20/month with 1,500 credits, Max is $200/month with 18,000 credits, and Business is $50 per user per month for up to 25 seats."
  asOf: 2026-09-17
platforms: [macos, windows, linux, cli, api]
savingTips:
  - "Annual billing takes 10% off, which brings Build to $18/month and Max to $180/month."
  - "On the Free plan you can use the Warp Agent with your own API key or a custom inference endpoint instead of paying for credits."
  - "SuperGrok and X Premium subscribers can connect that subscription as the Warp Agent's inference source."
faq:
  - q: "Is Warp free?"
    a: "Yes. The Free plan includes the full terminal, Warp Agent CLI access and limited cloud agents, but no bundled AI usage. To use the agent you bring your own API key or inference endpoint, buy add-on credits, or upgrade."
  - q: "Is Warp open source?"
    a: "Yes. Since April 28, 2026, the Warp client source code has been public at github.com/warpdotdev/warp under the AGPL-3.0 license. OpenAI is the founding sponsor of the open-source repository, and Warp's paid AI services remain commercial."
  - q: "What does a Warp credit cover?"
    a: "Credits pay for agent usage at API rates. Build's 1,500 credits equal $20 of included usage, and Max's 18,000 credits are 12 times that. Paid plans can reload credits with volume discounts, auto-reload and a spend cap."
  - q: "Which operating systems does Warp support?"
    a: "Warp runs on macOS 10.14 or later, on Windows 10 and 11 in x64 and ARM64 builds, and on Linux through .deb, .rpm, Arch and AppImage packages. The Agent CLI works inside other terminals too."
  - q: "Does Warp train on your code?"
    a: "Warp says it has Zero Data Retention agreements with all contracted LLM providers, so customer data isn't retained or used for training. It is SOC 2 compliant, and telemetry can be configured individually or enforced for teams."
alternatives: [codex, cline, cursor, kiro, devin]
sources:
  - https://www.warp.dev/pricing
  - https://docs.warp.dev/support-and-community/plans-and-billing/plans-pricing-refunds
  - https://www.warp.dev/blog/warp-is-now-open-source
reviewedAt: 2026-09-17
---
## What is Warp?
Warp began as a faster terminal and now positions itself as an agentic development environment. The same app handles everyday shell work and agent sessions that write, run and fix code.

In April 2026 Warp open-sourced its client, and in August 2026 it launched Warp Factories for companies running many coding agents across the software lifecycle. The terminal is still maintained as its own product.

## Plans in practice
Free suits people who only want the terminal or already pay for model access elsewhere. Build and Max bundle agent usage, unlimited Warp Drive objects and cloud conversation storage. Business adds SAML SSO, team usage metrics and admin data controls.

## Limitations
- No AI usage is bundled with the Free plan.
- Credits are consumed at API rates, so heavy agent use can outgrow Build's $20 allowance quickly.
- Business caps self-serve teams at 25 seats; larger groups need Enterprise.
- Warp Factories is in early access and not generally available.
