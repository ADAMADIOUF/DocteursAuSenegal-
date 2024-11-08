// AboutUs.js
import React from 'react'


const AboutUs = () => {
  return (
    <div className='about-us-section'>
      <h2 className='about-us-title'>À propos de nous</h2>
      <p className='about-us-description'>
        Nous sommes une plateforme dédiée à connecter les patients avec les
        médecins au Sénégal et dans toute l'Afrique. Notre mission est
        d'améliorer l'accès aux soins de santé pour tous en fournissant une
        solution simple et efficace.
      </p>

      <div className='about-us-mission'>
        <h3>Notre Mission</h3>
        <p>
          Notre mission est de révolutionner la manière dont les patients
          accèdent aux soins de santé en rendant le processus aussi simple,
          rapide et accessible que possible.
        </p>
      </div>

      <div className='about-us-team'>
        <h3>Notre Équipe</h3>
        <div className='team-members'>
          <div className='team-member'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS46NT3YpSUilh3utcbvpdSz_9DXWWbMcemcbZ3SRVcp29o4DiMrvMPelP4s-p8WiHfOk&usqp=CAU'
              alt='Membre 1'
            />
            <h4>Dr. Aissatou Diallo</h4>
            <p>Médecin Généraliste</p>
          </div>
          <div className='team-member'>
            <img
              src='https://i1.rgstatic.net/ii/profile.image/277094039867398-1443075775602_Q512/Mamadou-Sarr-4.jpg'
              alt='Membre 2'
            />
            <h4>Dr. Mamadou Sarr</h4>
            <p>Chirurgien</p>
          </div>
          <div className='team-member'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyFZ4xytnIzQ4ZZgGObXuPZ055PUhxS0Uiw&s'
              alt='Membre 3'
            />
            <h4>Dr. Khady Ndiaye</h4>
            <p>Pédiatre</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
