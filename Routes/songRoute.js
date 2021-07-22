const express = require('express')
const { addSong, getAllSongs } = require('../Controllers/songController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/create').post(addSong)
router.route('/').get(getAllSongs)

module.exports = router;

