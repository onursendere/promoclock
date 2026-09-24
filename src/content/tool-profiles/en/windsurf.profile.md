---
summary: "Windsurf is the AI code editor that Cognition, maker of the Devin agent, acquired in July 2025 and renamed Devin Desktop on June 2, 2026. The same IDE now opens on an Agent Command Center that manages local and cloud agents, and plans and pricing carried over unchanged. Developers use it as an agent-first alternative to VS Code."
metaTitle: "Windsurf Is Now Devin Desktop: Pricing & Free Plan"
metaDescription: "Windsurf was renamed Devin Desktop in June 2026. See what changed, the Free, Pro ($20/month) and Max plans, quota-based usage, features and alternatives."
bestFor:
  - "Developers moving off VS Code"
  - "Engineers juggling many agents"
  - "Existing Windsurf subscribers"
keyFeatures:
  - name: "Agent Command Center"
    description: "A Kanban board of every running local and cloud agent, with Spaces that group sessions, pull requests, files and shared context."
  - name: "Devin Local agent"
    description: "The Rust rewrite that replaced Cascade, using up to 30% fewer tokens and supporting subagents and OS-level sandboxing."
  - name: "Third-party agents over ACP"
    description: "Runs Codex, Claude Agent, OpenCode and in-house agents through the Agent Client Protocol in the same Kanban view."
  - name: "Full IDE underneath"
    description: "Editor, extensions, keybindings and LSPs stay backwards-compatible with Windsurf and VS Code, and Cursor settings can be imported."
  - name: "Tab and inline edits"
    description: "Unlimited Tab completions and inline Command edits on every plan, including Free."
  - name: "Fast Context"
    description: "A retrieval subagent built on SWE-grep models that finds relevant code up to 20x faster."
useCases:
  - "Run a local agent on a refactor while a cloud Devin session fixes a bug, and review both from one board."
  - "Keep using Claude Agent or Codex inside the same editor instead of switching tools."
  - "Migrate an existing Windsurf setup, including rules and memories, to Devin Local with the built-in wizard."
pricing:
  freePlan: true
  startingPrice: 20
  currency: USD
  billing: month
  summary: "Free includes a light quota with unlimited Tab completions. Pro is $20/month, Max is $200/month with much higher quotas, and Teams starts at $80/month with full seats at $40 each. Enterprise is custom."
  asOf: 2026-09-17
platforms: [macos, windows, linux, jetbrains]
savingTips:
  - "Free models don't count against your quota, and lower-cost SWE models such as SWE-1.7 stretch paid allowances further."
  - "Subscribers who were on Windsurf Pro before the March 2026 quota switch keep a grandfathered price of $15/month indefinitely."
faq:
  - q: "Is Windsurf discontinued?"
    a: "No, it was renamed. On June 2, 2026 an over-the-air update turned Windsurf into Devin Desktop, keeping the editor, extensions, settings and plans. windsurf.com now redirects to devin.ai."
  - q: "Who owns Windsurf now?"
    a: "Cognition, the company behind the Devin coding agent. It announced on July 14, 2025 that it would acquire Windsurf's IP, product, trademark, brand and team, and it has since folded the editor into the Devin product family."
  - q: "How do usage limits work after the change?"
    a: "Since March 2026, plans include a daily and weekly token-based quota instead of prompt credits. Free users wait for the reset; Pro, Max and Teams users can buy extra usage at API list prices."
  - q: "What happened to Cascade?"
    a: "Devin Local replaced Cascade as the main local agent. Cognition kept Cascade available through July 2026 for gradual migration, and a command-palette wizard moves workflows and memories across."
alternatives: [cursor, github-copilot, kiro, cline, codex]
sources:
  - https://devin.ai/blog/windsurf-is-now-devin-desktop
  - https://docs.devin.ai/desktop/devin-desktop-faq
  - https://devin.ai/pricing
  - https://docs.devin.ai/desktop/accounts/quota
  - https://docs.devin.ai/admin/billing/self-serve
  - https://cognition.com/blog/windsurf
reviewedAt: 2026-09-17
---
## What happened to Windsurf?
Windsurf began as Codeium's editor and passed to Cognition in 2025. In June 2026 Cognition unified its products under one brand: Devin Desktop for the IDE, Devin Cloud for autonomous cloud agents, Devin CLI for the terminal and Devin Review for code review. Existing Windsurf rules, including `.windsurfrules`, still work.

## Who it's for
Devin Desktop suits developers who want an editor built around supervising several agents at once. You don't need Devin Cloud to use it; local-only agents work fine.

## Limitations
- Quotas are measured in tokens, so frontier models and long sessions drain the daily and weekly budget much faster.
- The Windsurf JetBrains plugin is in maintenance mode; Cognition recommends running Devin in JetBrains over ACP instead.
- Free trials of paid plans are offered only to a subset of eligible customers.
- On Teams, only full seats include Devin Desktop, and new Teams plans no longer include SSO.
