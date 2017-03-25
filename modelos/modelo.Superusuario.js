var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    nombre:{type:String,default:'Admin'},
    apellido:{type:String,default:'Admin'},
    cedula:{type:String,default:'admin'},
    correo:{type:String,default:'oscartoaquiza388@gmail.com'},
    telefono:{type:String,default:'0983898326'},
    contrasena:{type:String,default:'1234ADMIN'},
    tipo:{type:Number,default:11111}
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('ADMIN',equipoSchema);
//para que funcione
module.exports = equipoModel;