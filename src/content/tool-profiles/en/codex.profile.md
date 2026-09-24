---
summary: "OpenAI Codex is OpenAI's coding agent, included with every ChatGPT plan from Free to Enterprise. It runs in the terminal, in VS Code-style editors, in the ChatGPT desktop and web apps, on iOS and in isolated cloud environments. Developers use it to write, refactor and review code, sharing one usage allowance with ChatGPT Work."
metaTitle: "OpenAI Codex Pricing, Limits & Free Access (2026)"
metaDescription: "OpenAI Codex pricing in 2026: included in ChatGPT Free, Go ($8), Plus ($20) and Pro (from $100). Usage limits per plan, surfaces, models and alternatives."
bestFor:
  - "Developers already paying for ChatGPT"
  - "Terminal-first engineers"
  - "Teams automating code review"
keyFeatures:
  - name: "Codex CLI"
    description: "A terminal agent that reads, edits and runs code locally, with sandboxing, approval rules and scriptable command-line options."
  - name: "IDE extension"
    description: "Works in VS Code, Cursor and Windsurf, while JetBrains IDEs and Xcode offer their own Codex integrations."
  - name: "Codex cloud"
    description: "Delegates tasks to isolated cloud environments with configurable dependencies and controlled internet access."
  - name: "Code review and Slack"
    description: "Reviews GitHub changes automatically and takes requests from Slack channels and threads on ChatGPT plans."
  - name: "GPT-5.6 model family"
    description: "Sol handles the hardest reasoning, Terra covers everyday production work and Luna gives the highest limits for lighter tasks."
  - name: "Customization"
    description: "Project guidance through AGENTS.md, plus skills, plugins, MCP servers and custom subagents."
useCases:
  - "Ask the CLI to fix a failing test suite and approve each command before it runs outside the sandbox."
  - "Hand a long refactor to Codex cloud and review the resulting diff later from the iOS app."
  - "Turn on automatic code review so every GitHub pull request gets a first pass before teammates look."
pricing:
  freePlan: true
  startingPrice: 8
  currency: USD
  billing: month
  summary: "Codex is included in ChatGPT Free ($0), Go ($8/month), Plus ($20/month) and Pro (from $100/month, with 5x or 20x Plus limits). Business is $25 per user monthly or $20 billed annually; API-key use is billed at API rates."
  asOf: 2026-09-17
platforms: [web, ios, macos, windows, vscode, jetbrains, cli, api]
savingTips:
  - "Plus and Pro users who hit a limit can buy ChatGPT credits instead of upgrading the whole plan."
  - "Switching to GPT-5.6 Luna gives far more local messages per five hours than Sol, stretching any plan."
  - "Open-source maintainers can apply to the Codex for Open Source program for API credits and six months of ChatGPT Pro with Codex."
faq:
  - q: "Is OpenAI Codex free?"
    a: "Yes, with limits. ChatGPT Free includes Codex for quick coding tasks, and Go at $8 a month covers lightweight work. Plus, at $20 a month, lists cloud integrations such as automatic code review and Slack."
  - q: "How many Codex messages does ChatGPT Plus include?"
    a: "OpenAI estimates 10 to 100 local GPT-5.6 Sol messages or 250 to 2,000 GPT-5.6 Luna messages per five-hour window on Plus. Weekly limits may also apply, and cloud chats use more."
  - q: "Can Codex run with an API key instead of ChatGPT?"
    a: "Yes. With an API key, Codex works in the CLI, SDK and IDE extension and is billed at API prices, but cloud features such as GitHub code review and Slack are not available."
  - q: "Which models does Codex use in 2026?"
    a: "ChatGPT plans get the GPT-5.6 family (Sol, Terra and Luna) and GPT-6 Astra. Pro adds GPT-5.3-Codex-Spark in research preview, and GPT-5.5 retires from Codex on October 14, 2026."
alternatives: [cursor, github-copilot, claude, cline, devin]
sources:
  - https://learn.chatgpt.com/docs/pricing
  - https://learn.chatgpt.com/docs
  - https://learn.chatgpt.com/docs/codex/ide
  - https://learn.chatgpt.com/llms.txt
reviewedAt: 2026-09-17
---
## What is OpenAI Codex?
Codex is OpenAI's agent for software work, tied to a ChatGPT account rather than sold on its own. OpenAI's Codex documentation now lives in the ChatGPT docs, and Codex usage is shared with ChatGPT Work, so both draw from the same limits and credits.

## Who it's for
It fits developers who already pay for ChatGPT and want one subscription to cover chat and coding. Teams can add the Codex SDK, a GitHub Action and an app-server protocol to build Codex into their own tools and CI.

## Limitations
- Limits are estimates, not fixed counts; long sessions, big codebases, fast mode and image generation use the allowance faster.
- Cloud chats run on GPT-5.6 Sol and can consume more than local messages.
- GPT-5.3-Codex-Spark is Pro-only, with its own separate limit.
- API-key users lose cloud features, including code review and Slack.
