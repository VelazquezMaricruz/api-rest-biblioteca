const { Router } = require ('express');
const router = Router();
const tablaUsuario = require('./../basedatos/usuario-bd');
const jwt = require('jsonwebtoken');
const jwtUtils = require('./../utilidades/token-utils');

router.post ("/iniciar", async (peti, resp)=>{
    try{
         const { ci,password } = peti.body;
         const usuarios = await tablaUsuario.getUsuarioPorCi(ci,password);
        if(usuarios.length !== 0){
            const usuario = usuarios[0];
            const token = await  jwtUtils.generarToken(usuario.id);
            console.log(token);
         resp.json({token});  
         }else{
             resp.sendStatus(401); 
         }
    }catch(e){
        console.error('error al iniciar sesion', e);
        resp.status(500).send(e.message)
    }
});

router.post("/mantener", async (peti, resp)=>{
    try{
        const { token } = peti.body;
        const tokenNuevo =  await jwtUtils.refrescarToken(token);
        if(tokenNuevo){
            resp.json({token: tokenNuevo});
        }else{
            resp.sendStatus(403)
        }
    }catch(e){
        console.error('Error al mantener sesion', e);
        resp.status(500).send(e.message);
    }
});



module.exports = router;