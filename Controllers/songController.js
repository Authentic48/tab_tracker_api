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

// @desc    get all songs
// @route   GET /api/songs
// @Access  Public
const updateSong = asyncHandler(async (req, res) => {
    
    const song = await Song.findByPk(req.params.id)

    if(song)
    {
        song.title = req.body.title || song.title,
        song.artist = req.body.artist || song.artist,
        song.genre = req.body.genre || song.genre,
        song.album = req.body.album || song.album,
        song.albumImageUrl = req.body.albumImageUrl || song.albumImageUrl,
        song.youtubeId = req.body.youtubeId || song.youtubeId,
        song.lyrics = req.body.lyrics || song.lyrics,
        song.tab = req.body.tab || song.tab

        const updatedSong = await song.save()

        return res.status(201).json(updatedSong)
        
    }else
    {
        return res.json('Song not found..')
    }
})

module.exports = { addSong,  getAllSongs, updateSong };

