var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorPeriodo = require('../controladores/controlador.Periodo');


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorPeriodo.crear(req,res,next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorPeriodo.eliminar(req,res,next);
});

router.get('/buscar/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorPeriodo.buscarPorId(req,res,next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorPeriodo.listar(req,res,next);
});

module.exports = router;