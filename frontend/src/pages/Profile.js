import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useProfileMutation } from '../slices/userApiSlice'
import Loader from '../components/Loading'
import { setCredentials } from '../slices/authSlice'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('') // New state for phone
  const [dob, setDob] = useState('') // New state for dob
  const [gender, setGender] = useState('') // New state for gender

  const { userInfo } = useSelector((state) => state.auth)
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name)
      setEmail(userInfo.email)
      setPhone(userInfo.phone || '') // Populate phone if available
      setDob(userInfo.dob || '') // Populate dob if available
      setGender(userInfo.gender || '') // Populate gender if available
    }
  }, [userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
          phone,
          dob,
          gender,
        }).unwrap()
        dispatch(setCredentials(res))
        toast.success('Profile updated successfully')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <div className='profile-container section-center'>
      <div className='profile-form'>
        <h2>User Profile</h2>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input
              type='text'
              id='phone'
              placeholder='Enter phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='dob'>Date of Birth</label>
            <input
              type='date'
              id='dob'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>Gender</label>
            <select
              id='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn'>
            Update
          </button>
          {loadingUpdateProfile && <Loader />}
        </form>
      </div>
    </div>
  )
}

export default ProfileScreen
