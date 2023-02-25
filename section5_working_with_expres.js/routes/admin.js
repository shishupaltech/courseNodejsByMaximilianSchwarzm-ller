const express = require('express');
const rootDir = require('../utils/path.js');
const router = express.Router();
const path = require('path');
// /admin/add-product=get
router.get('/add-product',(req,res,next)=>{
    // console.log('In the middleware!');
    // next();// Allow the request to continue to the next middleware in line

    // res.send('<h1>The "Add Product" Page</h1>');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="litle"><button type="submit"> Add Product</button></form>')
    // next();
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});
// /admin/add-product=>POST 
router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

})

module.exports = router;


// app.use("/product",(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');

// })
