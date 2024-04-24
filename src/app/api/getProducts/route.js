import productsModel from "@/models/products"
import { connection } from "@/utils/db"
import { NextResponse } from "next/server";

export const GET= async ()=>{

    try{
        
        // call database connection
        await  connection()
        //    get all products from database
            const product = await productsModel.find();
            if(product){
                return new NextResponse(JSON.stringify(product) ,{status:200})            }
        }

        catch(err){
            console.log(err.message)
            return new NextResponse(JSON.stringify("server Error"), {status:500})
        }
    
    
    }