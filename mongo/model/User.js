const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    jobNumber:{type:String,required:true,unique:true},  // 工号，用于登录的用户名
    userName:{type:String},   // 姓名
    userPassword:{type:String},
    mobileNumber:{type:String},
    Email:{type:String},
    userType:{type:Number,default:0},
    department:{type:String},
    joinTime:{type:Number,default:Date.parse(new Date())},  //加入时间,时间戳毫秒
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let user = mongoose.model("user",userSchema);
module.exports = user;