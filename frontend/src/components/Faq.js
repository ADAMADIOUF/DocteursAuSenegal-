// Faq.js
import React, { useState } from 'react'


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqs = [
    {
      question: 'Comment puis-je prendre un rendez-vous ?',
      answer:
        'Vous pouvez prendre un rendez-vous en utilisant notre plateforme en ligne ou en appelant directement le centre médical.',
    },
    {
      question: 'Quels types de soins sont disponibles ?',
      answer:
        'Nous proposons une large gamme de soins allant des consultations générales aux soins spécialisés.',
    },
    {
      question: 'Est-ce que les consultations sont remboursées ?',
      answer:
        'Oui, certaines consultations peuvent être remboursées selon votre assurance. Veuillez vérifier avec votre assureur.',
    },
    {
      question: 'Comment devenir soignant sur la plateforme ?',
      answer:
        'Pour devenir soignant, vous devez vous inscrire sur notre plateforme et soumettre vos informations professionnelles pour validation.',
    },
  ]

  return (
    <div className='faq-section'>
      <h2 className='faq-title'>Foire aux Questions (FAQ)</h2>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className='faq-answer'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
