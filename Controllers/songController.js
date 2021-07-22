const Song = require('../Models/songModel.js')
const asyncHandler = require('express-async-handler')


// @desc   add new song 
// @route   GET /api/songs
// @Access  Public
const addSong = asyncHandler(async (req, res) => {

    const { title, artist, genre, album, albumImageUrl, youtubeId, lyrics, tab } = req.body;
    const song = await Song.create({
        title,
        artist, 
        genre, 
        album, 
        albumImageUrl, 
        youtubeId, 
        lyrics, 
        tab
    })
    return res.status(201).json(song)  
})

// @desc    get all songs
// @route   GET /api/songs
// @Access  Public
const getAllSongs = asyncHandler(async (req, res) => {

    const songs = await Song.findAll({})
    return res.json(songs)
})

module.exports = { addSong,  getAllSongs };

