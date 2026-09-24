---
summary: "DeepSeek est un assistant de chat d’IA gratuit du laboratoire chinois DeepSeek, bâti sur sa famille de modèles ouverts V4. Il associe un assistant sans abonnement à des prix d’API par token très bas, et DeepSeek-V4.1-Flash est arrivé en septembre 2026. Les utilisateurs soucieux de leur budget, les développeurs et les chercheurs qui auto-hébergent des modèles s’en servent le plus."
metaTitle: "DeepSeek est-il gratuit ? App, API et V4.1 (2026)"
metaDescription: "L’app de chat DeepSeek est gratuite. Tarifs d’API 2026 pour deepseek-flash et V4-Pro, heures creuses, confidentialité, le nom DSeek au Royaume-Uni et alternatives."
bestFor:
  - "Utilisateurs au budget serré"
  - "Développeurs réduisant leurs coûts d’API"
  - "Chercheurs utilisant des poids ouverts"
keyFeatures:
  - name: "Chat web et mobile gratuit"
    description: "Discutez, importez des fichiers et cherchez sur le web sur chat.deepseek.com ou dans les applications iOS et Android, sans abonnement."
  - name: "Contexte de 1 M de tokens"
    description: "Depuis la sortie de V4 en avril 2026, une fenêtre de contexte de 1 M de tokens est la valeur par défaut sur les services officiels de DeepSeek."
  - name: "V4-Pro en mode Expert"
    description: "DeepSeek-V4-Pro, disponible pour tous depuis le 13 août 2026, est proposé dans l’application et sur le web via le mode Expert."
  - name: "Poids ouverts"
    description: "Les poids et rapports techniques de V4-Pro, V4-Flash et V4.1-Flash sont publiés sur Hugging Face pour la recherche et l’auto-hébergement."
  - name: "Tarifs d’API en heures creuses"
    description: "Facturation par token avec mise en cache du contexte, et des tarifs heures creuses moitié moins chers que les créneaux de pointe en semaine."
  - name: "Compatible avec les agents de code"
    description: "L’API accepte les formats de requête OpenAI et Anthropic, si bien que des outils comme Claude Code et OpenCode tournent sur les modèles DeepSeek."
useCases:
  - "Déboguer un script ou dérouler une preuve mathématique dans le chat web gratuit, sans payer de formule."
  - "Pointer Claude Code ou OpenCode vers le point d’accès compatible Anthropic de DeepSeek pour faire tourner des agents de code sur des tokens moins chers."
  - "Programmer de gros travaux de résumé par lot hors des heures de pointe UTC pour diviser par deux la facture d’API."
  - "Télécharger des poids ouverts depuis Hugging Face pour tester un modèle DeepSeek sur votre propre infrastructure."
pricingSummary: "Le chat web et les applications iOS et Android sont gratuits. L’API est à l’usage : deepseek-flash coûte $0.30 par 1 M de tokens d’entrée (défaut de cache) et $1.20 par 1 M de tokens de sortie en heures de pointe, moitié moins en heures creuses."
savingTips:
  - "Faites tourner les charges d’API flexibles hors des heures de pointe (01:00–04:00 et 06:00–10:00 UTC, du lundi au vendredi) pour payer 50 % de moins."
  - "Réutilisez les longs préfixes de prompt : l’entrée deepseek-flash en cache coûte $0.006 par 1 M de tokens en pointe, au lieu de $0.30 en cas de défaut de cache."
  - "Préférez deepseek-flash à deepseek-v4-pro pour les tâches courantes : son prix de sortie en pointe est de $1.20 par 1 M de tokens contre $3.96."
faq:
  - q: "DeepSeek est-il gratuit ?"
    a: "Oui. Le chat web de DeepSeek et ses applications iOS et Android ne coûtent rien et n’ont pas de palier par abonnement. Seule l’API pour développeurs est payante, déduite par token d’un solde rechargé ou octroyé."
  - q: "Où DeepSeek stocke-t-il mes données ?"
    a: "En Chine. La politique de confidentialité de DeepSeek, mise à jour le 10 février 2026, indique qu’il collecte, traite et stocke les données personnelles en République populaire de Chine. Pesez cela avant de partager des informations personnelles ou d’entreprise sensibles."
  - q: "Pourquoi DeepSeek s’appelle-t-il DSeek au Royaume-Uni ?"
    a: "Un avis sur chat.deepseek.com indique qu’en raison d’une restructuration de marque, DeepSeek s’appelle désormais officiellement DSeek au Royaume-Uni. L’avis ajoute que tous les services se poursuivent normalement."
  - q: "Qu’est-ce que DeepSeek-V4.1-Flash ?"
    a: "C’est le modèle le plus récent de DeepSeek, sorti le 10 septembre 2026 : un modèle à mélange d’experts de 552 milliards de paramètres avec compréhension visuelle native. Il a remplacé V4-Flash dans l’API sous le nom deepseek-flash, à des prix plus bas."
  - q: "Puis-je encore utiliser DeepSeek-V4-Pro via l’API ?"
    a: "Oui. DeepSeek prévoyait d’abord de router les requêtes V4-Pro vers V4.1-Flash à partir du 14 septembre 2026, mais sa page des tarifs indique désormais que V4-Pro reste disponible avec une facturation inchangée jusqu’à nouvel ordre."
---
## Qu’est-ce que DeepSeek ?
DeepSeek est à la fois un laboratoire d’IA basé à Hangzhou et l’assistant gratuit qu’il fait tourner dans le navigateur et dans des applications mobiles. Les développeurs atteignent les mêmes modèles via une API à bas coût, ou téléchargent les poids ouverts pour les exécuter eux-mêmes.

## Changements récents
- **24 avril 2026 :** la préversion V4 a introduit V4-Pro (1,6 T au total, 49 Md de paramètres actifs) et V4-Flash, et rendu le contexte de 1 M standard.
- **24 juillet 2026 :** les anciens noms de modèles d’API deepseek-chat et deepseek-reasoner ont été retirés.
- **Août 2026 :** V4-Pro est devenu disponible pour tous, et les tarifs d’API de pointe et heures creuses sont entrés en vigueur.
- **10 septembre 2026 :** V4.1-Flash a remplacé V4-Flash avec des tarifs d’API moins chers.
- **Royaume-Uni :** le service porte désormais le nom DSeek.

## Limites
DeepSeek stocke les données personnelles en Chine, ce qui peut l’exclure pour un travail réglementé ou confidentiel. Dans l’API, l’entrée visuelle ne fonctionne qu’avec deepseek-flash, et les prix doublent durant les créneaux de pointe en semaine. Les noms de modèles et le routage ont changé plusieurs fois en 2026 : les utilisateurs de l’API doivent vérifier la page des tarifs avant de déployer.
