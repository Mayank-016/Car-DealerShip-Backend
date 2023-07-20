# Car-Dealership-Backend

## Car Dealership Management System (Incomplete)

This repository contains the code for a Car Dealership Management System API built using Node.js, Express, MongoDB, and JSON Web Tokens (JWT) for authentication. It provides various endpoints to perform CRUD (Create, Read, Update, Delete) operations for users, dealerships, cars, and deals.

Please note that this project is **not complete** and serves as a starting point for developing a car dealership management system. It covers basic user authentication and some API endpoints, but additional features and functionalities are yet to be implemented.

### Features

- **User Authentication**: Users, dealerships, and administrators can log in using their email and password to obtain a JSON Web Token for authentication.

- **User Endpoints**: Users can view available cars, search for dealerships, view deals on certain cars, and more.

- **Dealership Endpoints**: Dealerships can manage their car inventory, view sold vehicles, add deals, and more.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mayank-016/car-dealership-management.git
cd car-dealership-management
```

2. Install the dependencies:

```bash
npm install
```

3. Set up MongoDB Atlas or local MongoDB and update the `uri` variable in `app.js` with the appropriate connection string.

### Usage

1. Create the database schema and generate dummy data:

Before using the application, you need to create the database schema and generate dummy data. To do this, you can run the `createDatabaseSchema.js` and `generateDummyData.js` scripts. These scripts will create the necessary collections and dummy data in your MongoDB database.

First, make sure to update the `uri` variable in `createDatabaseSchema.js` with your MongoDB Atlas connection URI.

```javascript
// createDatabaseSchema.js

// ... (The provided code for createDatabaseSchema.js)
```

```bash
node createDatabaseSchema.js
```

Next, update the `uri` variable in `generateDummyData.js` with your MongoDB Atlas connection URI.

```javascript
// generateDummyData.js

// ... (The provided code for generateDummyData.js)
```

```bash
node generateDummyData.js
```

2. Start the server:

```bash
npm start
```

### Why use `createDatabaseSchema.js` and `generateDummyData.js`?

The `createDatabaseSchema.js` script is responsible for creating the necessary collections and defining their schema using JSON Schema validation in the MongoDB database. It ensures that the data stored in the collections adheres to the specified structure, making the database more organized and secure.

The `generateDummyData.js` script is used to populate the collections with dummy data. This is especially useful during development and testing phases, as it allows you to have sample data in the database without the need to manually create it.

Both scripts help in setting up the initial database state required for running the Car Dealership Management System API. The data generated by `generateDummyData.js` can be used to test various endpoints and functionalities of the API.

### Disclaimer

This project is currently **incomplete** and should not be used in a production environment. It lacks essential features and requires further development to be a fully functional car dealership management system.

### Contributions

Contributions to this project are welcome! If you would like to contribute to the development of this Car Dealership Management System, please open an issue or submit a pull request.

**Note:** This project is intended for educational purposes and does not guarantee full security and functionality. Use it at your own risk.

---

**Disclaimer**: This is an incomplete project and may have bugs or vulnerabilities. It is not intended for production use without further development and rigorous testing. Use at your own risk.

---

_Thank you for visiting this repository! If you have any questions or suggestions, feel free to open an issue._

---

### Future Improvements

As this project is incomplete, future improvements may include:

- Implementing complete user and dealership management features.
- Enhancing car and deal management capabilities.
- Improving error handling and security measures.
- Developing a user-friendly frontend for easy interaction with the API.
- Writing comprehensive unit tests and ensuring code quality.

---

**Note:** This project is not actively maintained and may not receive updates or bug fixes. Use it for learning purposes and as a starting point for your own car dealership management system.
