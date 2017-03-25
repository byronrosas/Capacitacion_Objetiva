var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

var controladorTiempo = require('../controladores/controlador.Tiempo');


router.post('/crear', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTiempo.crear(req,res,next);
});
router.delete('/eliminar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTiempo.eliminar(req,res,next);
});
router.get('listar', passport.authenticate('jwt', { session: false }), (req,res,next) => {
    controladorTiempo.get(req,res,next);
});
module.exports=router;
