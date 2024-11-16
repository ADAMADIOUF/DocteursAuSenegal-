import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchDoctors = () => {
  const [keyword, setKeyword] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    let url = `/search?`

    if (keyword.trim()) url += `keyword=${keyword}&`
    if (specialty.trim()) url += `specialty=${specialty}&`
    if (address.trim()) url += `address=${address}&`

    // Remove trailing '&' or '?' if no query params
    url = url.slice(0, -1)

    navigate(url)
  }

  return (
    <form onSubmit={submitHandler} className='search'>
      <input
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search for doctors...'
        className='search-input'
      />
      <input
        type='text'
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        placeholder='Specialty'
        className='search-input'
      />
      <input
        type='text'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder='Address'
        className='search-input'
      />
      <button type='submit' className='search-button'>
        Search
      </button>
    </form>
  )
}

export default SearchDoctors
