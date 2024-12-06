const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');

// Actualizar el valor del rango de precios
priceRange.addEventListener('input', () => {
    priceValue.textContent = `$${priceRange.value}`;
});
Caracterís