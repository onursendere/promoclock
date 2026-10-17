---
title: "Claude MaxとTeamのAPIクレジット2026：月$100〜$500の受け取り方"
metaTitle: "Claude APIクレジットの受け取り方：MaxとTeam"
metaDescription: "Claude Max 5xは月$100、Max 20xは月$200、Teamは最大$500のAPIクレジットが付きます。受け取り方と対象範囲、Haiku 5.5の新料金も解説します。"
excerpt: "2026年10月から、Claude Max 5xには月$100、Max 20xには月$200のClaude Platform APIクレジットが付き、Teamプランは最大$500をプールできます。受け取るには、claude.aiの課金設定でConsole組織を連携します。対象はAPIとAgent SDKなどで、対話型のClaude Codeは含まれず、サイクルごとに失効します。"
imageAlt: "暗い部屋に置かれたMacBook Pro。エディターにカラフルなコードが表示されている"
keyTakeaways:
  - "2026年10月から、Claude Max 5xには月$100、Max 20xには月$200のClaude Platform APIクレジットが付き、Teamプランはシート全体で最大$500をプールできます。"
  - "月額のAPIクレジットは、Claude API、Message Batches、ConsoleのPlayground、Claude Managed Agents、Agent SDKに使えますが、対話型のClaude Codeと、Claudeアプリでの追加利用には使えません。"
  - "APIクレジットは請求サイクルごとに更新され、サイクルの終了時に繰り越しなしで失効します。受け取りは、claude.aiのSettings > Billingで1つのClaude Console組織を連携して行います。"
  - "Claude Haiku 5.5は2026年10月7日に登場し、100,000トークンまでのプロンプトで入力100万トークンあたり$0.10です。Sonnet 5.5のキャッシュ読み取りは100万トークンあたり$0.20から$0.10に下がりました。"
  - "オープンソースのメンテナーは、Claude for Open Sourceを通じてClaude Max 20xを6か月間無料で申請でき、実績のあるプロジェクトはAnthropicの無料のOSS Scannerに参加できます。"
faq:
  - q: "Claude ProにはAPIクレジットが付きますか？"
    a: "いいえ。Anthropicのヘルプセンターによると、月額のAPIクレジットはMaxとTeamのプランだけが対象で、割引価格のTeamプランも含まれます。Free、Pro、Enterpriseは対象外です。毎月APIクレジットが欲しいProユーザーは、$100のクレジットが付く月額$100のMax 5xにするか、Claude Consoleで前払いクレジットを購入する必要があります。"
  - q: "Claude MaxのAPIクレジットはClaude Codeに使えますか？"
    a: "ターミナル、IDE、デスクトップアプリ、Webで使う対話型のClaude Codeには使えず、引き続きプランの上限が適用されます。連携したConsole組織のAPIキーでclaude -pやAgent SDKを実行する場合は、クレジットが使えます。Claude Code GitHub Action、IDE拡張機能、デスクトップアプリからの実行は、Claude Codeの利用として扱われます。"
  - q: "ClaudeのAPIクレジットは翌月に繰り越されますか？"
    a: "いいえ。使わなかった月額のAPIクレジットは請求サイクルの終了時に失効し、新しいクレジットはプランの支払いが完了した少し後に付与されます。年払いプランでは、クレジットは毎月付与されます。Anthropicは、購入したクレジットより先にこのクレジットを消費します。Consoleの課金ページで、各クレジットの金額と有効期限を確認できます。"
  - q: "Claude TeamプランのAPIクレジットはいくらですか？"
    a: "Teamプランでは、Standardシートに1シートあたり月$20、Premiumシートに$100が付与され、上限$500の1つの残高にプールされます。Standardシート3つとPremiumシート2つのチームなら、月$260です。プールはクレジットが付与されるたびにシート数から再計算され、1人のOwnerまたはPrimary Ownerがチーム全体の分を受け取ります。"
  - q: "ClaudeのAPIクレジットを使い切ったらどうなりますか？"
    a: "Console組織に購入済みのクレジットや自動チャージがあれば、API利用は続き、そこから引かれます。ほかにクレジットがなければ、次の月額クレジットが付与されるまでAPIリクエストは止まります。Anthropicによると、利用料がClaudeのプランに請求されることはなく、Anthropicの営業チーム経由で請求書払いにしている組織は、クレジット分を超えた分が通常どおり請求されます。"
  - q: "Claude Maxの新規契約者はいつからAPIクレジットを受け取れますか？"
    a: "対象プランに加入して7日後からです。その後、Webブラウザのclaude.aiにあるSettings > Billingに特典が表示されます。iOSやAndroidで契約した人も同様です。Claude Platformに支払い方法を登録する必要はなく、Max 5xからMax 20xにアップグレードすると、日割りのクレジットがすぐに付与されます。"
howTo:
  name: "Claude MaxまたはTeamで月額のAPIクレジットを受け取る方法"
  steps:
    - name: "対象かどうか確認する"
      text: "Max 5x、Max 20x、Teamのいずれかに7日以上加入していて、Maxの契約者本人、またはTeamのOwnerかPrimary Ownerであることが条件です。"
    - name: "課金設定を開く"
      text: "Webブラウザでclaude.aiを開き、MaxはSettings > Billing、TeamはOrganization settings > Billingに進みます。"
    - name: "Console組織を連携する"
      text: "API creditsの項目でLink organizationを選び、開発に使うClaude Console組織を選ぶか、新しく作成します。その組織でOwner、Admin、Billingのいずれかのロールが必要です。"
    - name: "規約に同意する"
      text: "Supplemental Credit Termsを確認し、Link organizationで確定します。連携は、サポートに問い合わせない限り、後から変更できません。"
    - name: "開発を始める"
      text: "Consoleの課金ページのPromotional creditsでクレジットを確認し、APIキーを作成して最初のリクエストを送ります。"
---
Claude MaxとTeamのプランに、Claude API用の月額クレジットが付くようになりました。Max 5xは$100、Max 20xは$200、Teamはプール合計で最大$500です。受け取りには1回の手続きが必要で、対象は自作のアプリやエージェントであり、Claude Codeは含まれず、請求サイクルごとに失効します。以下のプランの詳細と料金はすべて2026年10月17日時点のもので、Anthropicのヘルプセンター、料金ページ、Claude Codeの変更履歴に基づいています。

## Claudeの月額APIクレジットとは？

Claudeの月額APIクレジットは、MaxとTeamのサブスクリプションに含まれるClaude Platformのクレジットで、Claude API上で自作のアプリやエージェントを構築・実行するために使います。チャットやClaude Codeの上限とは別枠です。

Anthropicは2026年10月7日にClaude Haiku 5.5とあわせてこのクレジットを発表し、その後数日かけて契約者に展開しました。[Anthropicの料金ページ](https://claude.com/pricing)では、Maxに「月$100〜$200のAPIクレジット」、Teamに月最大$500のプール型APIクレジットが記載されています。Free、Pro、Enterpriseのプランは対象外です。

このクレジットは交換ではなく上乗せです。ヘルプセンターによると、Claude、Claude Code、Coworkの利用上限は従来のまま変わりません。また、Anthropicが6月に発表したAgent SDKクレジットとは別物です。同じ記事によると、あちらの特典は現在利用できません。

## ClaudeのプランごとのAPIクレジットはいくら？

Max 5xは月$100、Max 20xは月$200、TeamプランはStandardシートが1シートあたり$20、Premiumシートが$100で、プールされて$500が上限です。

| プラン | プラン料金 | 月額APIクレジット |
|---|---|---|
| Free | $0 | なし |
| Pro | 月額$20または年額$200 | なし |
| Max 5x | 月額$100 | $100 |
| Max 20x | 月額$200 | $200 |
| Team Standardシート | 1シートあたり月額$25（年払いなら$20） | 1シートあたり$20、プール、チームごとに最大$500 |
| Team Premiumシート | 1シートあたり月額$125（年払いなら$100） | 1シートあたり$100、プール、チームごとに最大$500 |
| Enterprise | 年払いで1シートあたり月額$20、加えてAPI料金での利用分 | なし |

[Anthropicのヘルプセンター](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans)によるTeamのプールの仕組みは、次のとおりです。

- **チームごとに1つの残高**：Standardシート3つとPremiumシート2つで月$260です。Premiumシートを1つ増やして3つにすると、次のサイクルからは$360になります。
- **上限は$500**：それより大きなチームでも$500で、これがTeamプランの受け取れる最大額です。
- **割引価格のTeamプランも対象**：非営利団体向けとScientists向けのTeamプランも、1シートあたり同じ$20と$100です。

Max 5xからMax 20xに移ると、日割りのクレジットがすぐに付与され、以降は毎サイクル$200になります。2つのティアのそのほかの違いは、[Claude ProとMaxの比較](/blog/claude-pro-vs-max/)をご覧ください。

## ClaudeのAPIクレジットの受け取り方は？

ClaudeのAPIクレジットは、claude.aiの課金設定でClaude Console組織をプランに連携すると、1回の手続きで受け取れます。その後は、請求サイクルごとにその組織へクレジットが付与されます。

1. MaxまたはTeamに加入して7日たつまで待ちます。新規契約者は、それより早くは受け取れません。
2. Webブラウザでclaude.aiを開き、**Settings > Billing**（Max）または**Organization settings > Billing**（Team）に進みます。
3. **API credits**の項目で**Link organization**を選び、クレジットを受け取るConsole組織を選ぶか、新しく作成します。
4. Supplemental Credit Termsを確認して、確定します。
5. Consoleの課金ページを開き、Promotional creditsにあるクレジットを確認して、APIキーを作成します。

クリックする前に知っておきたいルールがいくつかあります。

- **ロール**：Maxは契約者本人、TeamはOwnerまたはPrimary Ownerが手続きできます。Console組織では、Owner、Admin、Billingのいずれかのロールが必要です。
- **連携は1つだけで、変更不可**：各プランが連携できるConsole組織は1つで、各組織がクレジットを受け取れるプランも1つです。連携は自分では変更できないため、実際に開発に使う組織を選んでください。
- **カードは不要**：クレジットの受け取りにも利用にも、Claude Platformへの支払い方法の登録は必要ありません。
- **モバイルで契約した人**：iOSやAndroidで購入したプランも対象ですが、受け取りはブラウザのclaude.aiで行います。
- **同じメールアドレスだと楽**：Anthropicは、Consoleにもclaude.aiと同じメールアドレスでサインインすることを勧めています。

## APIクレジットの対象と対象外は？

ClaudeのAPIクレジットは、Claude API、Claude Managed Agents、Agent SDK、ConsoleのPlaygroundに使えます。対話型のClaude Code、Claudeアプリでの追加利用、他社クラウド上のClaudeには使えません。

対象（利用できるClaudeモデルすべて）：

- Claude API。Messages APIとMessage Batches APIの両方
- Claude ConsoleのPlayground
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview)：Anthropicがホストするエージェント実行基盤で、現在はベータ版です
- Claude Agent SDK、および連携した組織のAPIキーで実行する`claude -p`

対象外：

- ターミナル、IDE、デスクトップアプリ、Webで使う対話型のClaude Code
- Claude、Claude Code、Coworkでの追加利用（利用クレジット）
- Amazon Bedrock、Google Cloud Vertex AI、Microsoft Foundry上のClaude、およびClaude Platform on AWS

残高の扱いは次のとおりです。クレジットは請求サイクルごと（年払いプランでは毎月）に更新され、サイクルの終了時に繰り越しなしで失効し、購入したクレジットより先に消費されます。連携した組織のAPIキーを持つ全員が同じ残高から引かれるため、TeamのオーナーはConsoleでワークスペースごとの支出上限を設定できます。クレジットがなくなり、組織に購入済みのクレジットもない場合は、次の付与までAPIリクエストが止まります。Claudeのプランに請求されることはありません。

## $100分のClaude APIクレジットで何ができる？

Anthropicの定価では、$100で、短いプロンプトならHaiku 5.5の入力約10億トークン、Sonnet 5.5の入力5,000万トークン、またはOpus 5.5での1時間のManaged Agentsセッション約170回分に相当します。

| モデル | 入力（100万トークンあたり） | 出力（100万トークンあたり） | キャッシュ読み取り（100万トークンあたり） |
|---|---|---|---|
| Haiku 5.5（プロンプトが100,000トークンまで） | $0.10 | $0.50 | $0.01 |
| Haiku 5.5（プロンプトが100,000トークン超） | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5の高速モード | $8 | $40 | さらにキャッシュの倍率が適用 |
| Fable 5.1 | $10 | $50 | $0.25 |

[AnthropicのAPI料金ページ](https://platform.claude.com/docs/en/about-claude/pricing)をもとにした、当サイトの計算です。

- **Haiku 5.5**：100,000トークンまでのプロンプトなら、$100で入力10億トークン、または出力2億トークンです。
- **Sonnet 5.5**：$100で入力5,000万トークン、または出力1,000万トークンです。
- **Managed Agents**：セッションは、モデル料金のトークン代に加えて、稼働中1セッション時間あたり$0.08が課金されます。Anthropicの例では、入力50,000トークン、出力15,000トークンのOpus 5.5で1時間のセッションが$0.58なので、$100なら約172回分です。

実際の請求額は、プロンプトの長さ、キャッシュ、エフォートレベル、ツールによって変わります。セッション内のWeb検索は1,000回あたり$10で、高速モードはBatch APIでは使えません。

## 2026年10月にClaude APIの料金はどう変わった？

2026年10月には3つの料金変更がありました。Claude Haiku 5.5が10月7日に登場し、同じ日にSonnet 5.5のキャッシュ読み取りが半額になり、Opus 5.5の高速モードが一般提供になりました。

- **Claude Haiku 5.5**：Anthropicは、これまでで最も安く、速く、高性能な小型モデルだとしています。100,000トークンまでのプロンプトではHaiku 4.5より90%安く、それを超えると50%安く、Anthropicによると平均で約75%安くなります。コンテキストウィンドウは100万トークン、出力は最大128Kトークンで、Haikuモデルとして初めてエフォートの調整に対応しました。[Haiku 5.5の発表](https://www.anthropic.com/claude-haiku-5-5)によると、Anthropicは要約、分類、コンパクション、サブエージェントの作業向けとしています。
- **Sonnet 5.5のキャッシュ読み取り**：10月7日に、100万トークンあたり$0.20から$0.10に下がりました。エージェントのトラフィックではキャッシュ読み取りが大きな割合を占めるため、Anthropicは、Sonnet 5.5がほとんどのエージェント作業で約20%安くなると見積もっています。
- **Opus 5.5の高速モード**：リクエストに`"speed": "fast"`を設定すると、標準料金の2倍（入力100万トークンあたり$8、出力$40）で、出力トークンの毎秒あたりの速度が最大2.5倍になります。[高速モードのドキュメント](https://platform.claude.com/docs/en/build-with-claude/fast-mode)によると、Opus 5.5ではベータヘッダーもアクセス申請も不要になりました。ファーストパーティのAPIとMicrosoft Foundryで動作します。

Claude Codeでは、`/model haiku`でHaiku 5.5に切り替えられます。変わるのはプランの上限を消費する速さであって、APIクレジットではありません。

## プランの上限を長持ちさせるClaude Codeのアップデートは？

2026年10月のClaude Codeの変更のうち、利用量の節約になるのは4つです。アイドル時のコンパクション、サブエージェントごとのエフォートとモデルの指定、`/usage`の新しい警告、補充されるWeb検索の枠です。いずれも既存のプランの上限の範囲内で働きます。

- **アイドル時のコンパクション（バージョン2.1.299、10月14日）**：200Kトークンを超えるターミナルの会話が約54分間放置されると、1時間のプロンプトキャッシュが切れる直前にコンパクションされます。戻ったときにClaudeが再処理するのは、会話全体ではなく要約です。オフにするには、settings.jsonで`"idleCompaction": false`を設定するか、バージョン2.1.302以降なら`/config`のIdle compactionの項目を使います。
- **サブエージェントごとのエフォートとモデル（2.1.292、10月6日）**：プロンプトで、コードベースの検索には低エフォートのサブエージェントを、結果の判断には高エフォートのサブエージェント1つを、素早い調べものにはHaikuを、と指定できます。以前はカスタムのサブエージェント定義が必要でした。
- **利用量の警告（2.1.299）**：`/usage`が、最大エフォート、ワークフロー、常時読み込まれるコンテキスト、大きなツール結果にフラグを立てるようになりました。セッションが速く消耗する典型的な原因です。
- **Web検索の枠（2.1.290、10月5日）**：対話型セッションでは、200回で止まる代わりに、補充される1時間あたり100回のWeb検索が使えます。

Anthropicのエンジニアからは、プロンプトのコツがもう1つあります。サブエージェントは既定で網羅性を重視するので、プロンプトに時間が重要だと一文添えると、ペースを上げてくれます。Anthropicによれば、速度と品質のほどよいバランスになります。5時間のセッションと週間上限の仕組みは[Claudeの利用上限](/blog/claude-usage-limits/)のガイドで、平日に長いチャットを始める前は[Claude Watch](/)で確認してください。

## Claude Codeのデスクトップアプリとクラウドセッションの新機能は？

2026年10月、Claude Codeのデスクトップアプリに新しいセッション画面、保存できる環境、入れ子のセッションが加わり、クラウドセッションはローカルの作業を中断したままの状態で引き継げるようになりました。

デスクトップアプリ（AnthropicのClaude Codeニュースレターと[デスクトップのドキュメント](https://code.claude.com/docs/en/desktop)による）：

- **新しいセッション画面**：最近使ったフォルダーをワンクリックで開けます。複数のフォルダー、SSHホスト、クラウドなどの設定を、環境として保存できます。
- **入れ子のセッション**：Claudeに作業の並列実行を頼むと、それぞれが専用のセッションで動き、完了するとメインのセッションに報告します。提案されたフォローアップの作業も、ワンクリックで専用のセッションとして始められます。
- **タブで開く横道の質問**：`/btw`が、横道の質問を専用のタブで開くようになりました。
- **状況がひと目でわかる**：サイドバーに、作業中のセッションと自分の対応が必要なセッションが表示され、サイドレールにはセッションの実行場所、コンテキスト、変更内容が表示されます。

クラウドセッション（[Anthropicのクラウドのドキュメント](https://code.claude.com/docs/en/claude-code-on-the-web)による）：

- **ローカルで始めた作業を引き継ぐ**：ローカルのセッションをクラウドに移すと、コミットしていない変更とプッシュしていないコミットも一緒に移るため、先にコミットやプッシュをする必要がありません。macOS、Linux、WSLでは、.envファイルや秘密鍵など認証情報に見えるファイルの未コミットの変更は、手元のマシンに残ります。
- **Teamのネットワークシークレット**：Teamプランでも、ProやMaxと同様にクラウド環境へAPIキーを追加できるようになりました。Claudeはキーを見ずに、登録したホストを呼び出します。

10月7日より前に[Claude Codeクラウドクレジット](/deals/claude-code-cloud-credit-2026/)を受け取った方は、2026年11月4日の期限が切れる前に、クラウドセッションで使い切りましょう。Claude Codeの料金がCursor、Codex、Copilotとどう違うかは、[AIコーディングツールの比較](/blog/best-ai-coding-tools/)をご覧ください。

## オープンソースのメンテナー向けのClaude無料特典はある？

あります。Claude for Open Sourceでは、承認されたメンテナーにClaude Max 20xを6か月間無料で提供し、2026年10月8日からは、AnthropicのOSS Scannerが実績のあるオープンソースプロジェクトに無料のセキュリティスキャンを提供しています。

[Claude for Open Source](/deals/claude-for-open-source-max-2026/)は承認者が最大10,000人で、GitHubアカウントで申請します。[Anthropicのプログラムページ](https://claude.com/contact-sales/claude-for-oss)と規約によると、次のいずれかの基準を満たす必要があります。

- 依存するリポジトリが500以上、依存するパッケージが100以上、または月間ダウンロード数が200,000以上のプロジェクト
- 認知された財団または言語プロジェクトで、コミッターまたはメンテナーとして登録されている
- 自分が所有していないリポジトリへの、直近12か月のマージ済みプルリクエストが100件以上
- 外部コントリビューターが20人以上いるリポジトリ、またはOpenSSFのcriticality scoreが0.4以上

GitHubアカウントは作成から2年以上経っていて、直近90日間に公開のオープンソース活動がある必要があります。6か月が過ぎると、有料プランに入っていたメンバーは、解約しない限り以前の料金でそのプランに戻ります。それ以外の人はFreeプランに戻ります。

[OSS Scanner](https://red.anthropic.com/oss-scanner/)はオプトイン方式です。コアメンテナーが、プロジェクトの設定ファイルとオフライン用のDockerfileを含むプルリクエストを、GitHub上のAnthropicのoss-scannerリポジトリに送って参加します。参加したプロジェクトは、Anthropicの最上位モデルによる定期スキャンを無料で受けられますが、レポートは人間によるレビューを経ていません。承認の基準はGoogleのOSS-Fuzzに近いため、できたばかりのプロジェクトや大半のフォークは対象外です。OpenAIにも同様の[Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/)があり、ChatGPT Proを6か月間提供しています。

## まとめ

MaxまたはTeamで、APIで何かを作る可能性が少しでもあるなら、クレジットを受け取りましょう。受け取りは無料ですが、組織の連携を後から変更できるのはサポートだけです。

- **APIで開発するMax契約者**：自分では切り替えられないので、実際に使うConsole組織を連携しましょう。月$100または$200あれば、Haiku 5.5とSonnet 5.5の作業をかなりまかなえます。
- **Claude Codeしか使わないMax契約者**：クレジットでは上限は広がりません。上限を長持ちさせるのは、アイドル時のコンパクション、Haiku 5.5のサブエージェント、新しい`/usage`の警告です。
- **Max 5xを検討しているProユーザー**：Max 5xはProより月$80高く、$100のAPIクレジットが付くので、すでにAPIにそれだけ使っている人ほど早く元が取れます。
- **Teamのオーナー**：1人のオーナーがチーム全体の分を受け取ります。1つのプロジェクトでプールを使い切らないよう、ワークスペースの支出上限を設定しましょう。
- **オープンソースのメンテナー**：Claude for Open Sourceに申し込み、重要なプロジェクトならOSS Scannerにも参加しましょう。

条件の変更は[APIクレジット特典のページ](/deals/claude-max-team-api-credits-2026/)で追跡しており、ほかのClaudeの特典はすべて[Claudeのページ](/tools/claude/)と[キャンペーンカレンダー](/calendar/)にあります。
