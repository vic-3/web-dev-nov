"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {

  const [showNav, setShowNav] = useState(false)

  const handleMenu = () => {
    if(showNav){
      setShowNav(false)
    }
    else{
      setShowNav(true)
    }
  }


  return (
    <header className='header'>
    <div className='logo-container'>
        <Image  src='https://cafeu.vercel.app/img/logo/logo.png' width={120} height={40} className='logo'/>
    </div>
    <button className='btn menu-btn' onClick={handleMenu}>
    <CiMenuBurger />
    </button>
    <div className='navbar'>
        <Link  className='nav-link' href={'#'}>Home</Link>
        <Link className='nav-link' href={'#'}>about us</Link>
        <Link  className='nav-link'href={'#'}>Menu</Link>
        <Link  className='nav-link'href={'#'}>Blog</Link>
        <Link className='nav-link' href={'#'}>Pages</Link>
        <Link  className='nav-link'href={'#'}>Contact</Link>
    </div>

{
  showNav && (
    <div className='mobile-navbar'>
    <Link  className='nav-link' href={'#'}>Home</Link>
    <Link className='nav-link' href={'#'}>about us</Link>
    <Link  className='nav-link'href={'#'}>Menu</Link>
    <Link  className='nav-link'href={'#'}>Blog</Link>
    <Link className='nav-link' href={'#'}>Pages</Link>
    <Link  className='nav-link'href={'#'}>Contact</Link>
</div>
  )
}
   
    </header>
  )
}
