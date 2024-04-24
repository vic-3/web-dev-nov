import React from 'react'

export default async function Dashboard() {

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/getProducts")
    const response= await res.json()
    return response

  }

  const product= await getProducts()
  console.log(product)
  return (
    <div>
      <h2>This is the dashboard</h2>
    </div>
  )
}
