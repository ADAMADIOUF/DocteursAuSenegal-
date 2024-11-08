// Footer.js
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-info'>
          <h3 className='footer-title'>Docteurs au Sénégal</h3>
          <p className='footer-description'>
            Connectez-vous avec les meilleurs médecins et accédez à des soins de
            santé de qualité au Sénégal.
          </p>
        </div>

        <div className='footer-links'>
          <h4 className='footer-link-title'>Liens rapides</h4>
          <ul>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#about-us'>À propos de nous</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='footer-social'>
          <h4 className='footer-link-title'>Suivez-nous</h4>
          <div className='social-icons'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaFacebook size={30} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaTwitter size={30} />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaInstagram size={30} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2024 Docteurs au Sénégal. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
