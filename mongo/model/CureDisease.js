const mongoose = require("mongoose");
let cureDiseaseSchema = mongoose.Schema({
    diseaseID:{type:String},  //身份证
    diseaseName:{type:String},   //姓名
    cureDiseaseTime:{type:String}, //治病时间
    cureDiseaseDesc:{type:String}, //治疗方案描述
    attendingDoctorName:{type:String}, //主治医生姓名
    attendingDoctorMobile:{type:String}, //主治医生电话
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let cureDisease = mongoose.model("curedisease",cureDiseaseSchema);
module.exports = cureDisease;