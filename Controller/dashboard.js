const User = require("../model/User");


exports.getDashboard=(req,res,next)=>{
    const {userType,userId}=req.params;
    User.findOne({_id:userId}).then(user=>{
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
                                     console.log(approve)
                                     res.json({
                                         messsage:"found",
                                         data:{student,teacher,approve,name:user.name}
                                     })
                                 }
                             })
                            
                         }
                     })
                 }
             }
            )
         }

    })
   
}