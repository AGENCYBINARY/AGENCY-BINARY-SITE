# AGENCY BUILDLAB - Site Web Next.js

Un site web moderne pour AGENCY BUILDLAB construit avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Interface élégante qui s'adapte à tous les écrans
- **TypeScript** - Code typé pour une meilleure maintenance
- **Tailwind CSS** - Framework CSS moderne pour un styling rapide
- **Composants d'agence** - Sections Hero, Services, Portfolio et Contact
- **Navigation responsive** - Menu mobile et desktop
- **Formulaire de contact** - Interface utilisateur interactive
- **SEO optimisé** - Meta tags et structure optimisés pour les moteurs de recherche

## 📋 Sections du site

### 🏠 Hero Section
- Présentation de l'agence
- Appels à l'action
- Statistiques clés (projets, clients, expérience)

### 💼 Services
- Développement Web
- E-commerce
- Applications Web
- Maintenance & Support

### 🎨 Portfolio
- Exemples de projets réalisés
- Technologies utilisées
- Catégories variées

### 📞 Contact
- Formulaire de contact interactif
- Informations de contact
- Adresse, téléphone, email

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React pour le développement web
- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Superset de JavaScript avec typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Outil de transformation CSS
- **ESLint** - Linter pour maintenir la qualité du code

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ installé sur votre machine
- npm ou yarn comme gestionnaire de paquets

### Installation

1. Les dépendances sont déjà installées
2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

### Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Construire l'application pour la production
npm run start    # Lancer l'application en mode production
npm run lint     # Vérifier et corriger le code avec ESLint
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css     # Styles globaux avec Tailwind
│   ├── layout.tsx      # Layout principal de l'application
│   └── page.tsx        # Page d'accueil
└── components/
    ├── Navbar.tsx      # Navigation principale
    ├── Hero.tsx        # Section hero
    ├── Services.tsx    # Section services
    ├── Portfolio.tsx   # Section portfolio
    ├── Contact.tsx     # Section contact et formulaire
    └── Footer.tsx      # Pied de page
```

### 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- **Primary** : Bleu (personnalisable)
- **Secondary** : Gris (personnalisable)

### Contenu
Modifiez le contenu dans les composants :
- Textes d'AGENCY BUILDLAB dans `Hero.tsx`
- Services proposés dans `Services.tsx`
- Projets dans `Portfolio.tsx`
- Informations de contact dans `Contact.tsx`

### Styles
- Utilisez les classes Tailwind CSS pour modifier l'apparence
- Styles globaux dans `src/app/globals.css`

## 🌐 Déploiement

Le site est prêt pour être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS**
- **Tout hébergeur supportant Node.js**

### Déploiement sur Vercel

1. Connecter votre repository GitHub
2. Importer le projet sur Vercel
3. Le déploiement se fait automatiquement

## 📞 Support

Pour toute question ou assistance :
- Consultez la documentation Next.js
- Vérifiez les issues GitHub
- Contactez l'équipe de développement

## 📄 Licence

Ce projet est un template de base pour sites d'agence web.

---

**Votre site d'agence est maintenant prêt !** 🎉

Le serveur de développement est en cours d'exécution sur http://localhost:3000