const app = require('./app')
const connectDB = require('./utils/db')
const dotenv = require('dotenv')

dotenv.config({ path: '.env' });

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server stared on ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("Server couldn't be started : ", error);
        process.exit(1);
    })


