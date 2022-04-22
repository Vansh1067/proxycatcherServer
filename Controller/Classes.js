const Classes=require('../model/Classses')


exports.addClasses=(req,res,next)=>{
    const {name,code,branch,year,semester,teacherId,hodId}=req.body;
    
    Classes.find({code:code}).then(result=>{

        if(result.length){
           next("Class with same code already Exists");
           return
        }else{
            const saveData={
                name,code,branch,year,semester,teacherId,hodId
            }
            console.log(saveData)
            const classes= new Classes(saveData);
            return classes.save().then((classes)=>{
                res.json({
                    message:'Class Created successfully',
                    data:classes
                })
            })
        }
    }).catch(err=>{next(err)})
}