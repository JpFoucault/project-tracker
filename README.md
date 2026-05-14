# Project Tracker — Tableau de bord de chiffrage

Application web de suivi budgétaire de projets, développée en React.js.
Permet de visualiser en temps réel l'écart entre budget estimé et budget réel par projet.

## Fonctionnalités

- Ajout et suppression de projets
- Calcul automatique des KPIs (budget total, écart global, projets dépassés)
- Visualisation graphique estimé vs réel (Recharts)
- Badge de statut et barre de progression par projet
- Persistance des données via localStorage

## Technologies utilisées

- React.js 18 (hooks : useState, useEffect)
- Recharts (graphiques)
- Vite (bundler)
- JavaScript ES6+

## Installation

\`\`\`bash
git clone https://github.com/JpFoucault/project-tracker
cd project-tracker-mbda
npm install
npm run dev
\`\`\`

## Architecture

\`\`\`
src/
├── components/
│   ├── Header.jsx          # Barre de navigation
│   ├── KPIs.jsx            # Cartes de synthèse calculées
│   ├── Graphiques.jsx      # Graphique Recharts estimé vs réel
│   ├── FormulaireProjet.jsx # Formulaire d'ajout
│   └── CarteProjet.jsx     # Carte individuelle avec barre de progression
└── App.jsx                 # Composant racine — gestion de l'état global
\`\`\`

## Concepts React appliqués

- **Composants fonctionnels** et séparation des responsabilités
- **useState** pour la gestion de l'état global
- **useEffect** pour la persistance automatique
- **Props** et lifting state up pour la communication entre composants
- **Array.map / filter / reduce** pour la manipulation des données