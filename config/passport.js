const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../modelos/modelo.Usuario.js');
const config = require('../config/db');
var jwt = require('jsonwebtoken');

module.exports=function(passport) {
    var opts={};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "capob";
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        console.log("payload receibed:",jwt_payload);
        User.getUserById(jwt_payload._doc._id,(err,user)=>{
            if(err) {
                return done(err,false);
            }            
            if(user) {

                console.log("USuario listo");
                return done(null,user);
            } else {
                return done(null,false);
            }
        });
    }));
}