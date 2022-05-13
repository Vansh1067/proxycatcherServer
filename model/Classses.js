const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const ClassSchema=new Schema({
    name:{type:Schema.Types.String,required:true},
    code:{type:Schema.Types.String,required:true},
    branch:{type:Schema.Types.String,required:true},
    year:{type:Schema.Types.String,required:true},
    semester:{type:Schema.Types.String,required:true},
    teacherId:{type:Schema.Types.ObjectId,required:true,ref:'user'},
    hodId:{type:Schema.Types.ObjectId,required:true,ref:'user'},
    students:[{type:Schema.Types.ObjectId,required:true,ref:'user',unique:true}]

   
},{timestamps:true})


module.exports=mongoose.model('classes',ClassSchema)