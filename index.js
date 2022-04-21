const express=require("express")

const app=express()


app.use("/",(req,res,next)=>{
        res.send("Welcome to ProxyCatcher")
})
app.listen(3000,()=>{
    console.log("Server created successfully")
})