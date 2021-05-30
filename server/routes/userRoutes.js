import express from 'express'
import { authUser, registerUser } from '../controllers/userController.js'
const router = express.Router()

// Register New User
router.route('/').post(registerUser)

// Login a User
router.route('/login').post(authUser)

export default router
