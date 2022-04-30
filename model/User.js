const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{type:Schema.Types.String,required:true},
    email:{type:Schema.Types.String,required:true},
    branch:{type:Schema.Types.String,required:true},
    role:{type:Schema.Types.String},
    year:{type:Schema.Types.String},
    semester:{type:Schema.Types.String},
    userId:{type:Schema.Types.String,required:true},
    phone:{type:Schema.Types.String,required:true},
    password:{type:Schema.Types.String,required:true},
    userType:{type:Schema.Types.Number,required:true},
    approve:{type:Schema.Types.String,default:""},
    emailVerify:{type:Schema.Types.Boolean,default:false},
},{timestamps:true})


module.exports=mongoose.model('user',UserSchema)