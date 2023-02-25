const express = require("express");
const app = express();
const bodyParse  = require('body-parser');
app.use(bodyParse.urlencoded());

const adminRouters = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");

app.use(shopRouter);
app.use(adminRouters);
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page is not found</h1>");
})
app.listen(5000);
