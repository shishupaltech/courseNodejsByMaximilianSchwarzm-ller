const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product=require('./models/product');
const User = require('./models/user');

const app = express();

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product);


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
  User.findByPk(1).then(user=>{
    req.user = user;
    next();
  }).catch(err=>{console.log(err)});
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
  .sync({force:true})
  .then(result => {
    return User.findByPk(1)
    // console.log(result);
    app.listen(3000);
  }).then(user=>{
    if(!user){
      return User.create({name:'Max',email:'testgtest@gmail.com'});
    }
    return user;
  }).then(user=>{
    console.log(user);
  })
  .catch(err => {
    console.log(err);
  });
