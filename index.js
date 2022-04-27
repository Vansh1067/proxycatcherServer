const express=require("express")

const app=express()
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken')
const mongoose = require('mongoose');
const path=require('path')

const {mongoDbURL,PORT} =require('./config/keys')
const AuthRoutes=require("./Routes/Auth")
const ProfileRoutes=require("./Routes/profile")
const ClassesRoutes=require("./Routes/classes")
const TimetableRoutes=require("./Routes/timetable")
const PollsRoutes=require("./Routes/Polls")




app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json({extended:false}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTION,PUT')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next();
})




app.use("/auth",AuthRoutes)
app.use("/profile",ProfileRoutes)
app.use("/classes",ClassesRoutes)
app.use("/timetable",TimetableRoutes)
app.use("/polls",PollsRoutes)




app.use((error,req,res,next)=>{
    res.json({
        error:error
    })
})

mongoose.connect(mongoDbURL, {useNewUrlParser: true})
.then(result=>{
    console.log("Connect Database")
    app.listen(PORT,()=>{
        console.log("Start Server");
    })
    
})
