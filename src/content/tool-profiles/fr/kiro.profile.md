---
summary: "Kiro est un environnement de développement agentique d’Amazon Web Services, bâti autour du développement piloté par les spécifications : les prompts deviennent des exigences, une conception et des listes de tâches avant que les agents n’écrivent le code. Il se décline en IDE de bureau, en CLI et en version navigateur, et les développeurs l’utilisent pour garder le code généré par IA lié à une intention documentée."
metaTitle: "Kiro : prix, offre gratuite et offre étudiante (2026)"
metaDescription: "Prix de Kiro en 2026 : formule gratuite de 50 crédits, Pro dès $20/mois, les formules Pro Max et Power, des crédits en supplément à $0.04 et une offre étudiante."
bestFor:
  - "Développeurs qui planifient le code"
  - "Équipes d’ingénierie centrées sur AWS"
  - "Refactorisation sur plusieurs dépôts"
keyFeatures:
  - name: "Mode spécification"
    description: "Transforme un prompt en exigences avec critères d’acceptation, une conception technique et des tâches ordonnées que les agents implémentent ensuite."
  - name: "Tests fondés sur les propriétés"
    description: "Vérifie les exigences pour y déceler contradictions et lacunes, puis teste le comportement contre des règles valables pour toutes les entrées, pas quelques exemples."
  - name: "Hooks et fichiers de pilotage"
    description: "Les fichiers de pilotage chargent vos conventions dans chaque session, et les hooks déclenchent automatiquement des actions d’agent quand des événements surviennent."
  - name: "Kiro Web"
    description: "Sur les formules payantes, les agents s’exécutent dans des bacs à sable cloud isolés, travaillent sur les dépôts GitHub et GitLab et livrent des pull requests."
  - name: "Kiro CLI"
    description: "Lancez le même agent dans un terminal, déléguez le travail à des sessions cloud, ou utilisez-le sans interface en CI/CD pour des revues et des corrections."
  - name: "Choix de modèle avec Auto"
    description: "Auto combine des modèles pour équilibrer qualité, vitesse et coût, ou vous choisissez Claude, GPT-5.6 ou des modèles à poids ouverts avec des multiplicateurs de crédits."
useCases:
  - "Rédiger une spécification pour une nouvelle fonction de paiement, relire la conception générée et laisser les agents dérouler la liste de tâches."
  - "Coordonner une modification de bibliothèque partagée et les services dépendants dans une seule session Kiro Web sur plusieurs dépôts."
  - "Planifier une automatisation récurrente qui met à jour les dépendances et ouvre des pull requests à relire chaque semaine."
  - "Exécuter le Kiro CLI sans interface dans un pipeline CI pour relire les pull requests avant qu’un humain ne les examine."
pricingSummary: "Kiro Free inclut 50 crédits par mois. Pro coûte $20/mois pour 1 000 crédits, Pro+ $40 pour 2 000, Pro Max $100 pour 5 000 et Power $200 pour 10 000, avec des crédits en supplément à $0.04 pièce sur les formules payantes."
savingTips:
  - "Les étudiants des universités éligibles reçoivent gratuitement 1 000 crédits par mois pendant un an."
  - "Restez sur Auto pour les prompts courants : la même tâche coûte environ 1,3 fois plus de crédits si vous choisissez Sonnet 4.6 directement."
  - "Les packs de crédits en supplément débutent à $5 pour 125 crédits et restent valables 12 mois, contrairement aux crédits mensuels des formules."
faq:
  - q: "Kiro est-il gratuit ?"
    a: "Oui. Kiro Free est une formule permanente avec 50 crédits par mois et un accès à débit limité à Claude Sonnet 4.5 et à des modèles à poids ouverts comme Qwen3 Coder Next. Elle n’est pas proposée pour les comptes Enterprise ni dans les régions AWS GovCloud (US)."
  - q: "Qu’est-ce qu’un crédit Kiro ?"
    a: "Un crédit est une unité de travail d’agent mesurée à deux décimales. Les prompts simples peuvent consommer moins d’un crédit, tandis que les tâches de spécification en utilisent davantage. Les modèles plus puissants ont des multiplicateurs plus élevés, et les crédits mensuels inutilisés ne se reportent pas."
  - q: "Kiro a-t-il une formule étudiante ?"
    a: "Oui. Les étudiants vérifiés des universités participantes reçoivent gratuitement 1 000 crédits par mois pendant un an, la même dotation que Pro. Le programme listait 132 universités éligibles en septembre 2026, alors vérifiez la liste avant de vous inscrire."
  - q: "Peut-on utiliser un abonnement Kiro hors des applications Kiro ?"
    a: "En partie. Les crédits fonctionnent dans Kiro IDE, Kiro CLI, Kiro Web, Kiro Crew, les IDE compatibles ACP et l’automatisation CI. Le routage des requêtes via des harnais tiers comme OpenClaw n’est pas autorisé."
  - q: "Kiro Web est-il inclus dans la formule Pro ?"
    a: "Oui. Kiro Web est disponible sur Pro, Pro+, Pro Max et Power, et il puise dans les mêmes crédits que l’IDE et le CLI, sans frais distincts pour le calcul cloud. Les utilisateurs de la formule gratuite ne peuvent pas l’utiliser."
---
## Qu’est-ce que Kiro ?
Kiro est l’environnement de développement d’AWS pour travailler avec des agents IA de façon structurée. Au lieu de passer directement d’un prompt au code, le mode spécification produit des exigences, une conception et des tâches que vous approuvez, et les agents les implémentent en parallèle.

L’IDE est bâti sur Code OSS et tourne sur macOS, Windows et Linux, avec des versions ARM64 natives depuis l’IDE 1.1 en septembre 2026. Kiro CLI, Kiro Web et Kiro Crew, un espace de travail d’agent persistant open source, partagent les mêmes crédits.

## Formules et crédits
Chaque palier est tarifé par crédits mensuels plutôt que par nombre de requêtes. Les formules payantes se renouvellent le 1er de chaque mois civil, et les prix excluent la TVA et les taxes de vente. La tarification dans les régions AWS GovCloud (US) est environ 20 % plus élevée.

## Limites
- Les 50 crédits de la formule gratuite ne couvrent qu’un usage léger, et les modèles premium comme Claude Opus 5 exigent une formule payante.
- Tous les modèles premium ne sont pas disponibles dans chaque pays ou région.
- Les versions de Kiro IDE antérieures à 0.11.133 et de CLI antérieures à 1.28.2 cessent de se connecter le 9 novembre 2026.
- Les formules payantes en libre-service ne sont vendues qu’aux adresses de facturation des pays listés.
