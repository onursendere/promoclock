---
summary: "Devin is Cognition's AI software engineer, a cloud agent that takes tickets, works on its own machine and opens pull requests. Since June 2, 2026, Cognition's Windsurf editor has been Devin Desktop, so one Devin plan now covers the cloud agent, the desktop IDE and the Devin CLI. Engineering teams use it for migrations, bug fixes and reviews."
metaTitle: "Devin Pricing & Free Plan: Cloud, Desktop and CLI (2026)"
metaDescription: "Devin pricing in 2026: a free plan, Pro at $20/month, Max at $200/month and Teams from $80/month, plus what changed when Windsurf became Devin Desktop."
bestFor:
  - "Engineering teams with big backlogs"
  - "Developers delegating whole tickets"
  - "Former Windsurf users"
  - "Teams running legacy migrations"
keyFeatures:
  - name: "Devin Cloud"
    description: "An autonomous agent runs long tasks on its own cloud machine, picks up review feedback and CI results, and opens pull requests."
  - name: "Devin Desktop"
    description: "The former Windsurf IDE, now opening on an Agent Command Center that tracks local and cloud agent sessions on a Kanban board."
  - name: "Devin CLI with Fusion"
    description: "A terminal agent for macOS, Linux, WSL and Windows; Fusion pairs a frontier lead model with Cognition's cheaper SWE-2 sidekick."
  - name: "Third-party agents via ACP"
    description: "Devin Desktop runs Codex, Claude Agent, OpenCode and other Agent Client Protocol agents in the same interface as Devin."
  - name: "Devin Review and DeepWiki"
    description: "Reviews diffs on pull requests and generates documentation and system diagrams for codebases your team didn't write."
  - name: "Team tool integrations"
    description: "Assign work from Slack, Microsoft Teams, Linear or Jira and connect GitHub, GitLab or Bitbucket repositories."
useCases:
  - "Assign a fleet of Devin sessions to migrate many repositories to a new framework in parallel."
  - "Tag Devin in a Slack bug report so it investigates the issue and turns the thread into a pull request."
  - "Schedule automations that run daily QA checks and draft release notes without manual prompting."
  - "Review a public GitHub pull request for free by swapping github.com for devinreview.com in its URL."
pricing:
  freePlan: true
  startingPrice: 20
  currency: USD
  billing: month
  summary: "Free has a light agent quota plus unlimited Tab completions. Pro is $20/month with Devin Cloud access, Max is $200/month with much higher quotas, and Teams costs $80/month minimum plus $40 per full seat."
  asOf: 2026-09-17
platforms: [web, macos, windows, linux, cli, api]
savingTips:
  - "On Teams, give occasional users free flex seats that draw only from shared on-demand credits instead of $40 full seats."
  - "On-demand credits bought for overage roll over month to month and never expire."
  - "Switching routine tasks to smaller models extends your quota, according to Devin's pricing FAQ."
faq:
  - q: "Is Windsurf now Devin?"
    a: "Yes. Cognition shipped Windsurf as Devin Desktop through an over-the-air update on June 2, 2026. Existing plans, pricing, extensions and settings carried over, and Devin Local replaced the Cascade agent, which stayed available until July 1."
  - q: "Can you use Devin for free?"
    a: "Yes. The Free plan includes a light quota for coding with agents, limited models, unlimited inline edits and Tab completions in Devin Desktop, plus Devin Review and DeepWiki. Devin Cloud agents require Pro or higher."
  - q: "How do Devin usage limits work?"
    a: "Pro and Teams full seats get daily and weekly allowances, while Max has a larger weekly allowance with no daily cap. Past the allowance, you buy on-demand credits consumed at API pricing, and they don't expire."
  - q: "Can a team share a Devin Pro subscription?"
    a: "No. Pro and Max are single-user plans. Teams supports up to 200 members, costs at least $80 a month, and mixes $40 full seats, which include Devin Desktop, with free flex seats that don't."
  - q: "What happened to Devin's old Core plan?"
    a: "Cognition replaced its ACU-based plans with Free, Pro, Max and Teams. Legacy Core users were moved to the Free plan and can keep spending remaining credits, which now carry the same dollar value as their old ACUs."
alternatives: [codex, cursor, github-copilot, kiro, warp]
sources:
  - https://devin.ai/pricing
  - https://docs.devin.ai/admin/billing/self-serve
  - https://devin.ai/blog/windsurf-is-now-devin-desktop
  - https://devin.ai/desktop
  - https://devin.ai/cli
reviewedAt: 2026-09-17
---
## What is Devin?
Devin is Cognition's autonomous coding agent, aimed at engineering teams with complex, multi-repo projects. It learns codebase conventions, works through tasks on its own machine and returns pull requests for review.

## One product, several surfaces
Cognition merged its two products in 2026. Windsurf.com now redirects to Devin Desktop, a full IDE compatible with Windsurf and VS Code settings that opens on an agent manager. Devin Cloud handles long-running work remotely, Devin CLI runs in the terminal, and Devin Review covers code review. One subscription quota is shared across Devin sessions, the CLI and Devin Desktop.

## Limitations
- Cloud agents aren't included on the Free plan.
- Quotas aren't published as fixed numbers; cost per message depends on the model, task size and reasoning required.
- Flex seats on Teams don't include Devin Desktop.
- When on-demand credits run out, Automations stop and Devin Review switches to a diff viewer without AI review.
