const mongoose=require("mongoose")

const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }
})


module.exports=mongoose.model("Menu",menuSchema)
