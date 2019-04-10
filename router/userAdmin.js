const express = require("express");
const Router = express.Router();
const querystring = require("querystring");
var bodyParser  = require("body-parser");
Router.use(bodyParser.urlencoded({ extended: false }));

const User = require("../mongo/model/User");

/**
 * @api {post} /user/addUserInfo addUserInfo
 * @apiName addUserInfo
 * @apiGroup user
 *
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} userName 姓名
 * @apiParam {String} userPassword 密码
 * @apiParam {String} mobileNumber 手机号
 * @apiParam {String} Email 邮箱
 * @apiParam {Number} userType 类别（是否是管理员，0,1）
 * @apiParam {String} department 部门
 * @apiParam {Number} joinTime 部门
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/addUserInfo",(req,res)=>{
    let {jobNumber, userName, userPassword, mobileNumber, Email, userType,department,joinTime} = req.body;
    User.insertMany({jobNumber, userName, userPassword, mobileNumber, Email, userType,department,joinTime})
        .then((data)=>{
            console.log(data)
            if(data.length > 0){
                res.send({err:0,msg:"add user-info success",data:null});
            }
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:"add user-info error",data:null});
        })
});

/**
 * @api {post} /user/findUserInfoByAll findUserInfoByAll
 * @apiName findUserInfoByAll
 * @apiGroup user
 *
 * @apiParam {String} pagesize 页长
 * @apiParam {String} page 第几页
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findUserInfoByAll',(req,res)=>{
    let  {pagesize,page}=req.body;
    let obj={}
    User.find()
        .then((data)=>{
            // 获取总条数
            obj.total=data.length
            return User.find().limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize))
        })
        .then((data)=>{
            obj.userList=data;
            res.send({err:0,msg:'find user-info success',data:obj})
        })
        .catch((err)=>{
            console.log(err)
            res.send({err:-1,msg:'find user-info error',data:null})
        })
})

/**
 * @api {post} /user/findUserInfoByOne findUserInfoByOne
 * @apiName findUserInfoByOne
 * @apiGroup user
 *
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} userName
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findUserInfoByOne',(req,res)=>{
    let  {jobNumber} = req.body;
    let obj={};
    User.find({jobNumber})
        .then((data)=>{
            obj.userList=data;
            obj.total=data.length;
            res.send({err:0,msg:'find user-info success',data:obj})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'find user-info error',data:null})
        })
})

/**
 * @api {post} /user/findUserInfoByKw findUserInfoByKw
 * @apiName findUserInfoByKw
 * @apiGroup user
 *
 * @apiParam {String} keyword 模糊查询的关键字
 * @apiParam {String} pagesize
 * @apiParam {String} page
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findUserInfoByKw',(req,res)=>{
    let {keyword,pagesize,page} =req.body;
    let obj={};
    User.find({$or:[{jobNumber:{$regex:keyword}},{userName:{$regex:keyword}}]})
        .then((data)=>{
            obj.total=data.length;
            return User.find({$or:[{jobNumber:{$regex:keyword}},{userName:{$regex:keyword}}]}).limit(Number(pagesize)).skip((Number(page)-1)*Number(pagesize));
        })
        .then((data)=>{
            obj.userList=data;
            res.send({err:0,msg:'find success',data:obj})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'find error',data:null})
        })

})

/**
 * @api {post} /user/checkUserLogin checkUserLogin
 * @apiName checkUserLogin
 * @apiGroup user
 *
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} userPassword  用户密码
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/checkUserLogin',(req,res)=>{
    let  {jobNumber,userPassword} = req.body;
    User.find( {$and: [{jobNumber},{userPassword}]})
        .then((data)=>{
            console.log(data)
            if(data.length<1){
                res.send({err:-1,msg:'check no pass',data:null});
                return;
            }
            let obj = {
                jobNumber:data[0].jobNumber ,
                userName: data[0].userName,
                mobileNumber:data[0].mobileNumber ,
                Email: data[0].Email,
                userType: data[0].userType,
                department: data[0].department,
            }
            res.send({err:0,msg:'check pass',data:obj})
        })
        .catch((err)=>{
            res.send({err:-1,msg:'check no pass',data:null})
        })
})



/**
 * @api {post} /user/updateUserInfo updateUserInfo
 * @apiName updateUserInfo
 * @apiGroup user
 *
 * @apiParam {String} jobNumber 工号
 * @apiParam {String} userName 姓名
 * @apiParam {String} userPassword 密码
 * @apiParam {String} mobileNumber 手机号
 * @apiParam {String} Email 邮箱
 * @apiParam {Number} userType 类别（是否是管理员，0,1）
 * @apiParam {String} department 部门
 * @apiParam {Number} joinTime 部门
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post("/updateUserInfo",(req,res)=>{
    let id =req.body._id;
    console.log(id)
    let {jobNumber, userName, userPassword, mobileNumber, Email, userType,department,joinTime} = req.body;
    User.updateOne({jobNumber:jobNumber},{$set:{userName, userPassword, mobileNumber, Email, userType,department,joinTime}})
        .then((data)=>{
            console.log(data);
            res.send({err:0,msg:'update success',data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:'update error',data:null})
        })
});


/**
 * @api {post} /user/removeUserInfo removeUserInfo
 * @apiName removeUserInfo
 * @apiGroup user
 *
 * @apiParam {String} jobNumber 工号
 *
 * @apiSuccess {Number} err 错误码 0：ok  -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/removeUserInfo',(req,res)=>{
    let {jobNumber} = req.body;
    console.log(jobNumber)
    User.deleteOne({jobNumber:jobNumber})
        .then((data)=>{
            res.send({err:0,msg:"delete success",data:null})
        })
        .catch((err)=>{
            console.log(err);
            res.send({err:-1,msg:"delete error",data:null})
        })
});

module.exports=Router;