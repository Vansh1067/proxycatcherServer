const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{type:Schema.Types.String,required:true},
    email:{type:Schema.Types.String,required:true},
    branch:{type:Schema.Types.String,required:true},
    userId:{type:Schema.Types.String,required:true},
    phone:{type:Schema.Types.String,required:true},
    password:{type:Schema.Types.String,required:true},
    userType:{type:Schema.Types.String,required:true},
    approve:{type:Schema.Types.String,default:false},
    emailVerify:{type:Schema.Types.String,default:false},
},{timestamps:true})


module.exports=mongoose.model('user',UserSchema)