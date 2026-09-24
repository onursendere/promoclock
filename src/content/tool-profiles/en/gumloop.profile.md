---
summary: "Gumloop is an AI agent platform from Gumloop (AgentHub Inc.) for building no-code agents that use your company's tools and data. Agents run in chat, Slack, Microsoft Teams, email or on triggers, while older node-based workflows are now marked legacy. Operations, sales and data teams use it for research, reporting and CRM work."
metaTitle: "Gumloop Pricing 2026: Pro Plan, Credits & AI Agents"
metaDescription: "Gumloop pricing in 2026: no free plan, Pro at $37/month with 20,000 credits and a 14-day trial, how credits and the 8% fee work, plus alternatives."
bestFor:
  - "Ops teams automating busywork"
  - "Sales teams researching leads"
  - "Companies standardizing on MCP"
  - "Admins who need AI governance"
keyFeatures:
  - name: "No-code AI agents"
    description: "Build agents that call your connected tools and data, then run them on schedules, on external events or through the API."
  - name: "Agent Skills"
    description: "Reusable knowledge packs teach agents specific work, and organizations can keep them in sync with a GitHub repository."
  - name: "Gumball personal agent"
    description: "Every account gets a personal agent with chat, a labeled inbox, a daily report and a brief before each meeting."
  - name: "Slack, Teams and email"
    description: "Put agents in Slack or Microsoft Teams channels, give one its own email address, or publish it as a hosted page."
  - name: "Evaluations and reflections"
    description: "Grade every agent conversation against your criteria and let agents review their own work to propose improvements."
  - name: "MCP hosting and governance"
    description: "Host or proxy MCP servers and set connector policies; Pro hosts one server, while Enterprise adds org-wide rules and audit logs."
useCases:
  - "Research a sales lead with Apollo enrichment and post a fit summary to the rep's Slack channel."
  - "Let Gumball label your Gmail or Outlook inbox and deliver a morning report from connected apps."
  - "Answer staff questions in Microsoft Teams with an agent grounded in your company knowledge base."
  - "Grade support conversations automatically and tag them for weekly quality reporting."
pricing:
  freePlan: false
  freeTrial: true
  startingPrice: 37
  currency: USD
  billing: month
  summary: "Gumloop lists no free plan. Pro costs $37/month with 20,000 credits, unlimited seats and a 14-day trial that requires a card; Enterprise is custom. Overage is billed at $0.005 per credit and capped by default."
  asOf: 2026-09-17
platforms: [web, api, cli]
savingTips:
  - "Bringing your own model API key drops chat and reasoning to 0 credits, though the orchestration fee rises from 8% to 16%."
  - "Starting a fresh chat for a new topic avoids carrying old context, which lowers token-based credit costs."
  - "Pro includes unlimited seats and teams at the same $37 a month."
  - "Cancelling during the 14-day Pro trial stops the card from being charged when the trial ends."
faq:
  - q: "Is Gumloop free?"
    a: "No. The pricing page lists only Pro and Enterprise. Every new account can try Pro free for 14 days, but the trial requires a card, is one-time per customer and rolls into a paid subscription unless you cancel."
  - q: "How are Gumloop credits calculated?"
    a: "Each agent chat adds up the model cost at $0.005 per credit, 1 credit per successful tool call plus that tool's own charge, 5 credits per minute of active processing, and an 8% orchestration fee on those three."
  - q: "Do Gumloop credits roll over?"
    a: "No, not on Pro; unused credits expire each billing period, and only Enterprise plans roll them over. You can turn on overage at $0.005 per credit, capped by default at 1,000,000 overage credits per period."
  - q: "What happened to Gumloop workflows?"
    a: "Gumloop is now built around AI agents, and the pricing page lists workflows under Legacy. Pro still allows 5 concurrent workflow runs alongside 25 concurrent agent chats."
  - q: "Can you use Gumloop from your own code?"
    a: "Yes. Gumloop provides a REST API with webhooks, Python and JavaScript SDKs, a CLI and MCP support, so you can create agents, start chat sessions and trigger automations programmatically."
alternatives: [n8n, mindstudio, zapier, lindy]
sources:
  - https://www.gumloop.com/pricing
  - https://docs.gumloop.com/core-concepts/credits
  - https://docs.gumloop.com/core-concepts/gumball
  - https://docs.gumloop.com/core-concepts/subscription_management
  - https://docs.gumloop.com/index
reviewedAt: 2026-09-17
---
## What is Gumloop?
Gumloop lets you build AI agents without code, connect them to apps through MCP-based connectors, and run them where work already happens: in Gumloop chat, Slack, Microsoft Teams, an agent's own email inbox or a hosted page. It supports 35+ models, and you can bring your own provider keys.

## How billing works
Gumloop charges for what an agent actually does, so the same agent might cost 2 credits for a quick question and 200 for deep research. Pro's 20,000 monthly credits are made up of 7,400 credits at the $0.005 list price plus 12,600 bonus credits. A running total appears live in the chat header, and selecting it opens a breakdown by credit type.

## Limitations
- There is no free plan; the only self-serve option is Pro at $37 a month.
- Per-chat costs vary, and the Insights dashboard for tracking spend across agents is Enterprise-only.
- Using your own API key doubles the orchestration fee to 16%.
- Unused Pro credits expire every billing period, and the classic workflow builder is now labeled legacy.
