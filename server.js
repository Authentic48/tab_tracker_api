const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const sequelize = require('./Config/db')

const userRoute = require('./Routes/userRoute')

const { errorHandler, notFound } = require('./middlewares/errorHandler')

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.json())


//DB test 
sequelize.sync()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error: ' + err))


//Routes
app.use('/api/users', userRoute)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} on port ${PORT}`.blue.underline))