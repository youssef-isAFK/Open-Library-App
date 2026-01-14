# Open Library App

Application web Angular permettant de rechercher des livres via l'API OpenLibrary.

## Description

Cette application offre aux utilisateurs la possibilité de rechercher des livres à partir de différents critères (titre, auteur, mots-clés, ISBN, etc.) et d'afficher les résultats sous une forme ergonomique et structurée.

## Fonctionnalités

- **Affichage des livres**: Visualisation de la liste des livres d'informatique avec couverture et titre
- **Recherche par titre**: Filtrage des livres par titre
- **Recherche par année**: Filtrage des livres par année de première édition
- **Détails du livre**: Affichage complet des informations d'un livre sélectionné (titre, sous-titre, année d'édition, description, etc.)
- **Responsive Design**: Interface adaptée à tous les appareils

## Structure du Projet

```
open-library-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── head-bar/           # Barre d'en-tête
│   │   │   ├── search-bar/         # Barre de recherche
│   │   │   ├── book-list/          # Liste des livres
│   │   │   └── book-details/       # Détails du livre
│   │   ├── models/
│   │   │   └── book.interface.ts   # Interface Book
│   │   ├── services/
│   │   │   └── book.service.ts     # Service de gestion des livres
│   │   ├── app.component.*
│   │   ├── app.module.ts           # Module principal
│   │   └── app-routing.module.ts   # Configuration du routage
│   ├── styles.css                  # Styles globaux
│   ├── index.html
│   └── main.ts
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clonez le repository
2. Installez les dépendances:
   ```bash
   npm install
   ```

## Démarrage de l'application

Lancez le serveur de développement:
```bash
npm start
```

Accédez à l'application à l'adresse: `http://localhost:4200/`

## Construction pour la production

```bash
npm run build
```

Les fichiers compilés seront disponibles dans le répertoire `dist/`.

## API utilisée

L'application utilise l'API **OpenLibrary** pour récupérer les données des livres:
- https://openlibrary.org/subjects/computers.json
- https://openlibrary.org/works/{id}.json
- https://openlibrary.org/search.json

## Technologies utilisées

- **Angular 16+**: Framework JavaScript
- **TypeScript**: Langage de programmation
- **RxJS**: Programmation réactive
- **CSS3**: Styles et responsive design
- **HttpClient**: Requêtes HTTP

## Interface Book

```typescript
interface Book {
  key: string;                    // Identifiant du livre
  title: string;                  // Titre du livre
  edition_count: number;          // Nombre d'éditions
  cover_id: number;               // ID de la couverture
  first_publish_year: number;     // Année de première édition
  subtitle: string;               // Sous-titre
  description: string;            // Description du livre
}
```

## Composants

### HeadBarComponent
Affiche le titre de l'application en haut de page.

### SearchBarComponent
Fournit une interface de recherche avec:
- Champ de recherche par titre
- Champ de recherche par année de publication

### BookListComponent
Affiche la liste des livres sous forme de grille avec:
- Image de couverture
- Titre du livre
- Informations supplémentaires (auteur, année, nombre d'éditions)
- Navigation vers les détails du livre au clic

### BookDetailsComponent
Affiche les détails complets d'un livre:
- Image de couverture en grand format
- Titre et sous-titre
- Auteur(s)
- Année de publication
- Description complète
- Sujets/catégories
- Autres informations (ISBN, nombre de pages, langues, etc.)

## Service Book

Le service `BookService` fournit les méthodes suivantes:

- `getBooks()`: Récupère la liste des livres d'informatique
- `getBookById(id: string)`: Récupère un livre par son ID
- `searchByTitle(title: string)`: Recherche par titre
- `searchByYear(year: number)`: Recherche par année
- `searchByTitleAndYear(title: string, year: number)`: Recherche combinée

## Routage

- `/`: Affiche la liste des livres
- `/book-details/:id`: Affiche les détails d'un livre sélectionné

## Auteur

Créé dans le cadre de la formation Angular à l'IHEC.

## Licence

MIT License

## Notes

- Les images de couverture sont téléchargées depuis OpenLibrary Covers API
- Une image par défaut s'affiche si la couverture n'est pas disponible
- L'application est entièrement responsive et fonctionne sur tous les appareils
