const mongoose = require('mongoose');
require('dotenv').config();

//define the MongoDB connection urlb
// const mongoURL = process.env.MONGODB_URL_LOCAL  // hotels database name
const mongoURL = process.env.MONGODB_URL;

// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// defining event listener for database connection 
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;