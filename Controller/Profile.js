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
    console.log(userType)
    User.find({userType:+userType,approve:""},{password:0}).then(user=>{
        console.log(user);
        res.json({
            message:'User found',
            data:user
        })
    }).catch(err=>{next(err)})

}

exports.pendingRequest=(req,res,next)=>{
    const {userId}=req.params;
    const {approve}=req.body
    User.updateOne({_id:userId},{approve:approve}).then(user=>{
        console.log(user)
        res.json({
            message:'Request Succesfully',
            data:user
        })
    })
}
exports.getHods=(req,res,next)=>{
    User.find({userType:3}).then(user=>{
        console.log(user)
        res.json({
            message:'Hods found',
            HODs:user
        })
    })
}