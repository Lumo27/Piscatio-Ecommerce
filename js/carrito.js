document.addEventListener("DOMContentLoaded", () => {
    const carrito = [];
    const productos = [
      { id: 1, nombre: "Producto 1", precio: 100 },
      { id: 2, nombre: "Producto 2", precio: 200 },
      { id: 3, nombre: "Producto 3", precio: 300 },
    ];
  
    const carritoTabla = document.getElementById("carrito-tabla");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
    const finalizarCompraBtn = document.getElementById("finalizar-compra");
    const volverInicioBtn = document.getElementById("volver-inicio");
    const totalCarrito = document.getElementById("total-carrito");
    
    const carritoItems = JSON.parse(localStorage.getItem('carrito')) || [];
  
    /*const actualizarCarrito = () => {
      carritoTabla.innerHTML = "";
      let total = 0;
  

      carrito.forEach((item) => {
        const fila = document.createElement("tr");
  
        fila.innerHTML = `
          <td>${item.nombre}</td>
          <td>${item.precio}</td>
          <td>
            <button class="btn btn-danger btn-sm eliminar" data-id="${item.id}">Eliminar</button>
          </td>
        `;
  
        carritoTabla.appendChild(fila);
        total += item.precio;
      });
  
      totalCarrito.textContent = `Total: $${total}`;
    };*/
  
    const actualizarCarrito = () => {
      carritoTabla.innerHTML = ""; // Limpia la tabla
      let total = 0;
  
      carritoItems.forEach((item) => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
              <td>${item.nombre}</td>
              <td>$${item.precio}</td>
              <td>
                  <button class="btn btn-danger btn-sm eliminar" data-id="${item.id}">Eliminar</button>
              </td>
          `;
          carritoTabla.appendChild(fila);
          total += item.precio;
      });
  
      totalPedido.textContent = `$${total.toFixed(2)}`;
  };
  const vaciarCarrito = () => {
    localStorage.removeItem('carrito');
    carritoItems.length = 0; // Vaciar el array
    actualizarCarrito();
  };
  





    const agregarAlCarrito = (idProducto) => {
      const producto = productos.find((p) => p.id === idProducto);
      if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guarda el carrito en localStorage
        actualizarCarrito();
      }
    };
  
    const eliminarDelCarrito = (idProducto) => {
      const index = carritoItems.findIndex(item => item.id === idProducto);
      if (index !== -1) {
          carritoItems.splice(index, 1);
          localStorage.setItem('carrito', JSON.stringify(carritoItems)); // Actualiza el localStorage
          actualizarCarrito();
      }
    };
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);

    /*const eliminarDelCarrito = (idProducto) => {
      const index = carrito.findIndex((item) => item.id === idProducto);
      if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
      }
    };*/
  
    vaciarCarritoBtn.addEventListener("click", () => {
      carrito.length = 0;
      actualizarCarrito();
    });
  
    finalizarCompraBtn.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("El carrito está vacío");
      } else {
        alert("¡Gracias por tu compra!");
        carrito.length = 0;
        actualizarCarrito();
      }
    });
  
    volverInicioBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // Cambia "index.html" por la URL de tu página de inicio.
    });
    
    carritoTabla.addEventListener("click", (e) => {
      if (e.target.classList.contains("eliminar")) {
        const idProducto = parseInt(e.target.dataset.id, 10);
        eliminarDelCarrito(idProducto);
      }
    });
    actualizarCarrito();
    // Ejemplo de inicialización (puedes borrar esto si no lo necesitas)
    document.getElementById("agregar-producto-1").addEventListener("click", () => agregarAlCarrito(1));
    document.getElementById("agregar-producto-2").addEventListener("click", () => agregarAlCarrito(2));
    document.getElementById("agregar-producto-3").addEventListener("click", () => agregarAlCarrito(3));
  });
  