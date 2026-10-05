---
title: "Claude用量额度详解（2026）：5小时会话、每周上限与重置时间"
metaTitle: "Claude用量额度2026：5小时、每周上限与重置"
metaDescription: "Claude用量额度每5小时重置一次，付费套餐另有每周上限。看Pro和Max的用量对比、2026年的每一次调整，以及让额度更耐用的方法。"
excerpt: "Claude的用量额度按滚动5小时会话重置，付费套餐另有每周上限。聊天和Claude Code共用同一个用量池。Pro每次会话的用量至少是Free的5倍；Max 5x和Max 20x分别是Pro的5倍和20倍。工作日13:00–19:00 UTC会话额度消耗得更快，付费套餐还能用用量积分按API费率继续使用。"
imageAlt: "灰色纹理墙前的桌上，一只沙漏里的深色沙子正在流下"
keyTakeaways:
  - "每个Claude套餐都有按滚动5小时会话窗口重置的用量额度，付费套餐在此之上还有每周额度。"
  - "Claude Pro每个5小时会话的用量至少是Free的5倍；Max 5x（$100/月）和Max 20x（$200/月）分别是Pro的5倍和20倍。"
  - "网页端、桌面端、移动端的Claude和Claude Code共用一个用量池，所以一次长时间编程会话和一段长聊天消耗的是同一份额度。"
  - "临时的+50%提升于2026年9月14日结束，自当天起，Claude Code每周额度永久比活动前的基准高出25%。"
  - "Pro或Max套餐达到上限后，用量积分可以让Claude按标准API费率继续工作，不必等待重置。"
faq:
  - q: "Claude Pro能发多少条消息？"
    a: "Anthropic没有公布Claude Pro的固定消息条数。用量取决于消息长度、附件大小、对话长度、工具、所选模型、推理强度和Artifact。Anthropic的定价页面只说明Pro每个5小时会话的用量至少是Free的5倍，Pro另外还有每周额度。"
  - q: "Claude Max有每周额度吗？"
    a: "有。Claude Max 5x和Max 20x在每5小时重置一次的会话额度之外，还有一个适用于所有模型的每周用量额度。根据Anthropic帮助中心的说明，每周额度会在分配给你账户的每周固定时间重置。"
  - q: "Claude Code和Claude应用共用额度吗？"
    a: "是的。根据Anthropic的定价页面，所有付费套餐都包含Claude Code，它和网页端、桌面端、移动端的聊天共用同一个用量池。2026年5月6日，Anthropic把付费套餐上Claude Code的5小时额度翻倍，并让Pro和Max上的Claude Code不再受高峰时段影响。"
  - q: "2026年9月14日Claude Code每周额度变了多少？"
    a: "自2026年9月14日起，Claude Code的标准每周额度永久比活动前的基准高出25%。5月13日开始的临时+50%提升在同一天结束，所以以基准100计算，额度从活动期间的150降到125，约减少17%。"
  - q: "Claude用量积分值得买吗？"
    a: "如果你偶尔会用完Pro或Max的额度、又等不及重置，用量积分就很合适。它按标准API费率计费，需要预付资金，可以设置每月支出上限。如果你大多数星期都会用完每周额度，换个更大的套餐通常是更省事的办法。"
  - q: "能查看Claude还剩多少用量吗？"
    a: "能。在Claude中打开Settings > Usage，就能看到5小时会话额度和每周额度各用了多少，以及各自的重置时间。Anthropic的用量最佳实践文章也建议通过这个页面监控自己的用量。"
howTo:
  name: "如何让Claude用量额度用得更久"
  steps:
    - name: "把繁重任务放到非高峰时段"
      text: "在工作日13:00–19:00 UTC以外或周末处理长文档、Research和大文件上传，这时5小时会话额度按正常速度消耗。"
    - name: "让对话简短、聚焦"
      text: "换新话题就开新对话，先想清楚需求，再把相关问题合并成一条具体的消息。"
    - name: "把参考文件放进项目"
      text: "把需要反复使用的文档上传到项目（Project）中，Anthropic表示项目里的缓存内容占用的额度更少。"
    - name: "按任务选择模型"
      text: "日常工作用Sonnet或Haiku，Opus和Fable留给难题；在Max上，Fable最多只能使用你每周额度的50%。"
    - name: "监控用量并准备超额方案"
      text: "在Settings > Usage查看重置时间；如果等不及重置，可以开启用量积分并设置每月上限。"
---
Claude的用量额度分两层：每个套餐都有按滚动5小时窗口重置的会话额度，付费套餐在此之上还有每周额度。聊天和Claude Code共用同一个用量池，工作日13:00至19:00 UTC期间会话额度消耗得更快。下面介绍截至2026年10月这些额度如何运作、Anthropic今年做过的每一次调整，以及怎样让额度用得更久。

## Claude的用量额度是怎么算的？

根据[Anthropic的定价页面](https://claude.com/pricing)，Claude的用量额度按滚动5小时会话窗口重置，付费套餐另有每周额度。没有固定的消息条数。

记住三条规则就够了：

- **会话额度**：每个套餐（包括Free）在每个5小时会话里都有一份额度。
- **每周额度**：付费套餐还有每周上限。在Max上，它适用于所有模型。
- **同一个用量池**：网页端、桌面端、移动端的Claude和Claude Code共用同一份用量。一次长时间的编程会话和一段长聊天消耗的是同一份额度。

一条消息消耗多少额度，取决于你让Claude做什么。Anthropic的[用量最佳实践](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)列出了这些因素：消息长度、附件大小、当前对话长度、Research和网页搜索等工具、所选模型、推理强度、Artifact，以及运行代码或浏览网页这类多步骤任务。

## Claude额度什么时候重置？

Claude的会话额度每5小时重置一次，每周额度则在分配给你账户的每周固定时间重置。两个重置时间都能在Claude的Settings > Usage中看到。

每周重置时间因人而异，朋友的重置日对你没有参考价值。Anthropic在[Max套餐说明](https://support.claude.com/en/articles/11049741-what-is-the-max-plan)中介绍了每周额度的重置规则。如果用完的是会话额度，等下一次5小时重置就够了；如果用完的是每周额度，会话重置也帮不上忙，只能等每周重置。

## Claude各套餐的用量有什么区别？

Claude Pro每个5小时会话的用量至少是Free的5倍，Max则是Pro的5倍或20倍。以下为Anthropic截至2026年10月的价格。

| 套餐 | 价格 | 每个5小时会话的用量 | Claude Code | 用量积分 |
|---|---|---|---|---|
| Free | $0 | 基准 | 不含 | 不支持 |
| Pro | $20/月，按年计费为$17/月（预付$200） | 至少为Free的5倍 | 包含 | 支持 |
| Max 5x | $100/月 | Pro的5倍 | 包含 | 支持 |
| Max 20x | $200/月 | Pro的20倍 | 包含 | 支持 |

Max仅支持按月计费。Team Standard席位为$25/月，按年计费为$20/月；Team和按席位计费的Enterprise套餐有各自的用量积分设置。

哪个档位适合哪种工作量，可以看我们的[Claude Pro和Max对比](/blog/claude-pro-vs-max/)。

## Claude Code的用量额度是多少？

Claude Code和聊天使用同样的5小时额度和每周额度，但Anthropic在2026年单独调整过它好几次。截至2026年10月，Claude Code的5小时额度已经翻倍，每周额度有永久提升，在Pro和Max上还不受高峰时段影响。

- **5小时额度**：根据[官方公告](https://www.anthropic.com/news/higher-limits-spacex)，Anthropic在2026年5月6日[把付费套餐上Claude Code的5小时额度翻倍](/deals/claude-code-5h-limits-doubled/)。
- **高峰时段**：同一次更新取消了Pro和Max上Claude Code的高峰时段削减。
- **每周额度**：[每周额度+50%的提升](/deals/claude-code-weekly-plus50-2026/)从2026年5月13日持续到9月14日，随后由[永久+25%](/deals/claude-code-weekly-plus25-permanent/)取代。以基准100计算：之前是100，活动期间是150，现在是125。
- **云会话**：个人Pro订阅者可获得$100、Max订阅者可获得$250的[Claude Code云会话积分](/deals/claude-code-cloud-credit-2026/)，云会话会先消耗这笔积分，再动用套餐额度。需在2026年10月7日前领取；未使用的积分于2026年11月4日过期。

Free套餐不含Claude Code。

## 高峰时段对Claude用量额度有什么影响？

在Claude高峰时段，即工作日13:00–19:00 UTC，Free、Pro、Max和Team套餐的5小时会话额度消耗得更快。每周额度不受影响。

[高峰时段于2026年3月27日生效](/deals/claude-peak-hours-introduced/)。据[The Register报道](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/)，Anthropic的Thariq Shihipar当时估计，约7%的用户会碰到以前不会碰到的会话额度上限。

Enterprise套餐不受影响，Pro和Max上的Claude Code也享有豁免。我们的[Claude高峰时段指南](/blog/claude-peak-hours/)把这个时段换算成了9个时区的当地时间，[Claude Watch](/)则会显示此刻是否处于高峰时段。

## 2026年Claude用量额度有哪些变化？

我们统计到2026年共有9次额度调整和活动，其中4次只针对Claude Code。截至2026年10月4日，有两项活动正在进行。

| 日期 | 变化 | 套餐 | 状态 |
|---|---|---|---|
| 2026年3月13日–27日 | 工作日高峰时段以外和整个周末[会话额度翻倍](/deals/claude-march-2026-offpeak-2x/) | Free、Pro、Max、Team | 已结束 |
| 2026年3月27日 | 高峰时段：工作日13:00–19:00 UTC的5小时额度消耗更快 | Free、Pro、Max、Team | 生效中 |
| 2026年5月6日 | Claude Code 5小时额度翻倍；Pro和Max上的Claude Code不受高峰时段影响 | Pro、Max、Team、按席位计费的Enterprise | 永久 |
| 2026年5月13日–9月14日 | Claude Code每周额度+50% | Pro、Max、Team、按席位计费的Enterprise | 已结束 |
| 2026年6月5日–7月5日 | [Cowork 5小时额度翻倍](/deals/claude-cowork-june-2026-2x/) | Pro、Max、Team、旧版Enterprise | 已结束 |
| 2026年7月 | Pro和Team标准席位上的Fable 5改为使用用量积分 | Pro、Team标准席位 | 生效中 |
| 2026年9月14日 | Claude Code每周额度永久比活动前基准高25% | Pro、Max、Team、按席位计费的Enterprise | 永久 |
| 2026年9月23日–10月7日 | Claude Code云会话积分：$100（Pro）或$250（Max） | 个人Pro和Max | 进行中 |
| 2026年10月1日–15日 | [创建或编辑Artifact后会话用量减少50%](/deals/claude-artifact-usage-promo-oct-2026/) | Pro、Max、Team | 进行中 |

根据[Anthropic的活动页面](https://support.claude.com/en/articles/17274727-artifact-usage-promotion)，Artifact活动适用于你创建或编辑Artifact之后的10条聊天消息，于太平洋时间10月15日23:59结束。Claude Code、API以及Free和Enterprise套餐不参与。

## 选用的模型会影响额度消耗速度吗？

会。Anthropic把所选模型列为影响用量的因素之一，Fable模型消耗额度的速度也比其他Claude模型更快。

- **Max上的Fable 5和Fable 5.1**：已包含在套餐内，但根据Anthropic的[Fable套餐说明](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan)，你最多可以把每周额度的50%用在Fable模型上，不额外收费。Team和Enterprise的高级席位规则相同。
- **Pro和Team标准席位上的Fable**：自2026年7月起不再包含在套餐额度内。你仍然可以用用量积分使用Fable。
- **Opus**：Pro和Max包含，Free不含。
- **Sonnet和Haiku**：Anthropic在用量积分文章中称Haiku是它最高效的模型，并建议大多数任务使用Haiku或最新的Sonnet。

我们的建议：默认用Sonnet，只有Sonnet解决不了的问题才换成Opus或Fable，日常任务调低推理强度。

## 用完Claude用量额度后怎么办？

用完Claude用量额度后，你可以等待重置、调整使用方式、开启用量积分，或者换更大的套餐。

1. **先看用完的是哪种额度**。Settings > Usage会显示是会话额度还是每周额度，以及何时重置。
2. **避开高峰时段**。如果现在是工作日13:00至19:00 UTC之间，19:00 UTC之后的下一个会话能用得更久。
3. **换个模型**。在Max上，用到Fable上限并不会让Claude停用，换成其他模型即可。
4. **开启用量积分**。见下文。
5. **经常用完就升级**。如果大多数星期都会用完每周额度，说明你需要Max 5x或Max 20x。

### Claude用量积分怎么用？

Claude用量积分让Pro、Max 5x和Max 20x订阅者在达到套餐上限后继续使用，按标准API费率计费。Anthropic的[用量积分说明](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans)介绍了设置方法：

- 打开Settings > Usage，点击Enable，添加付款方式并预付资金。
- 设置每月支出上限，也可以开启余额不足时自动充值。
- 积分可用于Claude对话、Claude Code和Research。
- Anthropic还列出了购买用量包这一选项。

积分会作为单独的条目出现在你的账单上。如果你在意开销，我们的[AI订阅省钱指南](/blog/save-money-on-ai-subscriptions/)介绍了按年付费等少花钱的方法。

## 怎样让Claude用量额度用得更久？

效果最明显的是选对时间、缩短对话和选对模型。以下建议来自Anthropic的官方指引和上文提到的2026年调整：

- **在非高峰时段工作**。工作日13:00–19:00 UTC以外，长文档、Research和大文件上传消耗的会话额度更少。
- **多开新对话**。对话长度会计入用量，话题一变就开新对话。
- **合并提问**。先想好需求，写一条具体的消息，把相关问题合在一起问。
- **用项目存放参考文件**。Anthropic表示，项目中的缓存内容占用的额度更少。
- **选更轻的模型**。默认用Sonnet，简单任务调低推理强度。
- **按需开启工具**。Research和网页搜索会增加用量，答案确实需要时再打开。
- **利用进行中的活动**。2026年10月15日前，在Pro、Max或Team上用Artifact创作，会话用量减少50%。

## 总结

Claude的额度由5小时会话额度和每周上限组成，什么时候用和用哪个套餐同样重要。

- **Free用户**：保持对话简短，避开高峰时段；如果每天都会用到上限，就该升级到Pro。
- **Pro用户**：默认用Sonnet，偶尔超额的日子加用用量积分。Claude Code用户不受高峰时段影响。
- **经常用完每周额度的Pro重度用户**：Max 5x（$100/月）提供5倍于Pro的会话用量。
- **Max用户**：留意Fable的50%上限，并在2026年10月7日前领取$250的云会话积分。
- **团队**：Anthropic尚未宣布Team上的Claude Code享有高峰时段豁免，大批量任务请安排在非高峰时段。

我们在[Claude Watch](/)上实时追踪Claude的每一次额度调整。
