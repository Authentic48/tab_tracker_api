const express = require('express')
const { registerUser, authUser, getUser } = require('../Controllers/authController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/').get(protect, admin, getUser)


module.exports = router;

