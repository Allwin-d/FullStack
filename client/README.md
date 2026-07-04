# Movie Catalogue Application — Documentation

A full-stack Movie Catalogue application where users can browse movies and admins can manage the catalogue. Built with React, TypeScript, Node.js, and MongoDB.

🔗 **Live Demo:** https://movie-catalog-application-blush.vercel.app
🔗 **Backend API:** https://movie-catalog-application.onrender.com

---

## Tech Stack

### Frontend

- React.js + TypeScript
- TanStack Query (React Query)
- Axios
- Tailwind CSS
- React Router DOM
- React Hot Toast
- React Icons

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcryptjs

---

## Deployment

| Layer    | Platform | URL                          |
| -------- | -------- | ---------------------------- |
| Frontend | Vercel   | https://movie-catalog-application-blush.vercel.app  |
| Backend  | Render   | https://movie-catalog-application.onrender.com |

---

## Features

### Role-based Access

| Feature           | User | Admin |
| ----------------- | ---- | ----- |
| Browse movies     | ✅   | ✅    |
| View movie detail | ✅   | ✅    |
| Add movie         | ❌   | ✅    |
| Update movie        | ❌   | ✅    |
| Delete movie      | ❌   | ✅    |

---

## Pages

### 1. Register Page

**Purpose**  
Allows new users to create an account in the Movie Catalogue Application.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useMutation`)
- Axios, Tailwind CSS

**Functionality**

- Collects user information — name, email, password, and role (User / Admin)
- Manages form state using `useState`
- Sends registration data to the backend via POST request
- Navigates to login page on successful registration
- Shows success/error toast notifications

**API**

```http
POST /api/auth/register
```

**Outcome**  
New users can create an account and access the Movie Catalogue Application.

---

### 2. Login Page

**Purpose**  
Allows existing users to sign in to the application.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useMutation`)
- Axios, Tailwind CSS

**Functionality**

- Collects email and password from the user
- Sends credentials to the backend via POST request
- On success, decodes the JWT token using `atob` to extract `userName` and `role`
- Stores the token in `localStorage` for authenticated requests
- Redirects to the Home page on successful login
- Shows success/error toast notifications

**API**

```http
POST /api/auth/login
```

**Outcome**  
Existing users can sign in and access the application based on their role.

---

### 3. Home Page

**Purpose**  
The main page of the application — displays all movies in the catalogue.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useQuery`, `useMutation`)
- Axios, Tailwind CSS

**Functionality**

- Fetches all movies from the backend using `useQuery`
- Displays movies using reusable `MovieTile` components
- Admins see Edit and Delete action buttons on each movie tile
- Normal users only see the View button
- Delete flow uses a confirmation modal before calling the API
- After delete, the movie list is automatically refreshed using `queryClient.invalidateQueries`
- Shows loading and error states

**API**

```http
GET /api/movies
DELETE /api/movies/:id
```

**Outcome**  
Users can browse the complete movie catalogue. Admins can delete movies directly from the list.

---

### 4. Movie Detail Page

**Purpose**  
Displays complete information about a selected movie.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useQuery`)
- Axios, React Router, Tailwind CSS

**Functionality**

- Retrieves movie `id` from the URL using `useParams`
- Fetches the movie's full details from the backend
- Displays:
  - Hero section with poster, title, genre pills, rating badge
  - Stat cards (Rating, Duration, Release Year)
  - Cast chips with colored initials
  - Synopsis section
- Admins see Edit and Delete buttons — normal users don't
- Shows loading and error states

**API**

```http
GET /api/movies/:id
```

**Outcome**  
Users can view full details of any movie. Admins can navigate to edit or trigger the delete modal.

---

### 5. Add Movie Page _(Admin only)_

**Purpose**  
Allows admins to add a new movie to the catalogue.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useMutation`)
- Axios, Tailwind CSS, React Hot Toast

**Functionality**

- Form is split into sections — Basic Info, Genre & Cast, Rating & Duration, Synopsis, Movie Poster
- Genre and Cast use a tag input pattern — type a value and press Enter to add it as a chip, click ✕ to remove
- Manages all form state using `useState`
- Sends movie data to the backend via POST request with JWT auth header
- Shows success/error toast notifications
- Redirects to Home page on success

**API**

```http
POST /api/movies
Authorization: Bearer <token>
```

**Outcome**  
Admins can add new movies to the catalogue with full details.

---

### 6. Update Movie Page _(Admin only)_

**Purpose**  
Allows admins to update an existing movie's details.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useQuery`, `useMutation`)
- Axios, React Router, Tailwind CSS, React Hot Toast

**Functionality**

- Retrieves movie `id` from the URL using `useParams`
- Fetches existing movie data using `useQuery` and pre-fills all form fields via `useEffect`
- Same section layout and tag input pattern as the Add Movie page
- Sends updated data to the backend via PUT request with JWT auth header
- Invalidates both `Movies` and `Movie` queries on success so both list and detail pages refresh
- Shows success/error toast notifications
- Redirects to the movie detail page on success

**API**

```http
GET /api/movies/:id
PUT /api/movies/:id
Authorization: Bearer <token>
```

**Outcome**  
Admins can update any movie's details and see the changes reflected immediately.

---

### 7. Delete Movie _(Admin only)_

**Purpose**  
Allows admins to delete a movie from the catalogue via a confirmation modal.

**Technologies Used**

- React.js, TypeScript
- TanStack Query (`useMutation`)
- Axios, Tailwind CSS

**Functionality**

- Delete icon is present in `MovieActions` component inside each `MovieTile`
- Clicking delete sets `movieToDelete` state in `Home` and shows the `DeleteModal`
- Modal displays the movie title and asks for confirmation
- On confirm, sends DELETE request with JWT auth header
- `isPending` state disables buttons and shows a spinner while the request is in progress
- On success, the movie list is refreshed automatically using `queryClient.invalidateQueries`
- State is lifted to `Home` to avoid prop drilling issues

**API**

```http
DELETE /api/movies/:id
Authorization: Bearer <token>
```

**Outcome**  
Admins can safely delete movies with a confirmation step to prevent accidental deletions.

---

## Components

### Header

Displays the app logo, name, logged-in user's name, and role badge. Present on all pages.

### AppTitle

Hero banner component used across pages — shows page title, description, and a contextual icon or button.

### MovieTile

Displays a single movie card in the Home page list. Contains:

- `MoviePoster` — movie poster image
- `MovieInfo` — title, director, year, duration, genre pills
- `MovieActions` — rating, view/edit/delete icons (role-based)

### MovieActions

Shows action icons for each movie tile. Renders Edit and Delete only for Admins. View is always visible.

### DeleteModal

Full-screen overlay confirmation modal triggered before deleting a movie. Shows the movie title and two buttons — Cancel and Yes, delete.

### Movie Detail Components

| Component         | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `MovieMetaData`   | Displays year, language, director, duration |
| `MovieGenre`      | Displays genre tags with colored pills      |
| `MovieStatistics` | Stat cards for rating, duration, and year   |
| `Cast`            | Cast member chips with colored initials     |
| `Synopsis`        | Movie plot/description section              |

---

## Folder Structure

```
src/
├── components/
│   ├── AppTitle/
│   ├── Cast/
│   ├── DeleteModal/
│   ├── Header/
│   ├── Image/
│   ├── MovieActions/
│   ├── MovieGenre/
│   ├── MovieInfo/
│   ├── MovieMetaData/
│   ├── MoviePoster/
│   ├── MovieStatistics/
│   ├── MovieTile/
│   └── Synopsis/
├── constants/
│   └── constantVariables.ts
├── context/
├── hooks/
│   ├── useAuth.ts
│   └── useAuth.types.ts
├── images/
│   └── icon.png
├── pages/
│   ├── AddMovies/
│   ├── Home/
│   ├── Login/
│   ├── MovieDetail/
│   ├── Register/
│   └── UpdateMovie/
├── types/
├── url/
│   └── url.ts
├── utils/
├── App.tsx
├── index.css
└── main.tsx
```

---

## Future Features

- 🔍 Search and filter movies by genre, language, year, and rating
- 💬 Comment section on movie detail page
- 📄 Pagination for the movie list

---

## Author

Built by Allwin 🚀
