# IPSSI'SHOP Backend

This is the backend repository for IPSSI'SHOP, a full-stack e-commerce application. The backend is built with Node.js, Express, and MongoDB (using Mongoose) and handles user authentication, product management, file uploads (via Multer), and more.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **User Authentication:** Supports registration and login with JWT and bcrypt.
- **Product Management:** Create, update, delete, and fetch products.
- **File Uploads:** Handles image uploads for products using Multer.
- **Basket Management:** Users can add and remove products from their basket.
- **Admin Dashboard:** Admins have access to specialized routes for product management.

## Project Structure

    ```bash
    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── productService.js
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── README.md
    ├── src
    │   ├── controllers
    │   │   ├── authController.js
    │   │   ├── productController.js
    │   │   └── userController.js
    │   ├── middleware
    │   │   └── upload.js
    │   ├── models
    │   │   ├── Product.js
    │   │   └── User.js
    │   ├── repositories
    │   │   ├── productRepository.js
    │   │   └── userRepository.js
    │   ├── routes
    │   │   ├── authRoutes.js
    │   │   ├── productRoutes.js
    │   │   └── userRoutes.js
    │   └── services
    │       ├── productService.js
    │       └── userService.js


## Prerequisites

- Node.js (v14 or higher recommended)
- npm (v7+ recommended) or Yarn
- A MongoDB instance (local or remote)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://your-backend-repo-url.git
   cd backend

2. **Set Up Environment Variables:**

    Create a .env file in the root of the backend folder with the following variables:

    ```bash
    MONGO_URI=mongodb://localhost:27017/yourdbname
    JWT_SECRET=your_jwt_secret_key
    PORT=3000

3. **Ensure the Uploads Directory Exists:**

If not present, create an uploads folder in the project root. Alternatively, add code in app.js to create it automatically.

Install Dependencies:

If using npm (v7+):

    npm install --legacy-peer-deps

Or if using Yarn:

    yarn install

4. **Running the Application**

Start the backend server with:

    npm run start

(Or use your preferred script, e.g., node src/app.js.)

5. **Environment Variables**

    MONGO_URI: Connection string for your MongoDB database.
    JWT_SECRET: Secret key for signing JWT tokens.
    PORT: Port on which the server runs (default: 3000).

6. **Technologies Used**

    Node.js
    Express
    MongoDB & Mongoose
    Multer (for file uploads)
    JWT & bcrypt (for authentication)

7. **License**

This project is licensed under the MIT License.