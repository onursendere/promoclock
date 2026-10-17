---
title: "Claude Max和Team的API额度（2026）：每月$100–$500及领取方法"
metaTitle: "Claude Max和Team API额度怎么领（2026）"
metaDescription: "Claude Max 5x每月含$100、Max 20x含$200的API额度，Team最高$500。介绍怎么领取、覆盖范围，以及Haiku 5.5和Claude Code新动态。"
excerpt: "自2026年10月起，Claude Max 5x每月包含$100、Max 20x每月包含$200的Claude Platform API额度，Team套餐最高共享$500。在claude.ai的账单设置中关联一个Claude Console组织即可领取。额度覆盖API、Managed Agents和Agent SDK，不含交互式Claude Code，且每个计费周期结束即作废。"
imageAlt: "昏暗房间里的MacBook Pro，编辑器中打开着色彩鲜艳的代码"
keyTakeaways:
  - "自2026年10月起，Claude Max 5x每月包含$100、Max 20x每月包含$200的Claude Platform API额度，Team套餐最高共享$500，由各席位汇总。"
  - "Claude的每月API额度覆盖Claude API、Message Batches、Console Playground、Claude Managed Agents和Agent SDK，不覆盖交互式Claude Code，也不覆盖Claude应用中的额外用量。"
  - "API额度每个计费周期刷新一次，周期结束即作废、不会结转；领取方式是在claude.ai的Settings > Billing中关联一个Claude Console组织。"
  - "Claude Haiku 5.5于2026年10月7日发布，提示词不超过100,000 token时输入价格为每1M token $0.10；Sonnet 5.5的缓存读取价格从每1M token $0.20降到了$0.10。"
  - "开源项目维护者可以通过Claude for Open Source申请6个月免费的Claude Max 20x，成熟项目还可以加入Anthropic免费的OSS Scanner。"
faq:
  - q: "Claude Pro包含API额度吗？"
    a: "不包含。Anthropic帮助中心表示，每月API额度只提供给Max和Team套餐，包括优惠版Team套餐。Free、Pro和Enterprise套餐没有资格。想每月获得API额度的Pro用户，需要升级到价格为$100/月、含$100额度的Max 5x，或者在Claude Console中购买预付额度。"
  - q: "Claude Max的API额度能用于Claude Code吗？"
    a: "不能用于终端、IDE、桌面应用或网页中的交互式Claude Code，它们继续使用套餐的额度。使用关联Console组织的API密钥运行claude -p和Agent SDK时，这笔额度可以抵扣。通过Claude Code GitHub Action、IDE扩展或桌面应用运行的任务，按Claude Code用量计算。"
  - q: "Claude的API额度会结转到下个月吗？"
    a: "不会。未用完的每月API额度在每个计费周期结束时作废，新额度会在套餐付款完成后不久到账。年付套餐的额度按月发放。Anthropic会先消耗这些额度，再动用你购买的额度，Console的账单页面会显示每笔额度的金额和到期日期。"
  - q: "Claude Team套餐有多少API额度？"
    a: "Team套餐每个Standard席位每月$20、每个Premium席位$100，汇总为一个余额，上限$500。有3个Standard席位和2个Premium席位的团队每月可得$260。每次发放额度时，系统会根据席位数重新计算，并由一位Owner或Primary Owner为整个团队领取。"
  - q: "Claude的API额度用完了会怎样？"
    a: "如果你的Console组织有购买的额度或自动充值，API用量会继续，并从中扣费。如果没有其他额度，API请求会停止，直到下个月的额度到账。Anthropic表示用量绝不会向你的Claude套餐扣费；通过Anthropic销售团队开具发票的组织，超出额度的部分照常结算。"
  - q: "新的Claude Max订阅者什么时候可以领取API额度？"
    a: "在符合条件的套餐上满七天之后。之后，优惠会出现在浏览器中claude.ai的Settings > Billing里，包括在iOS或Android上注册的订阅者。你不需要在Claude Platform上添加付款方式，从Max 5x升级到Max 20x会立即获得按比例折算的额度。"
howTo:
  name: "如何领取Claude Max或Team的每月API额度"
  steps:
    - name: "确认资格"
      text: "以Max订阅者本人或Team的Owner、Primary Owner身份，使用Max 5x、Max 20x或Team套餐满七天。"
    - name: "打开账单设置"
      text: "在浏览器中打开claude.ai，Max用户进入Settings > Billing，Team用户进入Organization settings > Billing。"
    - name: "关联Console组织"
      text: "在API credits部分选择Link organization，选择你用来开发的Claude Console组织，或新建一个。你在该组织中需要Owner、Admin或Billing角色。"
    - name: "接受条款"
      text: "阅读Supplemental Credit Terms，并点击Link organization确认。关联之后，不联系客服就无法更改。"
    - name: "开始开发"
      text: "在Console账单页面的Promotional credits下找到这笔额度，创建API密钥，发出你的第一个请求。"
---
Claude Max和Team套餐现在每月包含Claude API额度：Max 5x为$100，Max 20x为$200，Team最高共享$500。额度需要领取一次，只能用于你自己的应用和智能体，不能用于Claude Code，而且每个计费周期结束即作废。下文所有套餐详情和价格均截至2026年10月17日，来自Anthropic的帮助中心、定价页面和Claude Code更新日志。

## Claude的每月API额度是什么？

Claude的每月API额度是Max和Team订阅附带的Claude Platform额度，用于在Claude API上构建和运行你自己的应用和智能体，与聊天和Claude Code的用量额度相互独立。

Anthropic于2026年10月7日宣布推出这项额度，与Claude Haiku 5.5同日发布，并在随后几天向订阅者陆续开放。[Anthropic的定价页面](https://claude.com/pricing)现在在Max下列出“每月$100至$200的API额度”，在Team下列出每月最高$500的共享API额度。Free、Pro和Enterprise套餐没有这项额度。

这项额度是额外增加的，不是替换。帮助中心表示，你在Claude、Claude Code和Cowork中的用量额度保持不变。它也不是Anthropic在6月宣布的Agent SDK额度：同一篇文章说明，那项优惠目前不可用。

## 各Claude套餐分别有多少API额度？

Max 5x每月$100，Max 20x每月$200，Team套餐每个Standard席位$20、每个Premium席位$100，汇总共享，上限$500。

| 套餐 | 套餐价格 | 每月API额度 |
|---|---|---|
| Free | $0 | 无 |
| Pro | $20/月或$200/年 | 无 |
| Max 5x | $100/月 | $100 |
| Max 20x | $200/月 | $200 |
| Team Standard席位 | $25/席位/月，按年计费为$20 | 每席位$20，汇总共享，每个团队最高$500 |
| Team Premium席位 | $125/席位/月，按年计费为$100 | 每席位$100，汇总共享，每个团队最高$500 |
| Enterprise | 按年计费$20/席位/月，另加按API费率计算的用量 | 无 |

[Anthropic帮助中心](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans)对Team共享额度的说明：

- **每个团队一个余额。** 3个Standard席位加2个Premium席位，每月共$260。再增加第3个Premium席位后，下个周期涨到$360。
- **上限为$500。** 更大的团队仍然是$500，这是任何Team套餐能拿到的最高额度。
- **优惠版Team套餐也算。** 非营利组织和Scientists Team套餐每席位同样是$20和$100。

如果你从Max 5x升级到Max 20x，会立即收到按比例折算的额度，之后每个周期为$200。我们的[Claude Pro和Max对比](/blog/claude-pro-vs-max/)介绍了各档之间还有哪些不同。

## 怎么领取Claude API额度？

Claude的API额度只需领取一次：在claude.ai的账单设置中，把一个Claude Console组织关联到你的套餐。之后，额度会在每个计费周期自动发放到该组织。

1. 订阅Max或Team满七天后再领取。新订阅者无法提前领取。
2. 在浏览器中打开claude.ai，进入 **Settings > Billing**（Max）或 **Organization settings > Billing**（Team）。
3. 在 **API credits** 部分选择 **Link organization**，然后选择或创建要接收额度的Console组织。
4. 阅读补充额度条款（Supplemental Credit Terms）并确认。
5. 打开Console的账单页面，在Promotional credits下找到这笔额度，然后创建API密钥。

点击之前需要了解的几条规则：

- **角色。** Max上必须是订阅者本人；Team上必须是Owner或Primary Owner。在Console组织中，你需要Owner、Admin或Billing角色。
- **只能关联一次，不可更改。** 每个套餐只关联一个Console组织，每个组织也只从一个套餐领取额度。你自己无法更改关联，所以请选择你真正用来开发的组织。
- **无需绑卡。** 领取或使用这笔额度，不必在Claude Platform上添加付款方式。
- **移动端订阅者。** 通过iOS或Android购买的套餐也有资格，但领取要在浏览器中的claude.ai上完成。
- **邮箱一致更省事。** Anthropic建议用与claude.ai相同的邮箱登录Console。

## API额度覆盖哪些用途，不覆盖哪些？

Claude的每月API额度覆盖Claude API、Claude Managed Agents、Agent SDK和Console Playground，不覆盖交互式Claude Code、Claude应用中的额外用量，也不覆盖其他云上的Claude。

覆盖范围，可使用任何可用的Claude模型：

- Claude API，包括Messages API和Message Batches API
- Claude Console中的Playground
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview)，Anthropic托管的智能体运行框架，目前处于测试阶段
- Claude Agent SDK，以及使用关联组织的API密钥运行的`claude -p`

不覆盖：

- 终端、IDE、桌面应用或网页中的交互式Claude Code
- Claude、Claude Code或Cowork中的额外用量（用量积分）
- Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry上的Claude，或AWS上的Claude Platform

余额的规则：额度每个计费周期刷新一次（年付套餐则按月刷新），周期结束即作废、不结转，并且先于你购买的额度被消耗。关联组织中所有拥有API密钥的人共用同一个余额，因此Team的Owner可以在Console中设置工作区支出上限。额度用完且组织没有购买的额度时，API请求会停止，直到下一次发放；不会向你的Claude套餐扣费。

## $100的Claude API额度能买到什么？

按Anthropic的标价，$100大约能买到10亿个Haiku 5.5输入token（短提示词），或5000万个Sonnet 5.5输入token，或在Opus 5.5上约170个一小时的Managed Agents会话。

| 模型 | 每1M token输入 | 每1M token输出 | 每1M token缓存读取 |
|---|---|---|---|
| Haiku 5.5，提示词不超过100,000 token | $0.10 | $0.50 | $0.01 |
| Haiku 5.5，提示词超过100,000 token | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5快速模式 | $8 | $40 | 在此基础上叠加缓存倍率 |
| Fable 5.1 | $10 | $50 | $0.25 |

以下是我们根据[Anthropic的API定价页面](https://platform.claude.com/docs/en/about-claude/pricing)算出的数字：

- **Haiku 5.5：** 提示词不超过100,000 token时，$100可买10亿输入token或2亿输出token。
- **Sonnet 5.5：** $100可买5000万输入token或1000万输出token。
- **Managed Agents：** 会话按模型费率计token，运行期间另加每会话小时$0.08。Anthropic自己的例子是：一个一小时的Opus 5.5会话，5万输入token、1.5万输出token，费用为$0.58，所以$100约可支付172个这样的会话。

实际账单取决于提示词长度、缓存、推理强度和工具。会话中的网页搜索每1,000次$10，快速模式不能与Batch API一起使用。

## 2026年10月Claude的API价格有哪些变化？

2026年10月有三项价格变动：Claude Haiku 5.5于10月7日发布，Sonnet 5.5的缓存读取价格同日减半，Opus 5.5的快速模式正式全面开放。

- **Claude Haiku 5.5。** Anthropic称它是自家发布过的最便宜、最快、能力最强的小模型。提示词不超过100,000 token时，比Haiku 4.5便宜90%，超过后便宜50%，Anthropic表示平均下来约便宜75%。它有1M token的上下文窗口、最高128K的输出token，并且首次在Haiku模型上提供可调节的推理强度设置。根据其[Haiku 5.5发布公告](https://www.anthropic.com/claude-haiku-5-5)，Anthropic把它定位于摘要、分类、压缩和子智能体工作。
- **Sonnet 5.5缓存读取。** 10月7日，价格从每1M token $0.20降到了$0.10。由于缓存读取在智能体流量中占很大比例，Anthropic估计Sonnet 5.5在大多数智能体工作上现在便宜约20%。
- **Opus 5.5快速模式。** 在请求中设置`"speed": "fast"`，输出token速度最高提升2.5倍，价格为标准价的两倍，即每1M token输入$8、输出$40。根据[快速模式文档](https://platform.claude.com/docs/en/build-with-claude/fast-mode)，Opus 5.5不再需要beta标头或申请访问权限。它可在第一方API和Microsoft Foundry上运行。

在Claude Code中，可以用`/model haiku`切换到Haiku 5.5。这改变的是你消耗套餐额度的速度，不影响API额度。

## Claude Code有哪些更新能让用量额度撑得更久？

2026年10月的四项Claude Code更新能节省用量：空闲压缩、按子智能体设置推理强度和模型、新的`/usage`警告，以及会自动补充的网页搜索配额。它们都在你现有的套餐额度内生效。

- **空闲压缩（2.1.299版，10月14日）。** 终端对话超过200K token且闲置约54分钟时，会在一小时提示词缓存过期前被压缩。你回来时，Claude重新处理的是摘要，而不是整段对话。要关闭它，在settings.json中设置`"idleCompaction": false`，或从2.1.302版起使用`/config`中的Idle compaction一行。
- **按子智能体设置推理强度和模型（2.1.292版，10月6日）。** 你可以在提示词里要求用低强度的子智能体搜索代码库、用一个高强度的子智能体评判结果，或者让Haiku处理快速查询。此前这需要自定义子智能体定义。
- **用量警告（2.1.299版）。** `/usage`现在会标出最高推理强度、工作流、常驻上下文和大型工具结果，这些都是会话额度迅速耗尽的常见原因。
- **网页搜索配额（2.1.290版，10月5日）。** 交互式会话现在每小时有100次搜索，并会自动补充，不再是用满200次就停止。

Anthropic的工程师还有一条提示词技巧：子智能体默认追求全面，所以在提示词里加一句时间紧迫，它们就会加快节奏，Anthropic称之为速度与质量的合理平衡。5小时会话和每周上限如何运作，请看我们的[Claude用量额度详解](/blog/claude-usage-limits/)；工作日进行长时间聊天之前，先看一眼[Claude Watch](/)。

## Claude Code桌面应用和云端会话有什么新功能？

2026年10月，Claude Code桌面应用新增了会话起始页、已保存环境和嵌套会话，云端会话现在也能原样接续你在本地的工作。

桌面应用，来自Anthropic的Claude Code通讯和[桌面应用文档](https://code.claude.com/docs/en/desktop)：

- **新的会话起始页。** 最近的文件夹一键即达，你也可以把一套配置保存为环境，例如几个文件夹、一台SSH主机或云端。
- **嵌套会话。** 让Claude并行运行任务，每个任务有自己的会话，完成后向主会话汇报。建议的后续工作可以一键在独立会话中开始。
- **标签页中的旁路提问。** `/btw`现在会在自己的标签页中打开旁路提问。
- **状态一目了然。** 侧边栏显示哪些会话仍在运行、哪些在等你处理，侧边面板显示会话在哪里运行、上下文和改动。

云端会话，来自[Anthropic的云端文档](https://code.claude.com/docs/en/claude-code-on-the-web)：

- **接续本地开始的工作。** 把本地会话转到云端时，现在会带上你未提交的更改和未推送的提交，不必先提交或推送。在macOS、Linux和WSL上，看起来像凭据的文件（如.env文件和私钥）的未提交更改会留在你的电脑上。
- **Team上的网络密钥。** Team套餐现在可以像Pro和Max一样，向云端环境添加API密钥，Claude调用列出的主机时看不到密钥本身。

如果你在10月7日前领取了[Claude Code云端额度](/deals/claude-code-cloud-credit-2026/)，请在2026年11月4日到期前把它用在云端会话上。我们的[AI编程工具对比](/blog/best-ai-coding-tools/)展示了Claude Code的定价与Cursor、Codex和Copilot相比如何。

## 开源维护者有免费的Claude优惠吗？

有。Claude for Open Source向获批的维护者免费提供6个月的Claude Max 20x；自2026年10月8日起，Anthropic的OSS Scanner还为成熟的开源项目免费做安全扫描。

[Claude for Open Source](/deals/claude-for-open-source-max-2026/)获批名额上限为10,000人，需用GitHub账号申请。根据[Anthropic的项目页面](https://claude.com/contact-sales/claude-for-oss)和条款，申请者需满足以下条件之一：

- 项目有500个以上依赖它的仓库、100个以上依赖它的包，或每月下载量达200,000次以上
- 在认可的基金会或语言项目中担任列名的提交者（committer）或维护者
- 过去12个月内，向不属于你的仓库合并了100个以上拉取请求
- 仓库有20名以上不同的外部贡献者，或OpenSSF关键度评分达到0.4以上

GitHub账号注册至少满两年，并且最近90天内有公开的开源活动。6个月后，曾有付费套餐的成员会按原价恢复该套餐，除非自行取消；其他人会回到Free套餐。

[OSS Scanner](https://red.anthropic.com/oss-scanner/)需要主动加入：核心维护者在GitHub上Anthropic的oss-scanner仓库中提交一个拉取请求，附上项目配置和离线Dockerfile即可报名。之后项目会定期获得Anthropic最强模型的免费扫描，报告未经人工审核。准入标准与Google的OSS-Fuzz类似，因此全新项目和大多数fork不符合条件。OpenAI也有类似的项目[Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/)，提供六个月的ChatGPT Pro。

## 总结

如果你用的是Max或Team，并且可能在API上开发任何东西，就去领取这笔额度。领取不花钱，但之后只有客服能更改组织关联。

- **在API上开发的Max订阅者：** 关联你真正在用的Console组织，因为你自己无法更改关联。每月$100或$200可以覆盖大量Haiku 5.5和Sonnet 5.5的工作。
- **只用Claude Code的Max订阅者：** 这笔额度不会延长你的用量额度。空闲压缩、Haiku 5.5子智能体和新的`/usage`警告可以。
- **在考虑Max 5x的Pro用户：** Max 5x比Pro每月贵$80，并含$100的API额度，所以如果你本来就在API上花这么多，回本最快。
- **Team的Owner：** 由一位Owner为整个团队领取；设置工作区支出上限，避免某个项目耗尽共享额度。
- **开源维护者：** 申请Claude for Open Source，关键项目再加上OSS Scanner。

条款如有变动，我们的[API额度优惠页面](/deals/claude-max-team-api-credits-2026/)会持续跟进；Claude的其他所有优惠都在我们的[Claude页面](/tools/claude/)和[活动日历](/calendar/)上。
