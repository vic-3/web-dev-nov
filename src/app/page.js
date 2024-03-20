import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Discover from '@/components/Discover'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
    <div className='hero-container'>
    <Header />
    <Hero className={inter.className}/>
    </div>

    <Discover/>
    <Newsletter/>
    <About/>
    </>
  )
}