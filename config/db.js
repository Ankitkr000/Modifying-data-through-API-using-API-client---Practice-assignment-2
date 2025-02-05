const mongoose=require("mongoose")

const connectDB=async(req,res)=>{
    try{
        await mongoose.connect("mongodb://localhost:27017")
        console.log("MongoDBconnected!!")
    }catch(err){
        console.log(err.message)
    }
}

module.exports=connectDB