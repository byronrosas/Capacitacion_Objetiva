var controladorUsuario = require('../CONTROLADORES/controladorUsuario');
var mongoose=require('mongoose');

//conexion
var conexion = function(){
	// mongoose.connect('mongodb://bmrosas:yaminada@ds113630.mlab.com:13630/capacitacionobjetiva',function(err,res)
	mongoose.connect('mongodb://127.0.0.1:27017/BD_CAPACITACION_OBJETIVA',function(err,res){
		//lanzar error solo para pruebas usamos el throw
		if(err) throw err;
		console.log('Conectado a la BD de capacitacion Objetiva');
		controladorUsuario.crearAdmin();
	});
}
module.exports = conexion();