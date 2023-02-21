const fs = require("fs");

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>My First Page</title></head>");
        res.write(
          '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>'
        );
    
        res.write("</html>");
        return res.end();
        }
      if (url === "/message" && method === "POST") {
        const body=[];
        req.on('data',(chunks)=>{
            console.log(chunks);
            body.push(chunks);
            
    
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1];
    
            fs.writeFileSync("message.txt", message,err=>{
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
            
        })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }
}
const sometext="some hard time will be gone";
module.exports = {sometext,requestHandler};
// module.exports = requestHandler;


// module.exports = {handler:requestHandler,someText:'Some hard coded'};
// in this lecture we have seen different different types of error.
