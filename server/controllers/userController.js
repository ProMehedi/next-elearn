import asyncHandler from 'express-async-handler'

// @desc    Auth User & Get Token
// @route   GET /api/v1/users/login
// @access  Puclic
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (req.body) {
    res.status(201).json({ name, email, password })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
