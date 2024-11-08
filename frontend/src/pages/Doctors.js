import React, { useState } from 'react'
import { useGetDoctorsQuery } from '../slices/doctorApiSlice'
import { Link } from 'react-router-dom'

const Doctors = () => {
  const [specialty, setSpecialty] = useState('')

  const {
    data: doctorsData,
    error,
    isLoading,
  } = useGetDoctorsQuery({
    specialty,
  })

  // Check for loading state
  if (isLoading) {
    return <div>Loading...</div>
  }

  // Check for error state
  if (error) {
    return <div>Error loading doctors</div>
  }

  // Filter doctors by selected specialty if one is chosen
  const filteredDoctors = doctorsData?.doctors?.filter((doctor) =>
    specialty
      ? doctor.specialty.toLowerCase() === specialty.toLowerCase()
      : true
  )

  // Helper function to check if doctor is available
  const isCurrentlyAvailable = (days, times) => {
    const currentDate = new Date()
    const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' })
    const currentTime =
      currentDate.getHours() +
      ':' +
      String(currentDate.getMinutes()).padStart(2, '0')

    const [start, end] = times.split(' - ')
    const isDayAvailable = days.includes(currentDay)

    // Compare current time with availability start and end times
    const isTimeAvailable = currentTime >= start && currentTime <= end

    return isDayAvailable && isTimeAvailable
  }

  return (
    <div className='doctors-container'>
      <h2>Doctors List</h2>

      {/* Specialty Filter Dropdown */}
      <article className='filter-section'>
        <h4>Filter by Specialty</h4>
        <label>
          Specialty:
          <select
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
          >
            <option value=''>All Specialties</option>
            <option value='Orthopedics'>Orthopedics</option>
            <option value='General Medicine'>General Medicine</option>
            <option value='Pediatrics'>Pediatrics</option>
          </select>
        </label>
      </article>

      <div className='doctor-cards-container section-center'>
        {filteredDoctors?.map((doctor) => (
          <div key={doctor._id} className='doctor-card'>
            <Link to={`/doctor/${doctor._id}`}>
              <img
                src={doctor.image}
                alt={doctor.name}
                className='doctor-image'
              />
              <h3>{doctor.name}</h3>
              <p>
                <strong>Specialty:</strong> {doctor.specialty}
              </p>
              <p>
                <strong>Available Days:</strong>{' '}
                {doctor.available.days.join(', ')}
              </p>
              <p
                style={{
                  color: isCurrentlyAvailable(
                    doctor.available.days,
                    doctor.available.times
                  )
                    ? 'green'
                    : 'red',
                }}
              >
                <strong>Available Times:</strong> {doctor.available.times}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors
