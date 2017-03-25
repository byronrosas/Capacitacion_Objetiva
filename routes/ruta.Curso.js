var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorCurso = require("../controladores/controlador.Curso.js");


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.crear(req,res,next);
});

router.put('/modificar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.modificar(req,res,next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.listar(req,res,next);
});

router.get('/buscar/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.buscarPorId(req,res,next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.eliminar(req,res,next);
});

router.post('/crearDestreza', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorCurso.nuevadestrezas(req,res,next);
});

router.delete('/eliminarDestreza' ,passport.authenticate('jwt', { session: false }),(req,res,next) => {
  controladorCurso.eliminarDestreza(req,res,next);
});


module.exports = router;