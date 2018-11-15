const express = require('express');
const app = express();
const PORT = 5000;
var http=require('http');

//获取域名 检测是否正常
app.get('/test/:urlname',(req,res)=>{
    var options = {
        hostname: req.params.urlname,//请求地址
        port: 80,//请求网站的端口，默认为 80
        path: '/',//请求的相对于根的路径，默认是'/'
        method: 'GET'//HTTP请求方法，默认是 ‘GET'。
    };
    var request = http.request(options, function (response) {//http.request方法用于获取数据
        response.setEncoding('utf8');//设置响应字符集
        response.on('data', function (chunk) {//响应返回数据，并接受
            //console.log(chunk);
        });
        response.on('end', function (data) {//数据返回完毕
            res.send(response.statusCode.toString());//转码
        });
    });
    request.on('error', function (e) {//响应出错调用函数
        //console.log(22);
        res.send(404);
        console.log('problem with request: ' + e.message);
    });
    request.end();//结束请求
});
var server = app.listen(PORT,"0.0.0.0", function () {
    console.log('test domain port at', PORT);
});