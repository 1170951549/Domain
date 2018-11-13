const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./api/router');

const PORT = 3010;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});
app.use(router);

var server = app.listen(PORT,"0.0.0.0", function () {
    console.log('Sever Start At Port', PORT);
});