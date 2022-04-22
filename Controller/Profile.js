const User=require('../model/User')


exports.profileDetails=(req,res,next)=>{
    const {userId}=req.params;
    User.findOne({userId:userId},{password:0}).then(user=>{
        console.log(user);
        res.json({
            message:'User found',
            data:user
        })
    })

}