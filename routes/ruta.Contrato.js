var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorContrato = require('../controladores/controlador.Contrato');
var contratoRecursosHumanos = require('../controladores/controlador.Contrato');


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorContrato.crear(req,res,next);
});

router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorContrato.eliminar(req,res,next);
});

router.get('/listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorContrato.listar(req,res,next);
});

router.get('/listar/RecursosHumanos', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    contratoRecursosHumanos.listar(req,res,next);
});

router.post('/modificarRecursosHumanos',passport.authenticate('jwt', { session: false }),function(req,res,next) {
    controladorContrato.modificarRecursosHumanos(req,res,next);
});

router.post('/modificarDirectorCarrera',passport.authenticate('jwt', { session: false }),function(req,res,next) {
    controladorContrato.modificarDirectorCarrera(req,res,next);
});

router.post('/modificarDirectorJuridico',passport.authenticate('jwt', { session: false }),function(req,res,next) {
    controladorContrato.modificarDirectorJuridico(req,res,next);
});

router.post('/modificarJefeFinanciero',passport.authenticate('jwt', { session: false }),function(req,res,next) {
    controladorContrato.modificarJefeFinanciero(req,res,next);
});


module.exports=router;