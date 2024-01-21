const mongoose = require('mongoose');

//define the MongoDB connection urlb
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'  // hotels database name

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