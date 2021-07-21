const bcryptjs = require('bcryptjs')
const Sequelize = require('sequelize')
const sequelize = require('../Config/db')


const User = sequelize.define("users", {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
    password: {
        type: Sequelize.STRING
    }
});

module.exports = User

