import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
const DoctorRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)
  return userInfo && userInfo.isDoctor ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace />
  )
}

export default DoctorRoute
