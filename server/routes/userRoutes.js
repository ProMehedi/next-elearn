import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  forgotPassword,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Register New User
router.route('/').post(registerUser)

// Login a User
router.route('/login').post(authUser)

// User Profile
router.route('/profile').get(protect, getUserProfile)

// Send Email
router.route('/forgot-password').get(protect, forgotPassword)

export default router
