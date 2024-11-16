import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAppointmentsForDoctorQuery } from '../slices/doctorApiSlice'

const DoctorAppointments = () => {
  // Ensure userInfo is available
  const { userInfo } = useSelector((state) => state.auth)

  // Fetch appointments for the doctor, but ensure doctorId is set
  const doctorId = userInfo?._id

  // Check if userInfo exists and doctorId is available before calling the hook
  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useGetAppointmentsForDoctorQuery(doctorId, {
    skip: !doctorId, // Skip the query if there's no doctorId
  })

  // Display loading state
  if (!userInfo) {
    return <div>Loading user data...</div>
  }

  if (isLoading) {
    return <div>Loading appointments...</div>
  }

  // Display error state
  if (isError) {
    return (
      <div>
        <p style={{ color: 'red' }}>
          {error?.data?.message ||
            'An error occurred while fetching appointments.'}
        </p>
      </div>
    )
  }

  // Function to format DOB safely
  const formatDate = (date) => {
    const parsedDate = new Date(date)
    return isNaN(parsedDate) ? 'Invalid Date' : parsedDate.toLocaleDateString()
  }

  // Render appointments
  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments && appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <p>
                <strong>Patient Name:</strong> {appointment.user.name}
              </p>
              <p>
                <strong>Phone:</strong> {appointment.user.phone}
              </p>
              <p>
                <strong>Date of Birth:</strong>{' '}
                {formatDate(appointment.user.dob)}
              </p>
              <p>
                <strong>Gender:</strong> {appointment.user.gender}
              </p>
              <p>
                <strong>Date:</strong>{' '}
                {new Date(appointment.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Status:</strong> {appointment.status}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  )
}

export default DoctorAppointments
