var mongoose = require ('mongoose');}

var Carrera = require('../modelos/modelo.Carrera.js');

exports.crear = function(req, res, next) {
    var nuevaCarrera = new Carrera(req.body);
    nuevaCarrera.save((err,data)=>{
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error del servidor 1", data:data});
            } else {
                Carrera.findOne({_id:req.body._id},(err,data) => {
                    data.nombre_car = req.body.nombre_car;
                    data.observacion_car = req.body.observacion_car;
                    
                    data.save((err,data) => {
                        if(!err) {
                            res.json({codigo:200,msg:"Se ha Modificado La Carrera", data:data});
                        } else {
                            res.json({codigo:500,msg:"Error del servidor 2", data:data});
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200,msg:"Se ha creado la Carrera", data:data});
        }
    });
}

exports.eliminar = function(req, res, next) {
    Carrera.findByIdAndRemove(req.body._id,(err, data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del Servidor 1"});
        } else {
            res.json({codigo:200, msg:"Se elimino la Carrera", data:data});
        }
    });
}

exports.listar = function(req, res, next) {
    Carrera.find({},(err, data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del Servidor 1"});
        } else {
            if(data.length!=0) {
                res.json({codigo:200, msg:"Detalles Encontrados", data:data});
            } else {
                res.json({codigo:404, msg:"Detalles No Encontrados"});
            }
        }
    });
}

exports.buscarPorId = function(req, res, next) {
    Carrera.findOne({_id:req.params._id},(err, data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del Servidor 1"});
        } else {
            if(data) {
                res.json({codigo:200, msg:"Detalles Encontrados", data:data});
            } else {
                res.json({codigo:404, msg:"Detalles No Encontrados"});
            }
        }
    });
}
