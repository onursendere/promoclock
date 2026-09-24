---
summary: "Cline est un agent de code IA open source, développé par Cline Bot Inc., qui fonctionne dans VS Code, les IDE JetBrains, le terminal et une application de bureau. Il est gratuit pour les développeurs individuels, qui branchent leurs propres clés d’API de modèles ou paient l’inférence à prix coûtant, et il demande votre accord avant de modifier des fichiers ou d’exécuter des commandes."
metaTitle: "Cline est-il gratuit ? Prix de l’agent de code open source"
metaDescription: "Cline est gratuit et open source : vous ne payez que l’inférence IA, ou utilisez vos propres clés. ClinePass à $9.99/mois, éditeurs compatibles et limites."
bestFor:
  - "Développeurs attachés au choix du modèle"
  - "Utilisateurs VS Code soucieux du budget"
  - "Équipes qui misent sur l’open source"
keyFeatures:
  - name: "Modes Plan et Act"
    description: "Esquissez d’abord une approche en mode Plan, puis passez en mode Act et validez chaque appel d’outil pendant que l’agent travaille."
  - name: "Points de restauration"
    description: "Chaque appel d’outil crée un point de restauration avec des diffs visuels dans l’éditeur : vous pouvez annuler n’importe quelle modification avec /undo."
  - name: "Tous les fournisseurs de modèles"
    description: "Connectez Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek ou un endpoint local avec votre propre clé d’API."
  - name: "MCP Marketplace"
    description: "Ajoutez des serveurs MCP depuis la marketplace, ou les vôtres, pour que Cline accède à vos outils de suivi de bugs, plateformes de déploiement et entrepôts de données."
  - name: "Tableau Kanban dans la CLI"
    description: "Lancez cline --kanban pour gérer des agents en parallèle dans des worktrees git distincts, y compris des sessions Claude Code et Codex."
  - name: "Skills et hooks"
    description: "Les skills regroupent un savoir-faire réutilisable, comme lancer votre suite de tests, et les hooks permettent à des scripts de bloquer ou d’ajuster n’importe quel appel d’outil."
useCases:
  - "Refactoriser un module dans VS Code en validant chaque modification de fichier et chaque commande de terminal proposées par l’agent."
  - "Découper un backlog en cartes Kanban et laisser plusieurs agents les traiter dans des worktrees git isolés."
  - "Brancher Cline sur un modèle local via un serveur compatible OpenAI pour garder le code sur votre propre machine."
  - "Connecter un serveur MCP Linear pour que l’agent lise les tickets et les transforme en tâches liées."
pricingSummary: "L’agent Cline est gratuit pour un usage individuel, sans frais par siège : vous payez les fournisseurs de modèles avec vos propres clés ou achetez l’inférence à Cline à prix coûtant. ClinePass, un abonnement facultatif aux modèles à poids ouverts, coûte $9.99/mois, et Enterprise est sur devis."
savingTips:
  - "Utilisez vos propres clés d’API pour payer directement les tarifs des fournisseurs, sans abonnement ni marge de Cline."
  - "ClinePass regroupe des modèles à poids ouverts comme GLM 5.3, Kimi K3 et DeepSeek V4 pour $9.99/mois, au lieu d’un compte séparé chez chaque fournisseur."
  - "Les modèles locaux connectés via un endpoint compatible OpenAI évitent totalement la facturation de l’API au token."
faq:
  - q: "Cline est-il gratuit ?"
    a: "Oui. L’extension, la CLI et l’application de bureau Cline, open source, sont gratuites pour les développeurs individuels. Vous ne payez que les modèles d’IA que vous utilisez, soit via vos propres clés d’API chez les fournisseurs, soit en achetant l’inférence à Cline à prix coûtant."
  - q: "Qu’est-ce que ClinePass ?"
    a: "ClinePass est un abonnement à $9.99/mois qui donne accès à des modèles à poids ouverts de Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo et Qwen dans l’extension IDE et la CLI de Cline. Selon Cline, ses quotas offrent 2 à 5 fois l’usage permis par les limites de débit standard des API."
  - q: "Cline fonctionne-t-il dans les IDE JetBrains et dans Cursor ?"
    a: "Oui. Le plugin JetBrains est en accès anticipé pour IntelliJ IDEA, PyCharm, WebStorm, GoLand et d’autres IDE JetBrains. Dans Cursor et Windsurf, vous installez la même extension depuis le VS Code Marketplace."
  - q: "Cline est-il open source ?"
    a: "Oui. Le code source de Cline est sur GitHub, à l’adresse github.com/cline/cline, sous licence Apache 2.0. Comme l’agent s’exécute côté client, vous pouvez changer de fournisseur ou héberger vous-même vos modèles sans dépendre des services de Cline."
  - q: "Qu’apporte Cline Enterprise ?"
    a: "Enterprise ajoute le SSO, le provisionnement SCIM, la facturation centralisée, le contrôle d’accès par rôle, des restrictions sur les fournisseurs d’inférence autorisés pour les équipes, des journaux d’audit, des déploiements en VPC, un SLA et un support dédié. Pour le prix, il faut contacter l’équipe commerciale."
---
## Qu’est-ce que Cline ?
Cline est un agent de code autonome qui travaille dans votre éditeur ou votre terminal, et non comme un service hébergé à part. Il lit les fichiers que vous lui indiquez, modifie le code, exécute des commandes et pilote un navigateur, en attendant votre accord à chaque étape, sauf si vous lui laissez plus d’autonomie.

## Où l’utiliser
- **Extension VS Code**, qui s’installe aussi dans Cursor et Windsurf.
- **Plugin JetBrains**, en accès anticipé.
- **CLI**, avec tableau Kanban, plugins, tâches planifiées et usage sans interface en CI.
- **Cline for Desktop**, une application autonome en bêta pour macOS et Windows.
- **SDK** pour intégrer l’agent dans d’autres outils.

## Limites
Le coût dépend entièrement des modèles et des tokens que vous utilisez : de longues sessions d’agent avec des modèles de pointe peuvent coûter cher, et ClinePass ne couvre que les modèles à poids ouverts. L’application de bureau est encore en bêta, et Cline prévient qu’il faut s’attendre à quelques imperfections. Aucun quota de modèle gratuit n’est inclus pour les utilisateurs individuels.
