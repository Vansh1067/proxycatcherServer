const Polls=require('../model/Polls');
const User = require('../model/User');



exports.createPoll=(req,res,next)=>{
    const {title,description,sender,options,createdBy}=req.body;
    const data={title,description,sender,options,createdBy}
    console.log(data)

    const poll= new Polls(data)
    poll.save().then(result=>{
        console.log(result)
        res.json({
            message:'Poll create successfully',
            data:result
        })
    }).catch(err=>{next(err)})

}

exports.getPolls=(req,res,next)=>{
    const {userId}=req.params;
    Polls.find({sender:{$elemMatch:{userId}}}).then((result)=>{
        console.log(result,'kks')
        res.json({
            message:'Polls found',
            data:result
        })
    })

}
exports.getPollDetails=(req,res,next)=>{
    const {pollId}=req.params;
    Polls.findOne({_id:pollId}).populate("sender.userId").populate("responser.userId").then(poll=>{
        res.json({
            message:'Poll found',
            data:poll
        })
    })

}
