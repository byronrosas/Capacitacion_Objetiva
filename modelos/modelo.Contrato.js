var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
    codigo_usu:{type:Schema.ObjectId,ref:"USUARIO"},
    codigo_dc:{type:Schema.ObjectId,ref:"DETALLE_CURSO"},
    estado_con:[String],
    aprobacionRH_con:Boolean,
    aprobacionJF_con:Boolean,
    aprobacionDR_con:Boolean,
    aprobacionDJ_con:Boolean,
    fechaCreacion_con:Date,
    fechaAprobacion_con:Date,
    fechaFirma_con:Date,
    archivoPDF_con:String,
    observacion_con:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('CONTRATO',equipoSchema);
//para que funcione
module.exports = equipoModel;