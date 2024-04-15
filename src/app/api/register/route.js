const { NextResponse } = require("next/server")

export const POST = async (request)=>{

    try{
        // destructure incoming user data
        const {firstName}=await request.json()
        console.log(firstName)
        if(!firstName){
            return new NextResponse(JSON.stringify({msg:"provide first name"}),{status:400})
        }
    
        // if user provided all details
        // store user info in db
        else{
    
            return new NextResponse(JSON.stringify({msg:"user info received successefully"}),{status:200})
        }

    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server error"}),{status:500})
    }
}