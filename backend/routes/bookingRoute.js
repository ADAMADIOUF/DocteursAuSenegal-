import express from 'express'
import {
  bookDoctor,
  createBooking,
  getAppointmentsForUser,
  cancelBooking,
  payForBookingCash,
  getAppointmentForDoctor,
} from '../controllers/bookingController.js'
import { admin, doctor, protect } from '../middleware/authMiddleware.js'
const router = express.Router()

// Route for booking a doctor
router.post('/book/:doctorId', bookDoctor)

// Route for creating a new booking
router.post('/createBooking', createBooking)

// Route to get appointments for a user
router.get('/appointments/:userId', getAppointmentsForUser)

// Route to cancel an appointment
router.delete('/appointments/:appointmentId', cancelBooking)
router.post('/pay/:bookingId', payForBookingCash)
router.get('/appointments/:doctorId', doctor, getAppointmentForDoctor)
export default router
