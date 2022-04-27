const { json } = require("express");
const express =require("express")
const {port}=require("./config")

const users=[]
const app=express();

app.get("/",(req,res)=>{
    //enviamos la información
    res.json(users)
})
app.post("/",(req,res)=>{
    const user=req.body
    users.push(user)  
    return res.json(users)
})
app.put("/:id",(req,res)=>{
    const id=req.params.id
    users=users.map(user=>{
        if(id==user.id){
             
        }
    })
})
app.delete("/:id",(req,res)=>{
    const id=req.params.id
    users=users.filter((user)=>id!==user.id)
    return res.json(users)
})
app.listen(port,()=>{
    console.log("Escuchando : http://localhost:"+ port)
})