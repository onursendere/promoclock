---
summary: "Hugging Faceは、同名企業が運営するオープンなAIモデル、データセット、Spacesデモアプリのハブです。開発者や研究者は、オープンウェイトモデルのダウンロード、共有ZeroGPUでのデモホスト、Inference Providers経由のモデル呼び出しに使います。NVIDIAは2026年9月3日に買収契約を発表しました。"
metaTitle: "Hugging Face料金：PROプラン"
metaDescription: "Hugging Faceは無料で参加できます。月額$9のPROプラン、Team・Enterpriseの席数、ZeroGPU枠、推論クレジット、NVIDIA買収まで解説します。"
bestFor:
  - "MLエンジニアと研究者"
  - "OSSモデルの公開者"
  - "AIアプリをデモする開発者"
  - "非公開モデルを運用するチーム"
keyFeatures:
  - name: "モデル・データセットHub"
    description: "Gitベースのリポジトリで、公開・非公開を選びながらオープンウェイトモデルとデータセットを閲覧・ダウンロード・バージョン管理できます。"
  - name: "Spaces"
    description: "Gradio、Docker、静的なデモアプリをホストでき、CPU Basicハードウェアは無料、Nvidia T4 smallは1時間$0.40です。"
  - name: "ZeroGPU"
    description: "GradioのSpacesは関数呼び出しごとにNVIDIA RTX Pro 6000 Blackwell GPUを借用し、アカウント種別で決まる日次枠内で利用できます。"
  - name: "Inference Providers"
    description: "1つのHugging Faceトークンでパートナープロバイダーのモデルを呼び出せ、Hugging Faceのマークアップなしでプロバイダー料金のまま課金されます。"
  - name: "Inference Endpoints"
    description: "任意のHubモデルを専用の自動スケーリングインフラにデプロイでき、CPUインスタンスは1時間$0.033から利用できます。"
  - name: "HuggingChat"
    description: "ブラウザでオープンモデルとチャットでき、Omniルーターがリクエストごとに適したモデルを選びます。"
  - name: "hf CLIとクライアントライブラリ"
    description: "ターミナルからhfコマンドとhuggingface_hub Pythonライブラリでログイン、リポジトリのダウンロード・アップロードができます。"
useCases:
  - "オープンウェイトモデルとそのトークナイザーをダウンロードし、自分のデータでローカルにファインチューニングします。"
  - "ZeroGPU上で研究モデルのGradioデモを公開し、レビュアーがブラウザで試せるようにします。"
  - "1つのAPIベンダーに決める前に、Inference Providers経由で複数のホスト型LLMを試します。"
  - "Teamプランで、非公開モデル向けにSSO、監査ログ、ストレージリージョンを企業チームに提供します。"
pricingSummary: "Hubは無料です。PROは月額$9で月間$2の計算クレジットと8倍のZeroGPU枠を含み、Teamは1ユーザーあたり月額$20、Enterpriseは$50です。Spaces用GPU、Inference Endpoints、追加ストレージは従量課金です。"
savingTips:
  - "無料アカウントは月$0.10分のInference Providersクレジットを受け取れ、PROではHugging Face全体の計算に使える$2.00に増えます。"
  - "ZeroGPU Spacesの利用自体は無料で、無料アカウントは1日5分、PROは1日40分のGPU時間を使えます。"
  - "登録から30日以上経過しメール確認済みの無料アカウントは、無料でZeroGPU Spacesを最大2つホストできます。"
faq:
  - q: "Hugging Faceは無料で使えますか？"
    a: "はい。アカウント作成、公開モデル・データセットのダウンロード、CPU BasicのSpaces、ZeroGPUのSpacesはすべて無料です。有料になるのはPRO・Team・Enterpriseプラン、Spacesのハードウェア強化、Inference Endpoints、月間クレジットを超えた推論分です。"
  - q: "Hugging Face PROには何が含まれますか？"
    a: "PROは月額$9で、月間$2.00の計算クレジット、優先度最高のZeroGPU利用時間1日40分、最大10個のZeroGPU Spacesのホスティング、Spaces Dev Mode、非公開データセット用のデータセットビューアが追加されます。"
  - q: "NVIDIAはHugging Faceを買収するのですか？"
    a: "はい。NVIDIAは2026年9月3日、Hugging Faceを128億9,300万ドルで買収する契約に合意したと発表しました。NVIDIAは、プラットフォームがエコシステム全体のモデル・クラウド・ハードウェアに開かれたままであり、NVIDIA製の計算資源が必須にはならないとしています。"
  - q: "ZeroGPUの日次枠はどう機能しますか？"
    a: "アカウント種別によって異なり、未認証は2分、無料は5分、PROとTeamのメンバーは40分、Enterpriseは60分です。有料ユーザーは10分あたり$1のプリペイドクレジットで枠を超えて利用を続けられます。"
  - q: "自分のプロバイダーAPIキーを持ち込めますか？"
    a: "はい。Hugging Faceの設定でカスタムプロバイダーキーを追加でき、その後はプロバイダーが直接課金します。月間のHugging Faceクレジットは、Hugging Face経由でルーティング・課金されるリクエストにのみ適用されます。"
---
## Hugging Faceとは？
Hugging FaceはHubを運営しており、オープンなAIモデル、データセット、Spacesアプリの共有拠点です。ほとんどの活動は公開・無料で、有料プランはストレージ、計算クレジット、組織向け管理機能を追加します。

## プラン概要
- **Free：** 公開リポジトリ、CPU BasicのSpaces、1日5分のZeroGPU、月$0.10分の推論クレジット。
- **PRO（月額$9）：** 10倍の非公開ストレージ、20倍の推論クレジット、8倍のZeroGPU枠、Dev Mode。
- **Team（1ユーザーあたり月額$20）：** SSO、ストレージリージョン、監査ログ、リソースグループ。
- **Enterprise（1ユーザーあたり月額$50）：** SCIMプロビジョニング、最大の上限、専任サポート。

含まれる容量を超えたストレージは、非公開リポジトリで1TBあたり月額$12〜$18で課金されます。

## 所有権のニュース
2026年9月3日、NVIDIAはHugging Faceの買収契約に合意したと発表しました。NVIDIAは、プラットフォームがエコシステム全体のオープンソース・オープンウェイトモデルを引き続き支援すると述べています。

## 制限事項
ZeroGPUはGradio SDKでのみ機能し、torch.compileには対応していません。また無料アカウントは有料アカウントより待ち行列の優先度が低くなります。無料の月$0.10の推論枠はすぐに使い切れます。モデルのライセンスはリポジトリごとに異なるため、商用利用の前に各モデルを確認してください。
