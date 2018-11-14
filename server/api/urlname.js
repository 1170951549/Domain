const express = require('express');
const urlname = express.Router();
var http=require('http');

//服务器
var hosts={
    'cn':'119.27.166.105',
    'usa':'128.14.142.99'
};
var testUrl=function (host, req, res) {
    var urlnameArr = req.params.urlname.split(",");
    var options = {
        hostname: host,//请求地址
        port: 5000,//请求网站的端口，默认为 80
        path: '/test/' + urlnameArr,//请求的相对于根的路径，默认是'/'
        method: 'GET'
    };
    var request = http.request(options, function (response) {//http.request方法用于获取数据
        response.setEncoding('utf8');//设置响应字符集
        let getData=[];
        let getSize=0;
        response.on('data', function (chunk) {//响应返回数据，并接受
            getData.push(chunk);
            getSize+=chunk.length;
        });
        response.on('end', function (data) {//数据返回完毕
            //console.log(response);
            if(getData==200||getData==301){
                getData="正常"
            }else{
                getData="错误"
            }
            res.send(getData);
        });
    });
    request.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    request.end();
};
//中国
urlname.get('/cn/:urlname',(req,res)=>{
    testUrl(hosts.cn,req,res);

});
//美国
urlname.get('/usa/:urlname',(req,res)=>{
    testUrl(hosts.usa,req,res);
});
module.exports=urlname;