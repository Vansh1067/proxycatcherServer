const Polls = require("../model/Polls");
const User = require("../model/User");


exports.getDashboard=(req,res,next)=>{
    const {branch,userId}=req.params;
    User.findOne({_id:userId}).then(user=>{
       
            User.countDocuments({branch:branch,userType:2},(err,teacher)=>{
                 if(err){
                     next(err)
                 }else{
                     User.countDocuments({branch:branch,userType:1},(err,student)=>{
                         if(err){
                             next(err)
                         }else{
                             User.countDocuments({branch:branch,approve:""},(err,approve)=>{
                                 if(err){
                                     next(err)
                                 }else{
                                    
                                    Polls.countDocuments({$or:[{sender:{$elemMatch:{userId}}},{createdBy:userId}]},(err,polls)=>{
                                     console.log(polls)
                                     res.json({
                                         messsage:"found",
                                         data:{student,teacher,approve,name:user.name,polls:polls}
                                     })
                                    })

                                 }
                             })
                            
                         }
                     })
                 }
             }
            )
         

    })
   
}