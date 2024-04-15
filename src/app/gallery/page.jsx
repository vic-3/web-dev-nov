
import React from 'react'
import Images from 'next/image'

export default async function Gallery() {
    const getData= async ()=>{

        const res=await fetch("http://localhost:3000/api/images")
           return await res.json()
           
    }
    const data=await getData()

  return (
    <div>
      <h1>gallery</h1>
      <Images src={data.img1} height={300} width={500}/> 
      <Images src={data.img2} height={300} width={500}/> 
      <Images src={data.img3} height={300} width={500}/> 
      <Images src={data.img4} height={300} width={500}/> 
    </div>
  )
}
