import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Discover from '@/components/Discover'
import Newsletter from '@/components/Newsletter'
import About from '@/components/About'
import 'animate.css'


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default async function Home() {
  // make a get request to /api/movies/

 async function getMovies(){

  // to handler error , we need to use our try ad catch block 
  // so any error exception that is on the code will be caught and the 
  // user will see a friendly error
  try{
       const res= await fetch('http://localhost:3000/api/movies/');
    // now, we convert the response sent by the server in json to object
    return await res.json()
  }
  catch(err){
    console.log("server err", err)
  }
 

  }

  const data= await getMovies()
  console.log(data)
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