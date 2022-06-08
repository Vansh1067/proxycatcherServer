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
     
        return res.json({
            message:'All Time Table Found',
            data:timetable
        })
    
    }).catch(err=>{next(err)})


}
exports.getTimeTableClasses=(req,res,next)=>{
    const {userId,day}=req.params;
  

   TimeTable.find({$and:[{days:{$elemMatch:{teacherId:userId}}},{days:{$elemMatch:{day:day}}}]}).populate("days.classesId").populate("days.teacherId").then(timetable=>{

       
        if(!timetable.length){
            return res.json({
                message:'No Time Table Found',
                data:[]
            })
         }else{
             let DATA=[]
            
                timetable.forEach((t,i)=>{
                  
                    const data=t.days.filter((d,i)=>{
                        

                        if(d.day==day&&d.teacherId._id==userId){
                            DATA.push(d)
                            return d
                        }})
                        console.log(data)
                    
                })
            
            console.log(DATA)

               // console.log(data,'sksksk')
        return res.json({
            message:'All Time Table Found',
            data:DATA
        })
    }
    }).catch(err=>{next(err)})


}
exports.getTimeTableClassesForStudents=(req,res,next)=>{
    const {userId,day}=req.params; 
    TimeTable.find({$and:[{days:{$elemMatch:{day:day}}}]}).populate("days.classesId").populate("days.teacherId")
    .then(timetable=>{
        const CLASS=[]
        timetable.forEach((t,i)=>{
            t.days.forEach((d,i)=>{
                if(d.day==day){
                  const ind=  d.classesId.students.findIndex((ele,i)=>ele==userId)
                  if(ind>-1){
                    CLASS.push(d)
                  }
                }
            })
        })

     
        return res.json({
            message:'All Time Table Found',
            data:CLASS
        })
    })
}