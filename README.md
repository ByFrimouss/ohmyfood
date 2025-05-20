# 🍽️ Ohmyfood - Commande gastronomique en ligne

**Ohmyfood** est une application web qui permet aux utilisateurs de composer leur menu gastronomique à l’avance, réduisant ainsi leur temps d’attente au restaurant. D’abord lancée à New-York, l’entreprise s’étend désormais à **Paris**, capitale mondiale de la gastronomie. Ce projet présente une première version du site dans le cadre d’une mission de développement mobile-first.

## 🚀 Objectifs du projet

- Développer un site statique "mobile first" proposant les menus de **4 restaurants gastronomiques**.
- Offrir une expérience immersive et fluide avec des **animations CSS élégantes**.
- Structurer le projet de manière modulaire et maintenable avec **SASS**.
- Déployer le site sur **GitHub Pages** pour une mise en ligne rapide.

## 🎯 Cibles

Utilisateurs urbains, connectés, classes moyennes et supérieures, recherchant :

- Des repas de qualité,
- Un service rapide,
- Une expérience haut de gamme.

## 🧩 Fonctionnalités prévues

### Page d'accueil

- Présentation de l’entreprise.
- Affichage des 4 menus sous forme de cartes interactives.
- Localisation dynamique des restaurants.
- Loader animé au chargement.

### Pages de menu (x4)

- Visualisation des plats par catégorie (entrée / plat / dessert).
- Ajout de plats avec animation de coche.
- Apparition progressive des plats à l’arrivée.

### Header / Footer

- Navigation simple et fluide entre les pages.
- Footer unifié avec lien mail (Contact).
- Header adaptatif selon la page.

## 💅 Identité graphique

- **Logo & Titres :** `Shrikhand`
- **Texte courant :** `Roboto`
- **Couleurs principales :**
  - Primaire : `#9356DC`
  - Secondaire : `#FF79DA`
  - Tertiaire : `#99E2D0`

## 🛠️ Stack technique

- **HTML5**
- **CSS3** (aucun `style` inline autorisé)
- **SASS** (architecture modulaire recommandée)
- **Mobile First** (responsive jusqu'au desktop)
- **Git** pour le versioning
- **GitHub Pages** pour le déploiement

## ✅ Contraintes techniques

- **Aucun framework ni JavaScript**.
- Validations **W3C HTML/CSS** sans erreurs.
- Compatible avec **Chrome** et **Firefox** dernière version.
- Responsive **mobile / tablette / desktop**.

## 🗂️ Structure du projet

ohmyfood/
│
├── index.html ← Page d'accueil principale
│
├── Pages individuelles des restaurants
│ ├── restaurant-1.html
│ ├── restaurant-2.html
│ ├── restaurant-3.html
│ └── restaurant-4.html
│
├── assets/ ← Fichiers statiques (visuels, styles compilés, icônes)
│ ├── images/  
│ │ ├── logo
| | | |── ohmyfood.png
| | | |── ohmyfood@2x.svg
│ │ ├── restaurants
| | | |── jay-wennington-N_Y88TWmGwA-unsplash.jpg
| | | |── louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg
| | | |── stil-u2Lp8tXIcjw-unsplash.jpg
| | | |── toa-heftiba-DQKerTsQwi0-unsplash.jpg
│ |── style.css ← Fichier CSS généré à partir de Sass
│
├── sass/ ← Source SASS, organisé façon modulaire
│ ├── boutons.scss/
│ ├── loader.scss/
│ ├── media-queries.scss/
│ ├── mobile-first.scss/
│ ├── restaurant.scss/
│ └── main.scss ← Fichier principal qui importe tous les autres
│
├── README.md ← Le fichier explicatif de ton projet

## 📆 Planning

- **Budget alloué :** 20 000 €
- **Livraison version 1 :** sous 1 mois
- **Validation :** Paul (chef de projet)

## 📡 Déploiement

Le site sera accessible ici dès la mise en ligne :
👉

## 🤝 Contribuer

Ce projet est réalisé dans un cadre pédagogique. Les contributions ne sont pas ouvertes pour l’instant.

## 🧾 Licence

Ce projet est fictif et réalisé dans le cadre d’une formation. Toute ressemblance avec une entreprise existante est purement... intentionnelle 😄

# ohmyfood
