const mongoose = require("mongoose");
let cureDiseaseSchema = mongoose.Schema({
    diseaseId:{type:String},  //身份证
    diseaseName:{type:String},   //姓名
    cureDiseaseTime:{type:String}, //治病时间【时间戳】
    cureDiseaseDesc:{type:String}, //治疗方案描述
    attendingDoctorName:{type:String}, //主治医生姓名
    jobNumber:{type:String}, //主治医生工号
    //对象转字符串，开药，这次看病开的处方
    prescribingDrugs:{type:String}, // 所开的处方
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