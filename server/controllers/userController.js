import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/genarateToken.js'
import sendEmail from '../utils/sendMail.js'
import sendResetMail from '../utils/sendResetMail.js'

// @desc    Register New User
// @route   GET /api/users
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
// @route   GET /api/users/login
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

// @desc    Auth User & Get Token
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found!')
  }
})

// @desc    Auth User & Get Token
// @route   POST /api/users/forgot-password
// @access  Public
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body
  const randomCode = nanoid(6).toUpperCase()

  const user = await User.findOneAndUpdate(
    { email },
    { passwordResetCode: randomCode }
  )

  if (user) {
    try {
      await sendResetMail(email, randomCode)
      res.status(201).json({ success: true })
    } catch (error) {
      res.status(500)
      throw new Error(error)
    }
  } else {
    res
      .status(400)
      .send({ message: `User not found with this email: ${email}` })
  }
})

// @desc    Auth User & Get Token
// @route   POST /api/users/reset-password
// @access  Public
export const resetPassword = asyncHandler(async (req, res) => {
  const { email, code, password } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.findOneAndUpdate(
    { email, passwordResetCode: code },
    { password: hashedPassword }
  )

  if (user) {
    res.status(201).json({ success: true })
  } else {
    res.status(500)
    throw new Error('Something went wrong!')
  }
})

// @desc    Verify User
// @route   POST /api/users/send-varification
// @access  Public
export const sendVerificationCode = asyncHandler(async (req, res) => {
  const randomCode = nanoid(6).toUpperCase()
  const { email } = req.body

  const user = await User.findOneAndUpdate(
    { email },
    { verificationCode: randomCode }
  )
  if (user) {
    try {
      await sendEmail(email, randomCode)
      res.status(201).json({ success: true })
    } catch (error) {
      res.status(500)
      throw new Error(error)
    }
  } else {
    res.status(500)
    throw new Error(`User not found with email ${email}!`)
  }
})

// @desc    Verify User
// @route   POST /api/users/verify
// @access  Private
export const verifyUser = asyncHandler(async (req, res) => {
  const { email, code } = req.body

  const status = await User.findOne({ email })
  if (status.account_status !== 'verified') {
    const user = await User.findOneAndUpdate(
      { email, verificationCode: code },
      { account_status: 'verified', verificationCode: '' }
    )

    if (user) {
      res.status(201).json({ success: true })
    } else {
      res.status(500)
      throw new Error('Something went wrong!')
    }
  } else {
    res.status(500)
    throw new Error('This account is already verified!')
  }
})
