import mongoose from 'mongoose'
import Doctor from '../models/Doctor.js'
import Booking from '../models/Booking.js'
import asyncHandler from '../middleware/asyncHandler.js'

// Helper function to check if an ObjectId is valid
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id)

// Book a time slot with a doctor
const bookDoctor = asyncHandler(async (req, res) => {
  const { doctorId } = req.params
  const { date, time, userId } = req.body // Include userId for the patient

  // Check if doctorId and userId are valid ObjectIds
  if (!isValidObjectId(doctorId) || !isValidObjectId(userId)) {
    return res.status(400).json({ message: 'Invalid doctorId or userId' })
  }

  // Find the doctor by ID
  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' })
  }

  // Check if the slot is already booked
  const existingBooking = await Booking.findOne({
    doctor: doctorId,
    date,
    time,
  })
  if (existingBooking) {
    return res.status(400).json({ message: 'This slot is already booked' })
  }

  // Create a new booking with 'pending payment' status
  const booking = new Booking({
    doctor: doctorId,
    user: userId,
    date,
    time,
    status: 'pending payment', // Mark booking as pending payment (cash on delivery)
  })

  await booking.save()

  // Increment the slots_booked count for the doctor
  doctor.slots_booked += 1
  await doctor.save()

  res
    .status(201)
    .json({ message: 'Booking successful (pending payment)', booking })
})

// Create a new booking (separate controller function for flexibility)
const createBooking = asyncHandler(async (req, res) => {
  const { doctorId, userId, date, time } = req.body

  // Check if doctorId and userId are valid ObjectIds
  if (!isValidObjectId(doctorId) || !isValidObjectId(userId)) {
    return res.status(400).json({ message: 'Invalid doctorId or userId' })
  }

  // Find the doctor by ID
  const doctor = await Doctor.findById(doctorId)
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' })
  }

  // Check if the slot is already booked
  const existingBooking = await Booking.findOne({
    doctor: doctorId,
    date,
    time,
  })
  if (existingBooking) {
    return res.status(400).json({ message: 'This slot is already booked' })
  }

  // Create a new booking
  const booking = new Booking({
    doctor: doctorId,
    user: userId,
    date,
    time,
  })
  await booking.save()

  // Increment the slots_booked count for the doctor
  doctor.slots_booked += 1
  await doctor.save()

  res.status(201).json({ message: 'Booking created successfully', booking })
})

// Get appointments for a user
const getAppointmentsForUser = asyncHandler(async (req, res) => {
  const { userId } = req.params

  // Check if userId is a valid ObjectId
  if (!isValidObjectId(userId)) {
    return res.status(400).json({ message: 'Invalid userId' })
  }

  // Fetch the user's bookings
  const appointments = await Booking.find({ user: userId })
    .populate('doctor', 'name specialty fees image') // Populate doctor details
    .exec()

  if (!appointments || appointments.length === 0) {
    return res.status(404).json({ message: 'No appointments found' })
  }

  res.status(200).json(appointments)
})

// Cancel a booking
const cancelBooking = asyncHandler(async (req, res) => {
  const { appointmentId } = req.params

  // Check if appointmentId is a valid ObjectId
  if (!isValidObjectId(appointmentId)) {
    return res.status(400).json({ message: 'Invalid appointmentId' })
  }

  // Find the booking by ID
  const booking = await Booking.findById(appointmentId)
  if (!booking) {
    return res.status(404).json({ message: 'Appointment not found' })
  }

  // Find the doctor associated with the booking
  const doctor = await Doctor.findById(booking.doctor)
  if (!doctor) {
    return res.status(404).json({ message: 'Doctor not found' })
  }

  // Use deleteOne() instead of remove()
  await Booking.deleteOne({ _id: appointmentId })

  // Decrement the slots_booked count for the doctor
  doctor.slots_booked -= 1
  await doctor.save()

  res.status(200).json({ message: 'Appointment cancelled successfully' })
})

// Cash on delivery payment after booking
const payForBookingCash = asyncHandler(async (req, res) => {
  const { bookingId } = req.body // Booking ID from the user

  // Check if bookingId is a valid ObjectId
  if (!isValidObjectId(bookingId)) {
    return res.status(400).json({ message: 'Invalid bookingId' })
  }

  // Find the booking by ID
  const booking = await Booking.findById(bookingId)
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' })
  }

  // Check if the payment is already made
  if (booking.status === 'paid') {
    return res.status(400).json({ message: 'This booking is already paid for' })
  }

  // Since this is cash on delivery, we immediately mark the booking as paid
  booking.status = 'paid'
  booking.isPaid = true
  booking.paidAt = Date.now() // Record the payment time
  await booking.save()

  res
    .status(200)
    .json({ message: 'Payment received (cash on delivery)', booking })
})
const getAppointmentForDoctor = asyncHandler(async (req, res) => {
  const { appointmentId } = req.params // Get appointment ID
  const doctorId = req.user.id // Get doctor's ID

  // Find the booking (appointment)
  const booking = await Booking.findById(appointmentId).populate(
    'user',
    'name contact dob gender phone'
  ) // Ensure dob is being populated

  if (!booking) {
    return res.status(404).json({ message: 'Appointment not found' })
  }

  // Check if doctor is the one requesting the appointment
  if (booking.doctor.toString() !== doctorId) {
    return res.status(403).json({
      message: 'Access denied: Unauthorized to view this appointment',
    })
  }

  console.log(booking.user.dob) // Log the dob to inspect the format

  // If authorized, return the appointment details
  res.status(200).json(booking)
})


export {
  bookDoctor,
  createBooking,
  getAppointmentsForUser,
  cancelBooking,
  payForBookingCash,
  getAppointmentForDoctor
}
