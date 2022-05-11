const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const NoticeSchema=new Schema({
   
    description:{type:Schema.Types.String,required:true},
    imgUrl:{type:Schema.Types.String},
    createdBy:{type:Schema.Types.ObjectId,ref:'user'},
    sender:[{userId:{type:Schema.Types.ObjectId,required:true,ref:'user'}}]

},{timestamps:true})


module.exports=mongoose.model('notice',NoticeSchema)