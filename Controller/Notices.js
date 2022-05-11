const Notices=require('../model/Notices')



exports.createNotice=(req,res,next)=>{
    const {description,sender,createdBy,imgUrl}=req.body;
    const data={description,sender,imgUrl,createdBy}
    console.log(data)

    const notice= new Notices(data)
    notice.save().then(result=>{
        console.log(result)
        res.json({
            message:'Notice create successfully',
            data:result
        })
    }).catch(err=>{next(err)})

}

exports.getNotice=(req,res,next)=>{
    const {userId}=req.params;
    Notices.find({$or:[{sender:{$elemMatch:{userId}}},{createdBy:userId}]}).then((result)=>{
        console.log(result,'kks')
        if(result.length>0){
            res.json({
                message:'Notices found',
                data:result
            })
         }else{
            res.json({
                message:'No Notices found',
                data:result
            })
         }
      
    })

}
exports.getNoticeDetails=(req,res,next)=>{
    const {noticeId}=req.params;
    Notices.findOne({_id:noticeId}).then(poll=>{
        res.json({
            message:'Notice found',
            data:poll
        })
    })

}