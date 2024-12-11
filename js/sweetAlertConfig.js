//Primero con el CD en JS, instalar SWAL, y luego importarlo:

// Funcion para mostrar exito
 const callSuccess = (text,target) => {
    Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text : text,
        target: target,
    })
};

// Funcion para mostrar un error
 const callError = (text,target) => {
    Swal.fire({
        icon: 'error',
        title : 'Ups, algo salio mal...',
        text: text,
        customClass: {
            popup: 'custom-swal'  // Aplicamos una clase personalizada al popup
        },
        target: target,
    })
}

// Funcion para preguntar algo
 const callQuery = (text,target) => {
    Swal.fire({
        icon : 'question',
        title: 'Atencion!',
        text: text,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        target: target,
    })
}

export { callSuccess, callError, callQuery };



