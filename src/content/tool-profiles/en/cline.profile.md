---
summary: "Cline is an open-source AI coding agent from Cline Bot Inc. that runs in VS Code, JetBrains IDEs, the terminal and a desktop app. It is free for individual developers, who connect their own model API keys or pay for inference at cost, and it asks for approval before editing files or running commands."
metaTitle: "Cline Pricing: Is the Open-Source Coding Agent Free?"
metaDescription: "Cline is free and open source: you pay only for AI inference or bring your own keys. See ClinePass at $9.99/month, supported editors and limits."
bestFor:
  - "Developers who want model choice"
  - "Cost-conscious VS Code users"
  - "Teams needing open-source tooling"
keyFeatures:
  - name: "Plan and Act modes"
    description: "Sketch an approach in Plan mode first, then switch to Act mode and approve each tool call as the agent works."
  - name: "Checkpoints"
    description: "Every tool call creates a checkpoint with visual diffs in the editor, so you can roll back any change with /undo."
  - name: "Any model provider"
    description: "Connect Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek or a local endpoint with your own API key."
  - name: "MCP Marketplace"
    description: "Add MCP servers from the marketplace or your own so Cline can reach bug trackers, deployment platforms and data warehouses."
  - name: "Kanban board in the CLI"
    description: "Run cline --kanban to manage parallel agents in separate git worktrees, including Claude Code and Codex sessions."
  - name: "Skills and hooks"
    description: "Skills package reusable know-how such as running your test suite, and hooks let scripts gate or shape any tool call."
useCases:
  - "Refactor a module in VS Code while approving each file edit and terminal command the agent proposes."
  - "Split a backlog into Kanban cards and let several agents work on them in isolated git worktrees."
  - "Point Cline at a local model through an OpenAI-compatible server to keep code on your own machine."
  - "Connect a Linear MCP server so the agent reads tickets and turns them into linked tasks."
pricing:
  freePlan: true
  startingPrice: 9.99
  currency: USD
  billing: month
  summary: "The Cline agent is free for individuals, with no seat fees; you pay model providers through your own keys or buy inference from Cline at cost. ClinePass, an optional open-weight model subscription, is $9.99/month, and Enterprise pricing is custom."
  asOf: 2026-09-17
platforms: [vscode, jetbrains, cli, macos, windows]
savingTips:
  - "Bring your own API keys to pay provider rates directly, with no subscription or markup from Cline."
  - "ClinePass bundles open-weight models such as GLM 5.3, Kimi K3 and DeepSeek V4 for $9.99/month instead of separate provider accounts."
  - "Local models connected through an OpenAI-compatible endpoint avoid per-token API charges entirely."
faq:
  - q: "Is Cline free?"
    a: "Yes. The open-source Cline extension, CLI and desktop app are free for individual developers. You only pay for the AI models you use, either through your own provider API keys or by buying inference from Cline at cost."
  - q: "What is ClinePass?"
    a: "ClinePass is a $9.99/month subscription for open-weight models from Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo and Qwen inside Cline's IDE extension and CLI. Cline says its quotas give 2–5x the usage of standard API rate limits."
  - q: "Does Cline work in JetBrains IDEs and Cursor?"
    a: "Yes. The JetBrains plugin is in early access for IntelliJ IDEA, PyCharm, WebStorm, GoLand and other JetBrains IDEs. In Cursor and Windsurf, you install the same extension from the VS Code Marketplace."
  - q: "Is Cline open source?"
    a: "Yes. Cline's source code is on GitHub at github.com/cline/cline under the Apache 2.0 license. Because the agent runs client-side, you can switch providers or self-host models without being tied to Cline's own services."
  - q: "What does Cline Enterprise add?"
    a: "Enterprise adds SSO, SCIM provisioning, centralized billing, role-based access control, limits on which inference providers teams can use, audit logs, VPC deployments, an SLA and dedicated support. Pricing requires contacting sales."
alternatives: [github-copilot, cursor, codex, kiro, warp]
sources:
  - https://cline.bot/pricing
  - https://cline.bot/cline-pass
  - https://cline.bot/ide
  - https://cline.bot/desktop
  - https://cline.bot/cli
  - https://github.com/cline/cline
reviewedAt: 2026-09-17
---
## What is Cline?
Cline is an autonomous coding agent that works inside your editor or terminal rather than as a separate hosted service. It reads files you point it at, edits code, runs commands and drives a browser, pausing for your approval at each step unless you allow more autonomy.

## Where it runs
- **VS Code extension**, also installable in Cursor and Windsurf.
- **JetBrains plugin** in early access.
- **CLI** with a Kanban board, plugins, schedules and headless CI use.
- **Cline for Desktop**, a beta standalone app for macOS and Windows.
- **SDK** for embedding the agent in other tools.

## Limitations
Cost depends entirely on the models and tokens you use, so long agent sessions with frontier models can get expensive, and ClinePass covers open-weight models only. The desktop app is still in beta, with Cline warning to expect rough edges. There's no bundled free model allowance for individuals.
