import express from 'express'
import { payoutInstructor } from '../controllers/instructorController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Instructor
router.route('/').post(protect, payoutInstructor)

export default router
