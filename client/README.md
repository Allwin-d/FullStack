# Movie Catalogue Application — Documentation

This document covers the core pages and components of the Movie Catalogue Application.

---

## 1. Home Page

### Purpose
The Home Page is the main page of the Movie Catalogue Application. It displays all available movies fetched from the backend API.

### Technologies Used
- React.js
- TypeScript
- TanStack Query
- Axios
- Tailwind CSS

### Functionality
- Fetches movie data from the backend using a GET API request.
- Displays movies using reusable `MovieTile` components.
- Shows a loading message while data is being fetched.
- Displays an error message if the API request fails.
- Dynamically renders movie information such as title, image, genre, director, release year, duration, and rating.

### API Used
```http
GET /movies
```

### Outcome
Users can browse the complete movie catalogue and view movie information in an organized layout.

---

## 2. Movie Details Page

### Purpose
The Movie Details Page displays complete information about a selected movie.

### Technologies Used
- React.js
- TypeScript
- TanStack Query
- Axios
- React Router
- Tailwind CSS

### Functionality
- Retrieves the movie ID from the URL using React Router(useParams).
- Fetches the selected movie's details from the backend API.
- Displays movie information such as title, poster, release year, language, director, duration, genre, and rating.
- Displays additional sections including:
  - Movie Metadata
  - Movie Statistics
  - Cast Information
  - Synopsis
- Shows a loading message while data is being fetched.
- Displays an error message if the API request fails.

### API Used
```http
GET /movies/:id
```

### Outcome
Users can view detailed information about a specific movie, including its cast, synopsis, statistics, and other metadata.

---

## 3. Register Page

### Purpose
The Register Page allows new users to create an account in the Movie Catalogue Application.

### Technologies Used
- React.js
- TypeScript
- TanStack Query (`useMutation`)
- Axios
- Tailwind CSS

### Functionality
- Collects user information such as name, email, password, and role.
- Manages form data using React state.
- Sends registration data to the backend using a POST API request.
- Uses React Query's `useMutation` for handling user registration.
- Supports role selection (User/Admin).
- Displays a user-friendly registration form with icons and responsive styling.

### API Used
```http
POST /register
```

### Outcome
Users can create a new account and register themselves in the Movie Catalogue Application.

---

## 4. MovieTile Component

### Purpose
Displays a movie card in the Home Page.

### Functionality
- Shows movie poster, title, director, genre, duration, and release year.
- Displays movie rating.
- Uses reusable child components for movie information and actions.

### Outcome
Provides a concise overview of a movie within the movie catalogue.

---

## 5. Movie Details Components

### MovieMetaData
Displays movie metadata including release year, language, director, and duration.

### MovieGenre
Displays all genres associated with the selected movie using styled tags.

### MovieStatistics
Displays key movie statistics such as rating, duration, and release year.

### Cast
Displays the list of cast members along with their initials and names.

### Synopsis
Displays the movie's synopsis or storyline description.