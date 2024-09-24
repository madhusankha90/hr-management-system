const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully..');
        
    } catch (error) {
        console.log('MongoDB not connected..');
        
    }
}

module.exports = ConnectDb;