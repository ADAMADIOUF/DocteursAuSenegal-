import asyncHandler from '../middleware/asyncHandler.js'
import Doctor from '../models/Doctor.js'

const getAllDoctors = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {}

  const filters = {
    ...keyword,
    ...(req.query.specialty ? { specialty: req.query.specialty } : {}),
  }

  // Optional: You can add sort options if needed, for example, sorting by name or experience
  const sortOptions = req.query.sortBy ? { [req.query.sortBy]: 1 } : { name: 1 } // Default sorting by name

  // Fetch doctors from the database with filters and sorting
  const doctors = await Doctor.find(filters).sort(sortOptions)

  res.json({ doctors })
})
const getSingleDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)

  if (!doctor) {
    res.status(404)
    throw new Error('Doctor not found')
  }

  res.json(doctor)
})
const createDoctor = asyncHandler(async (req, res) => {
  const {
    name,
    specialty,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    date,
    slots_booked,
  } = req.body

  const doctor = new Doctor({
    name,
    specialty,
    degree,
    experience,
    about,
    available,
    fees,
    address,
    date,
    slots_booked,
  })

  const createdDoctor = await doctor.save()

  res.status(201).json({
    message: 'Doctor created successfully',
    doctor: createdDoctor,
  })
})
const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)

  if (!doctor) {
    res.status(404)
    throw new Error('Doctor not found')
  }

  // Update the doctor's data based on the request body
  doctor.name = req.body.name || doctor.name
  doctor.specialty = req.body.specialty || doctor.specialty
  doctor.degree = req.body.degree || doctor.degree
  doctor.experience = req.body.experience || doctor.experience
  doctor.about = req.body.about || doctor.about
  doctor.available = req.body.available || doctor.available
  doctor.fees = req.body.fees || doctor.fees
  doctor.address = req.body.address || doctor.address
  doctor.date = req.body.date || doctor.date
  doctor.slots_booked = req.body.slots_booked || doctor.slots_booked

  const updatedDoctor = await doctor.save()

  res.json({
    message: 'Doctor updated successfully',
    doctor: updatedDoctor,
  })
})
const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id)

  if (!doctor) {
    res.status(404)
    throw new Error('Doctor not found')
  }

  await doctor.remove()

  res.json({
    message: 'Doctor deleted successfully',
  })
})
export{getAllDoctors,getSingleDoctor,createDoctor,updateDoctor,deleteDoctor}