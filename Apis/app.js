var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./api_server/models/db');

const indexRouter = require('./App_server/routes/index');
var usersRouter = require('./App_server/routes/users');
var apiRoutes = require('./Api_server/routes/index');
var routes = require('./app_server/routes/index');
const cors= require("cors");
const stripe=require("stripe")("pk_test_51IgvT7FowvHTDhySXUnSDxMbioQabiBtBQLQvo0aRpC05CCLWeKHJYZVWVcjdNdPIz7RSGFLtx428MP92Q0GIcD400tcUt3svE");
const uuid =require("uuid");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app_server/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
  next();
})
app.use(cors());
app.use('/', routes);
app.use('/api', apiRoutes);
// app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const idempotencyKey= uuid();

app.post("/payment",(req,res)=>{
const {product,token}=req.body;

return stripe.customers.create({
  email: token.email,
  source:token.id
}).then(customer =>{
  stripe.charges.create({
    amount:product.price*100,
    currency:'usd',
    customer:customer.id,
    receipt_email:token.email,
    description: `product.name`,
    shipping:{
      name:token.card.name,
      address:{
        country:token.card.address_country
      }
    }
  },{idempotencyKey})
}).then(result=>res.status(200).json(result))
.catch(err=>console.log(err))
})

module.exports = app;
