import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import FirstHome from '../components/FirstHome'
import BannerFirst from '../components/BannerFirst'
import Services from '../components/Services'
import BannerSecond from '../components/BannerSecond'
import AboutUs from '../components/AboutUs'
import LastBanner from '../components/LastBanner'
import Faq from '../components/Faq'
import Testimonial from '../components/Testimonial'

const HomePage = () => {
  const location = useLocation()
  const [doctors, setDoctors] = useState([])

  // Extract query parameters from the URL
  const searchParams = new URLSearchParams(location.search)
  const keyword = searchParams.get('keyword')
  const specialty = searchParams.get('specialty')
  const address = searchParams.get('address')

  // Fetch data based on the search parameters
  useEffect(() => {
    const fetchDoctors = async () => {
      let url = `/api/doctors?`

      if (keyword) url += `name=${keyword}&`
      if (specialty) url += `specialty=${specialty}&`
      if (address) url += `address=${address}&`

      // Remove trailing '&' or '?' if no query params
      url = url.slice(0, -1)

      const response = await fetch(url)
      const data = await response.json()
      setDoctors(data)
    }

    if (keyword || specialty || address) {
      fetchDoctors()
    } else {
      // If no search params, you can fetch all doctors or handle accordingly
      setDoctors([])
    }
  }, [location.search])

  return (
    <div>
      <Header />
      <FirstHome />
      <BannerFirst />
      <Services />
      <BannerSecond />
      <AboutUs />
      <LastBanner />
      <Faq />
      <Testimonial />

      {/* Display search results if applicable */}
      {doctors.length > 0 ? (
        <div className='search-results'>
          <h2>Search Results</h2>
          <ul>
            {doctors.map((doctor) => (
              <li key={doctor.id}>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <p>{doctor.address}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No doctors found for your search criteria.</p>
      )}
    </div>
  )
}

export default HomePage
