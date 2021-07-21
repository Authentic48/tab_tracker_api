const User = require('../Models/userModel.js')
const asyncHandler = require('express-async-handler')
const generateWebToken = require('../utility/generateWebToken')
const bcrypt = require('bcryptjs')


// @desc   register new user 
// @route   GET /api/users
// @Access  Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const userExist = await User.findOne({ where: { email: email } } )

    if (userExist) {
        res.status(400)
        throw new Error("User's already exist")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if (user) {
        res.status(201).json({
            id: user.id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
            token: generateWebToken(user.id),
        })
    } else {
        res.status(400)
        throw new Error('Incorrect Data')
    }
})

const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user =  await User.findOne({ where: { email: email } } )


    if (user) {

        const validPassword = await bcrypt.compare(password, user.password)

        if(validPassword)
        {
            return res.json({
                id: user.id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin,
                token: generateWebToken(user.id)
    
            })
        }else {
            return res.json('Invalid password')
        }
    } else {
        res.status(401);
        throw new Error('Invalid Email or/and Password')
    }

})

const getUser =  asyncHandler(async (req, res) => { 
      
    const users = await User.findAll({})

    return res.json(users)
})


//Password matching 
function matchPassword(enteredPassword, userPassword) 
{
   return bcrypt.compare(enteredPassword, userPassword)
}


module.exports = { registerUser, authUser, getUser };

