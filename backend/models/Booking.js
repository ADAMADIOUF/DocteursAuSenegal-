// models/Booking.js
import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for patients
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'booked', // Possible values: 'booked', 'canceled', etc.
  },
})

const Booking = mongoose.model('Booking', bookingSchema)
export default Booking
