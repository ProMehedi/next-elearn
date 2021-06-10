import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Create Course
// @route   GET /api/courses
// @access  Private/Instructor
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

// @desc    Update Course by ID
// @route   GET /api/courses/:id
// @access  Private/Instructor
export const updateCourse = asyncHandler(async (req, res) => {
  const {
    name,
    slug,
    desc,
    shortDesc,
    videoUrl,
    price,
    paid,
    category,
    duration,
    imgUrl,
    imgName,
  } = req.body

  const course = await Course.findById(req.params.id)
  if (course) {
    ;(course.name = name),
      (course.slug = slug),
      (course.desc = desc),
      (course.short_desc = shortDesc),
      (course.video = videoUrl),
      (course.price = price),
      (course.paid = paid),
      (course.category = category),
      (course.thumb = imgUrl),
      (course.image = imgName),
      (course.duration = duration)

    const updatedCourse = await course.save()
    res.json(updatedCourse)
  } else {
    res.status(404)
    throw new Error('Course Not Found!')
  }
})

// @desc    Fetch Single Course by ID
// @route   GET /api/courses/:id
// @access  Private/Instructor
export const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (course) {
    res.json(course)
  } else {
    res.status(404)
    throw new Error('Course not found!')
  }
})
