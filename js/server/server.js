// CONFIGURACION PRINCIPAL DEL SERVIDOR

import express from 'express';
import productRoutes from './productRoutes.js';
import connectToDatabase from './connectionController.js';

const app = express();
const PORT = 3000;

// Verificar la conexión a la base de datos al iniciar el servidor
connectToDatabase()
    .then(() => console.log('Conexión exitosa con la base de datos'))
    .catch((error) => console.error('Error al conectar con la base de datos:', error));

// Middleware
app.use(express.json());
app.use('/api/products', productRoutes);

// Ruta básica para comprobar el servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
