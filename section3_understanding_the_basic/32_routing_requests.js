const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        
        res.write('</html>');
        return res.end();
    }
})
server.listen(5000,()=>{
    console.log("server is running on port at 5000");
})