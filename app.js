// Import required modules
const express = require('express');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const multer = require('multer');

// Set up Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const upload = multer();

// Set up MongoDB connection
const uri = "YOUR_MONGODB_CONNECTION_STRING"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

// Connect to the MongoDB database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}
connectToDatabase();

// ... (rest of the code remains unchanged)

//Authentication Middleware
function authenticate(req, res, next) {
    // Get the JWT from the request header
    const token = req.header('Authorization');
    // console.log("Token:" + token);
    // Verify and decode the JWT
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Unauthorized' });
        } else {
            req.user = decoded;
            next();
        }
    });
}

app.post('/admin/login', async (req, res) => {

    let username = req.body['admin_id'];
    let password = req.body['password'];
    // Find the admin in the database
    const result = await client.db("car_dealership").collection("admin").findOne({ admin_id: username });
    if (result == null) {
        res.send("admin id does not exists please give an valid admin id");
    } else if (result.password !== password) {
        res.send("Invalid Password");
    }
    else {

        //Generate and return a JWT upon successful authentication
        const token = jwt.sign({ username }, 'secretKey');
        res.json({ token });
    }
});

// User Authentication Endpoint
app.post('/user/login', async (req, res) => {
    let userEmail = req.body['user_email'];
    let password = req.body['password'];
    // Find the admin in the database
    const result = await client.db("car_dealership").collection("user").findOne({ user_email: userEmail });
    if (result == null) {
        res.send("email id does not exists please give an valid email id");
    } else if (result.password !== password) {
        res.send("Invalid Password");
    }
    else {

        //Generate and return a JWT upon successful authentication
        const token = jwt.sign({ userEmail }, 'secretKey');
        res.json({ token });
    }
});

// Dealership Authentication Endpoint
app.post('/dealership/login', async (req, res) => {
    let dealershipEmail = req.body['dealership_email'];
    let password = req.body['password'];
    // Find the admin in the database
    const result = await client.db("car_dealership").collection("dealership").findOne({ dealership_email: dealershipEmail });
    if (result == null) {
        res.send("email id does not exists please give an valid email id");
    } else if (result.password !== password) {
        res.send("Invalid Password");
    }
    else {

        //Generate and return a JWT upon successful authentication
        const token = jwt.sign({ dealershipEmail }, 'secretKey');
        res.json({ token });
    }
});

// User Endpoints
app.get('/user/cars', authenticate, async (req, res) => {
    try {
        // Get the user's email from the decoded token in the authentication middleware

        // Find the user in the database
        const user = await client.db("car_dealership").collection("user").findOne({ user_email: userEmail });

        if (!user) {
            // If the user is not found, send an error response
            return res.status(404).json({ message: "User not found" });
        }

        // Get the cars associated with the user
        const cars = await client.db("car_dealership").collection("cars").find().toArray();

        res.json(cars);
    } catch (error) {
        // Handle any errors that may occur during the database operation
        console.error('Error retrieving cars:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.get('/user/cars/:dealershipId', authenticate, async (req, res) => {
    // Logic to retrieve all cars in a dealership
    const dealershipID = req.body;
    const result = await client.db("car_dealership").collection("cars").findOne({ dealership_id: dealershipID });
    if (result == null) {
        res.send("dealership id does not exists please give an valid dealership id");
    }
    try {
        const dealership = await dealershipCollection.findOne({ dealership_id: dealershipId });

        if (!dealership) {
            return null; // Dealership not found
        }

        // Get the list of car IDs associated with the dealership
        const carIds = dealership.cars;

        // Get the cars from the 'cars' collection based on the car IDs
        const carsCollection = database.collection('cars');
        const cars = await carsCollection.find({ car_id: { $in: carIds } }).toArray();

        return cars;
    }
    catch (error) {
        res.send('Error retrieving cars:', error);
    }
});

app.get('/user/dealerships/:carId', authenticate, (req, res) => {
    // Logic to retrieve dealerships with a certain car
});

app.get('/user/vehicles', authenticate, (req, res) => {
    // Logic to retrieve all vehicles owned by user
});

app.get('/user/dealerships', authenticate, (req, res) => {
    // Logic to retrieve dealerships within a certain range based on user location
});

app.get('/user/deals/:carId', authenticate, (req, res) => {
    // Logic to retrieve all deals on a certain car
});

app.get('/user/deals/dealership/:dealershipId', authenticate, (req, res) => {
    // Logic to retrieve all deals from a certain dealership
});

app.post('/user/deals/:dealId/buy', authenticate, (req, res) => {
    // Logic to allow user to buy a car after a deal is made
});

// Dealership Endpoints
app.get('/dealership/cars', authenticate, (req, res) => {
    // Logic to retrieve all cars
});

app.get('/dealership/cars/sold', authenticate, (req, res) => {
    // Logic to retrieve all cars sold by dealership
});

app.post('/dealership/cars', authenticate, upload.single('file'), (req, res) => {
    // Logic to add cars to dealership
    // Handle multipart/form-data using multer
});

app.get('/dealership/deals', authenticate, (req, res) => {
    // Logic to view deals provided by dealership
});

app.post('/dealership/deals', authenticate, (req, res) => {
    // Logic to add deals to dealership
});

app.get('/dealership/sold_vehicles', authenticate, (req, res) => {
    // Logic to view all vehicles dealership has sold
});

app.post('/dealership/sold_vehicles/:dealId', authenticate, (req, res) => {
    // Logic to add new vehicle to the list of sold vehicles after a deal is made
});

// Handle asynchronous error handling using promises for all API endpoints

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
