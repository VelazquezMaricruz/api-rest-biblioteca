const { Router } = require("express");
const router = Router();
const tablaAutor = require('./../basedatos/autor.bd');

router.get("/",async (peti,resp)=>{
    try{
        const listaAutores = await tablaAutor.select(); 
        resp. json(listaAutores);
    }catch(e){
        console.log('Error al manejar GET de autor');
        console.log(e);
        resp.status(500).send(e.message);
    }
});

module.exports = router;