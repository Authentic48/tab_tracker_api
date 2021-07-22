const express = require('express')
const { addSong } = require('../Controllers/songController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/create').post(addSong)


module.exports = router;

