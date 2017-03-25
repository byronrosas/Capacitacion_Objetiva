var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    codigo_prov:{type:Schema.ObjectId,ref:"PROVEEDOR"},
    codigo_cur:{type:Schema.ObjectId,ref:"CURSO"},
    codigo_per:{type:Schema.ObjectId,ref:"INICIO"},
    fecha_ini_dc:Date,
    fecha_fin_dc:Date,
    nota_aprobacion_dc:Number,
    costo_dc: Number,
    cupo_dc:Number,
    archivoPDF_dc:String,
    aprobacionDC_dc:Boolean,
    aprobacionJF_dc:Boolean,
    Observacion_cur:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('DETALLE_CURSO',equipoSchema);
//para que funcione
module.exports = equipoModel;