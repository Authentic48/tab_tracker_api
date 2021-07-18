const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const { db }= require('./Config/db')


dotenv.config()

const app = express()

//DB test 
db.authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error: ' + err))



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`.blue.underline))