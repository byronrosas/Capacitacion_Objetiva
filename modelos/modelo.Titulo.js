var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    codigo_usu:{type:Schema.ObjectId,ref:"USUARIO"},
    codigoTitulo_tit:String,
    univerdadExp_tit:String,
    nombre_tit:String,
    area_tit:String,
    fechaExp_tit:String,
    idioma_tit:String,
    //permisoArreglo
    destrezas_tit:[String],
    promedio_tit:Number,
    archivoPDF_tit:String,
    observacion_tit:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('TITULO',equipoSchema);
//para que funcione
module.exports = equipoModel;
