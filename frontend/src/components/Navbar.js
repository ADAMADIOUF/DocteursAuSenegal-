import React from 'react'
import { Link } from 'react-router-dom' // Importing Link from react-router-dom

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to={`/`}>
              <h3>docteurs au senegal</h3>
            </Link>
          </div>
          <div className='nav-items'>
            {/* Linking buttons to respective routes */}
            <Link to='/login'>
              <button>Se connecter</button>
            </Link>

            <Link to='/soignant'>
              <button>Vous êtes soignant ?</button>
            </Link>

            {/* Linking the "Centre d'Aide" text */}
            <Link to='/centre-aide'>
              <p>Centre d'Aide</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
