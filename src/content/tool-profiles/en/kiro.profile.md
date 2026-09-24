---
summary: "Kiro is an agentic coding environment from Amazon Web Services built around spec-driven development: prompts become requirements, a design and task lists before agents write code. It ships as a desktop IDE, a CLI and a browser version, and developers use it to keep AI-generated code tied to documented intent."
metaTitle: "Kiro Pricing, Free Tier & Student Offer (2026)"
metaDescription: "Kiro pricing in 2026: a free tier with 50 credits, Pro from $20/month, Pro Max and Power plans, add-on credits at $0.04 and free student credits."
bestFor:
  - "Developers who plan before coding"
  - "AWS-centric engineering teams"
  - "Multi-repo refactoring work"
keyFeatures:
  - name: "Spec mode"
    description: "Turns a prompt into requirements with acceptance criteria, a technical design and sequenced tasks that agents then implement."
  - name: "Property-based testing"
    description: "Checks requirements for contradictions and gaps, then tests behavior against rules that must hold for all inputs, not a few examples."
  - name: "Agent hooks and steering"
    description: "Steering files load your conventions into every session, and hooks trigger agent actions automatically when events occur."
  - name: "Kiro Web"
    description: "On paid plans, agents run in isolated cloud sandboxes, work across GitHub and GitLab repos and deliver pull requests."
  - name: "Kiro CLI"
    description: "Run the same agent in a terminal, hand work off to cloud sessions, or use it headless in CI/CD for reviews and fixes."
  - name: "Model choice with Auto"
    description: "Auto mixes models to balance quality, speed and cost, or you pick Claude, GPT-5.6 or open-weight models with credit multipliers."
useCases:
  - "Write a spec for a new payments feature, review the generated design and let agents work through the task list."
  - "Coordinate a shared-library change and the dependent services in one Kiro Web session across several repositories."
  - "Schedule a recurring automation that updates dependencies and opens pull requests for review each week."
  - "Run the headless Kiro CLI in a CI pipeline to review pull requests before a human looks at them."
pricing:
  freePlan: true
  startingPrice: 20
  currency: USD
  billing: month
  summary: "Kiro Free includes 50 credits a month. Pro is $20/month for 1,000 credits, Pro+ $40 for 2,000, Pro Max $100 for 5,000 and Power $200 for 10,000, with add-on credits at $0.04 each on paid plans."
  asOf: 2026-09-17
platforms: [web, macos, windows, linux, cli]
savingTips:
  - "Students at eligible universities get 1,000 credits per month free for one year."
  - "Stay on Auto for routine prompts: the same task costs about 1.3x more credits when you pick Sonnet 4.6 directly."
  - "Add-on credit packs start at $5 for 125 credits and stay valid for 12 months, unlike monthly plan credits."
faq:
  - q: "Is Kiro free?"
    a: "Yes. Kiro Free is a permanent tier with 50 credits a month and rate-limited access to Claude Sonnet 4.5 and open-weight models like Qwen3 Coder Next. It isn't offered for Enterprise accounts or in AWS GovCloud (US) Regions."
  - q: "What is a Kiro credit?"
    a: "A credit is a unit of agent work metered to two decimal places. Simple prompts can use less than 1 credit, while spec tasks usually use more. Stronger models have higher multipliers, and unused monthly credits don't roll over."
  - q: "Does Kiro have a student plan?"
    a: "Yes. Verified students at participating universities get 1,000 credits per month free for one year, the same allowance as Pro. The program listed 132 eligible universities in September 2026, so check the list before signing up."
  - q: "Can you use a Kiro subscription outside the Kiro apps?"
    a: "Partly. Credits work in Kiro IDE, Kiro CLI, Kiro Web, Kiro Crew, ACP-compatible IDEs and CI automation. Routing requests through third-party harnesses such as OpenClaw isn't permitted."
  - q: "Is Kiro Web included in the Pro plan?"
    a: "Yes. Kiro Web is available on Pro, Pro+, Pro Max and Power, and it draws from the same credits as the IDE and CLI with no separate charge for cloud compute. Free-tier users can't use it."
alternatives: [cursor, github-copilot, cline, codex, devin]
sources:
  - https://kiro.dev/pricing/
  - https://kiro.dev/students/
  - https://kiro.dev/web/
  - https://kiro.dev/downloads/
  - https://kiro.dev/changelog/
reviewedAt: 2026-09-17
---
## What is Kiro?
Kiro is AWS's development environment for working with AI agents in a structured way. Instead of jumping straight from a prompt to code, spec mode produces requirements, a design and tasks that you approve, and agents implement them in parallel.

The IDE is built on Code OSS and runs on macOS, Windows and Linux, with native ARM64 builds since IDE 1.1 in September 2026. Kiro CLI, Kiro Web and Kiro Crew, an open-source persistent agent workspace, share the same credits.

## Plans and credits
Every tier is priced by monthly credits rather than request counts. Paid plans renew on the 1st of each calendar month, and prices exclude VAT and sales tax. Pricing in AWS GovCloud (US) Regions is about 20% higher.

## Limitations
- The free tier's 50 credits cover only light use, and premium models such as Claude Opus 5 need a paid plan.
- Not all premium models are available in every country or region.
- Kiro IDE versions earlier than 0.11.133 and CLI versions earlier than 1.28.2 stop connecting on November 9, 2026.
- Paid self-serve plans are sold only to billing addresses in listed countries.
