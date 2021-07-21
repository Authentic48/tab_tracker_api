const express = require('express')
const { registerUser, authUser, getUser } = require('../Controllers/authController')

const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/').get(getUser)



module.exports = router;   

