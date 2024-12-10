// ACA SE DEFINEN LAS RUTAS QUE USA EL SERVER PARA MANEJAR PRODUCTOS

import express from 'express';
import { addProduct } from './ProductController.js';

const router = express.Router();

// Ruta para agregar un producto
router.post('/add', addProduct); // Usa addProduct directamente aquí

export default router;