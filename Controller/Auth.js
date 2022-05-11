const User=require('../model/User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/keys');

exports.registration=(req,res,next)=>{

        const data=req.body;
        console.log(data);
        if(data.password!=data.confirmPassword){
           next("Password does't match");
           return
        }
        User.find({userId:data.userId}).then(result=>{

            if(result.length){
               next("User already Exists");
               return
            }else{
                bcrypt.hash(data.password,12).then(hash=>{
                    const saveData={
                        "name":data.name,
                        "email":data.email,
                        "branch":data.branch,
                        "year":data.userType==1?data.year:"",
                        "role":data.userType==2?data.role:"",
                        "semester":data.userType==1?data.semester:"",
                        "userId":data.userId,
                        "phone":data.phone,
                        "password":hash,
                        "userType":data.userType,
                        "approve":data.userType==3?"true":"",
                        "hodId":data.hodId
                    
                    }
                    const NewUser=new User(saveData);
                    return NewUser.save().then((user)=>{
                        res.json({
                            message:'Account Created successfully',
                            data:user
                        })
                    })
                   
                })
            }
        }).catch(err=>{next(err)})

}


exports.login=(req,res,next)=>{
    const {username,password}=req.body;
    User.findOne({userId:username}).then(data=>{
        if(data){
            console.log(data)
            bcrypt.compare(password,data.password)
            .then(match=>{
                if(!match){
                    next('Invalid Username and Passowrd')
                }else{
                    const token=jwt.sign({userId:data._id},JWT_SECRET);
                    res.json({
                        token:token,
                        approve:data.approve,
                        emailVerify:data.emailVerify,
                        userId:data._id,
                        userType:data.userType,
                        branch:data.branch
                    })
                }

            })
        }else{
            next("Invalid User")
        }
        
    }).catch(err=>{next(err)})

}

exports.forgotpassword=(req,res,next)=>{

        const {email}=req.body;
        res.json({
            message:'Reset link send to your email id'
        })
}