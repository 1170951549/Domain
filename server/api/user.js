const express = require('express');
const user = express.Router();
const userDB = require('./userDB');
//注册
user.post('/addUser',(req,res)=>{
    if(req.body.用户名==""){
        res.json({err: '1', msg: "用户名不能为空！", data: ""});
    }
    userDB.addUser(req.body).then((doc)=>{
        res.json({err: '0', msg: "注册成功！", data: doc});
    }).catch(err=>{
        res.json({err: '-1', msg: err, data: ''});
    })
});
//登录
user.post('/loginUser',(req,res)=>{
    if(req.body.用户名=="" && req.body.密码==""){
        res.json({err: '1', msg: "登录失败！", data: ""});
    };
    userDB.loginUser(req.body.用户名,req.body.密码).then((doc)=>{
        if(doc !== null){
            res.json({err: '0', msg: "登录成功！", data: doc});
        }else{
            res.json({err: '1', msg: "登录失败！", data: ""});
        }
    });
});
module.exports=user;