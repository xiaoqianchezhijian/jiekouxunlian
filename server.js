// const fs=require("fs")
const express=require("express")
const app=express()
const Path=require("path")
const con=require('./db/connect')


//post请求
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

//开启静态目录
app.use(express.static(Path.join(__dirname,'./public')))



//路由配置
const adminUser=require("./router/userRouter")
app.use("/admin",adminUser)

// 包括了增删改查
const adminFood=require("./router/foodRouter")
app.use("/admin",adminFood)

const adminupdata=require("./router/updataRouter")
app.use("/admin",adminupdata)



//监听3000端口
app.listen(3000,()=>{
    console.log('server start in port :'+3000)
})