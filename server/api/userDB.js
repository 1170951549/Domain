//数据库
var mongoose =require('mongoose');
var moment = require('moment');//时间格式
var Schema   = mongoose.Schema;
// 连接数据库
mongoose.connect('mongodb://localhost:27017/db');
mongoose.connection.on('connected', () => {
    console.log('数据库连接成功！');
});
mongoose.connection.on('error', () => {
    console.log('数据库连接失败！');
});
mongoose.connection.on('disconnected', () => {
    console.log('数据库连接断开！');
});

//定义数据库模型 就是关系表
//账户表
var userSchema = new Schema({
    "用户名":String,
    "邮箱":String,
    "密码":String,
    "注册时间":{ type: Date, default: Date.now }
});
// 数据库建立
var UserModel = mongoose.model('用户表',userSchema);
//注册
exports.addUser = function (userInfo) {
    return UserModel.findOne({"用户名": userInfo.用户名}).then(findUserDoc=>{
        if (findUserDoc === null) {
            var userModel = new UserModel;
            userModel.用户名 = userInfo.用户名;
            userModel.邮箱 = userInfo.邮箱;
            userModel.密码 = userInfo.密码;
            return userModel.save();
        } else {
            return new Promise(function (resolve, reject) {//reject=>catch
                reject('用户名已经存在！');
            })
        }
    })

};
//登录
exports.loginUser = function (name,password) {
    return UserModel.findOne({"用户名":name,"密码":password});
};