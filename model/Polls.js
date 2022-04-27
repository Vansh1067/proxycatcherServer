const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const PollSchema=new Schema({
    title:{type:Schema.Types.String,required:true},
    description:{type:Schema.Types.String,required:true},
    options:[{title:{type:Schema.Types.String,required:true},number:{type:Schema.Types.Number,required:true}}],
    responser:[{userId:{type:Schema.Types.ObjectId,ref:'user'},option:{type:Schema.Types.Number}}],
    sender:[{userId:{type:Schema.Types.ObjectId,required:true,ref:'user'}}]

},{timestamps:true})


module.exports=mongoose.model('polls',PollSchema)