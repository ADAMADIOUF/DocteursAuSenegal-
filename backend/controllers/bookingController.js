// controllers/doctorController.js
import Doctor from '../models/Doctor.js'
import Booking from '../models/Booking.js'
import asyncHandler from '../middleware/asyncHandler.js'

// Book a time slot with a doctor
const bookDoctor = asyncHandler(async (req, res) => {
  const { doctorId } = req.params
  const { date, time, userId } = req.body // Include `userId` for the patient

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

  // Create new booking
  const booking = new Booking({ doctor: doctorId, user: userId, date, time })
  await booking.save()

  // Increment the slots_booked count for the doctor
  doctor.slots_booked += 1
  await doctor.save()

  res.status(201).json({ message: 'Booking successful', booking })
})

export { bookDoctor }
