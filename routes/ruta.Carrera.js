var express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');
var router = express.Router();
var controladorCarrera = require("../controladores/controlador.Carrera.js")


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