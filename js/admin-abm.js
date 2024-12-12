import {callError, callSuccess} from '../js/sweetAlertConfig.js';
document.addEventListener("DOMContentLoaded", function () {
    const addProductForm = document.getElementById('addProductForm');
    const filterButton = document.getElementById('filterButton');
    const productTableBody = document.getElementById('productTableBody');

    const apiBaseUrl = 'http://localhost:3000/api/products';

    // Función para obtener y mostrar los productos
    async function loadProducts(category = '') {
        const response = await fetch(`${apiBaseUrl}/productos?category=${category}`);
        const products = await response.json();

        productTableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Eliminar</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    }

    // Función para agregar un producto
    addProductForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const newProduct = {
            name: document.getElementById('productName').value,
            description: document.getElementById('productDescription').value,
            price: document.getElementById('productPrice').value,
            stock: document.getElementById('productStock').value,
            category_id: document.getElementById('productCategory').value,
            image_url: '',  // Aquí puedes agregar un campo para la URL de la imagen
        };
        
        const response = await fetch(`${apiBaseUrl}/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });

        const result = await response.json();
        if (response.ok) {
            callSuccess(result.message, '#addProductModal').then(() => {
                $('#addProductModal').modal('hide');  // Cierra el modal después de agregar
                loadProducts();  // Recarga los productos
            });
        } else {
            callError(result.message, '#addProductModal');
        }
    });

    // Función para eliminar un producto
    async function deleteProduct(id) {
        const response = await fetch(`${apiBaseUrl}/delete/${id}`, {
            method: 'DELETE',
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            loadProducts();  // Recarga los productos
        } else {
            alert(result.message);
        }
    }

    // Cargar productos al inicio
    loadProducts();

    // Filtrar productos
    filterButton.addEventListener('click', function () {
        const category = document.getElementById('filterCategory').value;
        loadProducts(category);  // Recarga los productos con el filtro seleccionado
    });
});
