import React, { useEffect, useRef } from 'react'
import { useGetdoctorDetailQuery } from '../slices/doctorApiSlice'
import { useParams } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import Map from '../components/Map'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const SingleDoctor = () => {
  const { id: doctorId } = useParams()
  const {
    data: doctor,
    isLoading: loading,
    error,
  } = useGetdoctorDetailQuery(doctorId)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading doctor details</div>

  return (
    <div className='doctor-detail-container section-center'>
      <h2>{doctor?.name}</h2>
      <img src={doctor?.image} alt={doctor?.name} className='doctor-image' />
      <p>
        <strong>Specialty:</strong> {doctor?.specialty}
      </p>
      <p>
        <strong>About:</strong> {doctor?.about}
      </p>
      <p>
        <strong>Degree:</strong> {doctor?.degree}
      </p>
      <p>
        <strong>Experience:</strong> {doctor?.experience} years
      </p>
      <p>
        <strong>Consultation Fees:</strong> ${doctor?.fees}
      </p>
      <p>
        <strong>Slots Booked:</strong> {doctor?.slots_booked}
      </p>
      <p>
        <strong>Availability:</strong> {doctor?.available.days.join(', ')} from{' '}
        {doctor?.available.times}
      </p>

      <h3>Address</h3>
      <p>
        {doctor?.address.street}, {doctor?.address.city},{' '}
        {doctor?.address.state}, {doctor?.address.country},{' '}
        {doctor?.address.postalCode}
      </p>

      {/* Render the Map component */}
      <Map lng={-101.2934} lat={48.2325} title={`${doctor?.name}'s Location`} />
    </div>
  )
}

export default SingleDoctor
