const http = require('http');

const express = require('express');

const app = express();

app.listen(5000,()=>{
    console.log("Server is running on port at 5000");
})