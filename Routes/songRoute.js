const express = require('express')
const { addSong, getAllSongs, updateSong, getSong, deleteSong } = require('../Controllers/songController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/create').post(protect, addSong)

router.route('/').get(getAllSongs)

router.route('/:id').put(protect, admin, artist, updateSong).get(getSong).delete(protect, admin, artist, deleteSong)

module.exports = router;

