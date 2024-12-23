import express from 'express';
import { addProduct, getProducts, editProduct, deleteProduct } from './productController.js';

const router = express.Router();

// Ruta para agregar un producto
router.post('/add', addProduct);

// Ruta para obtener los productos con filtrado de categoría
router.get('/productos', getProducts);

// Ruta para editar un producto
router.put('/edit', editProduct);

// Ruta para eliminar un producto
router.delete('/delete/:id', deleteProduct);

export default router;
