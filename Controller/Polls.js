const Polls=require('../model/Polls')



exports.createPoll=(req,res,next)=>{
    const {title,description,sender,options}=req.body;
    const data={title,description,sender,options}
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

}
exports.getPollDetails=(req,res,next)=>{

}