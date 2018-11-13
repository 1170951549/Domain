const express = require('express');
const urlname = express.Router();
var http=require('http');

urlname.get('/test/:urlname',(req,res)=>{
    // console.log(req.params.urlname);
    var options = {
        hostname: '127.0.0.1',
        port: 5000,
        path: '/test/' + req.params.urlname,
        method: 'GET'
    };
    var request = http.request(options, function (response) {
        response.setEncoding('utf8');
        let getData=[];
        let getSize=0;
        response.on('data', function (chunk) {
            // console.log('BODY: ' + chunk);
            getData.push(chunk);
            getSize+=chunk.length;
        });
        response.on('end', function (data) {
            console.log(getData);
            res.send(getData);
        });
    });
    request.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    request.end();
    // req.send(req.params.urlname);
    // if(req.params.urlname!=""){
    //     res.json({err: '0', msg:"成功", data: req.params});
    // }else{
    //     res.json({err: '1', msg:"失败", data: ""});
    // }

});
module.exports=urlname;