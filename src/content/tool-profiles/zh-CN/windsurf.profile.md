---
summary: "Windsurf是Devin智能体的开发商Cognition在2025年7月收购的AI代码编辑器，2026年6月2日更名为Devin Desktop。这款IDE现在打开后会进入Agent Command Center，用于管理本地和云端智能体，套餐和价格保持不变。开发者把它当作VS Code的智能体优先替代品。"
metaTitle: "Windsurf更名Devin Desktop：价格说明"
metaDescription: "Windsurf于2026年6月更名为Devin Desktop。了解具体变化、Free、Pro（$20/月）与Max套餐、配额制用量、功能和替代工具。"
bestFor:
  - "打算离开VS Code的开发者"
  - "同时管理多个智能体的工程师"
  - "现有Windsurf订阅用户"
keyFeatures:
  - name: "Agent Command Center"
    description: "以看板形式展示所有正在运行的本地和云端智能体，Spaces可以把会话、拉取请求、文件和共享上下文归到一起。"
  - name: "Devin Local智能体"
    description: "取代Cascade的Rust重写版本，Token消耗减少最多30%，支持子智能体和操作系统级沙箱隔离。"
  - name: "通过ACP接入第三方智能体"
    description: "在同一个看板视图中，通过Agent Client Protocol运行Codex、Claude Agent、OpenCode等自研或第三方智能体。"
  - name: "完整IDE内核"
    description: "编辑器、扩展、快捷键和LSP都与Windsurf、VS Code保持向后兼容，还可以导入Cursor的设置。"
  - name: "Tab与内联编辑"
    description: "所有套餐（包括Free）都提供无限次的Tab自动补全和内联Command编辑。"
  - name: "Fast Context"
    description: "基于SWE-grep模型构建的检索型子智能体，查找相关代码的速度最高提升20倍。"
useCases:
  - "让本地智能体处理一次重构，同时让云端Devin会话修复一个bug，在同一个看板上查看两者进度。"
  - "在同一个编辑器里继续使用Claude Agent或Codex，而不用切换工具。"
  - "用内置向导把现有的Windsurf配置（包括规则和记忆）迁移到Devin Local。"
pricingSummary: "免费套餐提供较少配额，Tab自动补全不受限。Pro为$20/月，Max为$200/月且配额更高，Teams起价为$80/月，完整席位每人$40起；Enterprise按需定制。"
savingTips:
  - "免费模型不消耗配额，SWE-1.7等低成本SWE模型可以让付费额度用得更久。"
  - "在2026年3月配额制切换之前就订阅Windsurf Pro的用户，可以无限期保留每月$15的老价格。"
faq:
  - q: "Windsurf停止运营了吗？"
    a: "没有，只是改了名字。2026年6月2日的一次在线更新把Windsurf变成了Devin Desktop，编辑器、扩展、设置和套餐都保留了下来。windsurf.com现在会跳转到devin.ai。"
  - q: "Windsurf现在归谁所有？"
    a: "归Devin编程智能体的开发商Cognition所有。该公司于2025年7月14日宣布将收购Windsurf的知识产权、产品、商标、品牌和团队，此后已将这款编辑器并入Devin产品家族。"
  - q: "更名之后使用限制是怎么运作的？"
    a: "自2026年3月起，各套餐改为按天和按周计算的Token配额，取代了原来的提示词积分。免费用户只能等待配额重置；Pro、Max和Teams用户可以按API标价购买额外用量。"
  - q: "Cascade发生了什么？"
    a: "Devin Local取代Cascade成为主要的本地智能体。Cognition把Cascade保留到了2026年7月供用户逐步迁移，并提供命令面板向导来迁移工作流和记忆。"
---
## Windsurf发生了什么？
Windsurf最初是Codeium的编辑器，2025年归入Cognition旗下。2026年6月，Cognition把旗下产品统一到一个品牌下：面向IDE的Devin Desktop、面向自主云端智能体的Devin Cloud、面向终端的Devin CLI，以及面向代码审查的Devin Review。现有的Windsurf规则（包括`.windsurfrules`）仍然可用。

## 适合谁
Devin Desktop适合那些希望有一款围绕同时监管多个智能体设计的编辑器的开发者。使用它并不需要Devin Cloud，仅使用本地智能体也完全没问题。

## 局限性
- 配额以Token计量，因此使用前沿模型和长时间会话会更快耗尽每日和每周预算。
- Windsurf的JetBrains插件处于维护模式，Cognition建议改用通过ACP在JetBrains中运行Devin。
- 付费套餐的免费试用只面向部分符合条件的客户开放。
- 在Teams套餐上，只有完整席位才包含Devin Desktop，新的Teams套餐也不再包含SSO。
