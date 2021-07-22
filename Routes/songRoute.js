const express = require('express')
const { addSong, getAllSongs, updateSong, getSong, deleteSong } = require('../Controllers/songController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/create').post(addSong)

router.route('/').get(getAllSongs)

router.route('/:id').put(updateSong).get(getSong).delete(deleteSong)

module.exports = router;

