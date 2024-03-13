import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='header'>
    <div className='logo-container'>
        <Image  src='https://cafeu.vercel.app/img/logo/logo.png' width={120} height={40}/>
    </div>
    <div className='navbar'>
        <Link  className='nav-link' href={'#'}>Home</Link>
        <Link className='nav-link' href={'#'}>about us</Link>
        <Link  className='nav-link'href={'#'}>Menu</Link>
        <Link  className='nav-link'href={'#'}>Blog</Link>
        <Link className='nav-link' href={'#'}>Pages</Link>
        <Link  className='nav-link'href={'#'}>Contact</Link>
    </div>
    </header>
  )
}
