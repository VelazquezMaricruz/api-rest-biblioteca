const { Router} = require('express');
const router = Router();
const LIBROS = require('./../lista-libros');
const tablalibros = require('./../basedatos/libro-bd');


//get
router.get('/', async (peti, resp) => {
    const autorizacion = peti.headers.authorization;
    console.log(autorizacion);
    try {
        const listalibros = await tablalibros.consultar();
        resp.json(listalibros);
    } catch (e) {
        console.log('Error en el GET de libro');
        console.log(e);
        resp.status(500).send(e.message);
    }
});

//post
router.post('/', async (peti, resp) => {
    try {
        let libro = peti.body;
        console.log("Se va a guardar el libros");
        console.log(libro);
        await tablalibros.insertar(libro);
        resp.sendStatus(200);
    } catch (e) {
        console.log('Error en el POST libro');
        console.log(e);
        resp.status(500).send(e.message);
    }

});


//put
router.put('/', async (peti, resp) => {
    try {
        const libroRecibido = peti.body;
        console.log(libroRecibido);
        await tablalibros.update(libroRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.status(500).send(error.message);
    }

});

//delete
router.delete('/:id', async (peti, resp) => {
    try {
        const idRecibido = peti.params.id;
        console.log(idRecibido);
        await tablalibros.eliminar(idRecibido);
        resp.sendStatus(200);
    } catch (error) {
        resp.Status(500).send(error.message);
    }
});

module.exports = router;





