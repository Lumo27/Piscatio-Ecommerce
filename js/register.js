const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
    let errors = [];

    if (username.value.length < 3) {
        errors.push("El nombre de usuario debe tener al menos 3 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errors.push("El correo electrónico no es válido.");
    }

    if (password.value.length < 5) {
        errors.push("La contraseña debe tener al menos 5 caracteres.");
    }

    if (password.value !== confirmPassword.value) {
        errors.push("Las contraseñas no coinciden.");
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});
