import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  useGetdoctorDetailQuery,
  useCreateBookingMutation,
} from '../slices/doctorApiSlice'

const Booking = () => {
  const { id: doctorId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookingError, setBookingError] = useState(null)

  const {
    data: doctor,
    isLoading,
    error: doctorError,
  } = useGetdoctorDetailQuery(doctorId)
  const [
    createBooking,
    { isLoading: bookingLoading, error: bookingMutationError },
  ] = useCreateBookingMutation()

  const { userInfo } = useSelector((state) => state.auth) // Get user info from Redux store

  // Redirect to login only when user tries to book an appointment
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!userInfo) {
      navigate(`/login?redirect=/doctor/${doctorId}`)
      return
    }

    if (!selectedDate || !selectedTime) {
      setBookingError('Please select both date and time for your booking')
      return
    }

    try {
      await createBooking({
        doctorId,
        date: selectedDate,
        time: selectedTime,
        userId: userInfo._id, // Assuming userInfo has _id (or user identifier)
      }).unwrap()
      navigate('/my-appointments')
    } catch (err) {
      setBookingError('Error booking the appointment. Please try again.')
    }
  }

  if (isLoading) return <div>Loading doctor details...</div>
  if (doctorError) return <div>Error loading doctor details</div>

  return (
    <div className='booking-container'>
      <h2>Book an appointment with Dr. {doctor?.name}</h2>
      <img src={doctor?.image} alt={doctor?.name} className='doctor-image' />
      <p>
        <strong>Specialty:</strong> {doctor?.specialty}
      </p>
      <p>
        <strong>Fees:</strong> ${doctor?.fees}
      </p>

      {/* Display error message from booking mutation */}
      {bookingError && <p className='error-message'>{bookingError}</p>}
      {bookingMutationError && (
        <p className='error-message'>
          Error with booking: {bookingMutationError?.message || 'Unknown error'}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Select Date</label>
        <input
          type='date'
          id='date'
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />

        <label htmlFor='time'>Select Time</label>
        <input
          type='time'
          id='time'
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        />

        <button type='submit' disabled={bookingLoading}>
          {bookingLoading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  )
}

export default Booking
