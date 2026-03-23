# Task Manager API 🚀

A RESTful API for managing tasks built with Node.js and Express.

This project provides a backend system that allows users to create, retrieve, update, and delete tasks.

---

## 📌 Project Overview

Task Manager API is a backend application that manages tasks using RESTful API architecture.

It allows users to:

* Create new tasks
* Retrieve all tasks
* Update existing tasks
* Delete tasks

This project was built as part of the **2026 backend training batch**.

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* OpenAPI 3.0 Documentation
* Swagger UI

---

## 🌐 Server

Local development server:

http://localhost:3000

---

## 📚 API Endpoints

### Get All Tasks

GET /api/v1/tasks

Returns a list of all tasks.

---

### Create Task

POST /api/v1/tasks

Creates a new task.

Example Request Body:
```json
{
"title": "Learn Node.js",
"description": "Study Express and MongoDB",
"completed": false
}
```
---

### Update Task

PATCH /api/v1/tasks/{id}

Updates an existing task.

---

### Delete Task

DELETE /api/v1/tasks/{id}

Deletes a task by ID.

---

## 📄 API Documentation

This project uses OpenAPI 3.0 for API documentation.

Interactive documentation is available using Swagger UI.

Example:

http://localhost:3000/api-docs

---

## 🛠 Installation

Clone the repository:

git clone https://github.com/Waleed-Hammad11/task_manager.git

Go to the project folder:

cd task_manager

Install dependencies:

npm install

Run the server:

npm run dev

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

PORT=3000
MONGO_URI=mongodb://localhost:27017/taskManager
JWT_SECRET=MySuperSecretPassword123
NODE_ENV=development

---
```
## 📂 Project Structure

task_manager
│
├── controllers
├── models
├── routes
├── middlewares
├── utils
├── config
│
├── app.js
├── server.js
└── package.json
```
---

## 🧪 Testing the API

You can test the API using:

* Postman
* Swagger UI
* Thunder Client

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Waleed Hammad

GitHub:
https://github.com/Waleed-Hammad11

