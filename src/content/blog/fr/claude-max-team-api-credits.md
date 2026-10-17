---
title: "Crédits API Claude Max et Team (2026) : $100–$500 par mois et comment les récupérer"
metaTitle: "Crédits API Claude Max et Team : les récupérer (2026)"
metaDescription: "Claude Max 5x inclut $100 de crédits API par mois, Max 20x $200 et Team jusqu’à $500. Comment les récupérer, ce qu’ils couvrent, plus Haiku 5.5 et Claude Code."
excerpt: "Depuis octobre 2026, Claude Max 5x inclut $100 de crédits API Claude Platform par mois et Max 20x $200, tandis que les formules Team reçoivent jusqu’à $500 mutualisés. Vous les récupérez en associant une organisation Console dans les paramètres de facturation de claude.ai. Ils couvrent l’API, Managed Agents et l’Agent SDK, pas Claude Code en mode interactif, et expirent à chaque cycle de facturation."
imageAlt: "Un MacBook Pro dans une pièce sombre, avec du code coloré ouvert dans un éditeur"
keyTakeaways:
  - "Depuis octobre 2026, Claude Max 5x inclut $100 de crédits API Claude Platform par mois et Max 20x $200, tandis que les formules Team reçoivent jusqu’à $500 mutualisés entre les sièges."
  - "Les crédits API mensuels de Claude couvrent l’API Claude, Message Batches, le Playground de la Console, Claude Managed Agents et l’Agent SDK, mais pas Claude Code en mode interactif ni l’utilisation supplémentaire dans les applications Claude."
  - "Les crédits API se renouvellent à chaque cycle de facturation, expirent à la fin de celui-ci sans report et s’obtiennent en associant une organisation Claude Console sous Paramètres > Facturation sur claude.ai."
  - "Claude Haiku 5.5 est sorti le 7 octobre 2026 à $0.10 par million de tokens d’entrée pour les prompts jusqu’à 100 000 tokens, et les lectures du cache de Sonnet 5.5 sont passées de $0.20 à $0.10 par million de tokens."
  - "Les mainteneurs open source peuvent demander 6 mois gratuits de Claude Max 20x via Claude for Open Source, et les projets établis peuvent s’inscrire à l’OSS Scanner gratuit d’Anthropic."
faq:
  - q: "Claude Pro inclut-il des crédits API ?"
    a: "Non. Le centre d’aide d’Anthropic indique que les crédits API mensuels sont réservés aux formules Max et Team, y compris les formules Team à tarif réduit. Les formules Free, Pro et Enterprise n’y ont pas droit. Les utilisateurs de Pro qui veulent du crédit API chaque mois devraient passer à Max 5x à $100/mois, qui inclut $100 de crédit, ou acheter des crédits prépayés dans la Claude Console."
  - q: "Puis-je utiliser les crédits API de Claude Max pour Claude Code ?"
    a: "Pas pour Claude Code en mode interactif dans le terminal, un IDE, l’application de bureau ou le web, qui continue d’utiliser les limites de votre formule. Les crédits couvrent en revanche claude -p et l’Agent SDK lorsque vous les exécutez avec une clé API de votre organisation Console associée. Les exécutions depuis la GitHub Action de Claude Code, les extensions d’IDE ou l’application de bureau comptent comme de l’utilisation de Claude Code."
  - q: "Les crédits API de Claude sont-ils reportés au mois suivant ?"
    a: "Non. Les crédits API mensuels non utilisés expirent à la fin de chaque cycle de facturation, et les nouveaux crédits arrivent peu après le paiement de votre formule. Avec un abonnement annuel, les crédits arrivent chaque mois. Anthropic dépense ces crédits avant tous ceux que vous avez achetés, et la page de facturation de la Console affiche le montant et la date d’expiration de chacun."
  - q: "Combien de crédits API une formule Claude Team reçoit-elle ?"
    a: "Les formules Team reçoivent $20 par mois pour chaque siège Standard et $100 pour chaque siège Premium, mutualisés en un seul solde plafonné à $500. Une équipe de trois sièges Standard et deux sièges Premium reçoit $260 par mois. Le total est recalculé d’après votre nombre de sièges à chaque dépôt de crédits, et un Owner ou un Primary Owner les récupère pour toute l’équipe."
  - q: "Que se passe-t-il quand mes crédits API Claude sont épuisés ?"
    a: "Si votre organisation Console a des crédits achetés ou le rechargement automatique, l’utilisation de l’API continue et puise dans ceux-ci. Sans autres crédits, les requêtes API s’arrêtent jusqu’à l’arrivée de vos prochains crédits mensuels. Anthropic précise que l’utilisation n’est jamais facturée sur votre formule Claude, et que les organisations facturées par l’équipe commerciale d’Anthropic paient comme d’habitude au-delà des crédits."
  - q: "Quand les nouveaux abonnés Claude Max peuvent-ils récupérer leurs crédits API ?"
    a: "Après sept jours sur une formule éligible. L’offre apparaît alors dans Paramètres > Facturation sur claude.ai dans un navigateur web, y compris pour les abonnés inscrits sur iOS ou Android. Vous n’avez pas besoin de moyen de paiement sur Claude Platform, et passer de Max 5x à Max 20x donne immédiatement un crédit calculé au prorata."
howTo:
  name: "Comment récupérer les crédits API mensuels sur Claude Max ou Team"
  steps:
    - name: "Vérifiez votre éligibilité"
      text: "Soyez abonné à Max 5x, Max 20x ou Team depuis au moins sept jours, en tant qu’abonné Max ou qu’Owner ou Primary Owner de Team."
    - name: "Ouvrez les paramètres de facturation"
      text: "Sur claude.ai dans un navigateur web, allez dans Paramètres > Facturation (Settings > Billing) avec Max, ou Paramètres de l’organisation > Facturation (Organization settings > Billing) avec Team."
    - name: "Associez une organisation Console"
      text: "Dans la section Crédits API (API credits), sélectionnez Associer l’organisation (Link organization), puis choisissez l’organisation Claude Console dans laquelle vous développez, ou créez-en une. Vous devez y avoir le rôle Owner, Admin ou Billing."
    - name: "Acceptez les conditions"
      text: "Lisez les conditions supplémentaires relatives aux crédits (Supplemental Credit Terms) et confirmez avec Associer l’organisation (Link organization). Le lien ne peut plus être modifié ensuite sans contacter le support."
    - name: "Commencez à développer"
      text: "Repérez le crédit sous Crédits promotionnels (Promotional credits) sur la page de facturation de la Console, créez une clé API et envoyez votre première requête."
---
Les formules Claude Max et Team incluent désormais des crédits mensuels pour l’API Claude : $100 sur Max 5x, $200 sur Max 20x et jusqu’à $500 mutualisés sur Team. Il faut les récupérer une seule fois, ils servent vos propres applications et agents plutôt que Claude Code, et ils expirent à chaque cycle de facturation. Tous les détails et prix des formules ci-dessous datent du 17 octobre 2026 et proviennent du centre d’aide d’Anthropic, de ses pages de tarifs et du journal des modifications de Claude Code.

## Que sont les crédits API mensuels de Claude ?

Les crédits API mensuels de Claude sont des crédits Claude Platform inclus dans les abonnements Max et Team, pour créer et exécuter vos propres applications et agents sur l’API Claude. Ils sont distincts de vos limites de chat et de Claude Code.

Anthropic a annoncé ces crédits le 7 octobre 2026, avec Claude Haiku 5.5, et les a déployés auprès des abonnés dans les jours suivants. [La page des tarifs d’Anthropic](https://claude.com/pricing) affiche désormais de $100 à $200 par mois de crédits API sous Max, et jusqu’à $500 par mois de crédits API mutualisés sous Team. Les formules Free, Pro et Enterprise n’en bénéficient pas.

Ces crédits s’ajoutent à votre formule, ils ne remplacent rien. Vos limites d’utilisation dans Claude, Claude Code et Cowork restent exactement les mêmes, précise le centre d’aide. Ils ne correspondent pas non plus au crédit Agent SDK qu’Anthropic avait annoncé en juin : cette offre n’est pas disponible, selon le même article.

## Combien de crédits API chaque formule Claude inclut-elle ?

Max 5x donne $100 par mois, Max 20x $200, et les formules Team $20 par siège Standard et $100 par siège Premium, mutualisés et plafonnés à $500.

| Formule | Prix de la formule | Crédit API mensuel |
|---|---|---|
| Free | $0 | Aucun |
| Pro | $20/mois ou $200/an | Aucun |
| Max 5x | $100/mois | $100 |
| Max 20x | $200/mois | $200 |
| Siège Team Standard | $25/siège/mois, ou $20 en facturation annuelle | $20 par siège, mutualisés, jusqu’à $500 par équipe |
| Siège Team Premium | $125/siège/mois, ou $100 en facturation annuelle | $100 par siège, mutualisés, jusqu’à $500 par équipe |
| Enterprise | $20/siège/mois en facturation annuelle, plus l’utilisation aux tarifs de l’API | Aucun |

Fonctionnement de la réserve commune de Team, selon [le centre d’aide d’Anthropic](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans) :

- **Un seul solde par équipe.** Trois sièges Standard et deux sièges Premium donnent $260 par mois. Ajouter un troisième siège Premium porte le cycle suivant à $360.
- **Le plafond est de $500.** Les équipes plus grandes reçoivent quand même $500, le maximum qu’une formule Team puisse obtenir.
- **Les formules Team à tarif réduit comptent aussi.** Les formules Team Nonprofit et Scientists reçoivent les mêmes $20 et $100 par siège.

Si vous passez de Max 5x à Max 20x, vous recevez immédiatement un crédit calculé au prorata, puis $200 à chaque cycle suivant. Notre [comparatif Claude Pro ou Max](/blog/claude-pro-vs-max/) détaille ce qui change d’autre entre les niveaux.

## Comment récupérer les crédits API de Claude ?

Vous récupérez les crédits API de Claude une seule fois, en associant une organisation Claude Console à votre formule dans les paramètres de facturation de claude.ai. Ensuite, les crédits arrivent dans cette organisation à chaque cycle de facturation.

1. Patientez jusqu’à ce que vous soyez abonné à Max ou Team depuis sept jours. Les nouveaux abonnés ne peuvent pas les récupérer plus tôt.
2. Sur claude.ai dans un navigateur web, ouvrez **Paramètres > Facturation** (Settings > Billing) pour Max, ou **Paramètres de l’organisation > Facturation** (Organization settings > Billing) pour Team.
3. Dans la section **Crédits API** (API credits), sélectionnez **Associer l’organisation** (Link organization), puis choisissez ou créez l’organisation Console qui doit recevoir le crédit.
4. Lisez les conditions supplémentaires relatives aux crédits (Supplemental Credit Terms) et confirmez.
5. Ouvrez la page de facturation de la Console, repérez le crédit sous Crédits promotionnels (Promotional credits) et créez une clé API.

Quelques règles à connaître avant de cliquer :

- **Rôles.** Avec Max, vous devez être l’abonné ; avec Team, un Owner ou un Primary Owner. Dans l’organisation Console, il faut le rôle Owner, Admin ou Billing.
- **Un seul lien, définitif.** Chaque formule est associée à une seule organisation Console, et chaque organisation reçoit les crédits d’une seule formule. Vous ne pouvez pas modifier ce lien vous-même : choisissez donc l’organisation dans laquelle vous développerez.
- **Aucune carte requise.** Vous n’avez pas besoin d’ajouter de moyen de paiement sur Claude Platform pour récupérer ou utiliser le crédit.
- **Abonnés mobiles.** Les formules achetées sur iOS ou Android sont éligibles, mais la démarche se fait sur claude.ai dans un navigateur.
- **Même adresse e-mail.** Anthropic conseille de se connecter à la Console avec la même adresse e-mail que sur claude.ai.

## Que couvrent les crédits API, et que ne couvrent-ils pas ?

Les crédits API mensuels de Claude couvrent l’API Claude, Claude Managed Agents, l’Agent SDK et le Playground de la Console. Ils ne couvrent ni Claude Code en mode interactif, ni l’utilisation supplémentaire dans les applications Claude, ni Claude sur d’autres clouds.

Couvert, avec n’importe quel modèle Claude disponible :

- L’API Claude, aussi bien l’API Messages que l’API Message Batches
- Le Playground de la Claude Console
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), l’infrastructure d’agents hébergée d’Anthropic, désormais en bêta
- Le Claude Agent SDK, et `claude -p` lorsque vous l’exécutez avec une clé API de l’organisation associée

Non couvert :

- Claude Code en mode interactif dans le terminal, un IDE, l’application de bureau ou le web
- L’utilisation supplémentaire (crédits d’utilisation) dans Claude, Claude Code ou Cowork
- Claude sur Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry ou Claude Platform on AWS

Fonctionnement du solde : les crédits se renouvellent à chaque cycle de facturation (chaque mois avec un abonnement annuel), expirent à la fin du cycle sans report et sont dépensés avant tous ceux que vous avez achetés. Toute personne disposant d’une clé API dans l’organisation associée puise dans le même solde ; les Owners de Team peuvent donc définir des limites de dépenses par workspace dans la Console. Quand les crédits sont épuisés et que l’organisation n’a pas de crédits achetés, les requêtes API s’arrêtent jusqu’au prochain dépôt ; rien n’est facturé sur votre formule Claude.

## Que peut-on faire avec $100 de crédits API Claude ?

Aux tarifs publics d’Anthropic, $100 achètent environ 1 milliard de tokens d’entrée Haiku 5.5 sur des prompts courts, 50 millions de tokens d’entrée Sonnet 5.5, ou environ 170 sessions Managed Agents d’une heure sur Opus 5.5.

| Modèle | Entrée par 1M de tokens | Sortie par 1M de tokens | Lectures du cache par 1M de tokens |
|---|---|---|---|
| Haiku 5.5, prompts jusqu’à 100 000 tokens | $0.10 | $0.50 | $0.01 |
| Haiku 5.5, prompts de plus de 100 000 tokens | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5 en mode rapide | $8 | $40 | Des multiplicateurs de mise en cache s’appliquent en plus |
| Fable 5.1 | $10 | $50 | $0.25 |

Notre calcul, d’après [la page des tarifs de l’API d’Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) :

- **Haiku 5.5 :** $100 couvrent 1 milliard de tokens d’entrée ou 200 millions de tokens de sortie sur des prompts jusqu’à 100 000 tokens.
- **Sonnet 5.5 :** $100 couvrent 50 millions de tokens d’entrée ou 10 millions de tokens de sortie.
- **Managed Agents :** les sessions facturent les tokens aux tarifs du modèle, plus $0.08 par heure de session en cours d’exécution. L’exemple d’Anthropic lui-même, une session Opus 5.5 d’une heure avec 50 000 tokens d’entrée et 15 000 tokens de sortie, coûte $0.58 : $100 en paient donc environ 172.

La facture réelle dépend de la longueur des prompts, du cache, du niveau d’effort et des outils. La recherche web dans une session coûte $10 pour 1 000 recherches, et le mode rapide ne fonctionne pas avec l’API Batch.

## Qu’est-ce qui a changé dans les prix de l’API Claude en octobre 2026 ?

Trois changements de prix sont intervenus en octobre 2026 : Claude Haiku 5.5 est sorti le 7 octobre, les lectures du cache de Sonnet 5.5 ont baissé de moitié le même jour, et le mode rapide d’Opus 5.5 est devenu généralement disponible.

- **Claude Haiku 5.5.** Anthropic le présente comme le petit modèle le moins cher, le plus rapide et le plus performant qu’elle ait publié. Il coûte 90 % de moins que Haiku 4.5 sur les prompts jusqu’à 100 000 tokens et 50 % de moins au-delà, ce qui revient, selon Anthropic, à environ 75 % moins cher en moyenne. Il offre une fenêtre de contexte de 1M tokens, jusqu’à 128K tokens de sortie et, pour la première fois sur un modèle Haiku, un réglage d’effort ajustable. Anthropic le destine aux résumés, à la classification, au compactage et au travail de sous-agents, d’après son [annonce de Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5).
- **Lectures du cache de Sonnet 5.5.** Elles sont passées de $0.20 à $0.10 par million de tokens le 7 octobre. Comme les lectures du cache représentent une grande part du trafic des agents, Anthropic estime que Sonnet 5.5 revient désormais environ 20 % moins cher sur la plupart des tâches d’agent.
- **Mode rapide d’Opus 5.5.** Ajouter `"speed": "fast"` à une requête donne jusqu’à 2,5 fois plus de tokens de sortie par seconde, au double du prix standard, soit $8 en entrée et $40 en sortie par million de tokens. Opus 5.5 n’exige plus d’en-tête bêta ni de demande d’accès, d’après la [documentation du mode rapide](https://platform.claude.com/docs/en/build-with-claude/fast-mode). Il fonctionne sur l’API directe d’Anthropic et sur Microsoft Foundry.

Dans Claude Code, vous pouvez passer à Haiku 5.5 avec `/model haiku`. Cela change la vitesse à laquelle vous consommez les limites de votre formule, pas vos crédits API.

## Quelles mises à jour de Claude Code font durer plus longtemps vos limites d’utilisation ?

Quatre changements de Claude Code d’octobre 2026 économisent de l’utilisation : le compactage en cas d’inactivité, l’effort et le modèle par sous-agent, les nouveaux avertissements de `/usage` et un budget de recherches web qui se reconstitue. Tous fonctionnent dans les limites de votre formule actuelle.

- **Compactage en cas d’inactivité (version 2.1.299, 14 octobre).** Une conversation de terminal de plus de 200K tokens restée inactive environ 54 minutes est compactée juste avant l’expiration de son cache de prompt d’une heure. À votre retour, Claude retraite le résumé plutôt que toute la conversation. Définissez `"idleCompaction": false` dans settings.json, ou utilisez la ligne Idle compaction de `/config` à partir de la version 2.1.302, pour le désactiver.
- **Effort et modèle par sous-agent (2.1.292, 6 octobre).** Vous pouvez demander dans votre prompt des sous-agents à faible effort pour parcourir une base de code et un seul sous-agent à effort élevé pour juger les résultats, ou Haiku pour les recherches rapides. Auparavant, il fallait une définition de sous-agent personnalisée.
- **Avertissements d’utilisation (2.1.299).** `/usage` signale désormais l’effort maximal, les workflows, le contexte toujours actif et les gros résultats d’outils, causes habituelles d’une session qui se vide vite.
- **Budget de recherches web (2.1.290, 5 octobre).** Les sessions interactives disposent désormais de 100 recherches par heure qui se reconstituent, au lieu de s’arrêter après 200.

Les ingénieurs d’Anthropic ajoutent un conseil de prompt : les sous-agents privilégient par défaut l’exhaustivité ; une phrase dans votre prompt précisant que le temps compte les pousse donc à aller plus vite, avec ce qu’Anthropic décrit comme un bon équilibre entre vitesse et qualité. Pour comprendre le fonctionnement des sessions de 5 heures et des plafonds hebdomadaires, lisez notre guide des [limites d’utilisation de Claude](/blog/claude-usage-limits/), et consultez [Claude Watch](/) avant de longues sessions de chat en semaine.

## Quoi de neuf dans l’application de bureau Claude Code et les sessions cloud ?

L’application de bureau Claude Code a reçu un nouvel écran de session, des environnements enregistrés et des sessions imbriquées en octobre 2026, et les sessions cloud reprennent désormais votre travail local exactement tel que vous l’avez laissé.

Application de bureau, d’après la newsletter Claude Code d’Anthropic et la [documentation de l’application de bureau](https://code.claude.com/docs/en/desktop) :

- **Nouvel écran de session.** Les dossiers récents sont à un clic, et vous pouvez enregistrer une configuration comme environnement, par exemple quelques dossiers, un hôte SSH ou le cloud.
- **Sessions imbriquées.** Demandez à Claude d’exécuter des tâches en parallèle : chacune a sa propre session, qui rend compte à votre session principale une fois terminée. Les suites suggérées peuvent démarrer dans leur propre session en un clic.
- **Questions annexes dans un onglet.** `/btw` ouvre désormais une question annexe dans son propre onglet.
- **État en un coup d’œil.** La barre latérale montre quelles sessions travaillent encore et lesquelles ont besoin de vous, et un panneau latéral indique où s’exécute une session, son contexte et ses modifications.

Sessions cloud, d’après la [documentation cloud d’Anthropic](https://code.claude.com/docs/en/claude-code-on-the-web) :

- **Poursuivre un travail commencé en local.** Déplacer une session locale vers le cloud emporte désormais vos modifications non validées et vos commits non poussés : inutile de commiter ou de pousser d’abord. Sur macOS, Linux et WSL, les modifications non validées de fichiers qui ressemblent à des identifiants, comme les fichiers .env et les clés privées, restent sur votre machine.
- **Secrets réseau sur Team.** Les formules Team peuvent désormais ajouter une clé API à un environnement cloud, comme Pro et Max le pouvaient déjà, et Claude appelle les hôtes listés sans voir la clé.

Si vous avez récupéré le [crédit cloud Claude Code](/deals/claude-code-cloud-credit-2026/) avant le 7 octobre, dépensez-le dans des sessions cloud avant qu’il n’expire, le 4 novembre 2026. Notre [comparatif des outils de code IA](/blog/best-ai-coding-tools/) montre comment le prix de Claude Code se situe par rapport à Cursor, Codex et Copilot.

## Existe-t-il des offres Claude gratuites pour les mainteneurs open source ?

Oui. Claude for Open Source offre aux mainteneurs approuvés 6 mois de Claude Max 20x gratuits, et depuis le 8 octobre 2026, l’OSS Scanner d’Anthropic réalise des analyses de sécurité gratuites pour les projets open source établis.

[Claude for Open Source](/deals/claude-for-open-source-max-2026/) est limité à 10 000 bénéficiaires approuvés, et vous postulez avec votre compte GitHub. Les candidats doivent remplir l’un de ces critères, d’après [la page du programme d’Anthropic](https://claude.com/contact-sales/claude-for-oss) et ses conditions :

- Des projets avec 500 dépôts dépendants ou plus, 100 paquets dépendants ou plus, ou 200 000 téléchargements mensuels ou plus
- Un rôle de committer ou de mainteneur répertorié dans une fondation reconnue ou un projet de langage
- 100 pull requests fusionnées ou plus dans des dépôts qui ne vous appartiennent pas au cours des 12 derniers mois
- Un dépôt avec 20 contributeurs externes uniques ou plus, ou un score de criticité OpenSSF de 0,4 ou plus

Le compte GitHub doit avoir au moins deux ans d’ancienneté et une activité open source publique au cours des 90 derniers jours. Au bout de 6 mois, les membres qui avaient une formule payante y reviennent à leur ancien tarif, sauf s’ils résilient ; tous les autres repassent à la formule Free.

[OSS Scanner](https://red.anthropic.com/oss-scanner/) est sur inscription volontaire : les mainteneurs principaux s’inscrivent en ouvrant une pull request contenant une configuration de projet et un Dockerfile hors ligne dans le dépôt oss-scanner d’Anthropic sur GitHub. Les projets reçoivent ensuite gratuitement des analyses périodiques réalisées par les modèles les plus puissants d’Anthropic, avec des rapports qui n’ont pas été relus par un humain. L’acceptation suit des critères proches de ceux d’OSS-Fuzz de Google ; les projets tout neufs et la plupart des forks n’y sont donc pas admis. OpenAI propose un programme similaire, [Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/), avec six mois de ChatGPT Pro.

## En résumé

Récupérez les crédits si vous êtes sur Max ou Team et que vous pourriez développer quoi que ce soit sur l’API. Cela ne coûte rien, mais seul le support peut modifier ensuite le lien avec l’organisation.

- **Abonnés Max qui développent sur l’API :** associez l’organisation Console que vous utilisez vraiment, car vous ne pouvez pas la changer vous-même. $100 ou $200 par mois couvrent beaucoup de travail avec Haiku 5.5 et Sonnet 5.5.
- **Abonnés Max qui n’utilisent que Claude Code :** les crédits n’étendront pas vos limites. Le compactage en cas d’inactivité, les sous-agents Haiku 5.5 et les nouveaux avertissements de `/usage`, si.
- **Utilisateurs de Pro qui hésitent à passer à Max 5x :** Max 5x coûte $80 par mois de plus que Pro et inclut $100 de crédit API ; il devient donc rentable plus vite si vous dépensez déjà autant sur l’API.
- **Owners de Team :** un seul Owner récupère les crédits pour toute l’équipe ; définissez des limites de dépenses par workspace pour qu’un projet ne vide pas la réserve.
- **Mainteneurs open source :** postulez à Claude for Open Source et, pour les projets critiques, à OSS Scanner.

Notre [page de l’offre sur les crédits API](/deals/claude-max-team-api-credits-2026/) suit toute évolution des conditions, et toutes les autres offres Claude figurent sur notre [page Claude](/tools/claude/) et dans le [calendrier des promotions](/calendar/).
