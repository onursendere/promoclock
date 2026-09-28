---
summary: "Cline是Cline Bot Inc.推出的开源AI编程智能体，可在VS Code、JetBrains IDE、终端和一款桌面应用中运行。个人开发者免费使用，自行接入模型API密钥或按成本付费调用推理，且在修改文件或执行命令前都会请求你的批准。"
metaTitle: "Cline定价：开源编程智能体免费吗？"
metaDescription: "Cline是免费开源的：你只需为AI推理付费，或使用自己的密钥。了解ClinePass每月$9.99、支持的编辑器和限制。"
bestFor:
  - "想自选模型的开发者"
  - "注重成本的VS Code用户"
  - "需要开源工具的团队"
keyFeatures:
  - name: "Plan与Act两种模式"
    description: "先在Plan模式下规划思路，再切换到Act模式，智能体每次调用工具时都由你批准。"
  - name: "检查点"
    description: "每次工具调用都会生成带可视化差异的检查点，可随时用/undo回滚任意改动。"
  - name: "支持任意模型提供商"
    description: "用自己的API密钥接入Anthropic、OpenAI、Gemini、OpenRouter、AWS Bedrock、Vertex、Groq、DeepSeek或本地端点。"
  - name: "MCP市场"
    description: "从市场添加MCP服务器，或接入自建服务器，让Cline能访问缺陷跟踪、部署平台和数据仓库。"
  - name: "命令行中的看板"
    description: "运行cline --kanban，即可在独立的git工作树中管理多个并行智能体，包括Claude Code和Codex会话。"
  - name: "Skills与hooks"
    description: "Skills把可复用的经验（例如运行你的测试套件）打包起来，hooks则让脚本控制或约束任意工具调用。"
useCases:
  - "在VS Code中重构一个模块，同时对智能体提出的每一次文件修改和终端命令逐一批准。"
  - "把积压任务拆成看板卡片，让多个智能体在各自独立的git工作树中并行处理。"
  - "通过兼容OpenAI的服务器把Cline指向本地模型，让代码留在自己的机器上。"
  - "接入Linear的MCP服务器，让智能体读取工单并将其转成关联任务。"
pricingSummary: "Cline智能体对个人免费，没有席位费；你通过自己的密钥向模型提供商付费，或按成本从Cline购买推理。可选的开放权重模型订阅ClinePass为$9.99/月，Enterprise定价需联系销售。"
savingTips:
  - "使用自己的API密钥，直接按提供商费率付费，没有订阅费也没有Cline的加价。"
  - "ClinePass把GLM 5.3、Kimi K3、DeepSeek V4等开放权重模型打包在$9.99/月内，省去分别开通多个提供商账户。"
  - "通过兼容OpenAI的端点接入本地模型，可以完全避开按token计费。"
faq:
  - q: "Cline免费吗？"
    a: "是的。开源的Cline扩展、CLI和桌面应用对个人开发者免费。你只需为所用的AI模型付费，可以用自己的提供商API密钥，也可以按成本从Cline购买推理。"
  - q: "ClinePass是什么？"
    a: "ClinePass是每月$9.99的订阅，可在Cline的IDE扩展和CLI中使用来自Z.ai、Moonshot AI、DeepSeek、MiniMax、MiMo和Qwen的开放权重模型。Cline表示其额度是标准API限速的2到5倍。"
  - q: "Cline能在JetBrains IDE和Cursor中使用吗？"
    a: "可以。JetBrains插件目前处于早期体验阶段，支持IntelliJ IDEA、PyCharm、WebStorm、GoLand等JetBrains IDE。在Cursor和Windsurf中，可以直接安装同一款VS Code Marketplace扩展。"
  - q: "Cline是开源的吗？"
    a: "是的。Cline的源代码托管在GitHub的github.com/cline/cline，采用Apache 2.0许可证。由于智能体在客户端运行，你可以自由切换提供商或自托管模型，不受Cline自身服务的绑定。"
  - q: "Cline Enterprise多了哪些功能？"
    a: "Enterprise增加了SSO、SCIM配置、集中计费、基于角色的访问控制、对团队可用推理提供商的限制、审计日志、VPC部署、SLA以及专属支持。定价需联系销售获取。"
---
## Cline是什么？
Cline是一款自主编程智能体，直接运行在你的编辑器或终端中，而不是作为一个独立的托管服务。它会读取你指定的文件、编辑代码、运行命令并操控浏览器，除非你授予更大自主权，否则每一步都会停下来等你批准。

## 支持的运行环境
- **VS Code扩展**，同样可以装在Cursor和Windsurf里。
- **JetBrains插件**，目前处于早期体验阶段。
- **CLI**，带看板、插件、定时任务和无界面CI用法。
- **Cline桌面版**，面向macOS和Windows的测试版独立应用。
- **SDK**，用于把该智能体嵌入其他工具。

## 局限性
成本完全取决于所用的模型和token数量，因此使用前沿模型的长会话可能很贵，而ClinePass只覆盖开放权重模型。桌面应用仍处于测试阶段，Cline也提醒可能会遇到不完善之处。个人用户没有内置的免费模型额度。
