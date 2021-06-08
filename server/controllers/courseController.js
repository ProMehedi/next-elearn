import asyncHandler from 'express-async-handler'

// @desc    Auth User & Get Token
// @route   GET /api/users/login
// @access  Puclic
export const createCourse = asyncHandler(async (req, res) => {
  res.send({ success: true })

  // if (user && (await user.mathPassword(password))) {

  // } else {
  //   res.status(401)
  //   throw new Error('Invalid email or password')
  // }
})
