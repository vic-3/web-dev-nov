"use client"
import React, { useContext } from 'react'
import { IoMdMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
    const {theme,toggleMode}=useContext(ThemeContext)
    console.log(theme)
  return (
    <div className='toggle'>
        <IoMdMoon  />
        <div className="ball" onClick={toggleMode}  style={theme==='dark' ? {left:'2px'}:{right:'2px'}}></div>
        <IoSunnySharp style={theme=='dark' ? {color:'black'}:{color:"white"}}/>
    </div>
  )
}
