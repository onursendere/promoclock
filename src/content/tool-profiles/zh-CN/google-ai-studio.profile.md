---
summary: "Google AI Studio是谷歌推出的免费浏览器工作区，用于测试Gemini模型、创建Gemini API密钥，并在Build模式下进行氛围编程。开发者用它来快速验证提示词并导出代码，非程序员则只需描述一个应用，让Antigravity智能体用Firebase登录和Firestore数据库把它搭建出来。"
metaTitle: "Google AI Studio：免费额度与Build模式"
metaDescription: "Google AI Studio可免费使用。了解Build模式能做什么、Gemini API如何计费，以及2026年Google AI Pro和Ultra新增了哪些内容。"
bestFor:
  - "用Gemini做原型的开发者"
  - "搭建网页应用的非程序员"
  - "安卓应用实验者"
keyFeatures:
  - name: "Build模式"
    description: "描述一个应用，Google Antigravity编程智能体就会写出可预览和调整的React、Angular或Next.js项目。"
  - name: "自动配置Firebase后端"
    description: "检测应用是否需要登录或数据存储，并自动为其配置Firebase Authentication和Cloud Firestore。"
  - name: "原生安卓项目"
    description: "生成Kotlin和Jetpack Compose应用，在浏览器内模拟器中运行，并发布到Google Play的内部测试通道。"
  - name: "带Get code的Playground"
    description: "针对一个提示词调整系统指令、工具和模型设置，然后导出可用的、你所用语言的Gemini API代码。"
  - name: "免费Gemini API密钥"
    description: "新用户默认获得一个项目和API密钥，之后可添加预付费账单以获得更高的速率限制。"
  - name: "Workspace数据与导出"
    description: "基于Sheets和Drive中的数据搭建应用，再把项目及其聊天记录导出到Google Antigravity。"
useCases:
  - "把一个Google表格追踪器变成可分享的仪表盘应用，无需自己搭建托管服务。"
  - "在同一个提示词上比较多个Gemini模型，再为正式的API集成选定一个。"
  - "只用一段描述，就搭建出带谷歌登录和共享数据库的实时多人网页游戏原型。"
  - "生成一个Kotlin安卓应用，在浏览器模拟器中测试，再推送到Google Play的内部测试通道。"
pricingSummary: "AI Studio免费使用，Gemini访问有速率限制。Google AI Pro和Ultra会提高AI Studio的配额，超出免费额度的Gemini API用量按预付费计算，最低$5起，例如Gemini 3.5 Flash-Lite每100万个token输入$0.30、输出$2.50。"
savingTips:
  - "在你关联付费API密钥之前，AI Studio的使用一直是免费的，所以可以先在免费额度上做原型。"
  - "Google Cloud入门层允许你在无需绑定账单的情况下，通过Build模式发布最多2个全栈应用。"
  - "在付费Gemini API层级上，对于不急的任务，Batch API比标准请求便宜50%。"
faq:
  - q: "Google AI Studio免费吗？"
    a: "是的。Google AI Studio在其覆盖的地区免费使用，对部分Gemini模型有速率限制。只有当你关联付费Gemini API密钥并为更高限额和付费功能预付额度时才需要付费。"
  - q: "谷歌会用AI Studio里的提示词来改进产品吗？"
    a: "在免费层级上会：谷歌的定价页面写明免费层级的内容会被用于改进其产品。在付费层级上，提示词和回复不会被这样使用，因此建议不要在免费层级会话中输入敏感信息。"
  - q: "Google AI Studio能搭建一个完整应用吗？"
    a: "可以。自2026年3月起，Build模式已能创建带Firebase登录和Firestore数据库的全栈网页应用，自2026年5月起还能生成原生安卓应用。最多可在不绑定账单的情况下部署2个应用。"
  - q: "Google AI Pro和Ultra在AI Studio里新增了什么？"
    a: "它们在AI Studio网页界面中提供更高的每日配额、Gemini Pro和Nano Banana等高级模型，以及Build模式中的Code Assistant。这些权益不适用于直接的API调用，Deep Research等智能体仍需要付费密钥。"
  - q: "超出免费额度后Gemini API收费多少？"
    a: "取决于所用模型，按每100万个token从预付额度中扣费，最低充值$5。截至2026年12月31日，Gemini 3.8 Flash输入为$0.75、输出为$3.75，从2027年1月1日起将翻倍至$1.50和$7.50。"
---
## Google AI Studio是什么？
Google AI Studio是位于aistudio.google.com的网页控制台，你可以在此试用Gemini模型并管理Gemini API密钥。它最初是一个提示词试验场，如今也兼作应用构建工具。

谷歌在2026年3月18日把Build模式重新打造成一个全栈氛围编程工具。在2026年5月19日的I/O大会上，它又新增了原生安卓项目、Google Workspace数据访问，以及导出到Google Antigravity进行本地开发的功能。

## 计费方式
- 只要项目未关联付费API密钥，Playground和Build模式都是免费的。
- 付费Gemini API访问从$5预付款开始，预付额度12个月后过期。
- 2026年3月2日之后开通的Cloud Billing账户，不能把$300的Google Cloud欢迎额度用在Gemini API或AI Studio用量上。
- Google AI Pro和Ultra订阅是另一条获得更高配额的途径，但仅限AI Studio界面内使用。

## 局限性
谷歌没有公布固定的免费层级限额表，你需要在AI Studio内查看自己当前的速率限制。免费层级的内容可能被用于改进谷歌产品。订阅配额每日重置，且不会带入API密钥使用，AI Studio中的Deep Research和Antigravity Preview智能体也需要付费API密钥。
