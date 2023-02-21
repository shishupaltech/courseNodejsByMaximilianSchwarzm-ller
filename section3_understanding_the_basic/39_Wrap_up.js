////////          module summary 
// how the web works 

// client -> request -> server -> response -> client 
//program life cycle and event loop 
// 1. Node.js runs non-blocking js code and use an event-driven code ("Event Loop") for running your logic 


// A node program exits as soon as there is no more work to do 
// Note: The createServer() event never finishes by default.

// Asyncronous Code 

// js code is non-blocking 
// use callback and events 
// order change 

// Requests & response 
// 1. Parse request data in chunks (Streams & buffer);
// avoid "double responses";

// node js core module 
// 1. Node.js ships with multiple core modules(http,fs,path...);
// 2. Core modules can be imported into any files to be use there 
// 3. import via require("module");

// the node module system
// 1. import via require('./path-to-file) for custom files or require('module') for core & third-party modules
// 2. export via modules.exports or just exports(for multiple exports);