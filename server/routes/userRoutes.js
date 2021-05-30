import express from 'express'
import { registerUser } from '../controllers/userController.js'
const router = express.Router()

// Register New User
router.route('/').post(registerUser)

export default router
