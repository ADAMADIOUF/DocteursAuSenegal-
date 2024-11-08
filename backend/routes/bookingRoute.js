// routes/doctorRoutes.js
import express from 'express'
import { bookDoctor } from '../controllers/bookingController.js'

const router = express.Router()

// Route to book a doctor
router.post('/:doctorId/book', bookDoctor)

export default router
