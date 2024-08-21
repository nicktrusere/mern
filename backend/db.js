const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nicktrusere:Butf3V0onNlRSd3o@cluster0.kjwld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;

