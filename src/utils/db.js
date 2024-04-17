// craeate a connection to our mongo db atlas
import mongoose from "mongoose"

export const connection= async ()=>{
    try{
        const connect= await mongoose.connect(process.env.MONGODB_URL)
        if(connect){
            console.log("Db connected")
        }
        return connect

    }
    catch(err){
       console.log(err)
    }
}

