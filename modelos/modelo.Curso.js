var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    nombre_cur:String,
    area_cur:String,
    //array de destrezas
    destrezas_cur:[String],
    //archivoPDF_cur:String,
     observacion_cur:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('CURSO',equipoSchema);
//para que funcione
module.exports = equipoModel;
 
 
 
 
 
 
 
 