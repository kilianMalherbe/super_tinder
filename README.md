<img src="https://kilianmalherbe.github.io/super_tinder/client/public/tinderLogo.png" width="100px">

# Super Tinder

Super Tinder est un projet fictif permettant à des personnes de rencontrer leur prochain partenaire parmi plusieurs super-héros.

## Technos

- **Front** :

  - React
  - Vite
  - Express / Axios
  - Tailwind css

- **Backend** :
  - Nodemon
  - Mongoose

## Mise en place

### Front :

1. Installer les dépendances (`npm i`) dans le fichier client (`cd client`)
2. Démarrer le serveur de Vite avec un `npm run dev`

### Backend :

1. Installer les dépendances (`npm i`) dans le fichier backend (`cd backend`)
2. Démarrer le serveur node avec un `nodemon server.js`
3. Le backend est une API permettant de récupérer les données de la BDD MongoDB distante

### Endpoints de l'API

- `/tinder/cards/create` : Permet de créer une carte d'héros
- `/tinder/cards/` : Permet de récupérer les cartes d'héros
- `/tinder/users/create` : Permet de créer un utilisateur
- `/tinder/users/update/:id` : Permet de mettre à jour le profil d'un utilisateur avec son ID
- `/tinder/users/:id` : Permet de récupérer un utilisateur via son ID
- `/tinder/users` : Permet d'identifier un utilisateur via son email et mot de passe
