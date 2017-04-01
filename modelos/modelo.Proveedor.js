var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var equipoSchema = new Schema({
	nombre_prov:String,
	pais_prov:String,
	ciudad_prov:String,
	direccion_prov:String,
	telefono_prov:String,
	calificacion_prov:String,
	observacion_prov:String
});
//crear el modelo dentro de la base de datos
var equipoModel = mongoose.model('PROVEEDOR',equipoSchema);
//para que funcione
module.exports = equipoModel;