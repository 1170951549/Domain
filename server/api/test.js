const express = require('express');
const app = express();
const PORT = 5000;
var http=require('http');
//创建请求

app.get('/test/:urlname',(req,res)=>{
    var options = {
        hostname: req.params.urlname,
        port: 80,
        path: '/',
        method: 'GET'
    };
    var request = http.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            //console.log('BODY: ' + chunk);
        });
        response.on('end', function (data) {
            //console.log(response);
            res.send(response.statusCode.toString());
        });
    });
    request.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    request.end();
});
var server = app.listen(PORT,"0.0.0.0", function () {
    console.log('test domain port at', PORT);
});