import express from 'express'
import { createCourse } from '../controllers/courseController.js'
import { instructor, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Register New User
router.route('/').post(protect, instructor, createCourse)

export default router
