import mysql2 from 'mysql2/promise';

let connection; // Variable para la conexión

export const connectToDatabase = async () => {
    try {
        connection = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Antezana24/7',
            database: 'piscatio-bd',
        });
        console.log('Conexión a la base de datos establecida');
        return connection; // Devolvemos la conexión
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw error; // Si hay error, lanzamos el error para que sea manejado más arriba
    }
};
