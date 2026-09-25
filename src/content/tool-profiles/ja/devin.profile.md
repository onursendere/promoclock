---
summary: "DevinはCognitionのAIエンジニアで、チケットを受け取り自分のマシンで作業しプルリクエストを開くクラウドエージェントです。2026年6月2日以降、WindsurfはDevin Desktopとなり、1つのプランでクラウドエージェント、デスクトップIDE、CLIをカバーします。移行やバグ修正、レビューに使われます。"
metaTitle: "Devin料金と無料プラン2026"
metaDescription: "Devinの2026年料金：無料プラン、Proは月$20、Maxは月$200、Teamsは月$80から。WindsurfがDevin Desktopになった経緯も紹介します。"
bestFor:
  - "バックログが多いエンジニアチーム"
  - "チケット全体を任せたい開発者"
  - "旧Windsurfユーザー"
  - "レガシー移行を行うチーム"
keyFeatures:
  - name: "Devin Cloud"
    description: "自律エージェントが自分のクラウドマシンで長時間のタスクを実行し、レビューのフィードバックやCI結果を取り込んでプルリクエストを開きます。"
  - name: "Devin Desktop"
    description: "旧WindsurfのIDEで、現在はローカルとクラウドのエージェントセッションをKanbanボードで追跡するAgent Command Centerで起動します。"
  - name: "Fusion搭載のDevin CLI"
    description: "macOS、Linux、WSL、Windows向けのターミナルエージェントで、Fusionはフロンティアのリードモデルと安価なCognition製SWE-2のサイドキックを組み合わせます。"
  - name: "ACP経由のサードパーティエージェント"
    description: "Devin DesktopはCodex、Claude Agent、OpenCodeなどのAgent Client Protocolエージェントを、Devinと同じインターフェースで実行できます。"
  - name: "Devin ReviewとDeepWiki"
    description: "プルリクエストの差分をレビューし、自分のチームが書いていないコードベースについてドキュメントやシステム図を生成します。"
  - name: "チームツール連携"
    description: "Slack、Microsoft Teams、Linear、Jiraから作業を割り当て、GitHub、GitLab、Bitbucketのリポジトリと接続できます。"
useCases:
  - "多数のDevinセッションを割り当てて、複数のリポジトリを新しいフレームワークへ並行して移行する。"
  - "SlackのバグレポートでDevinにタグ付けし、問題を調査してスレッドをプルリクエストに変換させる。"
  - "手動プロンプトなしで日次QAチェックとリリースノートの下書きを実行するオートメーションをスケジュールする。"
  - "github.comをdevinreview.comに置き換えて公開のGitHubプルリクエストを無料でレビューする。"
pricingSummary: "Freeは軽いエージェント利用枠に加え、無制限のTab補完が含まれます。ProはDevin Cloudにアクセスできる月$20、Maxははるかに高い利用枠で月$200、Teamsは最低月$80に加えフルシートあたり$40です。"
savingTips:
  - "Teamsでは、たまにしか使わないユーザーには$40のフルシートではなく、共有の従量課金クレジットのみを使う無料のフレックスシートを与えましょう。"
  - "超過分として購入した従量課金クレジットは月をまたいで繰り越され、失効しません。"
  - "DevinのFAQによると、日常的なタスクを小型モデルに切り替えると利用枠を伸ばせます。"
faq:
  - q: "WindsurfはDevinになったのですか？"
    a: "はい。Cognitionは2026年6月2日にオーバー・ジ・エア更新でWindsurfをDevin Desktopとして提供しました。既存のプラン、料金、拡張機能、設定は引き継がれ、Devin LocalがCascadeエージェントを置き換え、Cascadeは7月1日まで利用可能でした。"
  - q: "Devinは無料で使えますか？"
    a: "はい。FreeプランにはエージェントによるコーディングとDevin Desktop内での無制限のインライン編集・Tab補完に加え、Devin ReviewとDeepWikiが含まれます。Devin Cloudエージェントを使うにはPro以上が必要です。"
  - q: "Devinの利用上限はどう機能しますか？"
    a: "ProとTeamsのフルシートには日次・週次の利用枠があり、Maxにはより大きな週次枠があり日次上限はありません。利用枠を超えるとAPI料金で従量課金クレジットを購入することになり、これらは失効しません。"
  - q: "チームでDevin Proを共有できますか？"
    a: "いいえ。ProとMaxは単一ユーザー向けのプランです。Teamsは最大200人まで対応し、最低月$80から始まり、Devin Desktopを含む$40のフルシートと、含まない無料のフレックスシートを組み合わせます。"
  - q: "Devinの旧Coreプランはどうなりましたか？"
    a: "CognitionはACUベースのプランをFree、Pro、Max、Teamsに置き換えました。旧Coreユーザーは Freeプランに移行され、残っているクレジットを引き続き使えます。これらは旧ACUと同じドル価値を持ちます。"
---
## Devinとは？
Devinは、複雑なマルチリポジトリのプロジェクトを抱えるエンジニアリングチーム向けに作られた、Cognitionの自律コーディングエージェントです。コードベースの規約を学び、自分のマシンでタスクをこなし、レビュー用にプルリクエストを返します。

## 1つの製品、複数のサーフェス
Cognitionは2026年に2つの製品を統合しました。Windsurf.comは現在Devin Desktopにリダイレクトされ、WindsurfやVS Codeの設定と互換性のある完全なIDEで、エージェントマネージャー上で起動します。Devin Cloudはリモートで長時間の作業を処理し、Devin CLIはターミナルで動作し、Devin Reviewがコードレビューを担当します。1つのサブスクリプション利用枠がDevinのセッション、CLI、Devin Desktop全体で共有されます。

## 制限事項
- クラウドエージェントはFreeプランには含まれません。
- 利用枠は固定数値として公開されておらず、メッセージあたりのコストはモデル、タスクの規模、必要な推論量によって変わります。
- Teamsのフレックスシートには Devin Desktopが含まれません。
- 従量課金クレジットを使い切ると、オートメーションは停止し、Devin ReviewはAIレビューなしの差分ビューアーに切り替わります。
