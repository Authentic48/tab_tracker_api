const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()


const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`.blue.underline))