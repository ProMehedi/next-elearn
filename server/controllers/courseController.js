import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Auth User & Get Token
// @route   GET /api/users/login
// @access  Puclic
export const createCourse = asyncHandler(async (req, res) => {
  const alreadyExists = await Course.findOne({
    slug: req.body.slug,
  })

  if (alreadyExists) {
    res.status(400)
    throw new Error('Course already exists')
  }

  const course = await Course.create({
    instructor: req.user._id,
    ...req.body,
  })

  if (course) {
    res.send(course)
  } else {
    res.status(401)
    throw new Error('Cannot create course!')
  }
})
