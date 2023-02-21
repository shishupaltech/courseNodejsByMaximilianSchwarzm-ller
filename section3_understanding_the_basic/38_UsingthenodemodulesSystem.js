// routes system 
// // stream & buffer
// // example : incomming request
// stream => request body part1->request body part2 -> fully Parsed ;

// idea: start working | how do you work with flow data
// on the data early   |
// your code
// work with chunks of data!
// Buffer
const http = require("http");
const routes = require('./routes');
const server = http.createServer(routes);
server.listen(5000, () => {
  console.log("server is running on port at 5000");
});
