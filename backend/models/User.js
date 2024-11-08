import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String }, // Store URL or base64 string for the user's image
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
  },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false }, // Determines if the user is an admin
  isDoctor: { type: Boolean, default: false }, // Determines if the user is a doctor
})

const User = mongoose.model('User', userSchema)
export default User
