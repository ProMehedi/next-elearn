import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  forgotPassword,
  resetPassword,
  sendVerificationCode,
  verifyUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Register New User
router.route('/').post(registerUser)

// Login a User
router.route('/login').post(authUser)

// User Profile
router.route('/profile').get(protect, getUserProfile)

// Password Reset
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password').post(resetPassword)

// Account Varification
router.route('/send-varification').post(sendVerificationCode)
router.route('/verify').post(protect, verifyUser)

export default router
