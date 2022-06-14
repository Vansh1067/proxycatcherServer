const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const AttendanceSchema=new Schema({
  
    classesId:{type:Schema.Types.ObjectId,required:true,ref:'classes'},
    teacherimageURL:{type:Schema.Types.String},
     students:[{type:Schema.Types.ObjectId,required:true,ref:'user'}]

   
},{timestamps:true})


module.exports=mongoose.model('attendance',AttendanceSchema)