// it's all about middleware
// request
// middleware (req,res,next)=>{...}
//  |
// next()
// midleware (req,res,next)=>{...}
//   | res.send()
// Response


const express = require("express");
const app = express();
const bodyParse  = require('body-parser');
app.use(bodyParse.urlencoded());

const adminRouters = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");

app.use(shopRouter);
app.use(adminRouters);
// app.use('/add-product',(req,res,next)=>{
//     console.log('In the middleware!');
//     // next();// Allow the request to continue to the next middleware in line

//     // res.send('<h1>The "Add Product" Page</h1>');
//     res.send('<form action="/product" method="POST"><input type="text" name="litle"><button type="submit"> Add Product</button></form>')
//     next();
// });
// // app.use("/product",(req,res,next)=>{
// //     console.log(req.body);
// //     res.redirect('/');

// // })
// app.post("/product",(req,res,next)=>{
//         console.log(req.body);
//         res.redirect('/');
    
//     })



app.listen(5000);
