// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const method = req.method;
//     if (url === "/") {
//         res.write("<html>");
//         res.write("<head><title>My First Page</title></head>");
//         res.write(
//           '<body><form action="/create-user" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
//         );
    
//         res.write("</html>");
//         return res.end();
//       }
//       if (url === "/create-user" && method === "POST") {
//         const body=[];
//         req.on('data',(chunks)=>{
//             console.log(chunks);
//             body.push(chunks);
            
    
//         });
//         req.on('end',()=>{
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody);
//             const message = parseBody.split('=')[1];
    
//             fs.writeFileSync("message.txt", message,err=>{
//                 res.statusCode = 302;
//                 res.setHeader("Location", "/");
//                 return res.end();
//             });
            
//         })
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//       }
// });

// server.listen(3000,()=>{
//     console.log(`Server is running on at port ${3000}`);
// })

// assignment by the sir 
const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        //.....
        res.setHeader("content-type",'text/html');
        res.write('<html>');
        res.write('<head><title>Assignmnet 1</title></head>');
        // res.write('<body><p>Welcome to my page!</p></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">submit</button></form></body>')
        
        res.write('</html>');
        res.end();
    }
    if(url==='/users'){
        res.setHeader("content-type",'text/html');
        res.write('<html>');
        res.write('<head><title>Assignmnet 1</title></head>');
        res.write('<body><ul><li>User1</li><li>User 2</li></ul></body>');
        
        res.write('</html>');
        res.end();
    }
    if(url==='/create-user'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk)
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        res.end();
    }
    // send a HTML response with some "Page not found text";
    // if we add some thing here the we will use return in return res.end();

});

server.listen(3000);
