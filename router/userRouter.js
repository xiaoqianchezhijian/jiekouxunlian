const express =require('express')
const router=express.Router()
const user=require("../db/model/userModel")
const utils=require('../util/util')

router.post("/reg",(req,res)=>{
    utils.log(req.body)
    let newUser=new user({
        name:req.body.name,
        pass:req.body.pass,
        // code:req.body.code
    })
    let name=req.body.name;
    user.find({name:name})
    .then((data)=>{
        if(data.length>0){
            res.send({
                err:-1,
                msg:'用户名存在'
            })
        }
        return user.insertMany(newUser)
     })
     .then((data)=>{
          console.log(data)
          res.send({
            err:0,
            msg:'注册成功'
          })
     })
        
   
    .catch((err)=>{
        console,log(err)
    })
    // res.send("ok")
})

router.post("/login",(req,res)=>{
    utils.log(req.body)
    res.send("ok")
})


module.exports=router;