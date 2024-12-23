import express from 'express';
import cors from 'cors'; // Importamos el paquete cors
import productRoutes from './productRoutes.js';
import { connectToDatabase } from './connectionController.js';

const app = express();
const PORT = 3000;

// Configurar CORS para permitir solicitudes desde el puerto 5500 (Live Server)
app.use(cors({ origin: 'http://127.0.0.1:5500' }));

// Verificar la conexión a la base de datos al iniciar el servidor
connectToDatabase()
    .then(() => console.log('Conexión exitosa con la base de datos'))
    .catch((error) => console.error('Error al conectar con la base de datos:', error));

// Middleware para manejar JSON en las solicitudes
app.use(express.json());

// Rutas de la API
app.use('/api/products', productRoutes);

// Ruta básica para comprobar el servidor
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
