const bcryptjs = require('bcryptjs')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../Config/db')


const User = sequelize.define("users", {
    name: {
        type: Sequelize.STRING,
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
    isArtist: {
        type: Sequelize.BOOLEAN,
        default: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User

