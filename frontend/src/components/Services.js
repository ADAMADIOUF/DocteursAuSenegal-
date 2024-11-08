import React from 'react'
import {
  FaVideo,
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaStethoscope,
  FaHandHoldingMedical,
  FaHospital,
  FaMedkit,
} from 'react-icons/fa'

const Services = () => {
  return (
    <div className='services'>
      <div className='title'>
        <h3>Nos Services</h3>
      </div>
      <div className='service-list section-center'>
        {/* Consultations Vidéo */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaVideo size={40} color='#4ECDC4' />
          </div>
          <h3>Consultations Vidéo</h3>
          <p>
            Consultez vos médecins à distance et obtenez des conseils médicaux
            en temps réel.
          </p>
        </div>

        {/* Santé Personnalisée */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaUserMd size={40} color='#FF6B6B' />
          </div>
          <h3>Santé Personnalisée</h3>
          <p>
            Recevez des soins adaptés à vos besoins et suivez votre évolution
            médicale à distance.
          </p>
        </div>

        {/* Suivi de Santé */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaHeartbeat size={40} color='#1A535C' />
          </div>
          <h3>Suivi de Santé</h3>
          <p>
            Suivez votre santé et vos rendez-vous en toute simplicité grâce à
            notre plateforme.
          </p>
        </div>

        {/* Urgences Médicales */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaAmbulance size={40} color='#FF6B6B' />
          </div>
          <h3>Urgences Médicales</h3>
          <p>
            En cas d'urgence, obtenez rapidement l'aide nécessaire avec nos
            services d'ambulance et d'assistance.
          </p>
        </div>

        {/* Consultation Médicale */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaStethoscope size={40} color='#4ECDC4' />
          </div>
          <h3>Consultation Médicale</h3>
          <p>
            Consultez des médecins qualifiés pour toutes vos préoccupations de
            santé, en ligne ou en personne.
          </p>
        </div>

        {/* Soins à Domicile */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaHandHoldingMedical size={40} color='#F7FFF7' />
          </div>
          <h3>Soins à Domicile</h3>
          <p>
            Bénéficiez de soins médicaux directement chez vous, offerts par des
            professionnels de santé.
          </p>
        </div>

        {/* Hôpital à Distance */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaHospital size={40} color='#1A535C' />
          </div>
          <h3>Hôpital à Distance</h3>
          <p>
            Accédez à des services hospitaliers à distance et obtenez un suivi
            médical complet.
          </p>
        </div>

        {/* Médicaments à Distance */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaMedkit size={40} color='#FF6B6B' />
          </div>
          <h3>Médicaments à Distance</h3>
          <p>
            Commandez et recevez vos médicaments à domicile en toute sécurité et
            simplicité.
          </p>
        </div>

        {/* Cliniques Partenaires */}
        <div className='service-item'>
          <div className='service-icon'>
            <FaHospital size={40} color='#4ECDC4' />
          </div>
          <h3>Cliniques Partenaires</h3>
          <p>
            Accédez à un réseau de cliniques partenaires offrant une qualité de
            soins supérieure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
