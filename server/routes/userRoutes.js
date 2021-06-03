import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  forgotPassword,
  resetPassword,
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

export default router
