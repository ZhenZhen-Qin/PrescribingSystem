const express = require("express");
const app = express();
const path = require("path");
const cors=require('cors');

const  db = require("./mongo/mongoose.js");

//跨域问题要加上
app.all("*",function(req,res,next){

    res.header("Access-Control-Allow-Origin","*");
    console.log('拦截处理');
    next()//是否执行继续
})

app.get("/user/login",(req,res)=>{
    //这里的res获取到的请求是很多数据的，res.query返回的是前端地址栏传过来的对象
});
console.log(__dirname);
//静态资源的引用
app.use('/',express.static(path.join(__dirname,'./view')));
// app.use('/view',express.static(path.join(__dirname,'./view')));
app.use('/public',express.static(path.join(__dirname,'./public')));


// 用户登录
const userRouter = require('./router/userAdmin.js');
app.use("/user",userRouter);

// 病患的信息
const adminRouter = require('./router/diseaseAdmin.js');
app.use("/disease",adminRouter);

// 药典的信息
const medicineRouter = require('./router/medicineAdmin.js');
app.use("/medicine",medicineRouter);


app.listen(3000,()=>{
    console.log("server start in port " + 3000)
});













