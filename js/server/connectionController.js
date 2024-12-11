// ESTE ARCHIVO MANEJA LA CONEXION CON BD

import mysql from 'mysql2/promise';

const connectToDatabase = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Antezana24/7',
        database: 'piscatio-bd',
    });

    console.log('Conexión exitosa a la base de datos');
    return connection;
};

export default connectToDatabase;