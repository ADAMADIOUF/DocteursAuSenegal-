import React from 'react'
import {
  FaUserMd,
  FaStethoscope,
  FaMapMarkerAlt,
  FaSearch,
} from 'react-icons/fa'

const SearchDoctors = () => {
  return (
    <div className='search-doctors'>
      <h2>Rechercher un Médecin</h2>
      <form className='search-form'>
      
        <div className='form-group'>
          <FaUserMd className='icon' />
          <input type='text' placeholder='Nom du médecin' />
        </div>

      
        <div className='form-group'>
          <FaStethoscope className='icon' />
          <input type='text' placeholder='Spécialité' />
        </div>

      
        <div className='form-group'>
          <FaMapMarkerAlt className='icon' />
          <input type='text' placeholder='Adresse' />
        </div>

       
        <button type='submit' className='search-button'>
          <FaSearch className='button-icon' /> Rechercher
        </button>
      </form>
    </div>
  )
}

export default SearchDoctors
