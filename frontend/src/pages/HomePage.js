import React from 'react'
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
    </div>
  )
}

export default HomePage
