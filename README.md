<h1>Student Management App</h1>

## Overview
The Student Management API is a simple RESTful API built using Node.js and Express.  
It allows users to manage student records through standard CRUD operations.

This project demonstrates how to build a backend API, create routes, handle requests, and work with JSON data.

---

## Technologies Used

- Node.js
- Express.js
- Nodemon
- Thunder Client (for API testing)

---

## Project Structure

Student-Management-App
/src/index.mjs
package.json
README.md

---

## Installation

Clone the repository:

git clone https://github.com/RamzaTariq/Student-Management-App.git

Navigate into the project directory:

cd Student-Management-App

Install dependencies:

npm install

---

## Running the Server

Start the development server:

npm run dev

The server will run on:

http://localhost:3000

---

## API Endpoints

### Get All Students

GET /students

Returns a list of all students.

---

### Get Student by ID

GET /students/:id

Example:

GET /students/1

---

### Create a Student

POST /students

Example request body:

{
  "username": "jsmith",
  "course": "Computer Science",
  "module": "CS101"
}

---

### Update a Student

PUT /students/:id

Example:

PUT /students/3

Request body:

{
  "username": "brown",
  "course": "Cyber Security",
  "module": "CY202"
}

---

### Delete a Student

DELETE /students/:id

Example:

DELETE /students/3

---

## Example Student Object

{
  "id": 1,
  "username": "jburns",
  "course": "information technology",
  "module": "A001"
}

---

## Testing the API

The API can be tested using:

- Thunder Client
- Browser (for GET requests)

---

## Author

Ramza Tariq

GitHub Repository:
https://github.com/RamzaTariq/Student-Management-App