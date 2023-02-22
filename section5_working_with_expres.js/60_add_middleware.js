// it's all about middleware
// request
// middleware (req,res,next)=>{...}
//  |
// next()
// midleware (req,res,next)=>{...}
//   | res.send()
// Response
const http = require("http");

const express = require("express");
const app = express();
app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();// Allow the request to continue to the next middleware in line
});

app.use((req,res,next)=>{
    console.log('middle in another ');
    // ...
})


const server = http.createServer(app);
server.listen(5000);
