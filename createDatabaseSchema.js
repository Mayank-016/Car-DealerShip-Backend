const { MongoClient } = require('mongodb');

async function createDatabaseSchema() {
    const uri = "YOUR_MONGODB_CONNECTION_STRING"; // Replace with your MongoDB Atlas connection URI
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const databaseName = 'car_dealership'; // Replace with your desired database name
        const database = client.db(databaseName);

        // Create admin collection
        await database.createCollection('admin', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['admin_id', 'password'],
                    properties: {
                        admin_id: { bsonType: 'string' },
                        password: { bsonType: 'string' }
                    }
                }
            }
        });

        // Create user collection
        await database.createCollection('user', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['user_email', 'user_id', 'user_location', 'password'],
                    properties: {
                        user_email: { bsonType: 'string' },
                        user_id: { bsonType: 'string' },
                        user_location: { bsonType: 'string' },
                        user_info: { bsonType: 'object' },
                        password: { bsonType: 'string' },
                        vehicle_info: { bsonType: 'array' }
                    }
                }
            }
        });

        // Create dealership collection
        await database.createCollection('dealership', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['dealership_email', 'dealership_id', 'dealership_name', 'dealership_location', 'password'],
                    properties: {
                        dealership_email: { bsonType: 'string' },
                        dealership_id: { bsonType: 'string' },
                        dealership_name: { bsonType: 'string' },
                        dealership_location: { bsonType: 'string' },
                        password: { bsonType: 'string' },
                        dealership_info: { bsonType: 'object' },
                        cars: { bsonType: 'array' },
                        deals: { bsonType: 'array' },
                        sold_vehicles: { bsonType: 'array' }
                    }
                }
            }
        });

        // Create deal collection
        await database.createCollection('deal', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['deal_id', 'car_id'],
                    properties: {
                        deal_id: { bsonType: 'string' },
                        car_id: { bsonType: 'string' },
                        deal_info: { bsonType: 'object' }
                    }
                }
            }
        });

        // Create cars collection
        await database.createCollection('cars', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['car_id', 'type', 'name', 'model'],
                    properties: {
                        car_id: { bsonType: 'string' },
                        type: { bsonType: 'string' },
                        name: { bsonType: 'string' },
                        model: { bsonType: 'string' },
                        car_info: { bsonType: 'object' }
                    }
                }
            }
        });

        // Create sold_vehicles collection
        await database.createCollection('sold_vehicles', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: ['vehicle_id', 'car_id'],
                    properties: {
                        vehicle_id: { bsonType: 'string' },
                        car_id: { bsonType: 'string' },
                        vehicle_info: { bsonType: 'object' }
                    }
                }
            }
        });

        // Create references
        await database.collection('user').createIndex({ 'vehicle_info.$id': 1 });
        await database.collection('dealership').createIndex({ 'deals.$id': 1 });
        await database.collection('dealership').createIndex({ 'cars.$id': 1 });
        await database.collection('dealership').createIndex({ 'sold_vehicles.$id': 1 });
        await database.collection('deal').createIndex({ 'car_id.$id': 1 });
        await database.collection('sold_vehicles').createIndex({ 'car_id.$id': 1 });

        console.log('Database schema created successfully');
    } catch (error) {
        console.error('Failed to create database schema:', error);
    } finally {
        await client.close();
    }
}

createDatabaseSchema();

