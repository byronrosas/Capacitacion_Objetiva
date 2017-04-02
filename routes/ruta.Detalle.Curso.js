var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorDetalleCurso = require("../controladores/controlador.Detalle.Curso.js");


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.crear(req,res,next); 
});


router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.eliminar(req,res,next);
});

router.get('/buscar/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.buscarPorId(req,res,next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.listar(req,res,next);
});

router.put('/aprobarjf/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.aprobarJF(req,res,next);
});

router.put('/aprobardc/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.aprobarDC(req,res,next);
});

router.put('/desaprobarjf/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.desaprobarJF(req,res,next);
});

router.put('/desaprobardc/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.desaprobarDC(req,res,next);
});

router.put('/subir/:_id', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  controladorDetalleCurso.subirPDF(req,res,next);
});
//Añadir la funcion de passport
router.get('/listarParaDocente/', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorDetalleCurso.listarParaDocente(req,res,next);
});

module.exports=router;