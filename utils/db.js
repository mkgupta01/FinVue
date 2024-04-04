const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected ${connection.connection.host}`)
    } catch (error) {
        console.log("Database connection error: ", error );
    }
}

module.exports = connectDB 