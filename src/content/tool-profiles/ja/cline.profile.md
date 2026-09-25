---
summary: "Clineは、Cline Bot Inc.が手がけるオープンソースのAIコーディングエージェントで、VS Code、JetBrains IDE、ターミナル、デスクトップアプリで動作します。個人開発者は無料で使え、自分のモデルAPIキーを接続するか実費で推論を利用でき、ファイル編集やコマンド実行の前に必ず承認を求めます。"
metaTitle: "Cline料金：無料コーディングAI"
metaDescription: "Clineはオープンソースで無料、支払うのはAI推論費用のみ。ClinePassは月$9.99、対応エディタや利用制限も紹介します。"
bestFor:
  - "モデルを選びたい開発者"
  - "コストを抑えたいVS Codeユーザー"
  - "オープンソースを求めるチーム"
keyFeatures:
  - name: "PlanモードとActモード"
    description: "まずPlanモードで方針を練り、Actモードに切り替えてエージェントの各ツール呼び出しを承認しながら作業を進めます。"
  - name: "チェックポイント"
    description: "ツール呼び出しごとにエディタ上で差分付きのチェックポイントを作成し、/undoでいつでも変更を巻き戻せます。"
  - name: "任意のモデルプロバイダー"
    description: "Anthropic、OpenAI、Gemini、OpenRouter、AWS Bedrock、Vertex、Groq、DeepSeekや自前のエンドポイントを自分のAPIキーで接続できます。"
  - name: "MCPマーケットプレイス"
    description: "マーケットプレイスや自作のMCPサーバーを追加し、Clineがバグトラッカーやデプロイ基盤、データウェアハウスにアクセスできるようにします。"
  - name: "CLIのKanbanボード"
    description: "cline --kanbanを実行すると、Claude CodeやCodexのセッションを含む複数のエージェントを別々のGit worktreeで並行管理できます。"
  - name: "スキルとフック"
    description: "テストスイートの実行など再利用可能なノウハウをスキルとしてまとめ、フックでスクリプトが各ツール呼び出しを制御・整形できます。"
useCases:
  - "VS Code上でエージェントが提案するファイル編集とターミナルコマンドを承認しながらモジュールをリファクタリングする。"
  - "バックログをKanbanカードに分割し、複数のエージェントを分離したGit worktreeで並行作業させる。"
  - "OpenAI互換のローカルサーバー経由でClineをローカルモデルに接続し、コードを自分のマシンに留める。"
  - "Linear MCPサーバーを接続し、エージェントがチケットを読み取ってリンク付きタスクに変換できるようにする。"
pricingSummary: "Clineエージェント自体は個人利用が無料でシート料金はかかりません。モデルプロバイダーへの支払いは自分のAPIキー経由か、Clineから実費で推論を購入します。オプションのClinePassは月$9.99、Enterpriseは個別見積もりです。"
savingTips:
  - "自分のAPIキーを使えば、Clineのマークアップなしでプロバイダーの料金をそのまま支払えます。"
  - "ClinePassはGLM 5.3、Kimi K3、DeepSeek V4などのオープンウェイトモデルを月$9.99でまとめて利用できます。"
  - "OpenAI互換エンドポイント経由のローカルモデルなら、トークン単位のAPI料金を完全に回避できます。"
faq:
  - q: "Clineは無料ですか？"
    a: "はい。オープンソースのCline拡張機能、CLI、デスクトップアプリは個人開発者向けに無料です。支払うのは利用するAIモデルの費用のみで、自分のプロバイダーAPIキー経由か、Clineから実費で推論を購入する形になります。"
  - q: "ClinePassとは何ですか？"
    a: "ClinePassは月$9.99のサブスクリプションで、Z.ai、Moonshot AI、DeepSeek、MiniMax、MiMo、QwenなどのオープンウェイトモデルをCline のIDE拡張機能とCLI内で利用できます。Clineによれば通常のAPIレート制限の2〜5倍の利用枠が提供されます。"
  - q: "ClineはJetBrains IDEやCursorで使えますか？"
    a: "はい。JetBrainsプラグインはIntelliJ IDEA、PyCharm、WebStorm、GoLandなど向けにアーリーアクセス中です。CursorやWindsurfでは、VS Code Marketplaceと同じ拡張機能をインストールします。"
  - q: "Clineはオープンソースですか？"
    a: "はい。Clineのソースコードはgithub.com/cline/cline上でApache 2.0ライセンスの下に公開されています。エージェントがクライアント側で動くため、Cline自身のサービスに縛られずプロバイダーやモデルを自由に切り替えられます。"
  - q: "Cline Enterpriseには何が追加されますか？"
    a: "EnterpriseはSSO、SCIMプロビジョニング、一元請求、ロールベースのアクセス制御、チームが利用できる推論プロバイダーの制限、監査ログ、VPCデプロイ、SLA、専任サポートを追加します。料金は営業への問い合わせが必要です。"
---
## Clineとは？
Clineは、独立したホスト型サービスではなくエディタやターミナルの中で動作する自律コーディングエージェントです。指定したファイルを読み込み、コードを編集し、コマンドを実行し、ブラウザを操作します。より高い自律性を許可しない限り、各ステップであなたの承認を待って一時停止します。

## 動作環境
- **VS Code拡張機能**：CursorやWindsurfにもインストール可能。
- **JetBrainsプラグイン**：アーリーアクセス中。
- **CLI**：Kanbanボード、プラグイン、スケジュール、ヘッドレスCI利用に対応。
- **Cline for Desktop**：macOSとWindows向けのベータ版スタンドアロンアプリ。
- **SDK**：他のツールにエージェントを組み込むために利用。

## 制限事項
コストは使用するモデルとトークン量に完全に依存するため、フロンティアモデルでの長時間のエージェントセッションは高額になる可能性があり、ClinePassはオープンウェイトモデルのみ対象です。デスクトップアプリはまだベータ版で、Cline自身が粗削りな部分があると注意を促しています。個人向けの無料モデル利用枠はバンドルされていません。
