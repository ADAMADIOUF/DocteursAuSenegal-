import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import doctorRoute from "./routes/doctorRoute.js"
import bookingRoute from './routes/bookingRoute.js'
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
const port = process.env.PORT || 5000
app.use('/api/doctors', doctorRoute)
app.use('/api/booking', bookingRoute)
app.listen(port, () => console.log(`The server running at port ${port}`))
