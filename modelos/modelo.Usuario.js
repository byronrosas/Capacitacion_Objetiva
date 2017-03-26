// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
// var esquema = new Schema({
//     codigo_car:{type:Schema.ObjectId,ref:"CARRERA"},
//     password_usu:String,
//     rutaImagen_usu:String,
//     nombre1_usu:String,
//     nombre2_usu:String,
//     apellido1_usu:String,
//     apellido2_usu:String,
//     cedula_usu:{type:String,unique:true},
//     fechaNac_usu:Date,
//     correo_usu:String,
//     area_usu:String,
//     //booleano
//     estado_usu:Boolean,
//     disponibilidad_usu:Boolean,
//     //permisoArreglo
//     permisos_usu:[String],
//     destrezas_usu:[String],
//     observacion_usu:String
// });
// //crear el modelo dentro de la base de datos
// var modeloUsuario = mongoose.model('USUARIO',esquema);
// //para que funcione
// module.exports = modeloUsuario;
//************************************************************************************** */
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;
//user schema
const UserSchema = new Schema({
    codigo_car:{type:Schema.ObjectId,ref:"CARRERA"},
    nombre1_usu:String,
    nombre2_usu:String,
    apellido1_usu:String,
    apellido2_usu:String,
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },    
    password:{
        type:String,
        required:true
    },
    fechaNac_usu:Date,
    area_usu:String,
    rutaImagen_usu:{type:String,default:"images/icono-usuario.png"}, 
    //usuario bloqueado (se bloquea por tres intentos)
    estado_usu:{type:Boolean,default:true},
    //Usuario disponible (el admin lo deshabilita)
    disponibilidad_usu:{type:Boolean,default:true},
    //permisoArreglo
    permisos_usu:[Number],
    destrezas_usu:[String],
    observacion_usu:{type:String,default:"Sin observación"}
});

const User = module.exports = mongoose.model('Usuario',UserSchema);

module.exports.getUserById = function(id,callback) {
    User.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback) {
    const query = {username:username}
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser,callback) {
    bcryptjs.genSalt(10,(err,salt) => {
        bcryptjs.hash(newUser.password,salt,(err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword,hash,callback) {
    bcryptjs.compare(candidatePassword,hash,(err,isMatch) => {
        if(err) throw err;
        callback(null,isMatch);
    });
}