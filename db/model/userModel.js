//数据模型
const mongoose=require('mongoose')
let UserSchema = new mongoose.Schema({
    name:{type:String ,required:true} ,
    pass:{type:String ,required:true}, //required 必须
    // code:{type:Number ,required:true} 
    // age:{type:Number ,default:16} //default 默认,chuan dao shujuku duoshao, yeshi 16
  });
 // 4. 将schema转化为数据模型
let user = mongoose.model('user', UserSchema); 
module.exports=user