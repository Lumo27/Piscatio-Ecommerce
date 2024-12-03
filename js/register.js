import {callError, callSuccess} from '../js/sweetAlertConfig.js';

// Se lee y se guarda el formulario del registro, y se guarda lo que pasa en E (event) y luego se previene el envio vacio de lo que seria el formulario.
document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault(); // Evitar que se envíe el formulario

    const username = document.getElementById('nombre-registro').value;
    const surname = document.getElementById("apellido-registro").value;
    const email = document.getElementById("email-registro").value;
    const password = document.getElementById("contrasenia-registro").value;
    const date = document.getElementById('fecha-nacimiento').value;


    // Regex para validación
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const target = document.getElementById("modalRegistro");
    // Validar email
    if (!emailRegex.test(email)) {
        callError('El email ingresado no es valido, por favor, revisa tu email.',target);
        return; // Detener la ejecución si el email no es válido
    }

    // Validar contraseña
    if (!passwordRegex.test(password)) {
        callError("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.",target);
        return; // Detener la ejecución si la contraseña no es válida
    }

    // Si todo es válido, puedes proceder con el envío de datos o el procesamiento
    callSuccess("Registro exitoso.",target);
    //el final pronto llegara
});

const passwordInput = document.getElementById("contrasenia-registro");
const togglePasswordButton = document.createElement("button");
togglePasswordButton.textContent = "👁️";
togglePasswordButton.type = "button";
togglePasswordButton.name="eye";
togglePasswordButton.id="eyebutton";
togglePasswordButton.classList.add("toggle-password");

// Inserta el botón al lado del input
passwordInput.parentNode.insertBefore(togglePasswordButton, passwordInput.nextSibling);

// Lógica para alternar el tipo del input
togglePasswordButton.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  togglePasswordButton.textContent = type === "password" ? "👁️" : "🙈";
});