const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const colors = require('colors')
const asyncHandler = require('express-async-handler')

dotenv.config()

const User = require('./Models/userModel')
const Song = require('./Models/songModel')

const users = require('./Data/user')
const songs = require('./Data/song')

const importDataToDb = asyncHandler(async () => {

    await User.destroy({ where: {} })
    await Song.destroy({ where: {} })

    // console.log(users)
    const createdUser = await User.bulkCreate(users)
    const createdSong = await Song.bulkCreate(songs)

    // console.log();


    if (createdUser && createdSong) {
        console.log(`Data imported To db`.green.inverse)
        process.exit()
    } else {
        console.log(`Error is coming from Destroing the data to the db ${error.message}`.red.inverse);
        process.exit(1)
    }

})

const destroyDataFromDb = asyncHandler(async () => {

    const emptyTable = await User.destroy({ where: {} })
    if (emptyTable === 0) {
        console.log('Data destroy from db'.blue.inverse)
        process.exit()
    } else {
        console.log(`Error is coming from Destroing the data to the db ${error.message}`.red.inverse);
        process.exit(1)

    }
})

if (process.argv[2] === '-d') {
    destroyDataFromDb();
} else {
    importDataToDb();
}


