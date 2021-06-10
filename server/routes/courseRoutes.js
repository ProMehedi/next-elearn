import express from 'express'
import {
  createCourse,
  getCourseById,
  updateCourse,
} from '../controllers/courseController.js'
import { instructor, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// All Courses
router.route('/').post(protect, instructor, createCourse)

// Course By ID
router
  .route('/:id')
  .post(protect, instructor, updateCourse)
  .get(protect, instructor, getCourseById)

export default router
