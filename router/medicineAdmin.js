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
            if(data.length > 0){
                res.send({err:0,msg:"add Medicine success",data:null});
            }
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:"add Medicine error",data:null});
        })
});

/**
 * @api {post} /Medicine/findMedicineInfoByAll findMedicineInfoByAll
 * @apiName findMedicineInfoByAll
 * @apiGroup Medicine
 *
 * @apiParam {String} pagesize
 * @apiParam {String} page
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post('/findMedicineInfoByAll',(req,res)=>{
//     let  {pagesize,page}=req.body;
//     let obj={}
//     Medicine.find()
//         .then((data)=>{
//             // 获取总条数
//             obj.total=data.length
//             return Medicine.find().limit(Number( )).skip((Number(page)-1)*Number(pagesize))
//         })
//         .then((data)=>{
//             obj.MedicineList=data;
//             res.send({err:0,msg:'查询成功',data:obj})
//         })
//         .catch((err)=>{
//             console.log(err)
//             res.send({err:-1,msg:'查询错误',data:null})
//         })
// })

/**
 * @api {post} /Medicine/findMedicineInfoByOne findMedicineInfoByOne
 * @apiName findMedicineInfoByOne
 * @apiGroup Medicine
 *
 * @apiParam {String} MedicineId  病患身份证
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post('/findMedicineInfoByOne',(req,res)=>{
//     let  {MedicineId} = req.body;
//     let obj={};
//     Medicine.find({MedicineId})
//         .then((data)=>{
//             // 获取总条数
//             obj.total=data.length;
//             return Medicine.find({MedicineId});
//         })
//         .then((data)=>{
//             obj.MedicineList=data;
//             res.send({err:0,msg:'查询成功',data:obj})
//         })
//         .catch((err)=>{
//             console.log(err)
//             res.send({err:-1,msg:'查询错误',data:null})
//         })
// })


/**
 * @api {post} /Medicine/findMedicineInfoByType findMedicineInfoByType
 * @apiName findMedicineInfoByType
 * @apiGroup Medicine
 *
 * @apiParam {String} MedicineType  病患所属类别ID
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post('/findMedicineInfoByType',(req,res)=>{
//     let  {MedicineType} = req.body;
//     let obj={};
//     Medicine.find({MedicineType})
//         .then((data)=>{
//             // 获取总条数
//             obj.total=data.length;
//             return Medicine.find({MedicineType});
//         })
//         .then((data)=>{
//             obj.MedicineList=data;
//             res.send({err:0,msg:'查询成功',data:obj})
//         })
//         .catch((err)=>{
//             console.log(err)
//             res.send({err:-1,msg:'查询错误',data:null})
//         })
// })



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
// Router.post('/findMedicineByKw',(req,res)=>{
//     let {keyword,pagesize,page} =req.body;
//     let obj={};
//     // Goods.find({name:{$regex:'肉'}})
//     Medicine.find({$or:[{MedicineId:{$regex:keyword}},{MedicineName:{$regex:keyword}},{MedicineMobile:{$regex:keyword}}]})
//         .then((data)=>{
//             // 获取总条数
//             obj.total=data.length;
//             return Medicine.find({$or:[{MedicineId:{$regex:keyword}},{MedicineName:{$regex:keyword}},{MedicineMobile:{$regex:keyword}}]}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize));
//         })
//         .then((data)=>{
//             obj.MedicineList=data;
//             res.send({err:0,msg:'find success',data:obj})
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.send({err:-1,msg:'find error',data:null})
//         })
// })


/**
 * @api {post} /Medicine/updateMedicineInfo updateMedicineInfo
 * @apiName updateMedicineInfo
 * @apiGroup Medicine
 *
 * @apiParam {String} MedicineId 病患id
 * @apiParam {String} MedicineName 病患姓名
 * @apiParam {String} MedicineMobile 病患手机
 * @apiParam {Number} MedicineSex 病患性别
 *  * @apiParam {Number} MedicineType 病患类别
 * @apiParam {String} MedicineBirthday 病患出生年月
 * @apiParam {String} MedicineAllergyDrugs 过敏药物
 * @apiParam {String} MedicineJob 病患职业
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post("/updateMedicineInfo",(req,res)=>{
//     let {MedicineId,MedicineName, MedicineMobile,MedicineType, MedicineSex, MedicineBirthday, MedicineAllergyDrugs,MedicineJob} = req.body;
//     Medicine.updateOne({MedicineId:MedicineId},{$set:{MedicineName, MedicineType,MedicineMobile, MedicineSex, MedicineBirthday, MedicineAllergyDrugs,MedicineJob}})
//         .then((data)=>{
//             res.send({err:0,msg:'update success',data:null})
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.send({err:-1,msg:'update error',data:null})
//         })
// });


/**
 * @api {post} /Medicine/removeMedicineInfo removeMedicineInfo
 * @apiName removeMedicineInfo
 * @apiGroup Medicine
 *
 * @apiParam {String} MedicineId 病患身份证
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post('/removeMedicineInfo',(req,res)=>{
//     let {MedicineId} = req.body;
//     Medicine.deleteOne({MedicineId:MedicineId})
//         .then((data)=>{
//             res.send({err:0,msg:"remove success",data:null})
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.send({err:-1,msg:"remove error",data:null})
//         })
// });


/**
 * @api {post} /Medicine/removeMedicineInfoMany removeMedicineInfoMany
 * @apiName removeMedicineInfoMany
 * @apiGroup Medicine
 *
 * @apiParam {Array} MedicineIdArr 病患Id数组
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
// Router.post('/removeMedicineInfoMany',(req,res)=>{
//     let {MedicineIdArr} = req.body;
//     try{
//         console.log(MedicineIdArr)
//         MedicineIdArr.split('-').forEach((item,idx)=>{
//             Medicine.deleteOne({MedicineId:item})
//                 .then((data)=>{
//                     console.log(data)
//                     if (idx+1 === MedicineIdArr.split('-').length){
//                         res.send({err:0,msg:"delete success",data:null})
//                     }
//                 })
//                 .catch((err)=>{
//                     console.log(err);
//                     return ;
//                 })
//         })
//     }catch (e) {
//         res.send({err:-1,msg:"delete error",data:null})
//     }
//
// });

module.exports=Router;