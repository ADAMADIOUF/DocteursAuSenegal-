import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  }, // Reference to the doctor
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, // Reference to the patient (assuming a User model)
  date: { type: Date, required: true }, // Appointment date
  time: { type: String, required: true }, // Appointment time (e.g., '9:00 AM')
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Canceled'],
    default: 'Pending',
  }, // Status of the appointment
  fees: { type: Number, required: true }, // Fees for the appointment
  consultations: {
    type: [String],
    enum: ['In-Person', 'Video Call'],
    required: true,
  }, // Types of consultations
  createdAt: { type: Date, default: Date.now }, // Date the appointment was created
})

const Appointment = mongoose.model('Appointment', appointmentSchema)
export default Appointment
