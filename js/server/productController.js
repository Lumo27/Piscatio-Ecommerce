import connectToDatabase from '../server/connectionController.js';

// Crear la conexión una sola vez cuando el servidor se inicia
let connection;

const initializeDatabaseConnection = async () => {
    try {
        connection = await connectToDatabase(); // Se conecta a la base de datos
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};

// Función para agregar un producto
export const addProduct = async (req, res) => {
    try {
        const product = req.body; // Captura los datos del producto enviados en el cuerpo de la solicitud
        
        const query = 'INSERT INTO products (name, description, price, stock, category_id, image_url) VALUES (?, ?, ?, ?, ?, ?)'; 
        const [results] = await connection.execute(query, [
            product.name,
            product.description,
            product.price,
            product.stock,
            product.category_id,
            product.image_url
        ]);

        res.status(200).json({ message: 'Producto añadido exitosamente', data: results });
    } catch (err) {
        console.error('Error al añadir el producto:', err);
        res.status(500).json({ message: 'Error al añadir el producto', error: err });
    }
};

// Llamada para inicializar la conexión cuando se inicia el servidor
initializeDatabaseConnection();

// Exportar la conexión para poder usarla en otros archivos si es necesario
export { connection };

