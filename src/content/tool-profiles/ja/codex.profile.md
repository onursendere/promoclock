---
summary: "OpenAI Codexは、OpenAIのコーディングエージェントで、FreeからEnterpriseまで全てのChatGPTプランに含まれます。ターミナルやVS Code風エディタ、ChatGPTアプリ、iOS、隔離クラウド環境で動作し、コードの記述・修正・レビューにChatGPT Workと共通の利用枠を使います。"
metaTitle: "OpenAI Codex料金と無料枠2026"
metaDescription: "OpenAI Codexの2026年料金：ChatGPT Free、Go（$8）、Plus（$20）、Pro（$100〜）に含まれます。プラン別の利用上限やモデル、代替ツールも紹介。"
bestFor:
  - "ChatGPTを既に契約中の開発者"
  - "ターミナル中心のエンジニア"
  - "コードレビューを自動化するチーム"
keyFeatures:
  - name: "Codex CLI"
    description: "ローカルでコードを読み取り、編集し、実行するターミナルエージェントで、サンドボックス、承認ルール、スクリプト可能なコマンドラインオプションを備えます。"
  - name: "IDE拡張機能"
    description: "VS Code、Cursor、Windsurfで動作し、JetBrains IDEとXcodeには独自のCodex連携があります。"
  - name: "Codexクラウド"
    description: "設定可能な依存関係と制御されたインターネットアクセスを持つ隔離クラウド環境にタスクを委任します。"
  - name: "コードレビューとSlack"
    description: "GitHubの変更を自動でレビューし、ChatGPTプランのSlackチャンネルやスレッドからの依頼にも対応します。"
  - name: "GPT-5.6モデルファミリー"
    description: "Solは最も難しい推論を担当し、Terraは日常的な本番作業をカバーし、Lunaは軽い作業向けに最も高い利用上限を提供します。"
  - name: "カスタマイズ"
    description: "AGENTS.mdによるプロジェクト指示に加え、スキル、プラグイン、MCPサーバー、カスタムサブエージェントに対応します。"
useCases:
  - "CLIに失敗したテストスイートの修正を依頼し、サンドボックス外で実行される各コマンドを承認する。"
  - "長いリファクタリングをCodexクラウドに任せ、後でiOSアプリから差分を確認する。"
  - "自動コードレビューを有効にして、GitHubのすべてのプルリクエストにチームが見る前の一次チェックを入れる。"
pricingSummary: "Codexは ChatGPT Free（$0）、Go（月$8）、Plus（月$20）、Pro（月$100〜、Plusの5倍または20倍の上限）に含まれます。Businessは1ユーザー月$25または年払いで$20、APIキー利用はAPI料金で課金されます。"
savingTips:
  - "PlusやProのユーザーは上限に達したら、プラン全体をアップグレードする代わりにChatGPTクレジットを購入できます。"
  - "GPT-5.6 Lunaに切り替えると、5時間あたりのローカルメッセージ数がSolより大幅に増え、どのプランでも利用枠を伸ばせます。"
  - "オープンソースのメンテナーはCodex for Open Sourceプログラムに応募すると、APIクレジットとChatGPT Pro（Codex付き）6か月分が得られます。"
faq:
  - q: "OpenAI Codexは無料ですか？"
    a: "上限付きで無料です。ChatGPT Freeには軽いコーディング作業向けにCodexが含まれ、月$8のGoは軽量な作業をカバーします。月$20のPlusには自動コードレビューやSlack連携などのクラウド機能が含まれます。"
  - q: "ChatGPT PlusのCodexメッセージ数はどれくらいですか？"
    a: "OpenAIの見積もりでは、Plusでは5時間あたりGPT-5.6 Solのローカルメッセージが10〜100件、またはGPT-5.6 Lunaが250〜2,000件です。週単位の上限も適用される場合があり、クラウドチャットはより多く消費します。"
  - q: "CodexはChatGPTではなくAPIキーで動かせますか？"
    a: "はい。APIキーを使うと、CodexはCLI、SDK、IDE拡張機能で動作しAPI料金で課金されますが、GitHubのコードレビューやSlackなどのクラウド機能は利用できません。"
  - q: "2026年のCodexはどのモデルを使っていますか？"
    a: "ChatGPTプランではGPT-5.6ファミリー（Sol、Terra、Luna）とGPT-6 Astraが使えます。Proはリサーチプレビューの GPT-5.3-Codex-Sparkを追加し、GPT-5.5は2026年10月14日にCodexから引退します。"
---
## OpenAI Codexとは？
Codexは単体販売ではなくChatGPTアカウントに紐づく、OpenAIのソフトウェア開発向けエージェントです。OpenAIのCodexドキュメントは現在ChatGPTのドキュメントに統合されており、Codexの利用量はChatGPT Workと共有されるため、両者は同じ利用枠とクレジットを消費します。

## 誰に向いているか
すでにChatGPTを契約していて、チャットとコーディングを1つのサブスクリプションでまかないたい開発者に向いています。チームはCodex SDK、GitHub Action、アプリサーバープロトコルを追加し、自社のツールやCIにCodexを組み込めます。

## 制限事項
- 利用上限は固定値ではなく見積もりで、長いセッション、大規模なコードベース、高速モード、画像生成は利用枠をより早く消費します。
- クラウドチャットはGPT-5.6 Sol上で動作し、ローカルメッセージより多く消費する場合があります。
- GPT-5.3-Codex-SparkはPro限定で、独自の別枠上限があります。
- APIキー利用者はコードレビューやSlackを含むクラウド機能を利用できません。
