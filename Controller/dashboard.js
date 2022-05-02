const User = require("../model/User");


exports.getDashboard=(req,res,next)=>{
    const {userType,userId}=req.params;
    if(userType==3){
       User.countDocuments({hodId:userId,userType:2},(err,teacher)=>{
            if(err){
                next(err)
            }else{
                User.countDocuments({hodId:userId,userType:1},(err,student)=>{
                    if(err){
                        next(err)
                    }else{
                        User.countDocuments({hodId:userId,approve:""},(err,approve)=>{
                            if(err){
                                next(err)
                            }else{
                                res.json({
                                    messsage:"found",
                                    data:{student,teacher,approve}
                                })
                            }
                        })
                       
                    }
                })
            }
        }
       )
    }
}