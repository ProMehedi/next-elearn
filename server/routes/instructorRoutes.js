import express from 'express'
import { registerInstructor } from '../controllers/instructorController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Instructor
router.route('/').post(protect, registerInstructor)

export default router
