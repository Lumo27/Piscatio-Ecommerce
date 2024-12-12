import { connectToDatabase } from './connectionController.js';

let connection;

// Inicializar la conexión a la base de datos
const initializeDatabaseConnection = async () => {
    try {
        connection = await connectToDatabase();
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};

// Función para agregar un producto
export const addProduct = async (req, res) => {
    try {
        const product = req.body;
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

// Función para editar un producto
export const editProduct = async (req, res) => {
    try {
        const { id, name, description, price, stock, category_id, image_url } = req.body;
        const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, image_url = ? WHERE id = ?';

        const [results] = await connection.execute(query, [
            name,
            description,
            price,
            stock,
            category_id,
            image_url,
            id
        ]);

        res.status(200).json({ message: 'Producto actualizado exitosamente', data: results });
    } catch (err) {
        console.error('Error al editar el producto:', err);
        res.status(500).json({ message: 'Error al editar el producto', error: err });
    }
};

// Función para eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'DELETE FROM products WHERE id = ?';

        const [results] = await connection.execute(query, [id]);

        res.status(200).json({ message: 'Producto eliminado exitosamente', data: results });
    } catch (err) {
        console.error('Error al eliminar el producto:', err);
        res.status(500).json({ message: 'Error al eliminar el producto', error: err });
    }
};

// Función para obtener productos con filtro opcional de categoría
export const getProducts = async (req, res) => {
    try {
        const categoryFilter = req.query.category || '';
        let query = 'SELECT * FROM products';

        if (categoryFilter) {
            query += ` WHERE category_id = ${connection.escape(categoryFilter)}`;
        }

        const [products] = await connection.execute(query);
        res.status(200).json(products);
    } catch (err) {
        console.error('Error al obtener los productos:', err);
        res.status(500).json({ message: 'Error al obtener los productos', error: err.message });
    }
};

// Inicializar la conexión a la base de datos
initializeDatabaseConnection();
