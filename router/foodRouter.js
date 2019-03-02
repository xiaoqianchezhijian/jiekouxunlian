const express =require('express')
const router=express.Router()
const foodModel=require("../db/model/foodModel")
const utils=require('../util/util')



// 添加数据
router.post('/addFood',(req,res)=>{
    //接受数据
    //处理数据
    //返回数据
    let {name,price,imgPath,desc,type,num}= req.body
    foodModel.insertMany({name,price:Number(price),imgPath,desc,type,num:Number(num)})
    .then((data)=>{
      res.send({err:0,
                msg:'add ok',
                data})
      console.log(data)
    })
    .catch((err)=>{
        utils.log(err)
        utils.sendRes(res,-1,"上传失败",null)})

})
// 根据ID获取数据
router.post('/getFoodById',(req,res)=>{
  let {_id}=req.body
  foodModel.find({_id})
  .then((data)=>{
    console.log(data)
    utils.sendRes(res,0,'select ok',data)
  })
  .catch((err)=>{
      utils.log(err)
      utils.sendRes(res,-1,err._message,null)})
})

// 获取（查询）
router.post('/getFood',(req,res)=>{
    foodModel.find()
    .then((data)=>{
      console.log(data)
      utils.sendRes(res,0,'select ok',data)
    })
    .catch((err)=>{
        utils.log(err)
        utils.sendRes(res,-1,err._message,null)})
  })



// 删除
  router.post('/delFood',(req,res)=>{
    // 获取前端发送数据
    let _id=req.body._id
  
    foodModel.remove({_id:_id})
    .then((data)=>{
      console.log(data)
      utils.sendRes(res,0,'del ok',null)
    })
    .catch((err)=>{
        utils.log(err)
        utils.sendRes(res,-1,err._message,null)})
  })



  // 修改
  router.post('/updataFood',(req,res)=>{
    // 获取前端发送数据
    let _id=req.body._id
    let {name,price,imgPath,desc,type,num}= req.body
    foodModel.updateOne({_id:_id},{name,price,imgPath,desc,type,num})
    .then((data)=>{
      console.log(data)
      utils.sendRes(res,0,'update ok',null)
    })
    .catch((err)=>{
        utils.log(err)
        utils.sendRes(res,-1,err._message,null)})
  })
module.exports=router;