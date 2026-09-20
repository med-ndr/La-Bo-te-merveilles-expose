# La Boîte à Merveilles — Présentation interactive

Site web éducatif et interactif sur le roman *La Boîte à Merveilles* d'Ahmed Sefrioui,
conçu pour une présentation de 1ère année du baccalauréat marocain.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrez l'adresse affichée dans le terminal (généralement http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

## Structure du projet

```
src/
  components/   Composants réutilisables (Navbar, CharacterCard, InteractiveBox, ...)
  data/         Données du contenu (personnages, chapitres, thèmes, lieux, quiz)
  pages/        Une page par section du site
  styles/       Variables de couleurs/typographie et motifs géométriques
```

## Remarque sur le contenu

Les résumés de chapitres sont volontairement simplifiés à des fins pédagogiques.
Pour toute citation exacte ou détail précis destiné à une évaluation, vérifiez avec
le texte intégral du roman.
