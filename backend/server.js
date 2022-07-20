//imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//set up the .env file
require('dotenv').config()

//locate app via express
const app = express()
const port = process.env.PORT || 5000; //set up the port


app.use(cors()) //multi-domain on one pc (cors registration)
app.use(express.json()) //api endpoint in JSON


//db-connection (mongo)
const URI = process.env.ATLAS_URI //listening the port
mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
})
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection is established')
})


//api rotes register
const usersRouter = require('./api_routes/api_users')
const exercisesRouter = require('./api_routes/api_exercises')
//
app.use('/users', usersRouter)
app.use('/exercises', exercisesRouter)

app.listen(port, () => {
    console.log(`server is running on port${port}`)
})



