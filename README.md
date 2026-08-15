# Notes App

A full-stack Notes application with a **React web client**, **Node.js/Express backend**, **MongoDB database**, and a **React Native Android mobile app**.

The application allows users to create, view, edit, delete, and search notes. The web application and backend are deployed, while the Android application can be installed directly using the APK.

---

## Live Demo

- **Web App:** `https://notes-web-app-nine.vercel.app/`
- **Backend API:** `https://notes-web-app-dkev.onrender.com`

---

## Android App

The project also includes a **React Native Android application** located inside the `app/` directory.

The mobile application uses the same REST API and MongoDB backend as the web application.

### Mobile Tech Stack

- React Native
- TypeScript
- Axios
- REST API
- Android

### Download Android APK

The latest Android APK is available from the project's GitHub Releases.

**[Download Android APK](./releases/app-release.apk)**

After downloading the APK:

1. Download the `.apk` file on your Android phone.
2. Open the downloaded APK.
3. If Android asks for permission to install apps from that source, allow it.
4. Install the application.
5. Open **Notes App** and start using it.

> The APK connects to the deployed backend API, so the application can communicate with the server even when your phone is not connected to your development computer.

---

# Features

### Web & Mobile

- Create new notes
- View all notes
- Edit existing notes
- Delete notes
- Search notes instantly
- REST API integration
- MongoDB database integration

### Web App

- Responsive UI
- React + Vite
- Tailwind CSS
- Axios
- Loading/skeleton state
- Search and sorting

### Android App

- React Native
- TypeScript
- Native Android application
- API integration with the existing backend
- Mobile-friendly UI

---

# Tech Stack

## Frontend — Web

- React
- Vite
- Tailwind CSS
- Axios

## Mobile

- React Native
- TypeScript
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment

- Vercel — Web frontend
- Render — Backend API
- GitHub Releases — Android APK distribution

---

# Project Structure

```text
notes-app/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
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
│   ├── middleware/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── app/
│   ├── android/
│   ├── ios/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── services/
│   │   └── types/
│   ├── App.tsx
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/jdcodebase/notes-web-app.git
```

Move into the project directory:

```bash
cd notes-app
```

---

# Backend Setup

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

The API will run locally on:

```text
http://localhost:8000
```

---

# Web Frontend Setup

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
VITE_API_URL=http://localhost:8000/api
```

Start the frontend:

```bash
npm run dev
```

The web application will normally be available at:

```text
http://localhost:5173
```

---

# React Native Android Setup

Navigate to the mobile application:

```bash
cd app
```

Install dependencies:

```bash
npm install
```

Start Metro:

```bash
npm start
```

Open another terminal and run:

```bash
npm run android
```

The React Native project is intentionally kept in **TypeScript** because the project was created with `App.tsx` and `tsconfig.json`.

---

# Android APK

## Build a Release APK

From the `app` directory, build the Android release APK using the React Native Android Gradle project.

The generated APK will be located under:

```text
app/android/app/build/outputs/apk/release/
```

The exact APK filename may vary depending on the Android/Gradle configuration.

### Important

Before creating the APK for other people to install, make sure the mobile application is configured to use the **deployed backend API**:

```text
https://notes-web-app-dkev.onrender.com
```

Do not use:

```text
http://localhost:8000
```

for the distributed APK.

`localhost` on a user's phone refers to the phone itself, not your development computer.

---

# GitHub APK Distribution

The APK should preferably **not** be committed directly into the Git repository.

Instead:

1. Build the release APK.
2. Go to the GitHub repository.
3. Create a new **Release**.
4. Give it a version such as `v1.0.0`.
5. Upload the `.apk` file as a Release asset.
6. Publish the Release.
7. The README download button can then point to:

```text
../../releases/latest
```

This keeps large binary files out of the normal Git history while still giving users an easy way to download the application.

---

# API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/notes`     | Get all notes |
| POST   | `/api/notes`     | Create a note |
| PUT    | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

The backend CRUD API has been tested successfully with Postman, including create, read, update, delete, validation, and 404 handling.

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
- Push notifications
- Offline support
- App icon and splash screen improvements
- Google Play Store deployment

---

# What I Learned

During this project, I gained practical experience with:

- Building REST APIs using Express.js
- MongoDB CRUD operations with Mongoose
- Connecting React to a backend using Axios
- React state management with Hooks
- React Native development
- TypeScript in React Native
- Connecting a mobile application to a REST API
- Environment variables
- CORS configuration
- Loading and error states
- Responsive web UI
- Android application development
- Building and distributing an Android APK
- Deploying frontend and backend applications
- Debugging development and production issues
- Git and GitHub workflow

---

# Author

**Jatin Dhamija**

GitHub: `https://github.com/jdcodebase`

LinkedIn: `https://www.linkedin.com/in/jatindhamija/`

---

## Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.
