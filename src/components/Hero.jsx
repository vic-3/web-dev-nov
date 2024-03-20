import Image from 'next/image'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { Manrope } from 'next/font/google'
 
const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Hero() {
  return (
    <div className="hero">
        <div className='hero-text'>
            <p className={`${manrope.className} secondary-text`}>
                Best In Cafeu
            </p>
            <h3 className='hero-main-text'>
                BBQ Chicken <span className='highlighted'>Salad</span> With Creamy Avocado
            </h3>

            <p className='hero-paragraph'>
            
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
               </p>
    <div className='btn-container'>
               <button className="btn primary-hero-btn">
                Order Now
               </button>
               <button className="btn secondary-hero-btn">
               <FaPlayCircle className='play-icon'/> &nbsp; Watch Video
               </button>
               </div>
    </div>
        <div className='hero-image'>
            <Image src={'https://cafeu.vercel.app/img/slider/first-slider.png'} width={100} height={100} className='food-plate'/>
        </div>
    </div>
  )
}
