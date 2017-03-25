var mongoose = require("mongoose");
var Schema=mongoose.Schema;
var equipoSchema = new Schema({
    
codigo_car:{type:Schema.ObjectId,ref:"CARRERA"},
nombrePeriodo_ini:String,
capitalCurso_ini:Number,
fecha_inicio_ini:Date,
fecha_fin_ini:Date,
descripcion_ini:String

});
//crear el modelo dentro de la base de datos
var equipo=mongoose.model('INICIO',equipoSchema);
//para que funcione
module.exports=equipo;