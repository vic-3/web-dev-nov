import mongoose from "mongoose"


const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    
}, {timestamps:true})

// if you want to run it has to be created, (sharp)
// 
// 
// before we create our model, we need to check if the model(user) is existing, 
// if not , we then create our collection(table)
const userModel= mongoose.models.user || mongoose.model('user', userSchema)
export default userModel;



