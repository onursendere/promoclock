---
title: "Claude Max und Team: API-Guthaben (2026) – $100–$500 im Monat und so löst du es ein"
metaTitle: "Claude API-Guthaben bei Max und Team einlösen (2026)"
metaDescription: "Claude Max 5x enthält $100, Max 20x $200 API-Guthaben im Monat, Team bis zu $500. So löst du es ein, was es abdeckt, plus Neues zu Haiku 5.5 und Claude Code."
excerpt: "Seit Oktober 2026 enthält Claude Max 5x monatlich $100 und Max 20x $200 an API-Guthaben der Claude Platform, Team-Pläne bekommen bis zu $500 im gemeinsamen Pool. Du löst es ein, indem du in den Abrechnungseinstellungen von claude.ai eine Console-Organisation verknüpfst. Es deckt die API, Managed Agents und das Agent SDK ab, nicht das interaktive Claude Code, und verfällt mit jedem Abrechnungszeitraum."
imageAlt: "Ein MacBook Pro in einem dunklen Raum, auf dem bunter Code in einem Editor geöffnet ist"
keyTakeaways:
  - "Seit Oktober 2026 enthält Claude Max 5x monatlich $100 und Max 20x $200 an API-Guthaben der Claude Platform, und Team-Pläne bekommen bis zu $500, gepoolt über alle Plätze."
  - "Claudes monatliches API-Guthaben deckt die Claude API, Message Batches, den Playground der Console, Claude Managed Agents und das Agent SDK ab, aber nicht das interaktive Claude Code und keine zusätzliche Nutzung in den Claude-Apps."
  - "Das API-Guthaben wird in jedem Abrechnungszeitraum erneuert, verfällt an dessen Ende ohne Übertrag und wird eingelöst, indem du unter Einstellungen > Abrechnung auf claude.ai eine Claude-Console-Organisation verknüpfst."
  - "Claude Haiku 5.5 erschien am 7. Oktober 2026 für $0.10 pro 1 Mio. Input-Tokens bei Prompts bis 100.000 Tokens, und die Cache-Lesepreise von Sonnet 5.5 sanken von $0.20 auf $0.10 pro 1 Mio. Tokens."
  - "Open-Source-Maintainer können sich über Claude for Open Source für 6 kostenlose Monate Claude Max 20x bewerben, und etablierte Projekte können sich für Anthropics kostenlosen OSS Scanner anmelden."
faq:
  - q: "Enthält Claude Pro API-Guthaben?"
    a: "Nein. Laut Anthropics Help Center gibt es das monatliche API-Guthaben nur bei Max und Team, auch bei Team-Plänen mit Rabatt. Free, Pro und Enterprise sind nicht berechtigt. Pro-Nutzer, die jeden Monat API-Guthaben wollen, bräuchten Max 5x für $100/Monat mit $100 Guthaben oder vorausbezahltes Guthaben aus der Claude Console."
  - q: "Kann ich das API-Guthaben von Claude Max für Claude Code nutzen?"
    a: "Nicht für das interaktive Claude Code im Terminal, in einer IDE, in der Desktop-App oder im Web, das weiter die Limits deines Plans verbraucht. Das Guthaben deckt claude -p und das Agent SDK ab, wenn du sie mit einem API-Schlüssel deiner verknüpften Console-Organisation ausführst. Läufe über die Claude Code GitHub Action, IDE-Erweiterungen oder die Desktop-App zählen als Claude-Code-Nutzung."
  - q: "Wird das API-Guthaben von Claude auf den nächsten Monat übertragen?"
    a: "Nein. Ungenutztes monatliches API-Guthaben verfällt am Ende jedes Abrechnungszeitraums, und neues Guthaben kommt kurz nach der Zahlung für deinen Plan an. Bei Jahresplänen kommt es monatlich. Anthropic verbraucht dieses Guthaben vor allem, was du gekauft hast, und die Abrechnungsseite der Console zeigt Betrag und Ablaufdatum jedes Guthabens."
  - q: "Wie viel API-Guthaben bekommt ein Claude-Team-Plan?"
    a: "Team-Pläne bekommen $20 im Monat pro Standard-Platz und $100 pro Premium-Platz, gepoolt zu einem Guthaben, das bei $500 gedeckelt ist. Ein Team mit drei Standard- und zwei Premium-Plätzen bekommt $260 im Monat. Der Pool wird bei jeder Gutschrift aus deiner Platzzahl neu berechnet, und ein Owner oder Primary Owner löst ihn für das ganze Team ein."
  - q: "Was passiert, wenn mein API-Guthaben von Claude aufgebraucht ist?"
    a: "Hat deine Console-Organisation gekauftes Guthaben oder automatische Aufladung, läuft die API-Nutzung weiter und bedient sich dort. Gibt es kein anderes Guthaben, stoppen API-Anfragen bis zur nächsten monatlichen Gutschrift. Laut Anthropic wird die Nutzung nie deinem Claude-Plan berechnet, und Organisationen, die über Anthropics Vertriebsteam abgerechnet werden, zahlen über das Guthaben hinaus wie gewohnt."
  - q: "Wann können neue Claude-Max-Abonnenten ihr API-Guthaben einlösen?"
    a: "Nach sieben Tagen in einem berechtigten Plan. Das Angebot erscheint dann unter Einstellungen > Abrechnung auf claude.ai im Webbrowser, auch für Abonnenten, die sich über iOS oder Android angemeldet haben. Du brauchst keine Zahlungsmethode in der Claude Platform, und ein Upgrade von Max 5x auf Max 20x bringt sofort anteiliges Guthaben."
howTo:
  name: "So löst du das monatliche API-Guthaben bei Claude Max oder Team ein"
  steps:
    - name: "Berechtigung prüfen"
      text: "Du bist seit mindestens sieben Tagen in Max 5x, Max 20x oder Team, als Max-Abonnent oder bei Team als Owner oder Primary Owner."
    - name: "Abrechnungseinstellungen öffnen"
      text: "Geh auf claude.ai im Webbrowser zu Einstellungen > Abrechnung bei Max oder zu Organisationseinstellungen > Abrechnung bei Team."
    - name: "Console-Organisation verknüpfen"
      text: "Wähle im Bereich API-Guthaben die Option Organisation verknüpfen und such die Claude-Console-Organisation aus, in der du baust, oder lege eine an. Dort brauchst du die Rolle Owner, Admin oder Billing."
    - name: "Bedingungen akzeptieren"
      text: "Lies die Supplemental Credit Terms und bestätige mit Organisation verknüpfen. Die Verknüpfung lässt sich später nur über den Support ändern."
    - name: "Loslegen"
      text: "Das Guthaben findest du auf der Abrechnungsseite der Console unter Promotional credits. Erstelle einen API-Schlüssel und sende deine erste Anfrage."
---
Claude Max und Team enthalten jetzt monatliches Guthaben für die Claude API: $100 bei Max 5x, $200 bei Max 20x und bis zu $500 im gemeinsamen Pool bei Team. Du musst es einmal einlösen, es gilt für deine eigenen Apps und Agenten statt für Claude Code, und es verfällt mit jedem Abrechnungszeitraum. Alle Angaben zu Plänen und Preisen haben den Stand 17. Oktober 2026 und stammen aus Anthropics Help Center, den Preisseiten und dem Changelog von Claude Code.

## Was ist das monatliche API-Guthaben von Claude?

Das monatliche API-Guthaben von Claude ist Guthaben der Claude Platform, das in Max- und Team-Abos enthalten ist, um eigene Apps und Agenten auf der Claude API zu bauen und zu betreiben. Es steht getrennt von deinen Limits für Chat und Claude Code.

Anthropic hat das Guthaben am 7. Oktober 2026 zusammen mit Claude Haiku 5.5 angekündigt und in den folgenden Tagen für Abonnenten freigeschaltet. [Anthropics Preisseite](https://claude.com/pricing) führt jetzt $100 bis $200 im Monat an API-Guthaben bei Max auf und bis zu $500 im Monat als gepooltes API-Guthaben bei Team. Free, Pro und Enterprise bekommen es nicht.

Das Guthaben ist ein Zusatz, kein Tausch. Deine Nutzungslimits in Claude, Claude Code und Cowork bleiben laut Help Center genau wie zuvor. Es ist auch nicht das Agent-SDK-Guthaben, das Anthropic im Juni angekündigt hat: Dieses Angebot gibt es laut demselben Artikel nicht.

## Wie viel API-Guthaben bekommt jeder Claude-Plan?

Max 5x bekommt $100 im Monat, Max 20x $200, und Team-Pläne bekommen $20 pro Standard-Platz und $100 pro Premium-Platz, gepoolt und bei $500 gedeckelt.

| Plan | Planpreis | Monatliches API-Guthaben |
|---|---|---|
| Free | $0 | Keins |
| Pro | $20/Monat oder $200/Jahr | Keins |
| Max 5x | $100/Monat | $100 |
| Max 20x | $200/Monat | $200 |
| Team Standard-Platz | $25/Platz/Monat oder $20 bei jährlicher Abrechnung | $20 pro Platz, gepoolt, bis zu $500 pro Team |
| Team Premium-Platz | $125/Platz/Monat oder $100 bei jährlicher Abrechnung | $100 pro Platz, gepoolt, bis zu $500 pro Team |
| Enterprise | $20/Platz/Monat bei jährlicher Abrechnung, plus Nutzung zu API-Preisen | Keins |

So funktioniert der Team-Pool laut [Anthropics Help Center](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans):

- **Ein Guthaben pro Team.** Drei Standard- und zwei Premium-Plätze ergeben $260 im Monat. Ein dritter Premium-Platz hebt den nächsten Zeitraum auf $360.
- **Die Obergrenze liegt bei $500.** Größere Teams bekommen trotzdem $500, das Maximum für jeden Team-Plan.
- **Auch Team-Pläne mit Rabatt zählen.** Team-Pläne für Nonprofits und Scientists bekommen dieselben $20 und $100 pro Platz.

Wechselst du von Max 5x auf Max 20x, bekommst du sofort anteilig Guthaben und danach in jedem Zeitraum $200. Was sich sonst zwischen den Stufen ändert, steht in unserem [Vergleich Claude Pro oder Max](/blog/claude-pro-vs-max/).

## Wie löst du das API-Guthaben von Claude ein?

Du löst das API-Guthaben von Claude einmal ein, indem du in den Abrechnungseinstellungen von claude.ai eine Organisation der Claude Console mit deinem Plan verknüpfst. Danach kommt in jedem Abrechnungszeitraum Guthaben in dieser Organisation an.

1. Warte, bis du seit sieben Tagen Max oder Team nutzt. Neue Abonnenten können nicht früher einlösen.
2. Öffne auf claude.ai im Webbrowser **Einstellungen > Abrechnung** (Max) oder **Organisationseinstellungen > Abrechnung** (Team).
3. Wähle im Bereich **API-Guthaben** die Option **Organisation verknüpfen** und dann die Console-Organisation, die das Guthaben bekommen soll, oder lege eine neue an.
4. Lies die Supplemental Credit Terms und bestätige.
5. Öffne die Abrechnungsseite der Console, such das Guthaben unter Promotional credits und erstelle einen API-Schlüssel.

Ein paar Regeln, die du vor dem Klick kennen solltest:

- **Rollen.** Bei Max musst du der Abonnent sein, bei Team ein Owner oder Primary Owner. In der Console-Organisation brauchst du die Rolle Owner, Admin oder Billing.
- **Eine Verknüpfung, endgültig.** Jeder Plan verknüpft genau eine Console-Organisation, und jede Organisation bezieht Guthaben aus genau einem Plan. Du kannst die Verknüpfung nicht selbst ändern, wähle also die Organisation, in der du bauen wirst.
- **Keine Karte nötig.** Du musst keine Zahlungsmethode in der Claude Platform hinterlegen, um das Guthaben einzulösen oder zu nutzen.
- **Mobile Abonnenten.** Pläne, die über iOS oder Android gebucht wurden, sind berechtigt, aber eingelöst wird auf claude.ai im Browser.
- **Dieselbe E-Mail hilft.** Anthropic empfiehlt, dich in der Console mit derselben E-Mail-Adresse anzumelden, die du auf claude.ai nutzt.

## Was deckt das API-Guthaben ab und was nicht?

Das monatliche API-Guthaben von Claude deckt die Claude API, Claude Managed Agents, das Agent SDK und den Playground der Console ab. Nicht abgedeckt sind das interaktive Claude Code, zusätzliche Nutzung in den Claude-Apps und Claude bei anderen Cloud-Anbietern.

Abgedeckt, mit jedem verfügbaren Claude-Modell:

- Die Claude API, sowohl die Messages API als auch die Message Batches API
- Der Playground in der Claude Console
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), Anthropics gehostete Agenten-Umgebung, jetzt in der Beta
- Das Claude Agent SDK und `claude -p`, wenn du es mit einem API-Schlüssel der verknüpften Organisation ausführst

Nicht abgedeckt:

- Interaktives Claude Code im Terminal, in einer IDE, in der Desktop-App oder im Web
- Nutzungs-Credits (zusätzliche Nutzung) in Claude, Claude Code oder Cowork
- Claude auf Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry oder Claude Platform on AWS

So verhält sich das Guthaben: Es wird in jedem Abrechnungszeitraum erneuert, bei Jahresplänen monatlich, verfällt am Ende des Zeitraums ohne Übertrag und wird vor allem Guthaben verbraucht, das du gekauft hast. Alle mit einem API-Schlüssel in der verknüpften Organisation greifen auf dasselbe Guthaben zu, deshalb können Team-Owner in der Console Ausgabenlimits für Workspaces setzen. Ist das Guthaben aufgebraucht und die Organisation hat kein gekauftes Guthaben, stoppen API-Anfragen bis zur nächsten Gutschrift; deinem Claude-Plan wird nichts berechnet.

## Was bekommst du für $100 Claude-API-Guthaben?

Zu Anthropics Listenpreisen bekommst du für $100 etwa 1 Milliarde Input-Tokens mit Haiku 5.5 bei kurzen Prompts, 50 Millionen Input-Tokens mit Sonnet 5.5 oder rund 170 einstündige Managed-Agents-Sitzungen mit Opus 5.5.

| Modell | Input pro 1 Mio. Tokens | Output pro 1 Mio. Tokens | Cache-Lesezugriffe pro 1 Mio. Tokens |
|---|---|---|---|
| Haiku 5.5, Prompts bis 100.000 Tokens | $0.10 | $0.50 | $0.01 |
| Haiku 5.5, Prompts über 100.000 Tokens | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5 im Fast Mode | $8 | $40 | Caching-Multiplikatoren kommen obendrauf |
| Fable 5.1 | $10 | $50 | $0.25 |

Unsere Rechnung, ausgehend von [Anthropics API-Preisseite](https://platform.claude.com/docs/en/about-claude/pricing):

- **Haiku 5.5:** $100 reichen für 1 Milliarde Input-Tokens oder 200 Millionen Output-Tokens bei Prompts bis 100.000 Tokens.
- **Sonnet 5.5:** $100 reichen für 50 Millionen Input-Tokens oder 10 Millionen Output-Tokens.
- **Managed Agents:** Sitzungen rechnen Tokens zu Modellpreisen ab, plus $0.08 pro Sitzungsstunde, solange sie läuft. Anthropics eigenes Beispiel, eine einstündige Opus-5.5-Sitzung mit 50.000 Input- und 15.000 Output-Tokens, kostet $0.58, also bezahlst du damit etwa 172 davon.

Echte Rechnungen hängen von Prompt-Länge, Caching, Effort-Stufe und Tools ab. Websuche in einer Sitzung kostet $10 pro 1.000 Suchen, und der Fast Mode funktioniert nicht mit der Batch API.

## Was hat sich im Oktober 2026 bei Claudes API-Preisen geändert?

Im Oktober 2026 gab es drei Preisänderungen: Claude Haiku 5.5 erschien am 7. Oktober, die Cache-Lesepreise von Sonnet 5.5 sanken am selben Tag um die Hälfte, und der Fast Mode für Opus 5.5 ist jetzt allgemein verfügbar.

- **Claude Haiku 5.5.** Anthropic nennt es das günstigste, schnellste und leistungsfähigste kleine Modell, das es bisher veröffentlicht hat. Es kostet bei Prompts bis 100.000 Tokens 90 % weniger als Haiku 4.5 und darüber 50 % weniger, was laut Anthropic im Schnitt etwa 75 % günstiger ergibt. Es hat ein Kontextfenster von 1 Mio. Tokens, bis zu 128K Output-Tokens und erstmals bei einem Haiku-Modell eine einstellbare Effort-Stufe. Anthropic empfiehlt es für Zusammenfassungen, Klassifizierung, Kompaktierung und Subagent-Aufgaben, laut [Ankündigung zu Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5).
- **Cache-Lesepreise von Sonnet 5.5.** Sie sanken am 7. Oktober von $0.20 auf $0.10 pro 1 Mio. Tokens. Weil Cache-Lesezugriffe einen großen Teil des Agenten-Traffics ausmachen, schätzt Anthropic, dass Sonnet 5.5 bei den meisten agentischen Aufgaben jetzt rund 20 % günstiger läuft.
- **Fast Mode für Opus 5.5.** Mit `"speed": "fast"` bei einer Anfrage bekommst du bis zu 2,5-mal so viele Output-Tokens pro Sekunde zum doppelten Standardpreis, $8 Input und $40 Output pro 1 Mio. Tokens. Opus 5.5 braucht dafür keinen Beta-Header und keine Zugangsanfrage mehr, laut [Fast-Mode-Dokumentation](https://platform.claude.com/docs/en/build-with-claude/fast-mode). Er läuft auf der First-Party-API und auf Microsoft Foundry.

In Claude Code kannst du mit `/model haiku` auf Haiku 5.5 wechseln. Das ändert, wie schnell du die Limits deines Plans verbrauchst, nicht dein API-Guthaben.

## Welche Updates für Claude Code strecken deine Nutzungslimits?

Vier Änderungen an Claude Code vom Oktober 2026 sparen Nutzung: Kompaktierung im Leerlauf, Effort- und Modellwahl pro Subagent, neue `/usage`-Warnungen und ein Websuche-Budget, das sich auffüllt. Alle wirken innerhalb deiner bestehenden Plan-Limits.

- **Kompaktierung im Leerlauf (Version 2.1.299, 14. Oktober).** Eine Terminal-Unterhaltung mit mehr als 200K Tokens, die etwa 54 Minuten ruht, wird kurz vor Ablauf ihres einstündigen Prompt-Caches kompaktiert. Wenn du zurückkommst, verarbeitet Claude die Zusammenfassung statt der ganzen Unterhaltung neu. Setze `"idleCompaction": false` in der settings.json oder nutze ab Version 2.1.302 die Zeile „Idle compaction“ in `/config`, um sie auszuschalten.
- **Effort und Modell pro Subagent (2.1.292, 6. Oktober).** In deinem Prompt kannst du Subagenten mit niedrigem Effort eine Codebasis durchsuchen und einen Subagenten mit hohem Effort die Ergebnisse bewerten lassen oder Haiku für schnelle Abfragen verlangen. Früher brauchte das eine eigene Subagent-Definition.
- **Nutzungswarnungen (2.1.299).** `/usage` markiert jetzt maximalen Effort, Workflows, dauerhaft geladenen Kontext und große Tool-Ergebnisse, die üblichen Ursachen für eine Sitzung, die schnell leerläuft.
- **Websuche-Budget (2.1.290, 5. Oktober).** Interaktive Sitzungen bekommen jetzt 100 Suchen pro Stunde, die sich auffüllen, statt nach 200 zu stoppen.

Die Entwickler von Anthropic geben noch einen Prompt-Tipp: Subagenten optimieren standardmäßig auf Gründlichkeit, ein Satz im Prompt, dass es auf die Zeit ankommt, lässt sie also schneller arbeiten, mit einem Gleichgewicht zwischen Tempo und Qualität, das Anthropic vernünftig nennt. Wie 5-Stunden-Sitzungen und Wochenlimits funktionieren, erklärt unser Ratgeber zu den [Nutzungslimits von Claude](/blog/claude-usage-limits/); vor langen Chat-Sitzungen werktags wirf einen Blick auf [Claude Watch](/).

## Was ist neu in der Desktop-App von Claude Code und in Cloud-Sitzungen?

Die Desktop-App von Claude Code hat im Oktober 2026 einen neuen Sitzungsbildschirm, gespeicherte Umgebungen und verschachtelte Sitzungen bekommen, und Cloud-Sitzungen übernehmen deine lokale Arbeit jetzt genau so, wie du sie verlassen hast.

Desktop-App, laut Anthropics Claude-Code-Newsletter und [Desktop-Dokumentation](https://code.claude.com/docs/en/desktop):

- **Neuer Sitzungsbildschirm.** Zuletzt genutzte Ordner sind einen Klick entfernt, und du kannst ein Setup als Umgebung speichern, etwa ein paar Ordner, einen SSH-Host oder die Cloud.
- **Verschachtelte Sitzungen.** Bitte Claude, Aufgaben parallel auszuführen, und jede bekommt eine eigene Sitzung, die nach dem Ende an deine Hauptsitzung zurückmeldet. Vorgeschlagene Folgearbeit kann mit einem Klick in einer eigenen Sitzung starten.
- **Nebenfragen im Tab.** `/btw` öffnet eine Nebenfrage jetzt in einem eigenen Tab.
- **Status auf einen Blick.** Die Seitenleiste zeigt, welche Sitzungen noch arbeiten und welche dich brauchen, und eine seitliche Leiste zeigt, wo eine Sitzung läuft, ihren Kontext und ihre Änderungen.

Cloud-Sitzungen, laut [Anthropics Cloud-Dokumentation](https://code.claude.com/docs/en/claude-code-on-the-web):

- **Lokal begonnene Arbeit fortsetzen.** Wenn du eine lokale Sitzung in die Cloud verschiebst, kommen jetzt deine nicht committeten Änderungen und nicht gepushten Commits mit, du musst also nicht erst committen oder pushen. Unter macOS, Linux und WSL bleiben nicht committete Änderungen an Dateien, die nach Zugangsdaten aussehen, etwa .env-Dateien und private Schlüssel, auf deinem Rechner.
- **Netzwerk-Secrets bei Team.** Team-Pläne können jetzt einer Cloud-Umgebung einen API-Schlüssel hinzufügen, wie es Pro und Max schon konnten, und Claude ruft die aufgeführten Hosts auf, ohne den Schlüssel zu sehen.

Hast du das [Cloud-Guthaben für Claude Code](/deals/claude-code-cloud-credit-2026/) vor dem 7. Oktober eingelöst, verbrauche es für Cloud-Sitzungen, bevor es am 4. November 2026 verfällt. Unser [Vergleich der KI-Coding-Tools](/blog/best-ai-coding-tools/) zeigt, wie die Preise von Claude Code im Vergleich zu Cursor, Codex und Copilot stehen.

## Gibt es kostenlose Claude-Angebote für Open-Source-Maintainer?

Ja. Claude for Open Source gibt zugelassenen Maintainern 6 Monate Claude Max 20x gratis, und seit dem 8. Oktober 2026 führt Anthropics OSS Scanner kostenlose Sicherheitsscans für etablierte Open-Source-Projekte durch.

[Claude for Open Source](/deals/claude-for-open-source-max-2026/) ist auf 10.000 zugelassene Empfänger begrenzt, und du bewirbst dich mit deinem GitHub-Konto. Laut [Anthropics Programmseite](https://claude.com/contact-sales/claude-for-oss) und den Bedingungen musst du eine dieser Hürden erfüllen:

- Projekte mit 500+ abhängigen Repositories, 100+ abhängigen Paketen oder 200.000+ Downloads pro Monat
- Eine gelistete Committer- oder Maintainer-Rolle in einer anerkannten Stiftung oder einem anerkannten Sprachprojekt
- 100+ gemergte Pull Requests in Repositories, die dir nicht gehören, in den letzten 12 Monaten
- Ein Repository mit 20+ unterschiedlichen externen Mitwirkenden oder einem OpenSSF-Criticality-Score von 0,4 oder höher

Das GitHub-Konto muss mindestens zwei Jahre alt sein und in den letzten 90 Tagen öffentliche Open-Source-Aktivität haben. Nach 6 Monaten gehen Mitglieder, die zuvor einen Bezahlplan hatten, wieder zu ihrem alten Preis in diesen Plan über, wenn sie nicht kündigen; alle anderen fallen auf den Free-Plan zurück.

[OSS Scanner](https://red.anthropic.com/oss-scanner/) ist Opt-in: Core-Maintainer melden sich an, indem sie im oss-scanner-Repository von Anthropic auf GitHub einen Pull Request mit einer Projektkonfiguration und einem Offline-Dockerfile öffnen. Danach bekommen Projekte regelmäßige Scans durch Anthropics stärkste Modelle ohne Kosten, mit Berichten, die kein Mensch geprüft hat. Die Aufnahme folgt ähnlichen Kriterien wie bei Googles OSS-Fuzz, daher kommen brandneue Projekte und die meisten Forks nicht infrage. OpenAI betreibt mit [Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/) ein ähnliches Programm mit sechs Monaten ChatGPT Pro.

## Fazit

Löse das Guthaben ein, wenn du Max oder Team nutzt und irgendetwas auf der API bauen könntest. Das Einlösen kostet nichts, aber die Verknüpfung mit der Organisation kann später nur der Support ändern.

- **Max-Abonnenten, die auf der API bauen:** Verknüpfe die Console-Organisation, die du tatsächlich nutzt, denn du kannst sie nicht selbst wechseln. $100 oder $200 im Monat decken viel Arbeit mit Haiku 5.5 und Sonnet 5.5 ab.
- **Max-Abonnenten, die nur Claude Code nutzen:** Das Guthaben verlängert deine Limits nicht. Kompaktierung im Leerlauf, Subagenten mit Haiku 5.5 und die neuen `/usage`-Warnungen schon.
- **Pro-Nutzer, die Max 5x erwägen:** Max 5x kostet $80 im Monat mehr als Pro und enthält $100 API-Guthaben, es rechnet sich also am schnellsten, wenn du ohnehin so viel für die API ausgibst.
- **Team-Owner:** Ein Owner löst es für das ganze Team ein; setze Ausgabenlimits für Workspaces, damit ein Projekt den Pool nicht leert.
- **Open-Source-Maintainer:** Bewirb dich für Claude for Open Source und, bei kritischen Projekten, für OSS Scanner.

Änderungen an den Bedingungen verfolgt unsere [Seite zum API-Guthaben-Angebot](/deals/claude-max-team-api-credits-2026/), und alle anderen Claude-Angebote findest du auf unserer [Claude-Seite](/tools/claude/) und im [Kalender der Aktionen](/calendar/).
