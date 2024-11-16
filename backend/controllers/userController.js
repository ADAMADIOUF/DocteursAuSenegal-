import User from '../models/User.js'
import asyncHandler from '../middleware/asyncHandler.js'
import generateToken from '../utils/generateToken.js'

// Generate a random numeric code
const generateNumericCode = (length) => {
  let code = ''
  for (let i = 0; i < length; i++) {
    code += Math.floor(Math.random() * 10)
  }
  return code
}

// Login function
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
    })
  } else {
    res.status(400)
    throw new Error('User not found')
  }
})

// Logout function
const logout = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'Logout successful' })
})

// Register function
const register = asyncHandler(async (req, res) => {
  const { email, name, password, phone, dob, gender } = req.body

  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  const verificationCode = generateNumericCode(6)
  const verificationExpiresAt = Date.now() + 3600000 // 1 hour from now

  try {
    const user = await User.create({
      name,
      email,
      password,
      phone,
      dob,
      gender,
      verificationToken: verificationCode,
      verificationExpiresAt,
    })

    if (user) {
      generateToken(res, user._id)
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isDoctor: user.isDoctor,
      })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      res
        .status(400)
        .json({ message: `Validation error: ${messages.join(', ')}` })
    } else {
      res.status(400)
      throw new Error('Failed to register user')
    }
  }
})

// Get User Profile function
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      dob: user.dob,
      gender: user.gender,
      isAdmin: user.isAdmin,
      isDoctor: user.isDoctor,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// Update User Profile function
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.phone = req.body.phone || user.phone
    user.dob = req.body.dob || user.dob
    user.gender = req.body.gender || user.gender

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      dob: updatedUser.dob,
      gender: updatedUser.gender,
      isAdmin: updatedUser.isAdmin,
      isDoctor: updatedUser.isDoctor,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// Get All Users function (Admin only)
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// Delete User function (Admin only)
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// Update User function (Admin only)
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.phone = req.body.phone || user.phone
    user.dob = req.body.dob || user.dob
    user.gender = req.body.gender || user.gender
    user.isAdmin =
      req.body.isAdmin !== undefined ? req.body.isAdmin : user.isAdmin
    user.isDoctor =
      req.body.isDoctor !== undefined ? req.body.isDoctor : user.isDoctor

    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      dob: updatedUser.dob,
      gender: updatedUser.gender,
      isAdmin: updatedUser.isAdmin,
      isDoctor: updatedUser.isDoctor,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  login,
  logout,
  register,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
}
