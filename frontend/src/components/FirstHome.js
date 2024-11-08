import React from 'react'
import { FaStethoscope, FaUsers, FaFileAlt } from 'react-icons/fa'; 
const FirstHome = () => {
  return (
    <div
      className='firsthome section-center
    '
    >
      <div className='title'>
        <h3>Votre guide vers une vie saine et équilibrée</h3>
      </div>
      <div className='container firsthome-container'>
        <article>
          <img
            src='https://www.doctolib.fr/webpack/555cd5ea3855e96ba637.svg'
            alt=''
          />
          <h3>Simplifiez l'accès à vos soins</h3>
          <p>
            Prenez rendez-vous en vidéo ou en personne, et soyez alerté pour ne
            jamais manquer une consultation .
          </p>
        </article>
        <article>
          <img
            src='https://www.doctolib.fr/webpack/e51f682479581f5288e4.svg'
            alt=''
          />
          <h3>Recevez des soins sur mesure</h3>
          <p>
            Communiquez avec vos soignants, bénéficiez de conseils préventifs,
            et obtenez des soins selon vos besoins.
          </p>
        </article>
        <article>
          <img
            src='https://www.doctolib.fr/webpack/a23e31dd9081445e6aa6.svg'
            alt=''
          />
          <h3>Prenez le contrôle de votre santé</h3>
          <p>
            Centralisez toutes vos informations de santé et celles de vos
            proches en toute simplicité.
          </p>
        </article>
      </div>
      <div className="doctorNumber">
      <article className="header">
        <h3>Docteurs au Sénégal en chiffres</h3>
      </article>
      <div className="stats">
        <article className="stat">
          <h2>5 millions</h2>
          <p>
            <FaUsers className="icon" />
            Personnes mieux soignées
          </p>
        </article>
        <article className="stat">
          <h2>1 million</h2>
          <p>
            <FaStethoscope className="icon" />
            Soignants utilisant Docteurs au Sénégal
          </p>
        </article>
        <article className="stat">
          <h2>3 millions</h2>
          <p>
            <FaFileAlt className="icon" />
            Documents partagés chaque mois
          </p>
        </article>
      </div>
    </div>
    </div>
  )
}

export default FirstHome
