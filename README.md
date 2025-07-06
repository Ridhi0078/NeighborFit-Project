# 🏡NeighborFit

NeighborFit is a full-stacck application that helps users find neighborhoods that match their lifestyle preferences. It allows users to fill out a preference form based on their lifestyle and preferences or contribute by creating their own neighborhood listings.

---

## Live Demo
- 🔗[Backend Url](https://neighborfit-project-1.onrender.com)
- 🔗[Frontend Url](https://neighborfit-project-2.onrender.com)

---

## 🚀Features
- User Authentication using JWT
- SignUp/Login Functionality
- Smart Matching Algorithm based on various lifestyle parameters
- Add new neighborhoods with attributes
- Responsive UI with Tailwind CSS
- Secure APIs using Express.js and MongoDB

---

## Tech Stack

**Frontend:**

- `React.js` ➤ Used for building user interfaces.
- `Tailwind CSS` ➤ A utility-first CSS framework that enables rapid UI development with responsive design.
- `React Router DOM` ➤ Handles client side routing, allowing users to navigate between pages like login, logout, preferences etc.

**Backend:**

- `Node.js` ➤ Used to run backend server
- `Express.js` ➤ Flexible Node.js framework used to build RESTful APIs
- `MongoDB` ➤ NoSQL database used to store users and neighborhood data
- `Mongoose` ➤ Simplifies database interactions 
- `JWT (jsonwebtoken)` ➤ Used for secure user authentication via JSON Wen Tokens.
- `dotenv` ➤ Loads environment variables from .env files to manage sensitive data securely.
- `bcrypt.js` ➤ Library to hash and compare passwords securely before stroing them in the database.

---

## Setup Instructions

**Clone this Repository**
```bash
git clone https://github.com/Ridhi0078/NeighborFit-Project.git
```

**Backend Setup**

```bash
cd backend
npm install
```
Create a `.env` file in backend folder and add

```bash
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN= anything
ATLASDB_URL=your_connection_string
```
Start the backend server:
```bash
node server.js / npm start
```

**Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

After deploying the backend site, create `.env` file in the frontend folder

```bash
VITE_API_URL=your backend url
```
Integrate this in the frontend files where we have to fetch data from the localhost, in place of localhost:3000 add VITE_API_URL so that frontend fetch data from the deployed backend.

## 📡 API Endpoints

| Method | Endpoint              | Description                            |
|--------|------------------------|----------------------------------------|
| POST   | `/api/user/signup`     | Register a new user                    |
| POST   | `/api/user/login`      | Login and receive JWT                  |
| GET    | `/api/user/:id`        | Get user by ID                         |
| POST   | `/api/neighbour/`      | Create a new neighborhood              |
| GET    | `/api/neighbour/`      | Get all neighborhoods                  |
| POST   | `/api/match`           | Match user preferences to neighborhoods |

## Authentication
- After login, a JWT token is stored in `localstorage`
- Protected routes require a token in the `Authorization` header like:

```bash
Authorization: Bearer <token>
```

## Matching algorithm
Matches are determined by calculationg the weighted similarity between the user's preferences and the attributes of each neighborhood.

## Deployment

**Backend**
- Push your code to Github
- Go to https://render.com and create your account
- Connect your Github to Render and choose your backend repo

## 🚀 Render Dynamic Site (Backend) Deployment Settings

| Setting         | Value                          |
|-----------------|---------------------------------|
| **Name**        | neighborhood-backend           |
| **Environment** | Node                           |
| **Branch**      | `main` or your chosen branch   |
| **Root Directory** | backend                     |
| **Build Command** | `npm install`                |
| **Start Command** |  `node server.js'            |

- Add environment variable by uploading the `.env` file
- Click "Create Web Services"
- After Deployment succeeds you will get a public URL for backend.

**Frontend**
- Make sure that your whole code is in Github
- Go to render and click on New-> "Static SIte"

## 🌐 Render Static Site (Frontend) Deployment Settings

| Setting            | Value                           |
|--------------------|----------------------------------|
| **Name**           | neighborhood-frontend           |
| **Branch**         |  `main` or your working branch   |
| **Root Directory** |  frontend                       |
|  **Build Command**  | `npm run build`                |
| **Publish Directory** | `dist`                       |

- Add environment variables as also explained earlier, i.e. the deployed backend's URL that is defined in the `.env` file so as to fetch data from backend.
- After successful deployement you will get a public URL for frontend.

## Future Improvements
- Add Google maps Integration.
- Matching Algorithm can be improved through Machine learning.
- Currently only supports Delhi Neighborhoods.
