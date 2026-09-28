---
summary: "DeepSeek是中国实验室深度求索(DeepSeek)推出的免费AI聊天助手，基于其开放权重的V4模型系列构建。它把无需订阅的助手与非常低的按token计费API价格结合在一起，DeepSeek-V4.1-Flash于2026年9月发布。预算有限的用户、开发者和自托管模型的研究者最常使用它。"
metaTitle: "DeepSeek是否免费？应用、API定价与V4.1"
metaDescription: "DeepSeek聊天应用免费。查看2026年deepseek-flash和V4-Pro的API定价、非高峰折扣、隐私说明、英国DSeek更名及替代工具。"
bestFor:
  - "注重预算的日常用户"
  - "削减API成本的开发者"
  - "使用开放权重的研究者"
keyFeatures:
  - name: "免费的网页和移动端聊天"
    description: "在chat.deepseek.com或iOS、Android应用中聊天、上传文件和搜索网络，无需订阅。"
  - name: "100万token上下文"
    description: "自2026年4月发布V4以来，100万token的上下文窗口已成为DeepSeek官方服务的默认配置。"
  - name: "Expert Mode中的V4-Pro"
    description: "DeepSeek-V4-Pro自2026年8月13日起全面上线，可在应用和网页端的Expert Mode中使用。"
  - name: "开放权重"
    description: "V4-Pro、V4-Flash和V4.1-Flash的权重和技术报告都发布在Hugging Face上，供研究和自托管使用。"
  - name: "非高峰API定价"
    description: "按token计费并支持上下文缓存，非高峰时段的费率只有工作日高峰时段的一半。"
  - name: "适配编程智能体"
    description: "该API同时接受OpenAI和Anthropic格式的请求，因此Claude Code、OpenCode等工具都能运行在DeepSeek模型上。"
useCases:
  - "在免费网页聊天中调试脚本或推演一道数学证明，无需付费套餐。"
  - "把Claude Code或OpenCode指向DeepSeek兼容Anthropic的端点，用更便宜的token运行编程智能体。"
  - "把大批量摘要任务安排在UTC非高峰时段，把API账单砍掉一半。"
  - "从Hugging Face下载开放权重，在自己的基础设施上测试DeepSeek模型。"
pricingSummary: "网页聊天以及iOS、Android应用均为免费。API按用量付费：deepseek-flash的输入(缓存未命中)每百万token收费$0.30，输出每百万token收费$1.20(高峰时段)，非高峰时段为一半。"
savingTips:
  - "把可灵活安排的API任务放到非高峰时段(工作日UTC 01:00–04:00和06:00–10:00)运行，可省50%。"
  - "复用较长的提示前缀：高峰时段deepseek-flash的缓存输入每百万token只需$0.006，而缓存未命中要$0.30。"
  - "常规任务优先选deepseek-flash而非deepseek-v4-pro：其高峰时段输出价为每百万token$1.20，而后者为$3.96。"
faq:
  - q: "DeepSeek免费吗？"
    a: "是的。DeepSeek网页聊天及其iOS、Android应用完全免费，没有订阅档位。只有开发者API是付费的，按token从充值或获赠的余额中扣除。"
  - q: "DeepSeek把我的数据存在哪里？"
    a: "存在中国。DeepSeek的隐私政策(最近一次更新于2026年2月10日)说明，它在中华人民共和国境内收集、处理和存储个人数据。分享敏感的个人或公司信息前应考虑这一点。"
  - q: "为什么DeepSeek在英国叫DSeek？"
    a: "chat.deepseek.com上的一则通知说明，由于品牌重组，DeepSeek在英国的官方名称现为DSeek。通知还补充说所有服务照常运行。"
  - q: "DeepSeek-V4.1-Flash是什么？"
    a: "这是DeepSeek最新的模型，于2026年9月10日发布：一个拥有552B参数的混合专家模型，具备原生视觉理解能力。它在API中以deepseek-flash的名称取代了V4-Flash，价格更低。"
  - q: "我还能通过API使用DeepSeek-V4-Pro吗？"
    a: "可以。DeepSeek最初计划从2026年9月14日起把V4-Pro的请求路由到V4.1-Flash，但其定价页面现在显示V4-Pro将继续保留，计费方式不变，直到另行通知。"
---
## DeepSeek是什么？
DeepSeek既是一家总部位于杭州的AI实验室，也是它在浏览器和移动应用中运行的免费助手名称。开发者可以通过低成本API访问同样的模型，或下载开放权重自行运行。

## 近期变化
- **2026年4月24日：** V4预览版推出V4-Pro(总参数1.6T，激活参数49B)和V4-Flash，并把100万token上下文设为标准配置。
- **2026年7月24日：** 旧版deepseek-chat和deepseek-reasoner这两个API模型名称被下线。
- **2026年8月：** V4-Pro全面上线，高峰与非高峰API费率开始生效。
- **2026年9月10日：** V4.1-Flash以更便宜的API价格取代了V4-Flash。
- **英国：** 该服务现使用DSeek这一名称。

## 局限性
DeepSeek把个人数据存储在中国，这可能使其不适用于受监管或机密的工作。在API中，视觉输入功能只支持deepseek-flash，且工作日高峰时段的价格会翻倍。2026年模型名称和路由已多次调整，API用户部署前应先查看定价页面。
