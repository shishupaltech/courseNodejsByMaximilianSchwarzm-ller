// // stream & buffer
// // example : incomming request
// stream => request body part1->request body part2 -> fully Parsed ;

// idea: start working | how do you work with flow data
// on the data early   |
// your code
// work with chunks of data!
// Buffer
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
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
    return req.on('end',()=>{
        const parseBody = Buffer.concat(body).toString();
        console.log(parseBody);
        const message = parseBody.split('=')[1];

        fs.writeFileSync("message.txt", message);
    })
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});
server.listen(5000, () => {
  console.log("server is running on port at 5000");
});
