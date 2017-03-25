var mongoose = require("mongoose");

var Curso = require('../modelos/modelo.Curso.js');

exports.crear = function(req,res,next) {
    var nuevoCurso = new Curso(req.body);
    nuevoCurso.save((err,data) => {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else {
                Curso.findOne({_id:req.body._id},(err,data) => {
                    data.nombre_cur = req.body.nombre_cur;
                    data.area_cur = req.body.area_cur;
                    data.destrezas_cur = req.body.destrezas_cur;
                    data.observacion_cur = req.body.observacion_cur;

                    data.save((err,data) => {
                        if(!err) {
                            res.json({codigo:200,msg:"Se ha modificado el curso",data:data});
                        } else {
                            res.json({codigo:500,msg:"Error del servidor 2",data:data});
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200,msg:"Se ha creado el Curso",data:data});
        }
    });

}


exports.eliminar = function(req,res,next) {
    Curso.findByIdAndRemove(req.body._id,(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
             res.json({codigo:200,msg:"Se elimino un Curso",data:data});
        }
    });
}   

exports.buscarPorId = function(req,res,next) {
    Curso.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del Servidor 1"});
        } else {
            if(data) {
                res.json({codigo:200,msg:"Detalle encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"Detalle no encontrado"});
            }
        }
    });
}
exports.listar = function(req,res,next) {
    Curso.find({},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            if(data.length!=0) {
                res.json({codigo:200,msg:"Detalles encontrados",data:data});
            } else {
                res.json({codigo:404,msg:"Detalles no encontrados"});
            }
        }
    });
}


exports.nuevadestrezas = function(req,res,next) {
    Curso.findOne({_id:req.body._id},(err,data) => {
        if(err) {
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else { 
                data.destrezas_cur.push(req.body.destrezas_cur);
                data.save((err,data)=>{
                if(err) {
                    res.json({codigo:500,msg:"Error del servidor 2"});
                } else {
                    res.json({codigo:200,msg:"Destreza creada",data:data});
                }
            });
        }
    });
}

exports.eliminarDestreza = function(req,res,next) {
    Curso.findOne({_id:req.body._id},(err,data) => {
    if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else { 
            var nombreDestreza= data.destrezas_cur.indexOf(req.body.destrezas_cur);
            if(nombreDestreza > -1) {
                data.destrezas_cur.splice(nombreDestreza,1);
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2"});
                    } else {
                        res.json({codigo:200,msg:"Destreza Eliminada",data:data});
                    }
                });
            } else {
                res.json({codigo:404,msg:"Destreza no encontrada"}); 
            }
        }
    });
}
