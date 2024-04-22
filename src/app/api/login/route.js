import userModel from "@/models/user";
import { connection } from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST= async (request)=>{
    try{
        // take user data
        const {email,password}=await request.json();


        // call database connection
        await connection()

        // check if email user sent matches any in the database
        const user= await userModel.find({email:email});
        // check if user email is correct
        if(user){
            // compare user password with hased password in DB
            const passwordTrue=bcrypt.compareSync(password,user[0].password)
            if(passwordTrue){
                return new NextResponse(JSON.stringify({msg:"user logged in successfully"}),{status:200})
            }
            else{
                return new NextResponse(JSON.stringify({msg:"Invalid credentials 1"}), {status:400})
            }
        }
        else{
            return new NextResponse(JSON.stringify({msg:"Invalid credentials 2"}), {status:400})
        }

        
        // console.log(user)
        // return new NextResponse(JSON.stringify(user[0].password), {status:200})

    }
    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify("server error"), {status:500})
    }
}