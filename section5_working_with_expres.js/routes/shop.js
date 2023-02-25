const express = require("express");
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path.js');

router.use('/',(req,res,next)=>{
    // res.send("<h1>Hello from Express !</h1>");
    // send file 
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router;