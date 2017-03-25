var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorProveedor = require("../controladores/controlador.Proveedor.js");


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorProveedor.crear(req,res,next);
});

router.post('/modificar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorProveedor.modificar(req,res,next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorProveedor.listar(req,res,next);
});

router.get('/buscar/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorProveedor.buscarPorId(req,res,next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorProveedor.eliminar(req,res,next);
});
// //crear proveedor
// router.post('/crearDestreza', function(req, res, next) {
//   controladorProveedor.nuevadestrezas(req,res,next);
// });
// //eliminar proveedor
// router.delete('/eliminarDestreza', function(req, res, next) {
//   controladorProveedor.eliminarDestreza(req,res,next);
// });
module.exports = router;
