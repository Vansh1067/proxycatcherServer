const TimeTable=require('../model/timetable')


exports.addTimetable=(req,res,next)=>{
    const {branch,year,semester,days,hodId}=req.body;
    
   
            const saveData={
                branch,year,semester,days,hodId
            }
            console.log(saveData)
            const Timetable= new TimeTable(saveData);
            Timetable.save().then((data)=>{
                res.json({
                    message:'Timetable Created successfully',
                    data:data
                })
            }).catch(err=>{
                console.log(err);next(err)})
    
   
}
exports.getAllTimeTable=(req,res,next)=>{
    const {userId}=req.params;
    TimeTable.find({$or:[{hodId:userId},{days:{$elemMatch:{$or:[{students:{$elemMatch:{userId}}},{teacherId:userId}]}}}]}).populate('days.teacherId').populate('days.classesId').then(timetable=>{
        console.log(timetable)
        if(!timetable.length){
            next("No Time Table Found");
            return
         }else{
        return res.json({
            message:'All Time Table Found',
            data:timetable
        })
    }
    }).catch(err=>{next(err)})


}