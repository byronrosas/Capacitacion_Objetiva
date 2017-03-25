var mongoose = require('mongoose');

var Tiempo = require('../modelos/modelo.Tiempo');

exports.crear = function(req,res,next){
    var nuevoTiempo = new Tiempo(req.body);
    nuevoTiempo.save(function(err,data) {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error de servidor 1"});
            } else {
                Tiempo.findOne({_id:req.body._id},function(err,data) {
                    data.codigo_ini = req.codigo_ini,
                    data.tiempoInicial_tie = req.tiempoInicial_tie,
                    data.tiempoFinal_tie = req.tiempoFinal_tie,
                    data.actividad_tie = req.actividad_tie,
                    data.observacion_tie = req.observacion_tie

                    data.save(function(err,data) {
                        if(!err) {
                            res.json({codigo:200,msg:"Se a modificado los datos del Tiempo",data:data});
                        } else {
                            res.json({codigo:500,msg:"Error del servidor 2",data:data});
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200,msg:"Se ha creado un Tiempo en el Sistema",data:data});
        }
    });
}

exports.eliminar = function(req,res,next) {
    Tiempo.findByIdAndRemove(req.body._id,function(err,data) {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            res.json({codigo:200,msg:"Se Elimino un Tiempo",data:data});
        }
    });
}

exports.listar = function(req,res,next) {
    Tiempo.find({},function(err,data) {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            if(data.length != 0) {
                res.json({codigo:200,msg:"Tiempo Encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"Tiempo no Encontrado"});
            }
        }
    });
}

exports.buscarId = function(req,res,next) {
    //ruta con  get usamos req.params
    //tuta con post uamos req.body
    Tiempo.findOne({_id:req.params._id}).populate('codigo_ini').exec(function(err,data) {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor"});
        } else {
            if(data) {
                res.json({codigo:200,msg:"Tiempo Encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"Tiempo NO Encontrado"});
            }
        }
    });
}