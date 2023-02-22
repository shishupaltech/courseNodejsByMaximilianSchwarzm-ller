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
app.use('/',(req,res,next)=>{
    console.log("This always uns!");
    next();
})
app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware!');
    // next();// Allow the request to continue to the next middleware in line

    res.send('<h1>The "Add Product" Page</h1>');
    next();
});

app.use('/',(req,res,next)=>{
    console.log('middle in another ');
    // ...
    res.send('<h1> Hello from express</h1>');
})


app.listen(5000);
