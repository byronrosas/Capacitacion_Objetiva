const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

const User = require('../modelos/modelo.Usuario.js');
/* POST users register. */
router.post('/register', (req, res, next) => {
    let newUser = new User({
        codigo_car:req.body.codigo_car,
        nombre1_usu:req.body.nombre1_usu,
        nombre2_usu:req.body.nombre2_usu,
        apellido1_usu:req.body.apellido1_usu,
        apellido2_usu:req.body.apellido2_usu,
        email:req.body.email,
        username:req.body.username,    
        password:req.body.password,
        fechaNac_usu:req.body.fechaNac_usu,    
        area_usu:req.body.area_usu,
        rutaImagen_usu:req.body.rutaImagen_usu, 
        estado_usu:req.body.estado_usu,
        disponibilidad_usu:req.body.disponibilidad_usu,
        //permisoArreglo
        permisos_usu:req.body.permisos_usu,
        destrezas_usu:req.body.destrezas_usu,
        observacion_usu:req.body.observacion_usu   
    });
    User.addUser(newUser,(err,user) => {
        if(err) {
            res.json({codigo:400,msg:'Error del servidor, fallo el registro de usuario'});
        } else {
            res.json({codigo:200,msg:"Usuario registrado con éxito",data:user});
        }
    });
});
/* POST users authenticate. */
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username,(err,user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success:false,msg:'Usuario no Encontrado'});
        }

        User.comparePassword(password,user.password,(err,isMatch) => {
            console.log("err:+++"+err);
            if(err) throw err;
            if(isMatch) {
                const token =jwt.sign(user,"capob");

                res.json({
                    success:true,
                    token:'JWT '+token,         
                    user:{
                        _id:user._id,            
                        username:user.username            
                    }        
                });
            } else {
                //No Match
                res.json({success:false,msg:'Contraseña incorrecta'});
            }
        });
    });
});

/* GET users profile. */
router.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res) {
    console.log(req);
    res.json({message: "Success! You can not see this without a token",e:"session:"+req.user.permisos_usu});
});
router.get("/secretDebug", 
    function(req, res, next) {
        console.log(req.get('Authorization'));
        next();
    }, function(req, res) {
        res.json("debugging");
});
// /* GET users validate. */
// router.get('/validate', (req, res, next)=>{
//   res.send('VALIDATE');
// });
module.exports = router;
