//VENTANA MODAL

//RENOMBRO LAS CONSTANSTES
const btnAbrirModal = 
    document.querySelector ("#btn-abrir-modal");
const btnCerrarModal =
    document.querySelector ("#btn-cerrar-modal");
const modal =
    document.querySelector ("#modal");


// PARA ABRIR EL MODAL
btnAbrirModal.addEventListener("click",()=>{
    modal.showModal (); //si le pongo nomas show, no se muestra como por encima
});


// PARA CERRAR EL MODAL
btnCerrarModal.addEventListener("click",()=>{
    modal.close () 
})


// AGREGO CODIGO: RENOMBRO LAS CONSTANTES
const modalRegistro = 
    document.querySelector("#modalRegistro");
const btnAccederRegistro = 
    document.querySelector("#btn-cambiar-formulario-registro");
const btnAccederIniciarSesion = 
    document.querySelector("#btn-cambiar-formulario-iniciar-sesion");
const formularioIniciarSesion = 
    document.getElementById("formulario-iniciar-sesion");
const formularioRegistrarse = 
    document.getElementById("formulario-registrarse");


// PARA HACER QUE SI ESTOY VIENDO UN MODAL, NO SE VEA EL OTRO. Y VICEVERSA
    function mostrarFormulario(formulario) {
    if (formulario === "iniciarSesion") {
        formularioIniciarSesion.style.display = "block";
        formularioRegistrarse.style.display = "none";
    } else if (formulario === "registrarse") {
        formularioIniciarSesion.style.display = "none";
        formularioRegistrarse.style.display = "block";
    }
}
    
//HACER QUE CUANDO LE DE CLICK A "REGISTRARSE" ME CAMBIE DE MODAL
    document.getElementById("btn-cambiar-formulario-registro").addEventListener("click", () => {
        modal.close(); // Cerrar el modal actual
        modalRegistro.showModal(); // Abrir el nuevo modal (reemplazo)
    });
    
//HACER QUE CUANDO LE DE CLICK A "ACCEDER" ME CAMBIE DE MODAL
document.getElementById("btn-cambiar-formulario-iniciar-sesion").addEventListener("click", () => {
    modalRegistro.close(); 
    modal.showModal(); 
});
    
const btnCerrarModalRegistro =
    document.querySelector ("#btn-cerrar-modal-registro");

// PARA CERRAR EL MODAL
btnCerrarModalRegistro.addEventListener("click",()=>{
    modalRegistro.close () 
})


