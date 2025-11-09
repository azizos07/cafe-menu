# Menu Café Ghrib

Ce projet contient deux versions du menu du Café Ghrib :

## 📁 Fichiers

### 1. `index.html.html` (Version originale)
- Version HTML statique classique
- Tous les produits organisés par catégories
- Design simple et épuré
- **Conservé pour ne pas perdre votre travail**

### 2. `MenuCafeGhrib.jsx` (Nouvelle version React)
- Version moderne avec React et Framer Motion
- Interface interactive avec navigation par catégories
- **Générateur de QR code intégré** ✨
- Tous les produits de l'ancien menu intégrés

## 🚀 Utilisation avec GitHub Pages

### Option 1 : Version React avec Build (Recommandée pour production)

1. **Installer les dépendances** :
```bash
npm install
```

2. **Build du projet** :
```bash
npm run build
```

3. **Déployer sur GitHub Pages** :
   - Le dossier `dist` contient les fichiers à déployer
   - Configurez GitHub Pages pour pointer vers le dossier `dist`
   - Ou utilisez GitHub Actions pour déployer automatiquement

### Option 2 : Version HTML Simple (Plus facile, sans build)

1. **Utiliser `menu.html`** :
   - Ce fichier charge React via CDN (pas besoin de build)
   - Fonctionne directement sur GitHub Pages
   - Renommez-le en `index.html` si vous voulez qu'il soit la page d'accueil

2. **Configurer GitHub Pages** :
   - Allez dans Settings > Pages de votre repo GitHub
   - Sélectionnez la branche `main` ou `gh-pages`
   - Sélectionnez le dossier racine `/ (root)`
   - Le site sera accessible à : `https://votre-username.github.io/votre-repo/`

3. **Le QR code** :
   - Cliquez sur l'icône QR code dans le header du menu
   - Le QR code généré pointe automatiquement vers l'URL GitHub Pages de votre menu
   - Vous pouvez imprimer ou partager ce QR code
   - **Le QR code s'adapte automatiquement à votre URL GitHub Pages !**

### Option 3 : Version HTML Originale (Backup)

- Le fichier `index.html.html` est votre version originale
- Vous pouvez le renommer en `index.html` si vous préférez cette version
- Ou gardez-le comme backup de votre travail original

## 📱 Fonctionnalités du QR Code

- **Génération automatique** : Le QR code utilise l'URL actuelle de la page
- **Partage facile** : Les clients peuvent scanner le QR code pour accéder au menu
- **Modal élégant** : Affichage dans une fenêtre modale avec animation
- **Compatible GitHub Pages** : Fonctionne parfaitement avec les URLs GitHub Pages

## 🎨 Personnalisation

Vous pouvez modifier :
- Les images de fond des catégories dans le tableau `categories`
- Les produits et prix dans l'objet `produits`
- Les couleurs dans les classes Tailwind CSS

## 📝 Notes

- L'ancien fichier `index.html.html` est conservé pour ne pas perdre votre travail
- Le nouveau menu React contient tous les produits de l'ancien menu
- Le QR code s'adapte automatiquement à l'URL de déploiement

