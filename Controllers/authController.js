const User = require('../Models/userModel.js')
const asyncHandler = require('express-async-handler')
const generateWebToken = require('../utility/generateWebToken')



// @desc   register new user 
// @route   GET /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;
    
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error("User's already exist")
    }

    const user = await User.create({
        name,
        email,
        password,
    })
    if (user) {
        res.status(201).json({
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateWebToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error('Incorrect Data')
    }
})

module.exports = { registerUser }; 

