---
summary: "Google AI Studioは無料のブラウザワークスペースで、Geminiモデルのテスト、Gemini APIキーの作成、Buildモードでのバイブコーディングができます。開発者はプロンプト試作とコード書き出しに使い、コードを書かない人はアプリの説明だけでAntigravityエージェントにFirebase付きアプリを作らせられます。"
metaTitle: "Google AI Studio料金・Buildモード"
metaDescription: "Google AI Studioは無料です。Buildモードで作れるもの、Gemini APIの課金方法、Google AI ProとUltraが2026年に追加する内容を解説します。"
bestFor:
  - "Geminiで試作する開発者"
  - "ウェブアプリを作るノンコーダー"
  - "Androidアプリの実験用途"
keyFeatures:
  - name: "Buildモード"
    description: "アプリを説明するだけで、Google AntigravityコーディングエージェントがReact、Angular、Next.jsのプロジェクトを書き、プレビュー・調整できます。"
  - name: "自動Firebaseバックエンド"
    description: "アプリにログインやデータ保存が必要な場合を検知し、Firebase AuthenticationとCloud Firestoreを自動で用意します。"
  - name: "ネイティブAndroidプロジェクト"
    description: "KotlinとJetpack Composeのアプリを生成し、ブラウザ内エミュレータで実行し、Google Playの内部テストトラックに公開します。"
  - name: "Get code付きPlayground"
    description: "プロンプト上でシステム指示、ツール、モデル設定を調整し、動作するGemini APIコードを希望の言語で書き出せます。"
  - name: "無料のGemini APIキー"
    description: "新規ユーザーにはデフォルトでプロジェクトとAPIキーが付与され、後からプリペイド課金を追加してレート制限を引き上げられます。"
  - name: "ワークスペースデータと書き出し"
    description: "SheetsやDriveのデータを元にアプリを構築し、チャット履歴付きのプロジェクトをGoogle Antigravityに書き出せます。"
useCases:
  - "自分でホスティングを用意せずに、Google Sheetsのトラッカーを共有可能なダッシュボードアプリに変える。"
  - "本番のAPI連携でモデルを選ぶ前に、同じプロンプトで複数のGeminiモデルを比較する。"
  - "Googleサインインと共有データベースを備えたリアルタイムマルチプレイヤーのウェブゲームを、1つの説明文から試作する。"
  - "Kotlin製のAndroidアプリを生成し、ブラウザのエミュレータでテストして、Google Playの内部テストにアップロードする。"
pricingSummary: "AI Studioはレート制限付きのGeminiアクセスを含め無料です。Google AI ProとUltraはAI Studioの割当を引き上げ、無料枠を超えたGemini API利用は$5からのプリペイド制で、例えばGemini 3.5 Flash-Liteは100万トークンあたり入力$0.30、出力$2.50です。"
savingTips:
  - "AI Studioの利用は有料のAPIキーを連携するまで無料のままなので、まず無料枠で試作しましょう。"
  - "Google Cloud Starter Tierを使えば、課金アカウントなしでBuildモードから最大2つのフルスタックアプリを公開できます。"
  - "有料のGemini APIティアでは、急ぎでないジョブ向けのBatch APIが通常リクエストより50%安く済みます。"
faq:
  - q: "Google AI Studioは無料ですか？"
    a: "はい。Google AI Studioは提供対象地域で無料に利用でき、一部のGeminiモデルにレート制限付きでアクセスできます。有料のGemini APIキーを連携し、上限や有料機能のためにクレジットを前払いした場合のみ料金が発生します。"
  - q: "GoogleはAI Studioのプロンプトを自社製品の改善に使いますか？"
    a: "無料ティアでは使われます。Googleの料金ページによると、無料ティアのコンテンツは製品改善に利用されるとのことです。有料ティアではプロンプトと応答はそのように使われないため、機密データは無料ティアのセッションに入れないようにしましょう。"
  - q: "Google AI Studioで完全なアプリを作れますか？"
    a: "作れます。2026年3月以降、Buildモードは Firebaseログインと Firestoreデータベースを備えたフルスタックのウェブアプリを作成でき、2026年5月以降はネイティブAndroidアプリも生成できます。課金アカウントなしで最大2つのアプリをデプロイできます。"
  - q: "Google AI ProとUltraはAI Studioに何を追加しますか？"
    a: "AI StudioのWebインターフェース内での1日あたりの割当が増え、Gemini ProやNano BananaなどのプレミアムモデルとBuildモードのCode Assistantが使えます。この特典は直接のAPI呼び出しには適用されず、Deep Researchのようなエージェントには引き続き有料キーが必要です。"
  - q: "無料ティアを超えたGemini APIの料金はどれくらいですか？"
    a: "モデルによって異なり、100万トークンあたりの単価でプリペイド残高から課金され、最低$5のチャージが必要です。Gemini 3.8 Flashは2026年12月31日まで入力$0.75、出力$3.75で、2027年1月1日からは$1.50と$7.50に倍増します。"
---
## Google AI Studioとは？
Google AI Studioは、aistudio.google.comにあるWebコンソールで、Geminiモデルを試したりGemini APIキーを管理したりできます。もともとはプロンプトの実験場として始まり、現在はアプリビルダーとしても機能します。

Googleは2026年3月18日、Buildモードをフルスタックのバイブコーディングツールとして刷新しました。2026年5月19日のI/Oでは、ネイティブAndroidプロジェクト、Google Workspaceデータへのアクセス、ローカル開発用のGoogle Antigravityへの書き出し機能が追加されました。

## 課金の仕組み
- PlaygroundとBuildモードは、プロジェクトに有料のAPIキーが連携されていない限り無料です。
- 有料のGemini APIアクセスは$5の前払いから始まり、プリペイドクレジットは12か月で失効します。
- 2026年3月2日以降に開設されたCloud Billingアカウントは、$300のGoogle Cloud Welcomeクレジットを Gemini APIやAI Studioの利用に使えません。
- Google AI ProとUltraのサブスクリプションは、AI Studioインターフェース内でのみ有効な、割当を増やす別の手段です。

## 制限事項
Googleは固定の無料ティア上限表を公開しておらず、AI Studio内で現在のレート制限を自分で確認する必要があります。無料ティアのコンテンツはGoogle製品の改善に使われる場合があります。サブスクリプションの割当は毎日リセットされAPIキーには引き継がれず、AI Studio内のDeep ResearchとAntigravity Previewエージェントには有料のAPIキーが必要です。
