var mongoose = require("mongoose");
var Proveedor = require('../modelos/modelo.Proveedor.js');
exports.crear = function(req,res,next){
    var nuevoProveedor = new Proveedor(req.body);
    nuevoProveedor.save((err,data) => {
        if(err) {
            if(req.body._id == undefined) {
                console.log(err);
                res.json({codigo:500,msg:"Error del servidor 1"});
            } else {
                Proveedor.findOne({_id:req.body._id},(err,data) => {
                    data.nombre_prov = req.body.nombre_prov;
                    data.ciudad_prov = req.body.ciudad_prov;
                    data.direccion_prov = req.body.direccion_prov;
                    data.telefono_prov = req.body.telefono_prov;
                    data.calificacion_prov = req.body.calificacion_prov;
                    data.observacion_prov = req.body.observacion_prov;

                    data.save((err,data) => {
                        if(!err) {
                            res.json({codigo:200,msg:"Se ha modificado el proveedor",data:data});
                        } else {
                            res.json({codigo:500,msg:"Error del servidor 2",data:data});
                        }
                    });
                });
            }
        } else {
            res.json({codigo:200,msg:"Se ha creado el proveedor",data:data});
        }
    });

}

exports.eliminar = function(req,res,next) {
    Proveedor.findByIdAndRemove(req.body._id,(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del servidor 1"});
        } else {
            res.json({codigo:200,msg:"Se elimino un Proveedor",data:data});
        }
    });
}

exports.buscarPorId = function(req,res,next) {
    Proveedor.findOne({_id:req.params._id},(err,data) => {
        if(err) {
            res.json({codigo:500,msg:"Error del Servidor 1"});
        } else {
            if(data) {
                res.json({codigo:200,msg:"Detalle encontrado",data:data});
            } else {
                res,json({codigo:404,msg:"Detalle no encontrado"});
            }
        }
    });
}
exports.listar = function(req,res,next) {
    Proveedor.find({},(err,data) => {
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
// exports.nuevadestrezas=function(req,res,next){
//     Proveedor.findOne({_id:req.body._id},(err,data)=>{
//     if(err){
//             res.json({codigo:500,msg:"Error del servidor "});
//         }else{ 
//             data.destrezas_prov.push(req.body.destrezas_cur);
//             data.save((err,data)=>{
//             if(err){
//                  res.json({codigo:500,msg:"Error del servidor "});
//             }else{
//                  res.json({codigo:200,msg:"Proveedor creado",data:data});
//             }
//             });
//         }
//   });
// }
// exports.eliminarDestreza=function(req,res,next){
//     Proveedor.findOne({_id:req.body._id},(err,data)=>{
//     if(err){
//             res.json({codigo:500,msg:"Error del servidor "});
//         }else{ 
//            var nombreProveedor= data.destrezas_cur.indexOf(req.body.destrezas_cur);
//            if(nombreProveedor>-1){
//                data.destrezas_cur.splice(nombreDestreza,1);
//                data.save((err,data)=>{
//                 if(err){
//                     res.json({codigo:500,msg:"Error del servidor "});
//                 }else{
//                     res.json({codigo:200,msg:"Proveedor Eliminada",data:data});
//                 }
//            });
//         }else{
//            res.json({codigo:404,msg:"Proveedor No encontrado"}); 
//         }
//       }
//     });
// }