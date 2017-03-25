 //                      __
 //                    .'  '.
 //                _.-'/  |  \
 //   ,        _.-"  ,|  /  0 `-.
 //   |\    .-"       `--""-.__.'=====================-,
 //   \ '-'`        .___.--._)=========================|
//            .'      |                     			     |
 //     |     /,_.-'        |        		T	 	          |
 //   _/   _.'(             |           o            |
  // /  ,-' \  \            |       	 D			        |
 //  \  \    `-'            |                          |
 //   `-'                   '--------------------------'


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
//
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
const User=require('./modelos/modelo.Usuario.js');
var passport = require("passport");
// var passportJWT = require("passport-jwt");

//
var mongoose=require('mongoose');
var inicio = require('./routes/ruta.Inicio');
var configDB=require('./config/db.js');
var cors=require('cors');

// const JwtStrategy=require('passport-jwt').Strategy;
// const ExtractJwt=require('passport-jwt').ExtractJwt;
//ROUTES
var rutaDetalleCurso = require('./routes/ruta.Detalle.Curso.js');
var users = require('./routes/ruta.Usuario.js');
//ruta proveedor_disney
var proveedor = require('./routes/ruta.Proveedor');
//ruta curso_mauro
var curso = require('./routes/ruta.Curso');
//ruta periodo_Darwin
var periodo = require('./routes/ruta.Periodo');//ruta de periodo
//ruta periodo_Riki
var carrera = require('./routes/ruta.Carrera');
//ruta titulo
var titulo = require('./routes/ruta.Titulo');

//PASSPORT middleware

//rutas Darkness
var tiempo = require('./routes/ruta.Tiempo');   //Darkness
var contrato = require('./routes/ruta.Contrato'); //Darkness

require('./config/passport')(passport);

// var jwtOptions = {}
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
// jwtOptions.secretOrKey = 'capob';

// var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, done) {
//   console.log('payload received', jwt_payload);
//   // usually this would be a database call:
//   User.getUserById(jwt_payload._doc._id,(err,user)=>{
//             if(err){
//                 return done(err,false);
//             }            
//             if(user){

//                 console.log("USuario listo");
//                 return done(null,user);
//             }else{
//                 return done(null,false);
//             }
//         });
// });

// passport.use(strategy);

var app = express();
//CONECTION TO DATABASE
mongoose.connect(configDB.uriDB);
//on connection
mongoose.connection.on('connected',()=>{
  console.log('Connected to database '+configDB.uriDB);
});
//on error
mongoose.connection.on('error',(err)=>{
  console.log('Database error: '+err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//CORS middleware
app.use(cors());


app.use(passport.initialize());
app.use(passport.session());
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





//RUTAS MIDDLEWARE
app.use('/', inicio);
app.use('/detalleCurso/', rutaDetalleCurso);
app.use('/users', users);
//disney  Proveedor
app.use('/proveedor', proveedor);
app.use('/tiempo',tiempo); //darkness
app.use('/contrato',contrato); //darkness
//curso mauro
app.use('/curso', curso);
//periodo darwin
app.use('/periodo/', periodo); 
//carrera Riki
app.use('/carrera',carrera);
//titulo gonzalo
app.use('/titulo',titulo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
