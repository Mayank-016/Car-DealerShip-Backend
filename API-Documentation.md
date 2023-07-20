# Car Dealership Management System API Documentation

This API documentation provides details about the endpoints and functionalities of the Car Dealership Management System API. Please note that this documentation only covers the completed API endpoints. The project is built using Node.js, Express, MongoDB, and JSON Web Tokens (JWT) for authentication.

## Table of Contents

1. [Authentication Endpoints](#authentication-endpoints)
   1. [Admin Login](#admin-login)
   2. [User Login](#user-login)
   3. [Dealership Login](#dealership-login)

2. [User Endpoints](#user-endpoints)
   1. [Get All Cars](#get-all-cars)
   2. [Get Cars in a Dealership](#get-cars-in-a-dealership)
   3. [Get Dealerships with a Certain Car](#get-dealerships-with-a-certain-car)
   4. [Get All Vehicles Owned by User](#get-all-vehicles-owned-by-user)
   5. [Get Dealerships Within a Certain Range](#get-dealerships-within-a-certain-range)
   6. [Get All Deals on a Certain Car](#get-all-deals-on-a-certain-car)
   7. [Get All Deals from a Certain Dealership](#get-all-deals-from-a-certain-dealership)
   8. [Buy a Car After a Deal is Made](#buy-a-car-after-a-deal-is-made)

3. [Dealership Endpoints](#dealership-endpoints)
   1. [Get All Cars](#get-all-cars-1)
   2. [Get All Cars Sold by Dealership](#get-all-cars-sold-by-dealership)
   3. [Add Cars to Dealership](#add-cars-to-dealership)
   4. [View Deals Provided by Dealership](#view-deals-provided-by-dealership)
   5. [Add Deals to Dealership](#add-deals-to-dealership)
   6. [View All Vehicles Sold by Dealership](#view-all-vehicles-sold-by-dealership)
   7. [Add New Vehicle to Sold Vehicles](#add-new-vehicle-to-sold-vehicles)

## Authentication Endpoints

### Admin Login

- **URL:** `/admin/login`
- **Method:** `POST`
- **Description:** Authenticates an admin with their admin ID and password and returns a JWT upon successful authentication.
- **Request Body:**

```json
{
  "admin_id": "admin123",
  "password": "adminpassword"
}
```

- **Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### User Login

- **URL:** `/user/login`
- **Method:** `POST`
- **Description:** Authenticates a user with their email and password and returns a JWT upon successful authentication.
- **Request Body:**

```json
{
  "user_email": "user@example.com",
  "password": "userpassword"
}
```

- **Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Dealership Login

- **URL:** `/dealership/login`
- **Method:** `POST`
- **Description:** Authenticates a dealership with their email and password and returns a JWT upon successful authentication.
- **Request Body:**

```json
{
  "dealership_email": "dealership@example.com",
  "password": "dealershippassword"
}
```

- **Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## User Endpoints

### Get All Cars

- **URL:** `/user/cars`
- **Method:** `GET`
- **Description:** Retrieves all cars available in the database.
- **Request Header:** Include the JWT obtained during user login in the `Authorization` header.
- **Response:**

```json
[
  {
    "car_id": "12345",
    "type": "Sedan",
    "name": "Toyota",
    "model": "Camry",
    "car_info": {
      "year": 2022,
      "color": "Blue"
    }
  },
  // ...
]
```



## Dealership Endpoints

### Get All Cars

- **URL:** `/dealership/cars`
- **Method:** `GET`
- **Description:** Retrieves all cars available in the dealership's inventory.
- **Request Header:** Include the JWT obtained during dealership login in the `Authorization` header.
- **Response:**

```json
[
  {
    "car_id": "12345",
    "type": "Sedan",
    "name": "Toyota",
    "model": "Camry",
    "car_info": {
      "year": 2022,
      "color": "Blue"
    }
  },
  // ...
]
```

### Get All Cars Sold by Dealership

- **URL:** `/dealership/cars/sold`
- **Method:** `GET`
- **Description:** Retrieves all cars sold by the dealership.
- **Request Header:** Include the JWT obtained during dealership login in the `Authorization` header.
- **Response:**

```json
[
  {
    "car_id": "12345",
    "type": "Sedan",
    "name": "Toyota",
    "model": "Camry",
    "car_info": {
      "year": 2022,
      "color": "Blue"
    }
  },
  // ...
]
```
If you encounter any specific issues or errors while completing the code, feel free to ask for assistance, and I'll be happy to help you.
