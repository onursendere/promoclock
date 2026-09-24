---
summary: "Windsurf est l’éditeur de code IA que Cognition, créateur de l’agent Devin, a racheté en juillet 2025 et rebaptisé Devin Desktop le 2 juin 2026. Le même IDE s’ouvre désormais sur un Agent Command Center qui gère des agents locaux et cloud, et les plans comme les tarifs ont été repris tels quels. Les développeurs l’utilisent comme une alternative à VS Code centrée sur les agents."
metaTitle: "Windsurf devient Devin Desktop : prix et plan gratuit"
metaDescription: "Windsurf a été rebaptisé Devin Desktop en juin 2026. Ce qui change, les plans Free, Pro ($20/mois) et Max, l’usage par quota, les fonctions et alternatives."
bestFor:
  - "Développeurs quittant VS Code"
  - "Ingénieurs jonglant avec des agents"
  - "Abonnés Windsurf actuels"
keyFeatures:
  - name: "Agent Command Center"
    description: "Un tableau Kanban de tous les agents locaux et cloud en cours, avec des Spaces qui regroupent sessions, pull requests, fichiers et contexte partagé."
  - name: "Agent Devin Local"
    description: "La réécriture en Rust qui a remplacé Cascade, utilisant jusqu’à 30 % de tokens en moins et prenant en charge sous-agents et bac à sable au niveau de l’OS."
  - name: "Agents tiers via ACP"
    description: "Exécute Codex, Claude Agent, OpenCode et des agents maison via l’Agent Client Protocol dans la même vue Kanban."
  - name: "Un IDE complet en dessous"
    description: "Éditeur, extensions, raccourcis et LSP restent rétrocompatibles avec Windsurf et VS Code, et les réglages de Cursor peuvent être importés."
  - name: "Éditions Tab et en ligne"
    description: "Complétions Tab illimitées et éditions Command en ligne sur tous les plans, y compris Free."
  - name: "Fast Context"
    description: "Un sous-agent de récupération bâti sur les modèles SWE-grep qui trouve le code pertinent jusqu’à 20 fois plus vite."
useCases:
  - "Lancer un agent local sur une refonte pendant qu’une session Devin cloud corrige un bug, et suivre les deux depuis un seul tableau."
  - "Continuer d’utiliser Claude Agent ou Codex dans le même éditeur au lieu de changer d’outil."
  - "Migrer une configuration Windsurf existante, règles et mémoires comprises, vers Devin Local avec l’assistant intégré."
pricingSummary: "Le plan Free comprend un quota léger avec des complétions Tab illimitées. Pro coûte $20/mois, Max $200/mois avec des quotas bien plus élevés, et Teams démarre à $80/mois avec des sièges complets à $40 chacun. Enterprise est sur devis."
savingTips:
  - "Les modèles gratuits ne sont pas décomptés de votre quota, et des modèles SWE moins coûteux comme SWE-1.7 étirent davantage les enveloppes payantes."
  - "Les abonnés qui étaient sur Windsurf Pro avant le passage aux quotas de mars 2026 conservent indéfiniment un tarif préférentiel de $15/mois."
faq:
  - q: "Windsurf est-il abandonné ?"
    a: "Non, il a été rebaptisé. Le 2 juin 2026, une mise à jour à distance a transformé Windsurf en Devin Desktop, en conservant l’éditeur, les extensions, les réglages et les plans. windsurf.com redirige désormais vers devin.ai."
  - q: "À qui appartient Windsurf désormais ?"
    a: "À Cognition, l’entreprise derrière l’agent de codage Devin. Elle a annoncé le 14 juillet 2025 le rachat de la propriété intellectuelle, du produit, de la marque et de l’équipe de Windsurf, et a depuis intégré l’éditeur à la famille de produits Devin."
  - q: "Comment fonctionnent les limites d’usage après le changement ?"
    a: "Depuis mars 2026, les plans incluent un quota quotidien et hebdomadaire basé sur les tokens plutôt que des crédits de prompt. Les utilisateurs Free attendent la réinitialisation ; les utilisateurs Pro, Max et Teams peuvent acheter de l’usage supplémentaire aux tarifs API publics."
  - q: "Qu’est devenu Cascade ?"
    a: "Devin Local a remplacé Cascade comme agent local principal. Cognition a maintenu Cascade disponible jusqu’en juillet 2026 pour une migration progressive, et un assistant de la palette de commandes transfère workflows et mémoires."
---
## Qu’est-il arrivé à Windsurf ?
Windsurf a débuté comme l’éditeur de Codeium et est passé à Cognition en 2025. En juin 2026, Cognition a unifié ses produits sous une seule marque : Devin Desktop pour l’IDE, Devin Cloud pour les agents cloud autonomes, Devin CLI pour le terminal et Devin Review pour la revue de code. Les règles Windsurf existantes, dont `.windsurfrules`, fonctionnent toujours.

## Pour qui
Devin Desktop convient aux développeurs qui veulent un éditeur conçu pour superviser plusieurs agents à la fois. Devin Cloud n’est pas nécessaire pour l’utiliser ; les agents purement locaux fonctionnent très bien.

## Limites
- Les quotas se mesurent en tokens, si bien que les modèles de pointe et les longues sessions épuisent bien plus vite le budget quotidien et hebdomadaire.
- Le plugin Windsurf pour JetBrains est en mode maintenance ; Cognition recommande plutôt d’exécuter Devin dans JetBrains via ACP.
- Les essais gratuits des plans payants ne sont proposés qu’à une partie des clients éligibles.
- Sur Teams, seuls les sièges complets incluent Devin Desktop, et les nouveaux plans Teams n’incluent plus le SSO.
