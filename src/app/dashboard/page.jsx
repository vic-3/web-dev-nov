

// import Error from 'next/error';
import productsModel from '@/models/products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default async function Dashboard() {
const getdata=async ()=>{

  try {
    const res= await fetch('http://localhost:3000/api/getProducts');
    
    if(!res.ok){
      throw new Error('failed to fetch')
    }
    else{
      return await res.json()
    }
   
    
  } catch (error) {
    console.log("cpuld not fetch, ", error)
  }
}

const data= await getdata();
console.log(data)
  


  return (
    <div>
      <h2>This is the dashboard</h2>

      <p>gallery</p>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center" }  }>
      
       {data.map((product)=>{
        return(
           <Link href={`/dashboard/${product._id}`} style={{textDecoration:'none', color:"black"}}>
            <Image src={product.productUrl} width={200} height={300} alt={product.price}/>
            <p>{product.desc}</p>
            <p>${product.price}</p>
            <p>{product.rating}</p>

         </Link>
        )
        
       })}
        
      </div>
     
    </div>
  )
}
