var mongoose = require('mongoose');
const config=require('../config')
mongoose.connect(config.db,{ useNewUrlParser: true });
var db = mongoose.connection;// 获取连接对象进行监听
db.on('error',(err)=>{
    console.log('连接错误')
});
db.on('open', function() {
  console.log('连接ok')
});