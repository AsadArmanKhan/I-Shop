
# I-Shop Backend

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Overview
I-Shop Backend is the server-side application for the I-Shop e-commerce platform. It provides RESTful APIs for user and admin authentication, product management, category and color management, cart and order processing, and image handling. Built with Node.js, Express, and MongoDB.

## Features
- User authentication (login, logout, registration)
- Admin authentication and management
- Product management (CRUD)
- Category management (CRUD)
- Color management (CRUD)
- Cart management
- Order management
- Image handling for products and categories
- Middleware for authentication and authorization

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token)
- Axios (for API calls)
- Multer (for file uploads)

## Folder Structure
- `controller/` - Controllers for business logic
- `middleWare/` - Authentication middleware
- `model/` - Mongoose models
- `public/images/` - Images for categories and products
- `router/` - Express routers
- `helper.js` - Utility functions
- `index.js` - Server entry point

## Setup & Installation
1. Clone the repository
2. Navigate to the `backend` folder
3. Install dependencies:
	```bash
	npm install
	```
4. Create a `.env` file with the following variables:
	```env
	MONGODB_URI=your_mongodb_uri
	JWT_SECRET=your_jwt_secret
	PORT=5000
	```
5. Start the server:
	```bash
	npm start
	```

## Usage
The backend server runs on `http://localhost:5000` by default. Use the provided API endpoints to interact with the application.

## API Documentation

### Auth & User
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user
- `POST /api/user/logout` - Logout user
- `GET /api/user/profile` - Get user profile (auth required)

### Admin
- `POST /api/admin/login` - Login admin
- `POST /api/admin/logout` - Logout admin
- `GET /api/admin/profile` - Get admin profile (auth required)
- `POST /api/admin/create` - Create new admin (super admin only)

### Products
- `GET /api/product` - List all products
- `GET /api/product/:id` - Get product details
- `POST /api/product` - Create product (admin only)
- `PUT /api/product/:id` - Update product (admin only)
- `DELETE /api/product/:id` - Delete product (admin only)

### Categories
- `GET /api/category` - List all categories
- `POST /api/category` - Create category (admin only)
- `PUT /api/category/:id` - Update category (admin only)
- `DELETE /api/category/:id` - Delete category (admin only)

### Colors
- `GET /api/color` - List all colors
- `POST /api/color` - Create color (admin only)
- `PUT /api/color/:id` - Update color (admin only)
- `DELETE /api/color/:id` - Delete color (admin only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add product to cart
- `POST /api/cart/remove` - Remove product from cart
- `POST /api/cart/clear` - Clear cart

### Orders
- `GET /api/order` - List user's orders
- `POST /api/order` - Place an order
- `GET /api/order/:id` - Get order details
- `PUT /api/order/:id` - Update order status (admin only)
- `DELETE /api/order/:id` - Cancel order

## Authentication
- JWT-based authentication for users and admins
- Middleware for route protection

## Database
- MongoDB (see `dump/Ishop/` for BSON dumps)

## Contributing
Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

## License
MIT
