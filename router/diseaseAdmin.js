const express = require("express");
const Router = express.Router();
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

const Disease = require("../mongo/model/Disease");


/**
 * @api {post} /disease/addDiseaseInfo addDiseaseInfo
 * @apiName addDiseaseInfo
 * @apiGroup disease
 *
 * @apiParam {String} diseaseId 病患id
 * @apiParam {String} diseaseName 病患姓名
 * @apiParam {String} diseaseMobile 病患手机
 * @apiParam {Number} diseaseSex 病患性别
 * @apiParam {String} diseaseBirthday 病患出生年月
 * @apiParam {String} diseaseAllergyDrugs 过敏药物
 * @apiParam {String} diseaseJob 病患职业
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/addDiseaseInfo",(req,res)=>{
    let {diseaseId,diseaseName, diseaseMobile, diseaseSex, diseaseBirthday, diseaseAllergyDrugs,diseaseJob} = req.body;
    Disease.insertMany({diseaseId,diseaseName, diseaseMobile, diseaseSex, diseaseBirthday, diseaseAllergyDrugs,diseaseJob})
        .then((data)=>{
            console.log(data)
            if(data.length > 0){
                res.send({err:0,msg:"add disease success",data:null});
            }
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:"add disease error",data:null});
        })
});

/**
 * @api {post} /disease/findDiseaseInfoByAll findDiseaseInfoByAll
 * @apiName findDiseaseInfoByAll
 * @apiGroup disease
 *
 * @apiParam {String} pagesize
 * @apiParam {String} page
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findDiseaseInfoByAll',(req,res)=>{
    let  {pagesize,page}=req.body;
    let obj={}
    Disease.find()
        .then((data)=>{
            // 获取总条数
            obj.total=data.length
            return Disease.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
        })
        .then((data)=>{
            obj.diseaselist=data;
            res.send({err:0,msg:'查询成功',data:obj})
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:'查询错误',data:null})
        })
})

/**
 * @api {post} /disease/findDiseaseInfoByOne findDiseaseInfoByOne
 * @apiName findDiseaseInfoByOne
 * @apiGroup disease
 *
 * @apiParam {String} diseaseId  病患身份证
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findDiseaseInfoByOne',(req,res)=>{
    let  {diseaseId} = req.body;
    let obj={};
    Disease.find({diseaseId})
        .then((data)=>{
            // 获取总条数
            obj.total=data.length;
            return Disease.find({diseaseId});
        })
        .then((data)=>{
            obj.diseaselist=data;
            res.send({err:0,msg:'查询成功',data:obj})
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:'查询错误',data:null})
        })
})

/**
 * @api {post} /disease/findDiseaseByKw findDiseaseByKw
 * @apiName findDiseaseByKw
 * @apiGroup disease
 *
 * @apiParam {String} keyword 模糊查询的关键字
 * @apiParam {String} pagesize
 * @apiParam {String} page
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findDiseaseByKw',(req,res)=>{
    let {keyword,pagesize,page} =req.body;
    let obj={};
    // Goods.find({name:{$regex:'肉'}})
    Disease.find({$or:[{diseaseId:{$regex:keyword}},{diseaseName:{$regex:keyword}},{diseaseMobile:{$regex:keyword}}]})
        .then((data)=>{
            // 获取总条数
            obj.total=data.length;
            return Disease.find({$or:[{diseaseId:{$regex:keyword}},{diseaseName:{$regex:keyword}},{diseaseMobile:{$regex:keyword}}]}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize));
        })
        .then((data)=>{
            obj.diseaselist=data;
            res.send({err:0,msg:'find success',data:obj})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'find error',data:null})
        })
})


/**
 * @api {post} /disease/updateDiseaseInfo updateDiseaseInfo
 * @apiName updateDiseaseInfo
 * @apiGroup disease
 *
 * @apiParam {String} diseaseId 病患id
 * @apiParam {String} diseaseName 病患姓名
 * @apiParam {String} diseaseMobile 病患手机
 * @apiParam {Number} diseaseSex 病患性别
 * @apiParam {String} diseaseBirthday 病患出生年月
 * @apiParam {String} diseaseAllergyDrugs 过敏药物
 * @apiParam {String} diseaseJob 病患职业
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/updateDiseaseInfo",(req,res)=>{
    let {diseaseId,diseaseName, diseaseMobile, diseaseSex, diseaseBirthday, diseaseAllergyDrugs,diseaseJob} = req.body;
    Disease.updateOne({diseaseId:diseaseId},{$set:{diseaseName, diseaseMobile, diseaseSex, diseaseBirthday, diseaseAllergyDrugs,diseaseJob}})
        .then((data)=>{
            res.send({err:0,msg:'update success',data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'update error',data:null})
        })
});


/**
 * @api {post} /disease/removeDiseaseInfo removeDiseaseInfo
 * @apiName removeDiseaseInfo
 * @apiGroup disease
 *
 * @apiParam {String} diseaseId 病患身份证
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/removeDiseaseInfo',(req,res)=>{
    let {diseaseId} = req.body;
    Disease.deleteOne({diseaseId:diseaseId})
        .then((data)=>{
            res.send({err:0,msg:"remove success",data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:"remove error",data:null})
        })
});

module.exports=Router;