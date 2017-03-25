var mongoose = require("mongoose");
var Schema=mongoose.Schema;
var equipoSchema = new Schema({

codigo_ini:{type:Schema.ObjectId,ref:"INICIO"},
tiempoInicial_tie:Date,
tiempodFinal_tie:Date, 
actividad_tie:String,
estado_tie:String,
observacion_tie:String
});
//crear el modelo dentro de la base de datos
var equipoModel=mongoose.model('TIEMPO',equipoSchema);
//para que funcione
module.exports=equipoModel;