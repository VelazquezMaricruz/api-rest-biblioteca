const conexion = require ('./conexion');

async function insertar(libro){
    try{
        await conexion.execute('INSERT INTO libros (id, titulo, idautor, paginas) VALUE(?,?,?,?)',[libro.id, libro.titulo, libro.idautor, libro.paginas]);
    }catch(error){
        console.log('Error al insertar libros en el base de datos');
        console.log(error);
        throw error;
    }
}

async function consultar(){
    try{
       const [rows, fielde] =  await conexion.execute('SELECT *FROM vista_libro');
       return rows;
    }catch(error){
        console.log('Error al consultar libros de la base de datos ');
        console.log(error);
        throw error;
    }
}

async function update(libro) {
    try {
        await conexion.execute('UPDATE libros SET titulo = ?, idautor = ?, paginas= ? WHERE id = ?', [libro.titulo, libro.idautor, libro.paginas, libro.id]);
    } catch (error) {
        console.log('Error al editar libros');
        console.log(error);
        throw error;
    }
}

async function eliminar(id) {
    try {
        await conexion.execute('DELETE FROM libros WHERE id = ? ', [id]);
    } catch (error) {
        console.log('Error al eliminar libros');
        console.log(error);
        throw error;
    }
}

module.exports = { insertar, consultar, update, eliminar };

