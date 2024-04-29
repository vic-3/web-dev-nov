import React, {useEffect} from 'react'

const Data = () => {
    const url = 'http://localhost:3000/api/getProducts/'

  const getProduct = async () =>{
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers : {
          'Content-Type' : 'application/json'
        }
      })


      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Data
