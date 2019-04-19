const mongoose = require("mongoose");
let medicineSchema = mongoose.Schema({
    batchNumber:{type:String,required:true,unique:true,dropDups: true},  //生产批号
    medicineType:{type:String},  //药品类别
    medicineName:{type:String},   //药品名称
    pharmaceuticalCompany:{type:String},   //制药公司
    medicineProduceDate:{type:String}, //药物生产时间
    stockBalance:{type:String}, //库存量
    medicineDesc:{type:String}, //药物描述
});

//注意：数据库的集合名，在这里会被自动转化为复数，所以建立集合的时候尽量为复数
let medicine = mongoose.model("medicine",medicineSchema);
module.exports = medicine;



