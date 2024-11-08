// LastBanner.js
import React from 'react'
import { FaStethoscope, FaUserMd, FaHospital } from 'react-icons/fa'


const LastBanner = () => {
  return (
    <div className='lastBanner'>
      <div className='lastBanner-overlay'>
        <h1 className='lastBanner-title'>Vous êtes médecin ?</h1>
        <p className='lastBanner-subtitle'>
          Découvrez Docteurs au Sénégal et améliorez votre quotidien
        </p>
        <div className='lastBanner-benefits'>
          <div className='benefit-item'>
            <FaStethoscope size={30} color='#FF6B6B' />
            <p>Fournissez des soins de qualité à vos patients</p>
          </div>
          <div className='benefit-item'>
            <FaUserMd size={30} color='#4ECDC4' />
            <p>Améliorez votre qualité de vie au travail</p>
          </div>
          <div className='benefit-item'>
            <FaHospital size={30} color='#1A535C' />
            <p>Augmentez les revenus de votre activité</p>
          </div>
          <div className='benefit-item'>
            <FaStethoscope size={30} color='#FF6B6B' />
            <p>Rejoignez 1 million de soignants en Europe avec nos solutions</p>
          </div>
        </div>
        <button className='lastBanner-btn'>
          Découvrez Docteurs au Sénégal
        </button>
      </div>
    </div>
  )
}

export default LastBanner
