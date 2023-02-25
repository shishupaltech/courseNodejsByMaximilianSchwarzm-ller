const express = require("express");
const app = express();
const path = require('path');

const bodyParse  = require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
const adminRouters = require("./routes/admin.js");
const shopRouter = require("./routes/shop.js");

app.use('/admin',adminRouters);
app.use(shopRouter);

app.use((req,res,next)=>{
    // res.status(404).send("<h1>Page is not found</h1>");
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(5000);
