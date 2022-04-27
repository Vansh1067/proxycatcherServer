const User=require('../model/User')


exports.profileDetails=(req,res,next)=>{
    const {userId}=req.params;
    User.findOne({_id:userId},{password:0}).then(user=>{
        console.log(user);
        res.json({
            message:'User found',
            data:user
        })
    }).catch(err=>{next(err)})

}
exports.pendingApprovalRequest=(req,res,next)=>{
    const {userType}=req.params;
    User.find({userType:userType},{password:0}).then(user=>{
        console.log(user);
        res.json({
            message:'User found',
            data:user
        })
    }).catch(err=>{next(err)})

}