# Notes Web App

A full-stack MERN Notes application that allows users to create, view, edit, delete, and search notes. The application is built with React, Node.js, Express, and MongoDB and is deployed using Vercel (frontend) and Render (backend).

---

## Live Demo

- **Frontend:** `https://notes-web-app-nine.vercel.app/`
- **Backend API:** `https://notes-web-app-dkev.onrender.com`

---

# Features

- Create new notes
- View all notes
- Edit existing notes
- Delete notes
- Search notes instantly
- Responsive UI
- RESTful API
- MongoDB database integration
- Environment variable configuration
- Fully deployed application

---

# Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

# Project Structure

```
notes-web-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/jdcodebase/notes-web-app.git
```

Move into the project directory:

```bash
cd notes-web-app
```

---

## Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

---

## Frontend Setup

Open a new terminal and navigate to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

---

# API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/notes`     | Get all notes |
| POST   | `/api/notes`     | Create a note |
| PUT    | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

# Future Improvements

- User authentication (JWT)
- Pin notes
- Categories/Tags
- Dark mode
- Archive notes
- Toast notifications
- Pagination
- Rich text editor

---

# What I Learned

During this project, I gained practical experience with:

- Building REST APIs using Express.js
- MongoDB CRUD operations with Mongoose
- Connecting React to a backend using Axios
- React state management with Hooks
- Environment variables
- CORS configuration
- Deploying frontend and backend applications
- Debugging production deployment issues

---

# Author

**Jatin Dhamija**

GitHub: https://github.com/jdcodebase

LinkedIn: https://www.linkedin.com/in/jatindhamija/

---

## Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.
