import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
        <div className='hero-text'>
            <p className='secondary-text'>
                Best In Cafeu
            </p>
            <h3>
                BBQ Chicken <span>Salad</span> With Creamy Avocado
            </h3>

            <p>
            </p>
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 
               Lorem ipsum 


        </div>
        <div className='hero-image'>
            <Image src={'https://cafeu.vercel.app/img/slider/first-slider.png'} width={100} height={100} className='food-plate'/>
        </div>
    </div>
  )
}
