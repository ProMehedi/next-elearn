import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  sendTestEmail,
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
router.route('/send-email').get(protect, sendTestEmail)

export default router
