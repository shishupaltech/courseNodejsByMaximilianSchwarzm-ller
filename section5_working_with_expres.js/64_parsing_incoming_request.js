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

app.use('/',(req,res,next)=>{
    console.log("This always uns!");
    next();
})
app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware!');
    // next();// Allow the request to continue to the next middleware in line

    // res.send('<h1>The "Add Product" Page</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="litle"><button type="submit"> Add Product</button></form>')
    next();
});
app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

})

app.use('/',(req,res,next)=>{
    console.log('middle in another ');
    // ...
    res.send('<h1> Hello from express</h1>');
})


app.listen(5000);
