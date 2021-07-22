const bcryptjs = require('bcryptjs')
const { Sequelize } = require('sequelize')
const sequelize = require('../Config/db')


const Song = sequelize.define("songs", {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    album: {
        type: Sequelize.STRING,
        allowNull: false
    },
    albumImageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    youtubeId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lyrics: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tab: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Song

