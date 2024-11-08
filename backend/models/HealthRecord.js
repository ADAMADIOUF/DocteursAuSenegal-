import mongoose from 'mongoose'

const healthRecordSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  diagnosis: { type: String, required: true, trim: true },
  prescription: { type: String, trim: true },
  notes: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
})

const HealthRecord = mongoose.model('HealthRecord', healthRecordSchema)
export default HealthRecord
