const express = require('express');
const { resolve } = require('path');



const app = express();
const port = 3010;

app.use(express.static('static'));


const userSchema=require("./models/menu")
const connectDB=require("./config/db")

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});



app.put("/menu/:id",async (req,res)=>{
  const {name,price,description}=req.body
  const iId=req.params.id
  try {
    const updatedMenu=await Menu.findByIdAndUpdate(iId,{name,price,description},{new:true})

    if(!updatedMenu){
      return res.status(404).json({message:"Menu item not found"})
    }
    res.status(200).json(updatedMenu)

  } catch (err) {
    res.status(500).json({error:err.message})
  }
})



app.delete("/menu/:id",async(req,res)=>{
  const Id=req.params.id

  try{
 const deletedItem= await Menu.findByIdAndDelete(Id)
  

 if(!deletedItem){
  return res.status(404).json("Item not found")
 }
 res.status(200).json("Item deleted successfully")
}catch(err){
  res.status(500).json(err.message)
}

})

connectDB()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
