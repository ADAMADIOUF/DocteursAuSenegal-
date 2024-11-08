import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true, // Adding the name field, which is required
  },
  image: { type: String }, // URL or base64-encoded image string for the doctor's image
  specialty: { type: String, required: true },
  degree: { type: String, required: true }, // Degree or qualifications
  experience: { type: Number, required: true }, // Number of years of experience
  about: { type: String, trim: true }, // A brief about the doctor
  available: {
    days: { type: [String], required: true }, // Days the doctor is available (e.g., ['Monday', 'Wednesday'])
    times: { type: String, required: true }, // Availability times (e.g., '9:00 AM - 5:00 PM')
  },
  fees: { type: Number, required: true }, // Consultation fees
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  date: { type: Date, default: Date.now }, // Date when the doctor was added to the system
  slots_booked: { type: Number, default: 0 }, // Number of slots booked by patients
})

const Doctor = mongoose.model('Doctor', doctorSchema)
export default Doctor
