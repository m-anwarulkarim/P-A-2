# Vehicle Rental Management System

**Live Deployment:** [https://vehicles-brown.vercel.app/](https://vehicles-sh2d0wa51-devanwarul-3537s-projects.vercel.app/)
[![Live Deployment](https://img.shields.io/badge/Live-Deployment-blue)](https://vehicles-sh2d0wa51-devanwarul-3537s-projects.vercel.app/)

---

## Project Description

This is a Vehicle Rental Management System built using **Node.js**, **Express**, **PostgreSQL**, and **TypeScript**. The system allows users to register, login, book vehicles, and manage vehicle availability. Admin users can manage vehicles, users, and bookings while regular customers can browse vehicles and create bookings.

---

## Features

- User Authentication (Signup & Signin)
- Role-based Access Control (Admin & Customer)
- CRUD operations for Vehicles
- Bookings management:
  - Create bookings
  - Cancel bookings (Customer)
  - Return vehicles (Admin)
  - Auto-return expired bookings
- Validation and error handling for all operations
- Availability status of vehicles
- PostgreSQL Database with relational integrity

---

## Technology Stack

[![Live Deployment](https://img.shields.io/badge/Live-Deployment-blue)](https://vehicles-sh2d0wa51-devanwarul-3537s-projects.vercel.app/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Framework-Express-black?logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JWT](https://img.shields.io/badge/Authentication-JWT-yellow?logo=jsonwebtokens&logoColor=black)](https://jwt.io/)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)]()
[![bcryptjs](https://img.shields.io/badge/Library-bcryptjs-orange)]()
[![dotenv](https://img.shields.io/badge/Library-dotenv-green)]()

---

- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)
- **Password Hashing:** bcryptjs
- **Environment Management:** dotenv
- **Deployment:** Vercel (Live URL)

---

## Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/m-anwarulkarim/P-A-2
cd P-A-2
```

### 2. Install dependencies

```bash
Copy code
npm install
```

### 3. Configure Environment Variables

Create a .env file in the root directory:

env
PORT=5000
CONNECTION_STRING=<PostgreSQL_Connection_String>
SECRET_JWT=<Secret_JWT_Key>

### 4. Run the Project

```bash
npm run dev
The server will start at http://localhost:5000.
```

## API Endpoints

Auth

```
Signup: POST /api/v1/auth/signup

Signin: POST /api/v1/auth/signin
```

Users

```
Get All Users: GET /api/v1/users (Admin & Customer)

Update User: PUT /api/v1/users/:id (Admin & Customer)

Delete User: DELETE /api/v1/users/:id (Admin)
```

Vehicles

```
Create Vehicle: POST /api/v1/vehicles (Admin)

Get All Vehicles: GET /api/v1/vehicles (Admin & Customer)

Get Single Vehicle: GET /api/v1/vehicles/:id (Admin & Customer)

Update Vehicle: PUT /api/v1/vehicles/:id (Admin)

Delete Vehicle: DELETE /api/v1/vehicles/:id (Admin)
```

Bookings

```
Create Booking: POST /api/v1/bookings (Admin & Customer)

Get All Bookings: GET /api/v1/bookings (Admin & Customer)

Update Booking: PUT /api/v1/bookings/:id (Admin & Customer)

Auto Return Bookings: PUT /api/v1/bookings/auto-return (Admin)
```

Submission

```bsh
GitHub Repo: https://github.com/m-anwarulkarim/P-A-2

Live Deployment: https://vehicles-sh2d0wa51-devanwarul-3537s-projects.vercel.app/
```
