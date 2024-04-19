const { NextResponse } = require("next/server")
import userModel from "@/models/user"
import { connection } from "@/utils/db"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"


export const POST = async (request)=>{

    try{

        // connect to mongo Db
       await connection()
        // destructure incoming user data
        const {firstName,lastName,email,password}=await request.json()
    
        if(!firstName){
            return new NextResponse(JSON.stringify({msg:"provide first name"}),{status:400})
        }
        // validate for other user values
    
        // if user provided all details
        else{
            
            // hash user password
            const salt=bcrypt.genSaltSync(16)
            const hashedPassword=bcrypt.hashSync(password,salt)
            // store user info in 
            const user= await new userModel({firstName:firstName, lastName:lastName, email:email,password:hashedPassword}) 
            await user.save()
            if(user){
                return new NextResponse(JSON.stringify({msg:"user registered successefully"}),{status:200})

            }
        }

    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
    }
}