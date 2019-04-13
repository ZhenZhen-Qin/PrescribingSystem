const mongoose = require("mongoose");
let cureDiseaseSchema = mongoose.Schema({
    diseaseID:{type:String},  //身份证
    diseaseName:{type:String},   //姓名
    cureDiseaseTime:{type:String}, //治病时间【时间戳】
    cureDiseaseDesc:{type:String}, //治疗方案描述
    attendingDoctorName:{type:String}, //主治医生姓名
    attendingDoctorMobile:{type:String}, //主治医生电话
    //对象转字符串，开药，记录历史药物
    prescribingDrugs:{type:String},
    // {
    // historicalDrugs:[{
    //   time:"", 时间
    //   name:"", 药名
    //   num:"", 数量
    //
    // },{
    // }]
    // }
});

let cureDisease = mongoose.model("curedisease",cureDiseaseSchema);
module.exports = cureDisease;