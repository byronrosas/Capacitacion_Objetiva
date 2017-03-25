var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorCarrera = require("../controladores/controlador.Carrera");



router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCarrera.crear(req, res, next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCarrera.eliminar(req, res, next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCarrera.listar(req, res, next);
});

router.get('/buscar: id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCarrera.buscarPorId(req, res, next);
});


module.exports = router;