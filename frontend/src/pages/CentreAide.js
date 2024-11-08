import React, { useState } from 'react'
import {
  FaSearch,
  FaExclamationCircle,
  FaUserMd,
  FaCalendarAlt,
  FaShieldAlt,
  FaVirus,
} from 'react-icons/fa'

const CentreAide = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // You can replace the alert with actual search logic (e.g., fetching results from an API)
    alert(`Recherche de : ${searchQuery}`)
  }

  return (
    <div className='centre-aide'>
      <div className='centre-aide-header'>
        <h1>Centre d'Aide - Docteurs au Sénégal</h1>
        <p>
          Recherchez des articles pour trouver votre réponse. Ex : Mot de passe
          oublié, créer un compte...
        </p>
        {/* Search Section */}
        <form onSubmit={handleSearchSubmit} className='search-form'>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Recherchez...'
            aria-label='Search'
          />
          <button type='submit'>
            <FaSearch size={20} />
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className='faq-section'>
        <h2>Questions fréquentes</h2>
        <div className='faq-item'>
          <FaExclamationCircle size={30} color='#FF6B6B' />
          <h3>Mot de passe oublié</h3>
          <p>
            Retrouvez des instructions pour réinitialiser votre mot de passe.
          </p>
        </div>
        <div className='faq-item'>
          <FaExclamationCircle size={30} color='#FF6B6B' />
          <h3>Créer un compte</h3>
          <p>
            Découvrez comment créer un compte sur Docteurs au Sénégal et accéder
            à vos services.
          </p>
        </div>
      </div>

      {/* Browse Categories Section */}
      <div className='categories-section'>
        <h2>Parcourir les rubriques d'aide</h2>
        <div className='category-item'>
          <FaUserMd size={30} color='#4ECDC4' />
          <h3>Mon compte Docteurs au Sénégal & mes documents</h3>
          <p>
            Gérez votre santé et celle de vos proches avec Docteurs au Sénégal.
          </p>
        </div>
        <div className='category-item'>
          <FaCalendarAlt size={30} color='#1A535C' />
          <h3>Mes rendez-vous & mes praticiens</h3>
          <p>Accédez à vos rendez-vous et à vos praticiens rapidement.</p>
        </div>
        <div className='category-item'>
          <FaUserMd size={30} color='#FF6B6B' />
          <h3>Les soignants présents sur Docteurs au Sénégal</h3>
          <p>
            Retrouvez des informations sur les soignants présents sur Docteurs
            au Sénégal.
          </p>
        </div>
        <div className='category-item'>
          <FaShieldAlt size={30} color='#FF7043' />
          <h3>La confidentialité de mes données</h3>
          <p>
            Informations concernant la sécurité de vos données et de votre
            compte.
          </p>
        </div>
        <div className='category-item'>
          <FaVirus size={30} color='#FFC107' />
          <h3>COVID-19 & Variole du singe</h3>
          <p>Retrouvez les dernières informations concernant les épidémies.</p>
        </div>
        <div className='category-item'>
          <FaExclamationCircle size={30} color='#FF6B6B' />
          <h3>English FAQs 🇬🇧</h3>
          <p>
            Find English support for the most important functions of the
            Docteurs au Sénégal app.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CentreAide
