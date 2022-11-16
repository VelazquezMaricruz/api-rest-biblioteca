const mysql = require('mysql2/promise');

let conexion;

(async()=>{
    conexion = mysql.createPool({
        host:'localhost',
        user: 'root',
        password: 'Dell.2022',
        database: 'biblioteca',
        waitForConnections: true,
        connectionLimit: 1,
        queueLimit: 0
    });
})();

module.exports = conexion;