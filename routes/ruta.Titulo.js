var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorTitulo = require('../controladores/controlador.Titulo.js');

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTitulo.listar(req,res,next);
});

router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTitulo.crear(req,res,next);
});

router.get('/buscar/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTitulo.buscarPorId(req,res,next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTitulo.eliminar(req,res,next);
});

module.exports = router;