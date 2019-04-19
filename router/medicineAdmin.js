const express = require("express");
const Router = express.Router();
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

const Medicine = require("../mongo/model/Medicine");


/**
 * @api {post} /medicine/addMedicineInfo addMedicineInfo
 * @apiName addMedicineInfo
 * @apiGroup medicine
 *
 * @apiParam {String} batchNumber 生产批号
 * @apiParam {String} medicineName 药名
 * @apiParam {String} pharmaceuticalCompany 制药公司
 * @apiParam {Number} medicineProduceDate 生产时间
 * @apiParam {Number} stockBalance 库存量
 * @apiParam {String} medicineDesc 药物描述
 * @apiParam {String} MedicineAllergyDrugs 过敏药物
 * @apiParam {String} MedicineJob 病患职业
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/addMedicineInfo",(req,res)=>{
    let {batchNumber,medicineName, pharmaceuticalCompany,medicineProduceDate, stockBalance, medicineDesc} = req.body;
    Medicine.insertMany({batchNumber,medicineName, pharmaceuticalCompany,medicineProduceDate, stockBalance, medicineDesc})
        .then((data)=>{
            console.log(data)
            res.send({err:0,msg:"add Medicine success",data:null});
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:"add Medicine error",data:null});
        })
});




/**
 * @api {post} /Medicine/findMedicineByKw findMedicineByKw
 * @apiName findMedicineByKw
 * @apiGroup Medicine
 *
 * @apiParam {String} keyword 模糊查询的关键字
 * @apiParam {String} pagesize
 * @apiParam {String} page
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findMedicineByKw',(req,res)=>{
    let {keyword,pagesize,page} =req.body;
    let obj={};
    // Goods.find({name:{$regex:'肉'}})
    Medicine.find({$or:[{medicineName:{$regex:keyword}},{pharmaceuticalCompany:{$regex:keyword}}]})
        .then((data)=>{
            // 获取总条数
            obj.total=data.length;
            return Medicine.find({$or:[{medicineName:{$regex:keyword}},{pharmaceuticalCompany:{$regex:keyword}}]}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize));
        })
        .then((data)=>{
            obj.MedicineList=data;
            res.send({err:0,msg:'find success',data:obj})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'find error',data:null})
        })
})


module.exports=Router;