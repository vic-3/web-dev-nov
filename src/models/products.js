import mongoose from "mongoose"

const productSchema=mongoose.Schema({
    productUrl:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
       max:5,
       min:1
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},{timestamps:true})
// model tHE TABLE
const productsModel=mongoose.models.product || mongoose.model('product', productSchema)
export default productsModel