import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/genarateToken.js'
import AWS from 'aws-sdk'

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  apiVersion: process.env.AWS_API_VERSION,
}
const SES = new AWS.SES(awsConfig)

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

// @desc    Auth User & Get Token
// @route   GET /api/v1/users/profile
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
// @route   GET /api/v1/users/profile
// @access  Private
export const sendTestEmail = asyncHandler(async (req, res) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: ['najminm98@gmail.com'],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'utf8',
          Data: `<html>
            <h2>Reset Password Link</h2>
            <p>Please use the following link to reset your password</p>
          </html>`,
        },
      },
      Subject: {
        Charset: 'utf8',
        Data: 'Password reset link',
      },
    },
  }

  const data = await SES.sendEmail(params).promise()

  if (data) {
    res.status(201).json({ success: true })
  } else {
    res.status(500)
    throw new Error('Something went wrong!')
  }
})
