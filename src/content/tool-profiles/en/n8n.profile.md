---
summary: "n8n is a workflow automation platform from the company n8n that combines a visual editor with code, AI agents and 500+ integrations. You can self-host the free Community Edition or pay for n8n Cloud, which bills by full workflow executions rather than individual steps. Technical teams use it for AI agents and internal automation."
metaTitle: "n8n Pricing 2026: Cloud Plans, Free Self-Hosting & AI"
metaDescription: "n8n pricing in 2026: a free self-hosted Community Edition, Cloud Starter from €24/month, execution-based billing, AI agent features and alternatives."
bestFor:
  - "Developers and technical teams"
  - "Companies that need to self-host"
  - "Builders of AI agent workflows"
  - "High-volume automation users"
keyFeatures:
  - name: "Visual editor plus code"
    description: "Build workflows on a canvas and add JavaScript or Python steps wherever a prebuilt node falls short."
  - name: "AI agents and RAG"
    description: "Create multi-agent setups and RAG systems, and swap cloud or offline models without rebuilding the workflow."
  - name: "Self-hosting"
    description: "Run the free Community Edition on your own infrastructure with Docker, or license Business and Enterprise features on your servers."
  - name: "n8n Assistant"
    description: "A chat-based agent inside n8n that plans, builds, tests and fixes workflows from plain-language requests; it is in preview on Cloud."
  - name: "MCP support"
    description: "MCP Server Trigger nodes expose workflows to AI clients, and you can build or update workflows from inside an AI app."
  - name: "Execution-based pricing"
    description: "Cloud plans charge per complete workflow run regardless of step count, with unlimited users and workflows on every plan."
useCases:
  - "Route inbound support emails through an AI agent that drafts answers and waits for a human to approve them."
  - "Sync CRM, billing and spreadsheet data every hour without paying separately for each step."
  - "Self-host n8n on your own servers when compliance rules require control over where workflow data is processed."
  - "Expose an internal workflow as an MCP tool so Claude or another AI assistant can trigger it."
pricing:
  freePlan: true
  freeTrial: true
  startingPrice: 24
  currency: EUR
  billing: month
  summary: "The self-hosted Community Edition is free. On n8n Cloud, Starter costs €24/month for 2,500 executions and Pro €60/month for 10,000, with 17% off on annual billing; Business and Enterprise cost more."
  asOf: 2026-09-17
platforms: [web, api, cli]
savingTips:
  - "Annual billing saves 17%, dropping Cloud Starter from €24 to €20 and Pro from €60 to €50 per month."
  - "The Community Edition is free to self-host; your costs are the server and the time to maintain it."
  - "Companies with fewer than 20 employees can apply for the Start-up Plan, which takes 50% off Business."
  - "The 14-day Cloud trial includes Pro features and 1,000 executions, and nothing is charged if you let it expire."
faq:
  - q: "Is n8n free?"
    a: "Yes, if you self-host. The Community Edition is free on your own infrastructure, though it lacks paid features such as SSO, environments and Git version control. n8n Cloud has no free plan, only a 14-day trial."
  - q: "What counts as an execution in n8n?"
    a: "An execution is one complete run of a workflow, however many steps it contains. A 20-step workflow therefore uses the same single execution on n8n Cloud as a 2-step one."
  - q: "What happens when the n8n Cloud trial ends?"
    a: "The trial expires automatically after 14 days, and n8n deletes the workspace unless you upgrade. You have 90 days to download your workflows, and no charges occur if you do nothing."
  - q: "Can n8n build workflows for you with AI?"
    a: "Yes. The n8n Assistant, previously named AI Assistant, can create, edit, test and troubleshoot workflows from plain-language requests. Cloud Starter includes 2,300 AI credits a month for it, and Pro up to 13,700."
  - q: "Does n8n charge per user?"
    a: "No. Every n8n plan includes unlimited users and workflows. Plans differ in monthly executions, concurrent executions, shared projects, insights history and admin features such as SSO."
alternatives: [make, zapier, gumloop, mindstudio]
sources:
  - https://n8n.io/pricing/
  - https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial
  - https://docs.n8n.io/choose-how-to-use-n8n
  - https://docs.n8n.io/changelog/release-notes
  - https://n8n.io/
reviewedAt: 2026-09-17
---
## What is n8n?
n8n is a workflow automation tool aimed at technical users. Workflows mix prebuilt nodes for 500+ apps, custom HTTP requests and code, and they can call AI models or run complete agents with human approval steps. The same product runs as a hosted service or on your own servers, and new versions ship weekly; 2.40 arrived on September 15, 2026.

## Cloud or self-hosted
- **n8n Cloud** handles hosting, with Starter and Pro plans billed by monthly executions.
- **Community Edition** is free and self-hosted; registering an email unlocks folders and debugging in the editor.
- **Business and Enterprise** add SSO, environments and Git version control, including on your own infrastructure.

## Limitations
Self-hosting requires the skills to install, secure and update the software. Cloud has no permanent free tier, and Starter is capped at 5 concurrent executions and 1 shared project. The self-hosted Business plan costs several hundred euros a month. Displayed prices depend on your region; UK visitors, for example, see pounds instead of euros.
