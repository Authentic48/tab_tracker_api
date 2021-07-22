const express = require('express')
const { registerUser, authUser, getUsers, getUserById, updateUser, deleteUser } = require('../Controllers/authController')
const { protect, admin, artist } = require('../Middlewares/authMiddleware')

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').post(authUser)

router.route('/').get(protect, admin, getUserById)

router.route('/update').put(protect, updateUser)

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

module.exports = router;

