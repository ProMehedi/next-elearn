import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/genarateToken.js'

// @desc    Register New User
// @route   GET /api/v1/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({ name, email, password })

  if (user) {
    res.cookie('token', generateToken(user._id), {
      expires: new Date(Date.now() + 604800000),
      httpOnly: false,
      // secure: true
    })
    res.status(201).send({ user, token: generateToken(user._id) })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Auth User & Get Token
// @route   GET /api/v1/users/login
// @access  Puclic
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user) {
    return res.status(401).send(`No user found with this email: ${email}`)
  }

  if (user && (await user.mathPassword(password))) {
    res.cookie('token', generateToken(user._id), {
      expires: new Date(Date.now() + 604800000),
      httpOnly: false,
      // secure: true
    })
    res.status(200).send({ user, token: generateToken(user._id) })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
