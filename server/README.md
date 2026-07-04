# Movie Catalogue Application — Backend Documentation

A RESTful API backend for the Movie Catalogue Application. Built with Node.js, Express.js, and MongoDB. Handles movie management and user authentication with role-based access control.

🔗 **Frontend:** https://movie-catalog-application-blush.vercel.app  
🔗 **Backend API:** https://movie-catalog-application.onrender.com

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JSON Web Token (JWT)
- **Password Hashing:** Bcryptjs
- **Input Validation:** Express Validator

---

## Deployment

| Layer    | Platform | URL |
|----------|----------|-----|
| Frontend | Vercel   | https://movie-catalog-application-blush.vercel.app |
| Backend  | Render   | https://movie-catalog-application.onrender.com |

---

## Environment Variables

Create a `.env` file in the root of your project:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

---

## Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/movie-catalogue-backend.git

# Navigate into the project
cd server

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production mode
npm start
```

---

## Folder Structure

```
├── controller/
│   ├── authController.ts       # Register & login logic
│   └── MovieController.ts      # Movie CRUD logic
├── Db/
│   └── db.ts                   # MongoDB connection
├── middleware/
│   ├── adminMiddleware.ts      # Role-based access middleware
│   └── authMiddleware.ts       # JWT verification middleware
├── models/
│   ├── MovieModel.ts           # Movie schema
│   └── User.ts                 # User schema
├── routes/
│   ├── authRoutes.ts           # Auth API routes
│   └── MovieRoutes.ts          # Movie API routes
├── types/
│   └── express.d.ts            # Express type extensions
├── .env                        # Environment variables
├── .gitignore
├── app.ts                      # Express app setup
├── package.json
└── tsconfig.json
```
---

## Database Schema

### User Schema

| Field     | Type   | Required | Notes                        |
|-----------|--------|----------|------------------------------|
| name      | String | ✅       |                              |
| email     | String | ✅       | Unique                       |
| password  | String | ✅       | Hashed with bcryptjs         |
| role      | String | ✅       | `"Admin"` or `"User"`        |

### Movie Schema

| Field       | Type     | Required | Notes                        |
|-------------|----------|----------|------------------------------|
| title       | String   | ✅       |                              |
| director    | String   | ✅       |                              |
| language    | String   | ✅       |                              |
| releaseYear | Number   | ✅       |                              |
| genre       | [String] | ✅       | Array of genre strings       |
| cast        | [String] | ❌       | Array of cast member names   |
| rating      | Number   | ✅       | Value between 1.0 and 10.0   |
| duration    | Number   | ✅       | In minutes                   |
| synopsis    | String   | ❌       |                              |
| image       | String   | ❌       | Movie poster URL             |

---

## API Reference

### Base URL
https://movie-catalog-application.onrender.com/api

---

### Auth Routes

#### Register
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "Afiya Allwin",
  "email": "afiya@gmail.com",
  "password": "yourpassword",
  "role": "Admin"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User Registered Successfully"
}
```

---

#### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "afiya@gmail.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Logged In Successfully",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

> The JWT token contains `userId`, `userName`, `email`, and `role` in its payload.

---

### Movie Routes

#### Get All Movies
```http
GET /api/movies
```
**Access:** Public  

**Response:**
```json
{
  "success": true,
  "totalMovies": 8,
  "data": [
    {
      "_id": "64abc123",
      "title": "Joker",
      "director": "Todd Phillips",
      "language": "English",
      "releaseYear": 2019,
      "genre": ["Crime", "Drama", "Thriller"],
      "cast": ["Joaquin Phoenix", "Robert De Niro"],
      "rating": 8.4,
      "duration": 122,
      "synopsis": "A struggling comedian descends into madness...",
      "image": "https://image.tmdb.org/..."
    }
  ]
}
```

---

#### Get Movie By ID
```http
GET /api/movies/:id
```
**Access:** Public  

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64abc123",
    "title": "Joker",
    ...
  }
}
```

---

#### Add Movie
```http
POST /api/movies
Authorization: Bearer <token>
```
**Access:** Admin only  

**Request Body:**
```json
{
  "title": "Joker",
  "director": "Todd Phillips",
  "language": "English",
  "releaseYear": 2019,
  "genre": ["Crime", "Drama", "Thriller"],
  "cast": ["Joaquin Phoenix", "Robert De Niro"],
  "rating": 8.4,
  "duration": 122,
  "synopsis": "A struggling comedian descends into madness...",
  "image": "https://image.tmdb.org/..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Movie Added Successfully",
  "data": { ... }
}
```

---

#### Update Movie
```http
PUT /api/movies/:id
Authorization: Bearer <token>
```
**Access:** Admin only  

**Request Body:** *(any fields you want to update)*
```json
{
  "title": "Joker",
  "rating": 8.6
}
```

**Response:**
```json
{
  "success": true,
  "message": "Movie Updated Successfully",
  "data": { ... }
}
```

---

#### Delete Movie
```http
DELETE /api/movies/:id
Authorization: Bearer <token>
```
**Access:** Admin only  

**Response:**
```json
{
  "success": true,
  "message": "Movie Deleted Successfully"
}
```

---

## Middleware

### `authMiddleware.ts`
Verifies the JWT token from the `Authorization` header on every protected route. Rejects requests with missing or invalid tokens with a `401 Unauthorized` response.

### `adminMiddleware.ts`
Checks the user's role from the decoded JWT payload. Only allows users with the `"Admin"` role to access protected routes. Returns `403 Forbidden` for unauthorized roles.

---

## Role-based Access Control

| Endpoint              | User | Admin |
|-----------------------|------|-------|
| GET /api/movies       | ✅   | ✅    |
| GET /api/movies/:id   | ✅   | ✅    |
| POST /api/movies      | ❌   | ✅    |
| PUT /api/movies/:id   | ❌   | ✅    |
| DELETE /api/movies/:id| ❌   | ✅    |

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error message here"
}
```

| Status Code | Meaning                              |
|-------------|--------------------------------------|
| 400         | Bad Request — invalid input data     |
| 401         | Unauthorized — missing/invalid token |
| 403         | Forbidden — insufficient role        |
| 404         | Not Found — resource doesn't exist   |
| 500         | Internal Server Error                |

---

## Future Features
- 🔍 Search and filter movies by genre, language, year, and rating
- 💬 Comments API — add, get, and delete comments per movie
- 📄 Pagination support for movie listing

---

## Author
Built by **Allwin** 🚀