
import express from 'express'
import { admin, protect } from '../middleware/authMiddleware.js'
import {
  login,
  logout,
  register,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from '../controllers/userController.js'

const router = express.Router()

// Public routes
router.post('/login', login)
router.post('/logout', logout)
router.post('/', register)

// Protected routes for user profile
router
  .route('/profile')
  .get(protect, getUserProfile) // Get the profile of the logged-in user
  .put(protect, updateUserProfile) // Update the profile of the logged-in user

// Admin routes
router.route('/').get(protect, admin, getUsers) // Get all users (admin only)

router
  .route('/:id')
  .delete(protect, admin, deleteUser) // Delete a user by ID (admin only)
  .put(protect, admin, updateUser) // Update a user by ID (admin only)

export default router
