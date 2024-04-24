import productsModel from "@/models/products";
import { connection } from "@/utils/db"
import { NextResponse } from "next/server";

export const POST = async (request) => {

    try {
        // destructure incoming values
        const { productUrl, price, ratings, desc } = await request.json()

        // call database connection
        await connection();

        // store product data in our db
        const product = await new productsModel({ productUrl: productUrl, price: price, desc: desc, ratings: ratings })
        await product.save()
        // if product is stored successfully, send a response
        if(product){
            return new NextResponse(JSON.stringify({msg:"products inserted"}), {status:200})
        }

    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server error"}), {status:500} )
    }
    

}