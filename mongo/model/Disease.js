const mongoose = require("mongoose");
let diseaseSchema = mongoose.Schema({
    diseaseId:{type:String,required:true},  //身份证
    diseaseName:{type:String},   //姓名
    diseaseMobile:{type:String},  //手机号
    diseaseSex:{type:Number},   // 女：0，男：1
    diseaseBirthday:{type:String},  // 时间戳
    diseaseJob:{type:String},   //职业
    diseaseAllergyDrugs:{type:String},  // 过敏药物
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let disease = mongoose.model("disease",diseaseSchema);
module.exports = disease;