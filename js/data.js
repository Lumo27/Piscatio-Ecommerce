const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción breve del producto 1.",
    imagen: "assets/imagenes/producto-ejemplo.jpeg",
    precio: "$20",
    enlace: "#"
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción breve del producto 2.",
    imagen: "assets/imagenes/producto-ejemplo.jpeg",
    precio: "$25",
    enlace: "#"
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "Descripción breve del producto 3.",
    imagen: "assets/imagenes/producto-ejemplo.jpeg",
    precio: "$30",
    enlace: "#"
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "Descripcion breve del producto 4",
    imagen :"assets/imagenes/lienzo-numero1.jpeg",
    precio:"35",
    enlace:"#"
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "Descripcion breve del producto 5",
    imagen :"assets/imagenes/lienzo-numero1.jpeg",
    precio:"35",
    enlace:"#"
  },
  {
    id: 6,
    nombre: "Producto 6",
    descripcion: "Descripcion breve del producto 6",
    imagen :"assets/imagenes/lienzo-numero1.jpeg",
    precio:"35",
    enlace:"#"
  },
  {
    id: 7,
    nombre: "Producto 7",
    descripcion: "Descripcion breve del producto 7",
    imagen :"assets/imagenes/lienzo-numero2.jpeg",
    precio:"35",
    enlace:"#"
  },
  {
    id: 8,
    nombre: "Producto 8",
    descripcion: "Descripcion breve del producto 8",
    imagen :"assets/imagenes/lienzo-numero2.jpeg",
    precio:"35",
    enlace:"#"
  },
  {
    id: 9,
    nombre: "Producto 9",
    descripcion: "Descripcion breve del producto 9",
    imagen :"assets/imagenes/lienzo-numero2.jpeg",
    precio:"35",
    enlace:"#"
  },
  // Agrega más productos según sea necesario
];

document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos el contenedor donde se llenarán los productos
  const productosGrilla = document.getElementById("productos-grilla");
  
  // Iteramos sobre los productos
  productos.forEach(producto => {
    // Creamos el HTML de la tarjeta del producto
    const productoCard = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top alt="${producto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text"><strong>${producto.precio}</strong></p>
            <a href="${producto.enlace}" class="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    `;

    // Insertamos el HTML generado en el contenedor
    productosGrilla.innerHTML += productoCard;
  });
});
const categorias = [
  { nombre: "Pinceles", imagen: "assets/imagenes/categorias/Rectangle-9.png" },
  { nombre: "Obras de arte", imagen: "assets/imagenes/categorias/Rectangle-9.png" },
  { nombre: "Giftcard", imagen: "assets/imagenes/categorias/Rectangle-9.png" },
  { nombre: "Inspiracion", imagen: "assets/imagenes/categorias/Rectangle-9.png" }
];

const categoriasDestacadas = document.getElementById("categorias-destacadas");

if (categoriasDestacadas) {
  const contenedor = document.createElement('div');
  contenedor.classList.add('container-fluid');  // Usamos container-fluid aquí para que ocupe todo el ancho

  const titulo = document.createElement('h2');
  titulo.classList.add('text-center', 'mb-4');
  titulo.style.setProperty('color', 'black', 'important');
  titulo.textContent = 'Categorías destacadas';
  contenedor.appendChild(titulo);

  const row = document.createElement('div');
  row.classList.add('row', 'row-cols-2', 'g-4');
  contenedor.appendChild(row);

  categorias.forEach(categoria => {
    const col = document.createElement('div');
    col.classList.add('col-md-3');
    
    const card = document.createElement('div');
    card.classList.add('card', 'h-100', 'text-center');

    const img = document.createElement('img');
    img.src = categoria.imagen;  // Cambié categoria.img por categoria.imagen
    img.classList.add('card-img-top');
    img.alt = categoria.nombre;
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = categoria.nombre;
    cardBody.appendChild(cardTitle);

    const boton = document.createElement('button');
    boton.classList.add('btn', 'btn-primary', 'mt-3');
    boton.textContent = 'Ver más';
    boton.style.padding = "0";
    card.appendChild(boton);

    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  // Estilos de fondo aplicados al contenedor
  contenedor.style.backgroundColor = "#1A2A4B";
  contenedor.style.backgroundSize = "cover";
  contenedor.style.backgroundPosition = "center";
  contenedor.style.backgroundRepeat = "no-repeat";
  contenedor.style.padding = "2rem";
  contenedor.style.color = "#ffffff";

  categoriasDestacadas.appendChild(contenedor);
}