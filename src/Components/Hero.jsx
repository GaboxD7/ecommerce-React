import React from 'react'

import './Hero.css'

function Hero(props) {
  return (
    <div className='hero'>
      <div className='texture' >

      </div>
      <video 
      loop
      autoPlay
      muted 
      preload='auto'
      >
        <source src="../../video/compressed.mp4"  />
        Tu navegador no soporte el video
      </video>

      <div className='caption'>
        <h1>bicicletas a tu estilo</h1>
        <p>Todo para que sigas recorriendo el mundo en 2 ruedas.</p>
      </div>


    </div>
  )
}



export default Hero
