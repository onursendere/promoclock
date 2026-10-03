---
summary: "OpenAI Codex是OpenAI推出的编程智能体，包含在从Free到Enterprise的每一档ChatGPT套餐中。它可在终端、类VS Code编辑器、ChatGPT桌面版和网页版、iOS，以及隔离的云端环境中运行。开发者用它编写、重构和审查代码，用量额度与ChatGPT Work共用。"
metaTitle: "OpenAI Codex定价、限制与免费使用"
metaDescription: "2026年OpenAI Codex定价：包含在ChatGPT Free、Go($8)、Plus($20)和Pro(起价$100)中。各套餐用量限制、可用平台、模型与替代工具。"
bestFor:
  - "已订阅ChatGPT的开发者"
  - "以终端为主的工程师"
  - "自动化代码审查的团队"
keyFeatures:
  - name: "Codex CLI"
    description: "一个在本地读取、编辑和运行代码的终端智能体，带沙箱、批准规则和可编写脚本的命令行选项。"
  - name: "IDE扩展"
    description: "可在VS Code、Cursor和Windsurf中使用，JetBrains IDE和Xcode则提供各自的Codex集成。"
  - name: "Codex云端"
    description: "把任务交给隔离的云端环境执行，依赖项可配置，联网权限受控。"
  - name: "代码审查与Slack"
    description: "自动审查GitHub的改动，并在ChatGPT套餐上接受来自Slack频道和话题的请求。"
  - name: "GPT-5.6模型家族"
    description: "Sol负责最难的推理任务，Terra承担日常生产工作，Luna则为较轻任务提供最高的用量额度。"
  - name: "自定义能力"
    description: "通过AGENTS.md提供项目指引，此外还支持skills、插件、MCP服务器和自定义子智能体。"
useCases:
  - "让CLI修复失败的测试套件，并在每条命令跳出沙箱执行前逐一批准。"
  - "把一次长重构交给Codex云端处理，之后再从iOS应用查看生成的差异。"
  - "开启自动代码审查，让每个GitHub拉取请求在队友查看前先过一遍。"
pricingSummary: "Codex包含在ChatGPT Free($0)、Go($8/月)、Plus($20/月)和Pro($100、$200或$500/月；新增$500套餐包含Astra Ultrafast)中。Business为每用户每月$25或按年$20；使用API密钥则按API费率计费。"
savingTips:
  - "达到限额的Plus和Pro用户可以购买ChatGPT额度包，而不必升级整个套餐。"
  - "切换到GPT-5.6 Luna，每五小时可用的本地消息数远多于Sol，能让任何套餐用得更久。"
  - "开源维护者可申请Codex for Open Source计划，获取API额度和六个月含Codex的ChatGPT Pro。"
faq:
  - q: "OpenAI Codex免费吗？"
    a: "是的，但有限制。ChatGPT Free包含Codex，可用于简单编程任务，每月$8的Go套餐则覆盖轻量工作。每月$20的Plus还列出了自动代码审查和Slack等云端集成功能。"
  - q: "ChatGPT Plus包含多少Codex消息？"
    a: "OpenAI估计Plus在每五小时窗口内可用10到100条本地GPT-5.6 Sol消息，或250到2000条GPT-5.6 Luna消息。可能还会有额外的每周限制，云端对话消耗更多。"
  - q: "Codex能用API密钥代替ChatGPT运行吗？"
    a: "可以。使用API密钥时，Codex可在CLI、SDK和IDE扩展中运行，按API价格计费，但GitHub代码审查和Slack等云端功能不可用。"
  - q: "2026年Codex使用哪些模型？"
    a: "ChatGPT套餐可使用GPT-5.6家族(Sol、Terra和Luna)以及GPT-6 Astra。Pro还新增了处于研究预览阶段的GPT-5.3-Codex-Spark，GPT-5.5将于2026年10月14日从Codex中下线。"
---
## OpenAI Codex是什么？
Codex是OpenAI面向软件工作的智能体，绑定在ChatGPT账户上，而不是单独出售。OpenAI的Codex文档现已并入ChatGPT文档，Codex的用量与ChatGPT Work共用，两者从同一份额度和信用中扣除。

## 适合谁用
它适合已经订阅ChatGPT、希望用一份订阅同时覆盖聊天和编程的开发者。团队还可以加入Codex SDK、一个GitHub Action和一套应用服务器协议，把Codex集成进自有工具和CI流程。

## 局限性
- 限额只是估算值而非固定数字；长会话、大型代码库、快速模式和图像生成都会更快耗尽额度。
- 云端对话运行在GPT-5.6 Sol上，消耗可能超过本地消息。
- GPT-5.3-Codex-Spark仅限Pro使用，且有独立的单独限额。
- 使用API密钥的用户无法使用云端功能，包括代码审查和Slack。
