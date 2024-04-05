"use client"
import React, { createContext,useState } from 'react'
// create context
// create context provider
export const ThemeContext=createContext()
export const  ThemeContextProvider= ({children})=> {
    const [theme,setTheme]=useState('light')

    const toggleMode=()=>{
        setTheme((prev)=>(prev==='dark' ? 'light' : 'dark') )
    }

  return (
    <ThemeContext.Provider value={{theme,toggleMode}}>
        <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
