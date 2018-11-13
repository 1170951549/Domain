const express = require('express');
const router = express.Router();
const user =require('./user');
const urlname =require('./urlname');

router.use('/user',user);
router.use('/urlname',urlname);


router.get('/',(req,res)=>{
    res.send('Sever Start');
});

module.exports = router;