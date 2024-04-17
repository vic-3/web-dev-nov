const { NextResponse } = require("next/server")
import { connection } from "@/utils/db"
import mongoose from "mongoose"

export const POST = async (request)=>{

    try{

        // connect to mongo Db
       await connection()
        // destructure incoming user data
        const {firstName,lastName,email,passsword}=await request.json()
        console.log(firstName)
        if(!firstName){
            return new NextResponse(JSON.stringify({msg:"provide first name"}),{status:400})
        }
        // validate for other user values
    
        // if user provided all details
        else{
            
            // store user info in db
            return new NextResponse(JSON.stringify({msg:"user info received successefully"}),{status:200})
        }

    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
    }
}