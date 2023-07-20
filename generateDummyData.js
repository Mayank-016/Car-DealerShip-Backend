const { MongoClient } = require('mongodb');
const faker = require('faker');

async function generateDummyData(database) {
    // Generate dummy data for user collection
    const userCollection = database.collection('user');
    for (let i = 0; i < 10; i++) {
        const user = {
            user_email: faker.internet.email(),
            user_id: faker.datatype.uuid(),
            user_location: faker.address.city(),
            user_info: {
                age: faker.datatype.number({ min: 18, max: 60 }),
                gender: faker.random.arrayElement(['Male', 'Female']),
            },
            password: faker.internet.password(),
            vehicle_info: [],
        };
        await userCollection.insertOne(user);
    }

    // Generate dummy data for dealership collection
    const dealershipCollection = database.collection('dealership');
    for (let i = 0; i < 5; i++) {
        const dealership = {
            dealership_email: faker.internet.email(),
            dealership_id: faker.datatype.uuid(),
            dealership_name: faker.company.companyName(),
            dealership_location: faker.address.city(),
            password: faker.internet.password(),
            dealership_info: {
                rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
                phone: faker.phone.phoneNumber(),
            },
            cars: [],
            deals: [],
            sold_vehicles: [],
        };
        await dealershipCollection.insertOne(dealership);
    }

    // Generate dummy data for deal collection
    const dealCollection = database.collection('deal');
    for (let i = 0; i < 10; i++) {
        const deal = {
            deal_id: faker.datatype.uuid(),
            car_id: faker.datatype.uuid(),
            deal_info: {
                price: faker.datatype.number({ min: 10000, max: 50000 }),
                discount: faker.datatype.number({ min: 0, max: 5000 }),
            },
        };
        await dealCollection.insertOne(deal);
    }

    // Generate dummy data for cars collection
    const carsCollection = database.collection('cars');
    for (let i = 0; i < 20; i++) {
        const car = {
            car_id: faker.datatype.uuid(),
            type: faker.random.arrayElement(['Sedan', 'SUV', 'Sports', 'Hatchback']),
            name: faker.vehicle.manufacturer(),
            model: faker.vehicle.model(),
            car_info: {
                year: faker.datatype.number({ min: 2000, max: 2023 }),
                color: faker.commerce.color(),
            },
        };
        await carsCollection.insertOne(car);
    }

    // Generate dummy data for sold_vehicles collection
    const soldVehiclesCollection = database.collection('sold_vehicles');
    for (let i = 0; i < 15; i++) {
        const soldVehicle = {
            vehicle_id: faker.datatype.uuid(),
            car_id: faker.datatype.uuid(),
            vehicle_info: {
                owner: faker.name.findName(),
                purchase_date: faker.date.past(),
            },
        };
        await soldVehiclesCollection.insertOne(soldVehicle);
    }

    console.log('Dummy data generated successfully');
}

async function createDatabaseSchema() {
    const uri = "Your Connection URI";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const databaseName = 'car_dealership';
        const database = client.db(databaseName);

        await generateDummyData(database);
    } catch (error) {
        console.error('Failed to generate dummy data:', error);
    } finally {
        await client.close();
    }
}

createDatabaseSchema();
