import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <h3>Docteurs au Sénégal</h3>
            </Link>
          </div>
          <div className='nav-items'>
            <Link to='/all-doctors'>
              <button>Tous les Docteurs</button>
            </Link>
            {userInfo ? (
              <>
                <span>Bonjour, {userInfo.name}</span>
                <Link to='/profile'>
                  <button>Profile</button>
                </Link>
                <Link to='/my-appointments'>
                  <button>My Appointment</button>
                </Link>
                <button onClick={logoutHandler}>Se déconnecter</button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <button>Se connecter</button>
                </Link>
                <Link to='/soignant'>
                  <button>Vous êtes soignant ?</button>
                </Link>
              </>
            )}
            <Link to='/centre-aide'>
              <p>Centre d'Aide</p>
            </Link>
          </div>
          {userInfo && userInfo.isDoctor && (
            <div className='admin-dropdown'>
              <button className='admin-dropdown-toggle'>Admin</button>
              <div className='admin-dropdown-menu'>
                <Link to='/doctor/dashboard' className='admin-dropdown-item'>
                  Dashboard
                </Link>
                <Link to='/admin/productlist' className='admin-dropdown-item'>
                  Products
                </Link>
                <Link
                  to='/doctor/doctor-appointments'
                  className='admin-dropdown-item'
                >
                  Orders
                </Link>
                <Link to='/admin/userlist' className='admin-dropdown-item'>
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
