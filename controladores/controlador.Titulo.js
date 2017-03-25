var mongoose = require('mongoose');
var Titulo = require('../modelos/modelo.Titulo.js');
var Usuario = require('../modelos/modelo.Usuario');

exports.crear = function(req,res,next) {
    var nuevoTitulo = new Titulo(req.body);
    nuevoTitulo.save((err,data) => {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({
                    codigo: 500,
                    msg: "Error de Servidor 1"
                });
            } else {
                Titulo.findOne({_id:req.body._id},(err,data) => {
                    data.codigo_usu = req.body.codigo_usu; 
                    data.codigoTitulo_ti = req.body.codigoTitulo_ti; 
                    data.univerdadExp_ti = req.body.univerdadExp_ti; 
                    data.nombre_ti = req.body.nombre_ti; 
                    data.area_ti = req.body.area_ti; 
                    data.fechaExp_ti = req.body.fechaExp_ti; 
                    data.idioma_ti = req.body.idioma_ti; 
                    data.destrezas_tit = req.body.destrezas_tit; 
                    data.promedio_ti = req.body.promedio_ti; 
                    data.archivoPDF_ti = req.body.archivoPDF_ti; 
                    data.observacion_tit = req.body.observacion_tit;

                    data.save((err,data) => {
                        if(!err) {
                            res.json({
                                codigo: 200,
                                msg: "Se a modificado el titulo",
                                data: data
                            });
                        } else {
                            res.json({
                                codigo: 500,
                                msg: "Error del Servidor",
                                data: data
                            });
                        }
                    });
                });
            }
        } else {
            res.json({
                codigo: 200,
                msg:"Se a creado el Titulo",
                data: data
            });
        }
    });
}

exports.eliminar = function(req,res,next) {
    Titulo.findByIdAndRemove(req.body._id,(err,data) => {
        if(err) {
            res.json({
                codigo: 500,
                msg: "Error del Servidor"
            });
        } else {
            res.json({
                codigo: 200,
                msg: "Se elimino el Titulo",
                data: data
            });
        }
    });
}

exports.buscarPorId = function(req,res,next) {
    Titulo.findOne({_id:req.params._id}).populate('codigo_usu').exec((err,data) => {
        if (err) {
            res.json({
                codigo: 500,
                msg: "Error del Servidor"
            });
        } else {
            if(data) {
                res.json({
                    codigo: 200,
                    msg: "Titulo Encontrado",
                    data: data
                });
            } else {
                res.json({
                    codigo: 404,
                    msg: "Titulo no Encontrado"
                });
            }
        }
    });
}

exports.listar = function(req,res,next) {
    Titulo.find({},(err,data) => {
        if (err) {
            res.json({
                codigo: 500,
                msg: "Error del Servidor"
            });
        } else {
            if(data) {
                res.json({
                    codigo: 200,
                    msg: "Titulo Encontrado",
                    data: data
                });
            } else {
                res.json({
                    codigo: 404,
                    msg: "Titulo no Encontrado"
                });
            }
        }
    });
}