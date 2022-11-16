require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/',(peti, resp)=>{
    resp.send('Hola Mundo');
});

app.use('/libros', require('./rutas/libros'));
app.use("/autor",require('./rutas/ruta-autor'));
app.use("/sesion",require('./rutas/ruta-sesion'));

app.listen(3000,()=>{
    console.log('El servidor esta escuchando en el puerto 3000.');
});

