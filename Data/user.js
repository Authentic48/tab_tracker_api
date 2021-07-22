const bcrypt = require('bcryptjs')

require('dotenv').config()

const users = [
    {
        name: process.env.User_1_name,
        email: process.env.User_1_email,
        password: bcrypt.hashSync(process.env.User_1_password),
        isAdmin: true
    },
    {
        name: process.env.User_2_name,
        email: process.env.User_2_email,
        password: bcrypt.hashSync(process.env.User_2_password),
        isArtist: true
    },
    {
        name: process.env.User_3_name,
        email: process.env.User_3_email,
        password: bcrypt.hashSync(process.env.User_2_password),
    },
]

module.exports = users;