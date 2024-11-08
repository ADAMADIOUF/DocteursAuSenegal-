import React from 'react'
import SearchDoctors from './SearchDoctors'
import ImagesChange from './ImagesChange'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-details'>
        <SearchDoctors />
        <ImagesChange />
      </div>
    </div>
  )
}

export default Header
