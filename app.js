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
//TOD Developers
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');
var passport = require("passport");
var mongoose = require('mongoose');
var cors = require('cors');
// var passportJWT = require("passport-jwt");
var configDB = require('./config/db.js');
// const JwtStrategy=require('passport-jwt').Strategy;
// const ExtractJwt=require('passport-jwt').ExtractJwt;
//modelos
const User = require('./modelos/modelo.Usuario');
//ROUTES
var inicio = require('./routes/ruta.Inicio');
var DetalleCurso = require('./routes/ruta.Detalle.Curso');
var users = require('./routes/ruta.Usuario');
var proveedor = require('./routes/ruta.Proveedor'); //ruta proveedor_disney
var curso = require('./routes/ruta.Curso'); //ruta curso_mauro
var periodo = require('./routes/ruta.Periodo'); //ruta periodo_Darwin
var carrera = require('./routes/ruta.Carrera'); //ruta periodo_Riki
var titulo = require('./routes/ruta.Titulo'); //ruta titulo_Gonzalo
var tiempo = require('./routes/ruta.Tiempo');   //ruta_tiempo_Jonathan
var contrato = require('./routes/ruta.Contrato'); //ruta_contrato_Jonathan

//PASSPORT middleware
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
mongoose.connection.on('connected', () => {
    console.log('Conectado a la Base de Datos '+configDB.uriDB);
});
//on error
mongoose.connection.on('Error',(err) => {
    console.log('Error de Base de Datos: '+err);
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
app.use('/detalle_curso', DetalleCurso);
app.use('/proveedor', proveedor);
app.use('/tiempo',tiempo);
app.use('/contrato',contrato);
app.use('/curso', curso);
app.use('/periodo', periodo);
app.use('/carrera',carrera);
app.use('/titulo',titulo);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((req, res, next) => {
    // set locals, only providing error in development
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;