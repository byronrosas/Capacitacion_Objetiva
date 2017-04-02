var mongoose = require('mongoose');

var DetalleCurso = require('../modelos/modelo.Detalle.Curso.js');
var Proveedor = require('../modelos/modelo.Proveedor.js');
var Curso = require('../modelos/modelo.Curso.js');
var Periodo = require('../modelos/modelo.Periodo.js');
var Usuario = require('../modelos/modelo.Usuario.js');
var Utils=require('../utils/utils');

exports.crear = function(req,res,next) {
    var nuevoDetalleCurso=new DetalleCurso(req.body);
    nuevoDetalleCurso.save((err,data) => {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500, msg:"Error del servidor 1"});
            } else {
                DetalleCurso.findOne({_id:req.body._id},(err,data) => {
                    data.codigo_prov = req.body.codigo_prov;
                    data.codigo_cur = req.body.codigo_cur;
                    data.codigo_per = req.body.codigo_car;
                    data.fecha_ini_dc = req.body.fecha_ini_dc;
                    data.fecha_fin_dc = req.body.fecha_fin_dc;
                    data.nota_aprobacion_dc = req.body.nota_aprobacion_dc;
                    data.costo_dc = req.body.costo_dc;
                    data.cupo_dc = req.body.cupo_dc;
                    data.Observacion_cur = req.body.Observacion_cur;

                    data.save((err,data) => {
                        if(!err) {
                            res.json({codigo:200, msg:"Se ha modificado el detalle-curso",data:data});
                        } else {
                            res.json({codigo:500, msg:"Error del servidor 2",data:data});
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200, msg:"Se ha creado el detalle-curso",data:data});
        }
    });
}

exports.eliminar = function(req,res,next) {
    DetalleCurso.findByIdAndRemove(req.body._id,(err,data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del servidor 1"});
        } else {
            res.json({codigo:200, msg:"Se elimino un Detalle-curso",data:data});
        }
    });
}

exports.buscarPorId = function(req,res,next) {
    //Listar con populate para que me abra todos los campos
    //Se hace populate en las colecciones que tengan un nexo con otras colecciones
    DetalleCurso.findOne({_id:req.params._id}).populate('codigo_prov').populate('codigo_cur').populate('codigo_per').exec(function (err,data) {
            if(err) {
                res.json({codigo:500, msg:"Error del servidor 1"});
            } else {
                if(data) {
                    res.json({codigo:200, msg:"Detalle encontrado.",data:data});
                } else {
                    res.json({codigo:404, msg:"Detalle no encontrado."});
                }
            }
    });

    //Listar cuando la coleccion no tiene referencia a otra coleccion
    // DetalleCurso.findOne({_id:req.params._id},function(err,data){
    //     //Data es el elemento encontrado
    //     if(err)
    //     {
    //         res.json({codigo:500,msg:"Error del servidor"});
    //     }else{
    //         if(data){
    //             res.json({codigo:200,msg:"Detalle encontrado.",data:data});
    //         }else{
    //             res.json({codigo:404,msg:"Detalle no encontrado."});
    //         }
    //     }

    // });

}

exports.listar = function(req,res,next) {
    DetalleCurso.find({},(err,data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del servidor 1",error:err});
        } else {
            if(data.length!=0) {
                res.json({codigo:200 ,msg:"Detalles encontrados.",data:data});
            } else {
                res.json({codigo:404, msg:"Detalles no encontrados."});
            }
        }
    });
}

exports.listarParaDocente = function(req,res,next) {
    var coincidenciasCursos=[];    
    DetalleCurso.find({$and:[{aprobacionDC_dc:true},{aprobacionJF_dc:true},{archivoPDF_dc:{$ne:null}}]}).populate('codigo_cur').exec((err,dataDC) => {
        //
        if(dataDC.length!=0)
        {
            res.json({codigo:404, msg:"No hay cursos para seleccionar."});
        }else{
            Usuario.find({},(err,dataUsuario)=>{                                                                                  
                    dataDC.forEach((itemDC)=>{                    
                        var vect=Utils.filtrarCurso(itemDC.codigo_cur.destrezas_cur,req.user.destrezas_usu);
                        if(vect.length!=0)
                        {
                                coincidenciasCursos.push(itemDC.codigo_cur);
                        }                                                                
                    });
                
            }); 
        }                    
    });    
}

exports.aprobarDC = function(req,res,next) {
    //Necesita Director de carrera 
    DetalleCurso.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500, msg:"Error del servidor 1",error:err});   
        } else {
            if(data) {
                data.aprobacionDC_dc = true;
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2",error:err});
                    } else {
                        res.json({codigo:200,msg:"Detalle modificado. (Director de carrera aprobación)",data:data});
                    }
                });
            } else {
                res.json({codigo:404,msg:"Detalles no encontrados."});
            }
        }
    });
}

exports.aprobarJF = function(req,res,next) {
    //Necesita Jefe Financiero
    DetalleCurso.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1",error:err});
        } else {
            if(data) {
                data.aprobacionJF_dc=false;
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2",error:err});
                    } else {
                        res.json({codigo:200,msg:"Detalle modificado. (Jefe Financiero aprobación)",data:data});
                    }
                });
            }else{
                res.json({codigo:404,msg:"Detalles no encontrados."});
            }
        }
    });
}

exports.desaprobarDC = function(req,res,next) {
    //Necesita Director de carrera 
    DetalleCurso.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1",error:err});   
        } else {
            if(data) {
                data.aprobacionDC_dc = false;
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2",error:err});
                    } else {
                        res.json({codigo:200,msg:"Detalle modificado. (Director de carrera aprobación)",data:data});
                    }
                });
            } else {
                res.json({codigo:404,msg:"Detalles no encontrados."});
            }
        }
    });
}

exports.desaprobarJF = function(req,res,next) {
    //Necesita Jefe Financiero
    DetalleCurso.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1",error:err});   
        } else {
            if(data) {
                data.aprobacionJF_dc = true;
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2",error:err});
                    } else {
                        res.json({codigo:200,msg:"Detalle modificado. (Jefe Financiero aprobación)",data:data});
                    }
                });
            } else {
                res.json({codigo:404,msg:"Detalles no encontrados."});
            }
        }
    }); 
}


exports.subirPDF = function() {
   //Necesita Jefe Financiero
    DetalleCurso.findOne({$and:[{_id:req.params._id},{aprobacionDC_dc:true},{aprobacionJF_dc:true}]},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1",error:err});   
        } else {
            if(data) {
                data.aprobacionJF_dc = true;
                data.save((err,data) => {
                    if(err) {
                        res.json({codigo:500,msg:"Error del servidor 2",error:err});
                    } else {
                        res.json({codigo:200,msg:"Detalle modificado. (Jefe Financiero subió PDF)",data:data});
                    }
                });
            } else {
                res.json({codigo:404,msg:"Detalles no encontrados. O aún no ha sido aprobado por una de las partes."});
            }
        }
    });
}