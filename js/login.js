
import {callError,callSuccess,callQuery} from './sweetAlertConfig.js';
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe el formulario de forma predeterminada.

    // Obtener los valores después de que el formulario se envíe
    const username = document.getElementById("username-login").value;
    const password = document.getElementById("password-login").value;
    const target = document.getElementById("modal");
    // Realizar el fetch
    fetch("../js/data/users.json")
    .then((response) => {
        // Manejo del primer error: que no pueda vincular el json
        if (!response.ok) {
            throw new Error("No fue posible cargar los datos de usuarios (Error con archivo JSON)");
        }
        return response.json();
    })
    .then((users) => {
        // Buscar el usuario dentro del arreglo
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
            callSuccess(`Bienvenido ${username}`,target);
        } else {
            callError("Usuario o contraseña incorrecta.",target);
        }
    })
    .catch((error) => {
        console.error("Error al realizar el fetch:", error);
        alert("Hubo un error al procesar tu solicitud.");
    });
});
