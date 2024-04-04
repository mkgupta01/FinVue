const express = require('express');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoutes');
const calRoute = require('./routes/calRoutes')

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//routes
app.use("/api/v1", authRoute);
app.use("/api/v1", calRoute);

module.exports = app