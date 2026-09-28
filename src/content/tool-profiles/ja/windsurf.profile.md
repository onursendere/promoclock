---
summary: "WindsurfはDevinエージェントを手がけるCognitionが2025年7月に買収したAIコードエディターで、2026年6月2日にDevin Desktopへ名称変更されました。同じIDEがAgent Command Centerから起動し、ローカルとクラウドのエージェントを管理します。プランと料金は変わりません。"
metaTitle: "WindsurfはDevin Desktopに:料金と無料プラン"
metaDescription: "Windsurfは2026年6月にDevin Desktopへ名称変更。変更点、Free、Pro(月額$20)、Maxの各プラン、クォータ制の利用量、機能、代替ツールを解説します。"
bestFor:
  - "VS Codeから移行したい開発者"
  - "多数のエージェントを扱うエンジニア"
  - "既存のWindsurf契約者"
keyFeatures:
  - name: "Agent Command Center"
    description: "実行中のローカルとクラウドのすべてのエージェントをカンバンボードで表示し、セッション、プルリクエスト、ファイル、共有コンテキストをまとめるSpacesも備えています。"
  - name: "Devin Localエージェント"
    description: "Cascadeに代わるRust製の書き直し版で、トークン使用量を最大30%削減し、サブエージェントとOSレベルのサンドボックスに対応します。"
  - name: "ACP経由のサードパーティエージェント"
    description: "Agent Client Protocolを通じて、Codex、Claude Agent、OpenCode、自社製エージェントを同じカンバンビューで実行できます。"
  - name: "土台はフルIDE"
    description: "エディター、拡張機能、キーバインド、LSPはWindsurfやVS Codeとの後方互換性を保ち、Cursorの設定もインポートできます。"
  - name: "Tabとインライン編集"
    description: "無制限のTab補完とインラインのCommand編集が、Freeを含むすべてのプランで使えます。"
  - name: "Fast Context"
    description: "SWE-grepモデルをベースにした検索用サブエージェントで、関連するコードを最大20倍速く見つけます。"
useCases:
  - "ローカルエージェントにリファクタリングを任せつつ、クラウドのDevinセッションにバグ修正をさせ、両方を1つのボードで確認する。"
  - "ツールを切り替えず、同じエディター内でClaude AgentやCodexを使い続ける。"
  - "ルールやメモリを含む既存のWindsurf環境を、内蔵のウィザードでDevin Localに移行する。"
pricingSummary: "Freeは軽めのクォータと無制限のTab補完を含みます。Proは月額$20、Maxは月額$200でクォータが大幅に増え、Teamsは月額$80からでフルシートは1席$40です。Enterpriseは個別見積もりです。"
savingTips:
  - "無料モデルはクォータを消費せず、SWE-1.7のような低コストのSWEモデルを使うと、有料プランの利用枠を長持ちさせられます。"
  - "2026年3月のクォータ制への切り替え前にWindsurf Proを契約していた人は、月額$15の据え置き価格をずっと維持できます。"
faq:
  - q: "Windsurfは終了したのですか"
    a: "いいえ、名称が変わっただけです。2026年6月2日のOTAアップデートでWindsurfはDevin Desktopになり、エディター、拡張機能、設定、プランはそのままです。windsurf.comは現在devin.aiにリダイレクトされます。"
  - q: "今のWindsurfの所有者は誰ですか"
    a: "Devinコーディングエージェントを手がけるCognitionです。2025年7月14日にWindsurfのIP、製品、商標、ブランド、チームを買収すると発表し、その後エディターをDevin製品ファミリーに統合しました。"
  - q: "変更後の利用上限はどうなりますか"
    a: "2026年3月以降、プランにはプロンプトクレジットではなく、日次と週次のトークン制クォータが含まれます。Freeのユーザーはリセットを待ち、Pro、Max、Teamsのユーザーは追加利用分をAPI定価で購入できます。"
  - q: "Cascadeはどうなりましたか"
    a: "Devin Localがメインのローカルエージェントとして、Cascadeに置き換わりました。Cognitionは段階的な移行のため2026年7月までCascadeを利用可能にし、コマンドパレットのウィザードでワークフローとメモリを移せます。"
---
## Windsurfに何が起きたのか

WindsurfはCodeiumのエディターとして始まり、2025年にCognitionへ移りました。2026年6月、Cognitionは製品を1つのブランドにまとめました。IDEはDevin Desktop、自律型クラウドエージェントはDevin Cloud、ターミナルはDevin CLI、コードレビューはDevin Reviewです。`.windsurfrules`を含む既存のWindsurfのルールは引き続き動作します。

## こんな人に向いています

Devin Desktopは、複数のエージェントを同時に監督することを前提に作られたエディターがほしい開発者に合っています。使うのにDevin Cloudは必要なく、ローカルのみのエージェントでも問題なく動作します。

## 制限事項

- クォータはトークンで計測されるため、最先端モデルや長いセッションでは日次と週次の予算がはるかに早く減ります。
- WindsurfのJetBrainsプラグインはメンテナンスモードで、CognitionはJetBrainsではACP経由でDevinを実行することを勧めています。
- 有料プランの無料トライアルは、対象となる顧客の一部にのみ提供されます。
- TeamsではフルシートのみDevin Desktopを利用でき、新規のTeamsプランにはSSOが含まれなくなりました。
