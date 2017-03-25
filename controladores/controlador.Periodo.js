var mongoose = require('mongoose');

var Periodo = require('../modelos/modelo.Periodo.js');
var carrera = require('../modelos/modelo.Carrera'); //necesito esto porque es un objeto al que hago referencia

exports.crear = function (req,res,next) {
    var nuevoPeriodo = new Periodo(req.body);
    nuevoPeriodo.save((err,data) => { //data devuelve el dato que se guardo
        if(err) {
            if(req.body==undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error del servidor 1",data:data});
            } else {
                Periodo.findOne({_id:req.body._id},(err,data) => {
                    data.codigo_car = req.body.codigo_car;
                    data.nombrePeriodo_ini = req.body.nombrePeriodo_ini;
                    data.capitalCurso_ini = req.body.capitalCurso_ini;
                    data.fecha_inicio_ini = req.body.fecha_inicio_ini;
                    data.fecha_fin_ini = req.body.fecha_fin_ini;
                    data.descripcion_ini = req.body.descripcion_ini;
                    data.save((err,data) => {
                        if(!err) {
                            res.json({codigo:200,msg:"se ha modificado el periodo",data:data});
                        } else {
                            res.json({codigo:500,msg:"Error del servidor 2",data:data});//data es el obeto que devuelve la consulta
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200,msg:"se ha creado el periodo",data:data});
        }
    });
}

exports.eliminar = function(req,res,next) {
    Periodo.findByIdAndRemove(req.body._id,(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            res.json({codigo:200,msg:"periodo eliminado",data:data});
        }
    });
}

exports.buscarPorId = function(req,res,next) {
    //listar con populate para que me abra todo los campos
    //se hace populate en las colecciones que tengan un nexo con otras colecciones
    Periodo.findOne({_id:req.params._id}).populate('codigo_car').exec((err,data) => {
        if(err) {
            res.json({codigo:500,msg:"error del servidor 1"});
        } else {
            if(data) {
                res.json({codigo:200,msg:"Perido econtrado",data:data});
            } else {
                res.json({codigo:404,msg:"detalle no encontrado"});
            }
        }
    });
}

exports.listar = function(req,res,next) {
    Periodo.find({},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"error del servidor"});
        } else {
            if(data.length!=0) {
                res.json({codigo:200,msg:"perido encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"perfil no encontrado"});
            }
        }
    });
}










