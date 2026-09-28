---
summary: "Hugging Face是由同名公司运营的开放AI模型、数据集和Spaces演示应用平台。开发者和研究人员用它下载开放权重模型、在共享的ZeroGPU硬件上托管Gradio演示，并通过Inference Providers调用托管模型。英伟达已于2026年9月3日宣布计划收购Hugging Face。"
metaTitle: "Hugging Face价格：PRO套餐与免费层级"
metaDescription: "Hugging Face免费加入。对比$9的PRO套餐、Team和Enterprise席位、ZeroGPU配额和推理额度，以及英伟达收购交易详情。"
bestFor:
  - "机器学习工程师和研究人员"
  - "开源模型发布者"
  - "演示AI应用的开发者"
  - "托管私有模型的团队"
keyFeatures:
  - name: "模型与数据集Hub"
    description: "在基于Git的仓库中浏览、下载并管理开放权重模型和数据集的版本，可设为公开或私有。"
  - name: "Spaces"
    description: "托管Gradio、Docker或静态演示应用；CPU Basic硬件免费，Nvidia T4 small每小时收费$0.40。"
  - name: "ZeroGPU"
    description: "Gradio Spaces按函数调用借用英伟达RTX Pro 6000 Blackwell GPU，每日配额取决于账户类型。"
  - name: "Inference Providers"
    description: "用一个Hugging Face令牌调用合作方模型，按对方费率计费，Hugging Face不加价。"
  - name: "Inference Endpoints"
    description: "把Hub上的任意模型部署到专属、可自动扩缩的基础设施上，CPU实例起价为每小时$0.033。"
  - name: "HuggingChat"
    description: "在浏览器中与开放模型对话，Omni路由会为每个请求挑选合适的模型。"
  - name: "hf CLI与客户端库"
    description: "用hf命令和huggingface_hub这个Python库，在终端登录、下载和上传仓库。"
useCases:
  - "下载一个开放权重模型及其分词器，在本地用自己的数据进行微调。"
  - "把一个研究模型的Gradio演示发布在ZeroGPU上，让审阅者能在浏览器中试用。"
  - "在选定单一API供应商之前，通过Inference Providers测试多个托管LLM。"
  - "在Team套餐上为公司团队提供SSO、审计日志和私有模型的存储区域选择。"
pricingSummary: "Hub免费使用。PRO为$9/月，含每月$2的计算额度和8倍ZeroGPU配额；Team为每位用户每月$20，Enterprise为每位用户每月$50。Spaces GPU、Inference Endpoints和额外存储按用量计费。"
savingTips:
  - "免费账户每月获得$0.10的Inference Providers额度；PRO把这一额度提升到$2.00，可用于Hugging Face的各类计算。"
  - "使用ZeroGPU Spaces免费：免费账户每天有5分钟GPU时间，PRO则为40分钟。"
  - "注册超过30天且已验证邮箱的免费账户，可免费托管最多2个ZeroGPU Spaces。"
faq:
  - q: "Hugging Face可以免费使用吗？"
    a: "可以。账户、公开模型和数据集下载、CPU Basic Spaces以及ZeroGPU Spaces都不收费。你需要付费的是PRO、Team或Enterprise套餐、升级的Spaces硬件、Inference Endpoints，以及超出每月免费额度的推理用量。"
  - q: "Hugging Face PRO包含什么？"
    a: "PRO为$9/月，新增每月$2.00的计算额度、每天40分钟且享有最高排队优先级的ZeroGPU时间、最多10个ZeroGPU Spaces的托管、Spaces Dev Mode，以及私有数据集的查看器。"
  - q: "英伟达要收购Hugging Face了吗？"
    a: "是的。英伟达于2026年9月3日宣布已同意以129.3亿美元收购Hugging Face。英伟达表示该平台仍将对整个生态系统中的模型、云和硬件保持开放，不会强制要求使用英伟达算力。"
  - q: "ZeroGPU的每日配额是怎么计算的？"
    a: "配额因账户而异：未登录2分钟，免费账户5分钟，PRO和Team成员40分钟，Enterprise为60分钟。付费用户可用预付额度继续使用，每10分钟收费$1。"
  - q: "可以使用自己的服务商API密钥吗？"
    a: "可以。你可以在Hugging Face设置中添加自定义服务商密钥，之后由该服务商直接向你计费。你每月的Hugging Face额度只适用于通过Hugging Face路由并计费的请求。"
---
## Hugging Face是什么？
Hugging Face运营着Hub，一个供开放AI模型、数据集和Spaces应用共享的平台。大多数活动都是公开且免费的；付费套餐新增存储空间、计算额度和组织管理功能。

## 套餐一览
- **Free：** 公开仓库、CPU Basic Spaces、每天5分钟ZeroGPU时间和每月$0.10推理额度。
- **PRO（$9/月）：** 10倍私有存储、20倍推理额度、8倍ZeroGPU配额和Dev Mode。
- **Team（每用户每月$20）：** SSO、存储区域选择、审计日志和资源组。
- **Enterprise（每用户每月$50）：** SCIM账户配置、最高的用量上限和专属支持。

超出包含额度的存储按TB计费，私有仓库价格为每TB每月$12到$18。

## 所有权变化
2026年9月3日，英伟达宣布已达成协议收购Hugging Face。英伟达表示该平台将继续支持来自整个生态系统的开源和开放权重模型。

## 局限性
ZeroGPU只支持Gradio SDK，不支持torch.compile，免费账户的排队优先级低于付费账户。每月$0.10的免费推理额度很快就会用完。不同仓库的模型许可协议各不相同，商用前需逐一检查。
