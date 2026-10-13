---
summary: "OpenAI Codex est l’agent de code d’OpenAI, inclus dans toutes les formules ChatGPT, de Free à Enterprise. Il fonctionne dans le terminal, dans les éditeurs de type VS Code, dans les applications ChatGPT pour ordinateur et pour le web, sur iOS et dans des environnements cloud isolés. Les développeurs s’en servent pour écrire, refactoriser et relire du code, avec un quota d’utilisation partagé avec ChatGPT Work."
metaTitle: "OpenAI Codex : prix, limites et accès gratuit (2026)"
metaDescription: "Prix d’OpenAI Codex en 2026 : inclus dans ChatGPT Free, Go ($8), Plus ($20) et Pro (dès $100). Limites par formule, interfaces, modèles et alternatives."
bestFor:
  - "Développeurs déjà abonnés à ChatGPT"
  - "Ingénieurs qui vivent dans le terminal"
  - "Équipes automatisant la revue de code"
keyFeatures:
  - name: "Codex CLI"
    description: "Un agent en ligne de commande qui lit, modifie et exécute du code en local, avec bac à sable, règles d’approbation et options scriptables."
  - name: "Extension pour IDE"
    description: "Fonctionne dans VS Code, Cursor et Windsurf, tandis que les IDE JetBrains et Xcode proposent leurs propres intégrations Codex."
  - name: "Codex cloud"
    description: "Délègue des tâches à des environnements cloud isolés, avec des dépendances configurables et un accès à Internet contrôlé."
  - name: "Revue de code et Slack"
    description: "Relit automatiquement les modifications sur GitHub et reçoit des demandes depuis les canaux et fils Slack, avec les formules ChatGPT."
  - name: "Famille de modèles GPT-6"
    description: "GPT-6 Astra gère le travail le plus difficile, GPT-6.1 Sol s’en approche à moindre coût, et GPT-6 Luna offre les limites les plus élevées pour les tâches légères."
  - name: "Personnalisation"
    description: "Consignes de projet via AGENTS.md, ainsi que skills, plugins, serveurs MCP et sous-agents personnalisés."
useCases:
  - "Demander à la CLI de réparer une suite de tests en échec et valider chaque commande avant qu’elle ne s’exécute hors du bac à sable."
  - "Confier une longue refactorisation à Codex cloud et relire le diff obtenu plus tard depuis l’application iOS."
  - "Activer la revue de code automatique pour que chaque pull request GitHub ait droit à une première relecture avant celle des collègues."
pricingSummary: "Codex est inclus dans ChatGPT Free ($0), Go ($8/mois), Plus ($20/mois) et Pro ($100, $200 ou $500 par mois ; le nouveau palier $500 ajoute Astra Ultrafast). Business coûte $25 par utilisateur et par mois ou $20 en facturation annuelle ; l'usage avec une clé d'API est facturé au tarif de l'API."
savingTips:
  - "Les abonnés Plus et Pro qui atteignent une limite peuvent acheter des crédits ChatGPT au lieu de passer à la formule supérieure."
  - "Passer à GPT-6 Luna donne bien plus de messages locaux par tranche de cinq heures que Sol, ce qui fait durer n’importe quelle formule."
  - "Les mainteneurs de projets open source peuvent postuler au programme Codex for Open Source pour obtenir des crédits API et six mois de ChatGPT Pro avec Codex."
faq:
  - q: "OpenAI Codex est-il gratuit ?"
    a: "Oui, avec des limites. ChatGPT Free inclut Codex pour les tâches de code rapides, et Go, à $8 par mois, couvre les travaux légers. Plus, à $20 par mois, inclut des intégrations cloud comme la revue de code automatique et Slack."
  - q: "Combien de messages Codex inclut ChatGPT Plus ?"
    a: "OpenAI estime qu’avec Plus, vous disposez de 15 à 160 messages locaux GPT-6.1 Sol ou de 350 à 3 000 messages GPT-6 Luna par tranche de cinq heures, et de 5 à 45 avec GPT-6 Astra. Des limites hebdomadaires peuvent aussi s’appliquer, et les conversations cloud consomment davantage."
  - q: "Peut-on utiliser Codex avec une clé d’API plutôt qu’avec ChatGPT ?"
    a: "Oui. Avec une clé d’API, Codex fonctionne dans la CLI, le SDK et l’extension IDE, et il est facturé au tarif de l’API, mais les fonctions cloud comme la revue de code GitHub et Slack ne sont pas disponibles."
  - q: "Quels modèles utilise Codex en 2026 ?"
    a: "OpenAI recommande GPT-6 Astra, GPT-6.1 Sol et GPT-6 Luna. GPT-6.1 Sol est déployé progressivement pour Plus, Pro, Business, Enterprise et Edu, tandis que Free et Go utilisent GPT-6 Luna. GPT-5.3-Codex-Spark a été retiré le 14 septembre 2026, et GPT-5.5 sera retiré de Codex le 14 octobre 2026."
---
## Qu’est-ce qu’OpenAI Codex ?
Codex est l’agent d’OpenAI pour le développement logiciel, lié à un compte ChatGPT plutôt que vendu séparément. Sa documentation se trouve désormais dans celle de ChatGPT, et l’usage de Codex est partagé avec ChatGPT Work : les deux puisent dans les mêmes limites et les mêmes crédits.

## Pour qui ?
Il convient aux développeurs qui paient déjà ChatGPT et veulent un seul abonnement pour le chat et le code. Les équipes peuvent ajouter le SDK Codex, une GitHub Action et un protocole app-server pour intégrer Codex à leurs propres outils et à leur CI.

## Limites
- Les limites sont des estimations, pas des quotas fixes ; les longues sessions, les grosses bases de code, le mode rapide et la génération d’images épuisent le quota plus vite.
- Les conversations cloud peuvent consommer plus de votre limite que les messages locaux.
- Les nouveaux modèles sont déployés par étapes : les utilisateurs de Free et Go attendent donc plus longtemps le dernier modèle Sol.
- Les utilisateurs d’une clé d’API perdent les fonctions cloud, dont la revue de code et Slack.
