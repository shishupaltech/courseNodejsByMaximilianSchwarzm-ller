// core module 
// 1. http -> launch a server, send request 
// 2. https -> Launch a ssl 
// 3. fs -> 
// 4. path 
// 5. os

const http = require('http');

// function rqListner(req,res){

// }
// http.createServer(rqListner);

const server = http.createServer((req,res)=>{
    console.log(req);
    // process.exit();
})

server.listen(5000,()=>{
    console.log("server is running on port at 5000");
})






