const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const expressHbs = require('express-handlebars');

app.engine(
    'hbs',
    expressHbs({
        layoutsDir:'views/layouts/',
        defaultLayout:'main-layout',
        extname:'hbs'
    })
);
app.set('view engine','hbs');
app.set('views','views');

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404');
});

app.listen(5000);
