import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation, useLogoutMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../components/Loading'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('') // New state for phone
  const [dob, setDob] = useState('') // New state for dob
  const [gender, setGender] = useState('') // New state for gender

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()
  const [logoutApiCall] = useLogoutMutation()
  const { userInfo } = useSelector((state) => state.auth)

  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    try {
      const res = await register({
        name,
        email,
        password,
        phone,
        dob,
        gender,
      }).unwrap() // Pass new fields to the API
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className='login-screen'>
      <h1>Create Account</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            id='phone'
            placeholder='Enter phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='dob'>Date of Birth</label>
          <input
            type='date'
            id='dob'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gender</label>
          <select
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value=''>Select gender</option>
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
            required
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
            required
          />
        </div>
        <button type='submit' className='submit-button' disabled={isLoading}>
          Register
        </button>
        {isLoading && <Loader />}
      </form>

      <div className='links'>
        <div className='login-link'>
          Already have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Sign In
          </Link>
        </div>
      </div>

      <div className='return-to-store'>
        <Link to='/'>Return to Store</Link>
      </div>
    </div>
  )
}

export default RegisterScreen