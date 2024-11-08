// import.js (or your existing data import file)

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import doctors from './data/doctors.js'
import User from './models/User.js'
import Doctor from './models/Doctor.js'
import Appointment from './models/Appointment.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  try {
    // Delete existing data
    await Appointment.deleteMany()
    await Doctor.deleteMany()
    await User.deleteMany()

    // Insert users into the database
    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    // Associate doctors with the first user (admin user)
    const sampleDoctors = doctors.map((doctor) => {
      return { ...doctor, user: adminUser }
    })

    // Insert doctors into the database
    await Doctor.insertMany(sampleDoctors)

    console.log(`Data imported!`.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    // Delete all data
    await Appointment.deleteMany()
    await Doctor.deleteMany()
    await User.deleteMany()

    console.log(`Data Destroyed!`.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

// Determine whether to import or destroy data based on the argument
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
