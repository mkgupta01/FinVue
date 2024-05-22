const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const authRoute = require('./routes/authRoutes');
const expenseRoute = require('./routes/expenseRoutes')

const app = express();

//middleware
app.use(cors({
    origin: "https://fin-vue.vercel.app",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//routes
app.use("/api/v1", authRoute);
app.use("/api/v1", expenseRoute);

module.exports = app
