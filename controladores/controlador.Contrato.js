var mongoose = require('mongoose');

var Contrato = require('../modelos/modelo.Contrato');
var Carrera = require('../modelos/modelo.Carrera');

exports.crear = function(req,res,next) {
    var nuevoContrato = new Contrato(req.body);
    nuevoContrato.save(function(err,data) {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error de Servidor 1"});
            } else {
                Contrato.findOne({_id:req.body._id},function(err,data) {
                   data.codigo_usu = req.body.codigo_usu, 
                   data.codigo_dc = req.body.codigo_dc,
                   data.estado_con = req.body.estado_con,
                   data.aprobacionRH_con = req.body.aprobacionRH_con,
                   data.aprobacionJF_con = req.body.aprobacionJF_con,
                   data.aprobacionDR_con = req.body.aprobacionDR_con,
                   data.aprobacionDJ_con = req.body.aprobacionDJ_con,
                   data.fechaCreacion_con = req.body.fechaCreacion_con,
                   data.fechaAprobacion_con = req.body.fechaAprobacion_con,
                   data.fechaFirma_con = req.body.fechaFirma_con,
                   data.archivoPDF_con = req.body.archivoPDF_con,
                   data.observacion_con = req.body.observacion_con

                   data.save(function(err,data) {
                       if(!err) {
                            res.json({codigo:200,msg:"Se a modificado el Contrato",data:data});
                       } else {
                            res.json({codigo:500,msg:"Error del servidor 2",data:data});
                       }
                   });
                });
            }
        } else {
            res.json({codigo:200,msg:"Se ha creado el Contrato",data:data});
        }
    });
}

exports.eliminar = function(req,res,next) {
    Contrato.findByIdAndRemove(req.body._id,function(err,data) {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            res.json({codigo:200,msg:"Se elimino el Contrato",data:data});
        }
    });
}

exports.listar = function(req,res,next) {
    Contrato.find({},function(err,data) {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            if(data.length != 0) {
                res.json({codigo:200,msg:"Contrato Encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"Contrato no Encontrado"});
            }
        }
    });
}

exports.buscarId = function(req,res,next) {
    //ruta con  get usamos req.params
    //tuta con post uamos req.body
    Contrato.findOne({_id:req.params._id}).populate('codigo_usu').populate('codigo_dc').exec((err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            if(data) {
                res.json({codigo:200,msg:"Contrato Encontrado",data:data});
            } else {
                res.json({codigo:404,msg:"Contrato no Encontrado"});
            }
        }
    });
}

exports.modificarRecursosHumanos = function(req,res,next) {
    Contrato.findOne({_id:req.body._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1",data:data});
        } else {
            if(data) {
                data.aprobacionRH_con = req.body.aprobacionRH_con;
                validarContrato(err,data);
                // validarContrato();
                data.save(function(err,data) {
                    if(!err) {
                        res.json({codigo:200,msg:"Se a modificado el Contrato",data:data});
                    } else {
                        res.json({codigo:500,msg:"Error del servidor 2",data:data});
                    }
                });
            }
        }
    });
}

exports.modificarDirectorCarrera = function(req,res,next) {
        Contrato.findOne({_id:req.body._id}, (err,data) => {
        data.aprobacionDR_con = req.body.aprobacionDR_con;
        data.save(function(err,data) {
            if(err) {
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else {
                res.json({codigo:200,msg:"Se a modificado el Contrato",data:data});
            }
        });
    });
}

exports.modificarDirectorJuridico = function(req,res,next) {
        Contrato.findOne({_id:req.body._id},function(err,data){
        data.aprobacionDJ_con = req.body.aprobacionDJ_con;
        data.archivoPDF_con = req.body.archivoPDF_con;
        data.save(function(err,data) {
            if(err) {
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else {
                res.json({codigo:200,msg:"Se a modificado el Contrato",data:data});
            }
        });
    });
}
exports.modificarJefeFinanciero = function(req,res,next) {
        Contrato.findOne({_id:req.body._id},function(err,data) {
        data.aprobacionJF_con  =req.body.aprobacionJF_con;
        data.save(function(err,data){
            if(err){
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else {
                res.json({codigo:200,msg:"Se a modificado el Contrato",data:data});
            }
        });
    });
}

function validarContrato(err,data) {
    var a,b,c,d,e;
    e = 0;
    
    if(data.aprobacionRH_con == true) { a = 1; }
    if(data.aprobacionJF_con == true) { b = 1; }
    if(data.aprobacionDR_con == true) { c = 1; }
    if(data.aprobacionDJ_con == true) { d = 1; }
    e = a + b + c + d;
    if(e == 4) { console.log("Esta todo okey"); }
}