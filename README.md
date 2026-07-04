# Movie Catalogue Application

A full-stack Movie Catalogue application where users can browse movies and admins can manage the catalogue. Built with React, TypeScript, Node.js, and MongoDB.

🔗 **Live Demo:** https://movie-catalog-application-blush.vercel.app  
🔗 **Backend API:** https://movie-catalog-application.onrender.com

---

## Project Structure
FullStack/
├── client/     # Frontend — React + TypeScript
└── server/     # Backend — Node.js + Express

📄 [`client/README.md`](./client/README.md) — Frontend documentation  
📄 [`server/README.md`](./server/README.md) — Backend documentation

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

## Features

| Feature           | User | Admin |
| ----------------- | ---- | ----- |
| Browse movies     | ✅   | ✅    |
| View movie detail | ✅   | ✅    |
| Add movie         | ❌   | ✅    |
| Update movie      | ❌   | ✅    |
| Delete movie      | ❌   | ✅    |

---

## Deployment

| Layer    | Platform | URL |
| -------- | -------- | --- |
| Frontend | Vercel   | https://movie-catalog-application-blush.vercel.app |
| Backend  | Render   | https://movie-catalog-application.onrender.com |

---

## Getting Started Locally

### 1. Clone the repo
```bash
git clone https://github.com/Allwin-d/Movie-Catalog-Application.git
cd Movie-Catalog-Application
```

### 2. Run the backend
```bash
cd server
npm install
npm run dev
```

### 3. Run the frontend
```bash
cd client
npm install
npm run dev
```

---

## Future Features
- 🔍 Search and filter movies by genre, language, year, and rating
- 💬 Comment section on movie detail page
- 📄 Pagination for the movie list

---

## Author
Built by **Allwin** 🚀
