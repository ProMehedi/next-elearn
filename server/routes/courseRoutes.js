import express from 'express'
import {
  createCourse,
  getCourseBySlug,
  updateCourse,
} from '../controllers/courseController.js'
import { instructor, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// All Courses
router.route('/').post(protect, instructor, createCourse)

// Single Course
router
  .route('/:slug')
  .post(protect, instructor, updateCourse)
  .get(protect, instructor, getCourseBySlug)

export default router
