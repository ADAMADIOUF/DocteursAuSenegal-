import React from 'react'
import { useSelector } from 'react-redux'
import {
  useGetAppointmentsQuery,
  useCancelAppointmentMutation,
} from '../slices/doctorApiSlice'
import { Link } from 'react-router-dom'
import PayBooking from './PayBooking' // Import the PayBooking component

const MyAppointments = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useGetAppointmentsQuery(userInfo?._id)

  const [
    cancelAppointment,
    { isLoading: isCancelLoading, isError: isCancelError },
  ] = useCancelAppointmentMutation()

  const handleCancel = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId).unwrap()
      alert('Appointment cancelled successfully')
    } catch (err) {
      console.error('Failed to cancel appointment:', err)
      alert('Error cancelling appointment. Please try again.')
    }
  }

  if (appointments && appointments.length === 0) {
    return (
      <div>
        <h2>No Appointments Found</h2>
        <p>
          You haven't booked any appointments yet. Please go to the doctor
          booking page to make one.
        </p>
        <Link to='/'>Go to Booking</Link>
      </div>
    )
  }

  if (isLoading) return <div>Loading your appointments...</div>
  if (isError) return <div>Error loading appointments: {error.message}</div>

  return (
    <div className='appointments-container'>
      <h2>Your Appointments</h2>
      {appointments && appointments.length > 0 ? (
        <div className='appointments-list'>
          {appointments.map((appointment) => (
            <div key={appointment._id} className='appointment-card'>
              <h3>Dr. {appointment.doctor.name}</h3>
              <div className='doctor-info'>
                <img
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                  className='doctor-image'
                />
                <p>
                  <strong>Specialty:</strong> {appointment.doctor.specialty}
                </p>
              </div>
              <p>
                <strong>Appointment Date:</strong> {appointment.date}
              </p>
              <p>
                <strong>Appointment Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Fees:</strong> ${appointment.doctor.fees}
              </p>
              <button
                onClick={() => handleCancel(appointment._id)}
                disabled={isCancelLoading}
                className='cancel-button'
              >
                {isCancelLoading ? 'Cancelling...' : 'Cancel Appointment'}
              </button>
              {isCancelError && (
                <p style={{ color: 'red' }}>
                  Error cancelling appointment. Please try again.
                </p>
              )}

              {/* Add PayBooking Button */}
              {!appointment.isPaid && (
                <PayBooking bookingId={appointment._id} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No appointments available.</p>
      )}
    </div>
  )
}

export default MyAppointments
