---
summary: "Hugging Face is the hub for open AI models, datasets and Spaces demo apps, run by the company of the same name. Developers and researchers use it to download open-weight models, host Gradio demos on shared ZeroGPU hardware and call hosted models through Inference Providers. NVIDIA announced a deal to acquire Hugging Face on September 3, 2026."
metaTitle: "Hugging Face Pricing: PRO Plan, Free Tier & Features"
metaDescription: "Hugging Face is free to join. Compare the $9 PRO plan, Team and Enterprise seats, ZeroGPU quotas and inference credits, plus the NVIDIA deal."
bestFor:
  - "ML engineers and researchers"
  - "Open-source model publishers"
  - "Developers demoing AI apps"
  - "Teams hosting private models"
keyFeatures:
  - name: "Model and dataset Hub"
    description: "Browse, download and version open-weight models and datasets in Git-based repositories with public or private visibility."
  - name: "Spaces"
    description: "Host Gradio, Docker or static demo apps; static Spaces are free, new compute Spaces need a paid plan, and an Nvidia T4 small costs $0.40 per hour."
  - name: "ZeroGPU"
    description: "Gradio Spaces borrow NVIDIA RTX Pro 6000 Blackwell GPUs per function call, within a daily quota set by your account type."
  - name: "Inference Providers"
    description: "Call models from partner providers with one Hugging Face token, billed at the provider's rates with no Hugging Face markup."
  - name: "Inference Endpoints"
    description: "Deploy any Hub model on dedicated, autoscaling infrastructure, with CPU instances starting at $0.033 per hour."
  - name: "HuggingChat"
    description: "Chat with open models in the browser, where the Omni router picks a suitable model for each request."
  - name: "hf CLI and client libraries"
    description: "Log in, download and upload repositories from the terminal with the hf command and the huggingface_hub Python library."
useCases:
  - "Download an open-weight model and its tokenizer to fine-tune on your own data locally."
  - "Publish a Gradio demo of a research model on ZeroGPU so reviewers can try it in the browser."
  - "Test several hosted LLMs through Inference Providers before committing to a single API vendor."
  - "Give a company team SSO, audit logs and storage regions for private models on the Team plan."
pricing:
  freePlan: true
  startingPrice: 9
  currency: USD
  billing: month
  summary: "The Hub is free. PRO is $9/month with $2 in monthly compute credits and 8x ZeroGPU quota; Team is $20 and Enterprise $50 per user per month. Spaces GPUs, Inference Endpoints and extra storage are billed by usage."
  asOf: 2026-10-12
platforms: [web, api, cli]
savingTips:
  - "Free accounts no longer get monthly Inference Providers credits and must buy credits, while PRO includes $2.00 a month usable across Hugging Face compute."
  - "Using ZeroGPU Spaces is free: 5 minutes of GPU time per day on a free account versus 40 minutes on PRO."
  - "Free accounts older than 30 days with a verified email can host up to 2 ZeroGPU Spaces at no cost."
faq:
  - q: "Is Hugging Face free to use?"
    a: "Yes. An account, public model and dataset downloads, static Spaces and up to 2 ZeroGPU Spaces cost nothing. You pay for PRO, Team or Enterprise plans, new Gradio or Docker Spaces on compute, upgraded Spaces hardware, Inference Endpoints and inference credits."
  - q: "What does Hugging Face PRO include?"
    a: "PRO costs $9/month and adds $2.00 of monthly compute credits, 40 minutes of daily ZeroGPU time with the highest queue priority, hosting for up to 10 ZeroGPU Spaces, Spaces Dev Mode and the dataset viewer for private datasets."
  - q: "Is NVIDIA buying Hugging Face?"
    a: "Yes. NVIDIA announced on September 3, 2026 that it agreed to acquire Hugging Face for $12.93 billion. NVIDIA says the platform stays open to models, clouds and hardware from across the ecosystem, and NVIDIA compute won't be required."
  - q: "How does the ZeroGPU daily quota work?"
    a: "Quota depends on the account: 2 minutes unauthenticated, 5 minutes free, 40 minutes for PRO and Team members, 60 minutes for Enterprise. Paid users can keep going past it with prepaid credits at $1 per 10 minutes."
  - q: "Can you bring your own provider API key?"
    a: "Yes. You can add a custom provider key in Hugging Face settings, and the provider then bills you directly. Your monthly Hugging Face credits only apply to requests routed and billed through Hugging Face."
alternatives: [google-ai-studio, replit, github-copilot, cline]
sources:
  - https://huggingface.co/pricing
  - https://huggingface.co/docs/hub/en/pro
  - https://huggingface.co/docs/inference-providers/en/pricing
  - https://huggingface.co/docs/hub/en/spaces-zerogpu
  - https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
reviewedAt: 2026-10-12
---
## What is Hugging Face?
Hugging Face runs the Hub, a shared home for open AI models, datasets and Spaces apps. Most activity is public and free; paid plans add storage, compute credits and organization controls.

## Plans at a glance
- **Free:** public repos, static Spaces and 5 minutes of ZeroGPU per day; inference needs purchased credits.
- **PRO ($9/month):** 10x private storage, $2.00 of monthly inference credits, 8x ZeroGPU quota, compute Spaces and Dev Mode.
- **Team ($20/user/month):** SSO, storage regions, audit logs and resource groups.
- **Enterprise ($50/user/month):** SCIM provisioning, the highest limits and dedicated support.

Storage beyond included limits is priced per TB, from $12 to $18 per TB per month for private repositories.

## Ownership news
On September 3, 2026, NVIDIA announced an agreement to acquire Hugging Face. NVIDIA says the platform will keep supporting open-source and open-weight models from across the ecosystem.

## Limitations
ZeroGPU works only with the Gradio SDK and doesn't support torch.compile, and free accounts get lower queue priority than paid ones. Free accounts have no included inference allowance, so even light API use means buying credits. Model licenses differ from repo to repo, so check each one before commercial use.
