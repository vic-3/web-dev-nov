// the {params} will be used to handle any params sent with the get request

import productsModel from "@/models/products"
import { connection } from "@/utils/db"
import { NextResponse } from "next/server"

export const GET = async (request, {params})=>{
    try {
        const id=params.id
         // call database connection
    await connection()
    // get single product with the params.id from the products table
    const product=await productsModel.findOne({_id:id})
    if(product){
        return new NextResponse(JSON.stringify(product), {status:200} )
    }
    else{
        return new NextResponse(JSON.stringify({msg:"no products"}), {status:400})
    }
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({msg:"server error"}) , {status:500})
    }
   
}