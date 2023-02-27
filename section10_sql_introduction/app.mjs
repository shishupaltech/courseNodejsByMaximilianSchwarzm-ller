// const path = require('path');
// const db = require('./util/database');

// const express = require('express');
// const bodyParser = require('body-parser');


// const errorController = require('./controllers/error');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// db.execute('SELECT * FROM products').then((result,fields)=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// })

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// app.listen(3000);

// ----------------------------------------------mjs file system----------------------------

import { join } from 'path';
import { execute } from './util/database.mjs';

import express from 'express';
import { json, urlencoded } from 'body-parser';


import { get404 } from './controllers/error.js';

const app = express();
app.use(json());
app.use(urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', 'views');

import adminRoutes from './routes/admin.mjs';
import shopRoutes from './routes/shop.mjs';

execute('SELECT * FROM products').then((result,fields)=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})

app.use(urlencoded({ extended: false }));
app.use((join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000);

