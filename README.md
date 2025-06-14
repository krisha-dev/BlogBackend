
# Blog CRUD Backend API

A simple RESTful API for managing blog posts built with **Node.js**, **Express**, **MongoDB**, and **JWT** authentication. This project supports full **CRUD operations**, middleware for logging and error handling, and route protection for authenticated users.

---

## Features

- User **Register** and **Login** with JWT
- Create, Read, Update, Delete blog posts
- Logging middleware using `morgan`
- Error-handling middleware
- Route protection for authenticated users

---

## Folder Structure

```
blog-backend/
├── controllers/
│   ├── authController.js
│   └── blogController.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   └── logger.js
├── models/
│   └── Blog.js
├── routes/
│   ├── authRoutes.js
│   └── blogRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/blog-backend.git
cd blog-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the Server

```bash
npm run dev
```

---

## Authentication Routes

### POST `/api/auth/register`

Registers a user.

**Body** (JSON):
```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

### POST `/api/auth/login`

Logs in a user and returns a JWT.

**Body** (JSON):
```json
{
  "email": "tony@stark.com",
  "password": "avengers"
}
```

---

## Blog Routes (Protected)

All blog routes require a `Bearer Token` in the Authorization header.

### Example Header:
```
Authorization: Bearer <jwt_token>
```

---

### POST `/api/blogs`

Create a blog post.

**Body:**
```json
{
  "title": "My First Cooking Blog",
  "content": "This is my cooking blog content.",
  "author": "tony@stark.com"
}
```

---

### GET `/api/blogs`

Fetch all blog posts.

---

### GET `/api/blogs/:id`

Fetch a blog by ID.

---

### PUT `/api/blogs/:id`

Update a blog by ID.

**Body:**
```json
{
  "title": "Updated Blog",
  "content": "Updated content",
  "author": "tony@stark.com"
}
```

---

### DELETE `/api/blogs/:id`

Delete a blog by ID.

---

## 🧪 Sample Test Data

Use [Postman](https://www.postman.com/) to test endpoints.

1. **Register a new user**
2. **Login** to get JWT token
3. **Pass token** in `Authorization` header
4. **Test blog CRUD routes**

---

## .gitignore

Your `.gitignore` file should contain:

```
node_modules/
.env
*.log
```

---

## Author

**Krisha Devannavar**
