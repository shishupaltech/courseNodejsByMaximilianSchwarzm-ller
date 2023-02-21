const http = require('http');
const routes = require('./48_finding&fixingSyntaxError');
console.log(routes.sometext);

const server = http.createServer(routes.handler);
server.listen(3000);