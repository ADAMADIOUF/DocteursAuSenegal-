import React, { useState, useEffect } from 'react'

// Array of images (replace these URLs with your actual image URLs)
const images = [
  'https://i.pinimg.com/236x/48/f1/2d/48f12d4791b7a224e6233fd8ba1dd824.jpg',
  'https://i.pinimg.com/236x/75/4b/f8/754bf873aeb46956ba51245a5267293f.jpg',
  'https://i.pinimg.com/236x/a4/57/02/a457023a1702efb0655b9bba3f7a4edc.jpg',
  'https://i.pinimg.com/236x/40/8e/33/408e331d8ec30475b0a33e2fb179ef64.jpg',
  'https://i.pinimg.com/236x/28/4d/19/284d199b4c62210498e3c1ae283dc1ce.jpg',
]

const ImagesChange = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)

    // Clean up the interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='image-container'>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className='image'
      />
    </div>
  )
}

export default ImagesChange
