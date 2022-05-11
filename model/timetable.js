const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const timetableSchema=new Schema({
    branch:{type:Schema.Types.String,required:true},
    year:{type:Schema.Types.String,required:true},
    semester:{type:Schema.Types.String,required:true},
    days:[{day:{type:Schema.Types.String,required:true},timeFrom:{type:Schema.Types.String,required:true},timeTo:{type:Schema.Types.String,required:true},
        classesId:{type:Schema.Types.ObjectId,required:true,ref:'classes'},teacherId:{type:Schema.Types.ObjectId,required:true,ref:'user'},students:[{type:Schema.Types.ObjectId,ref:'user'}]}],
    hodId:{type:Schema.Types.ObjectId,required:true,ref:'user'},
},{timestamps:true})


module.exports=mongoose.model('timetable',timetableSchema)