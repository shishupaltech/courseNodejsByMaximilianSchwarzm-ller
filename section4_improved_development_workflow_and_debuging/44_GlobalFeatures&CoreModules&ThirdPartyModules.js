// Global Features vs Core Modules vs Third-party Modules 
// the last lecture contained important concepts about Node.js features and how to unlock them 
// you can basically differentiate between:
// 1. Global Features: Keywords like const or function but also some global objects like process 
// 2. Core Node.js Module: Examples would be the file-system module("fs"), the path module("path") or the Http module ("http");

// 3. Third-party Module: installed via npm-install - you can add any kind of feature to your app via this way .


// Global features are always available, you don't need to import them into the files where you want to use them.

// Core Node.js Modules don't need to be installed(No npm install is required) but you need to import them when you want to use features exposed by them.
// Example 
// const fs = require('fs'); 
// you can now use the fs object exported by the "fs" module 


// Third-party Modules need to be installed(via npm install in the project folder) And imported 

// Example(which you don't need to understand yet-well cover later in the course);
// in terminal/ commnad prompt
// in code file --save express-session 
// in code file (e.g app.js)
// const session = require('express-session');


