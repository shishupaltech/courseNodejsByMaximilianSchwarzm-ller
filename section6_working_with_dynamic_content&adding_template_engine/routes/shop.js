const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');


router.get('/', (req, res, next) => {
    console.log(adminData.products);
    const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop',{prods:products,docTitle:'Shop'});
});

module.exports = router;
