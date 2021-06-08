import slugify from 'slugify'
import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Auth User & Get Token
// @route   GET /api/users/login
// @access  Puclic
export const createCourse = asyncHandler(async (req, res) => {
  const alreadyExists = await Course.findOne({
    slug: slugify(req.body.name.toLowerCase()),
  })

  if (alreadyExists) {
    res.status(400)
    throw new Error('Course already exists')
  }

  const course = await Course.create({
    slug: slugify(req.body.name.toLowerCase()),
    instructor: req.user._id,
    ...req.body,
  })

  if (course) {
    res.send(course)
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
