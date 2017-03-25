var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    nombre_car:String,
    observacion_car:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('CARRERA',equipoSchema);
//para que funcione
module.exports=equipoModel;