# Task Manager Application

A full-stack Task Manager application built using Laravel (Backend API) and React (Frontend UI).

---

# Features

## Backend (Laravel API)

* Create Task
* Get All Tasks
* Get Single Task
* Update Task
* Delete Task
* Validation and Error Handling
* RESTful APIs
* MySQL Database
* Laravel Migrations
* Eloquent ORM

## Frontend (React)

* Task Listing
* Create Task
* Edit Task
* Delete Task
* Search Tasks
* Filter by Status
* Filter by Priority
* Loading States
* Responsive UI
* Clean Component Structure

## Bonus(optional):
* Laravel API Resources
* Form Request validation
* Docker setup
* Better UI design

---

# Tech Stack

## Backend

* PHP
* Laravel
* MySQL

## Frontend

* React
* Axios
* Bootstrap

---

# Project Structure

task-manager/

├── laravel/                 → Laravel Backend API
├── task-manager-frontend/  → React Frontend

---

# Backend Setup (Laravel)

## Go to backend folder

cd laravel

## Configure database in `.env`


DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

## Run migrations

php artisan migrate


## Start Laravel server

php artisan serve


Backend runs on:

http://127.0.0.1:8000

---

# Frontend Setup (React)

## Go to frontend folder

cd task-manager-frontend

## Start frontend server

npm run dev


Frontend runs on:

http://localhost:5173


---

# API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | /api/tasks      | Create Task     |
| GET    | /api/tasks      | Get All Tasks   |
| GET    | /api/tasks/{id} | Get Single Task |
| PATCH  | /api/tasks/{id} | Update Task     |
| DELETE | /api/tasks/{id} | Delete Task     |

---

# Task Fields

* id
* title
* description
* status
* priority
* due_date
* created_at
* updated_at

---

# Status Values

* todo
* in_progress
* done

---

# Priority Values

* low
* medium
* high

---

# Assumptions

* Laravel backend and React frontend run separately.
* CORS is enabled for API communication.
* MySQL is installed locally.
* Frontend communicates with backend APIs using Axios.

---

# Notes

* Both backend and frontend code are included.
* APIs were tested successfully through frontend integration.
* The project focuses on clean structure, reusable components, and maintainable code.
* `vendor` and `node_modules` folders are included in the ZIP file for easier setup.
