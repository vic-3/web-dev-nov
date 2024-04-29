"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default async function Product({ params }) {
  const [desc,setDesc]=useState('')
  console.log(params)
  const productId = params.id;

  const res = await fetch(`http://localhost:3000/api/getProducts/${productId}`)
  const product = await res.json()

  console.log(product)

  async function handleSubmit(e){
    e.preventdefault()
    const res=await fetch('http:localhost:3000/api/getProducts/',{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({desc});
    })


  }

  return (


    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image src={product.productUrl} width={300} height={300} />
      <p>{product.desc}</p>

      <form onSubmit={handleSubmit}>
      <label>Chnage desc</label>
      <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)}></textarea>
      <button>Update</button>
      </form>
    </div>

    // {product &&n}

  )
}
