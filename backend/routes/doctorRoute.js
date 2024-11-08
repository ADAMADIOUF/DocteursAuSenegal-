import express from 'express'
import {
  getAllDoctors,
  getSingleDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController.js'

const router = express.Router()

router.route('/').get(getAllDoctors).post(createDoctor) // Get all doctors or create a new doctor
router.route('/:id').get(getSingleDoctor).put(updateDoctor).delete(deleteDoctor) // Get, update, or delete a single doctor by ID

export default router
