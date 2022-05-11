const Classes=require('../model/Classses')


exports.addClasses=(req,res,next)=>{
    const {name,code,branch,year,semester,teacherId,hodId}=req.body;
    
    Classes.find({code:code}).then(result=>{

        if(result.length){
           next("Class with same code already Exists");
           return
        }else{
            const saveData={
                name,code,branch,year,semester,teacherId,hodId,students:[]
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

exports.getAllClasses=(req,res,next)=>{
    const {userId}=req.params;
    Classes.find({$or:[{student:{$elemMatch:{userId}}},{hodId:userId},{teacherId:userId}]}).populate("teacherId").then(classes=>{
        console.log(classes)
        if(!classes.length){
            next("No Class Found");
            return
         }else{
        return res.json({
            message:'All Classes Found',
            data:classes
        })
    }
    }).catch(err=>{next(err)})


}
exports.getTeacherClasses=(req,res,next)=>{
    const {teacherId}=req.params
    Classes.find({teacherId:teacherId}).then(classes=>{
        console.log(classes)
        if(!classes.length){
            next("No Class Found");
            return
         }else{
        return res.json({
            message:'Classes Found',
            data:classes
        })
    }
    }).catch(err=>{next(err)})


}