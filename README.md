# URL Shortener App

A simple full-stack URL shortening application built with React on the frontend and Express + MongoDB on the backend.

The app lets users:
- enter a long URL
- generate a short code
- view all shortened links
- delete existing shortened links

## Tech Stack

- Frontend: React, Vite, Axios
- Backend: Node.js, Express
- Database: MongoDB with Mongoose

## Project Structure

```text
BackendSheriyans/
├── Client/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── Server/
│   ├── src/
│   ├── Server.js
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites

Before running the app, make sure you have:
- Node.js installed
- npm installed
- MongoDB running locally or a MongoDB Atlas connection string

## Backend Setup

1. Open a terminal and go to the server folder:

```bash
cd Server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the `Server` folder with your MongoDB connection string:

```env
MONGO_URI=mongodb://localhost:27017/url-shortener
```

4. Start the backend server:

```bash
node Server.js
```

The server runs on `http://localhost:3000`.

## Frontend Setup

1. Open a second terminal and go to the client folder:

```bash
cd Client
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm run dev
```

The frontend runs on `http://localhost:5173`.

## API Endpoints

### Create a shortened URL

```http
POST /api/url
Content-Type: application/json
```

Request body:

```json
{
  "url": "https://example.com/very/long/url"
}
```

### Get all URLs

```http
GET /api/url
```

### Delete a URL

```http
DELETE /api/url/:id
```

## Notes

- The backend is configured to accept requests from the frontend at `http://localhost:5173`.
- The app currently uses a simple short-code generator and stores URLs in MongoDB.

## License

This project is for learning and demo purposes.


Developed By Prince YAduvanshi