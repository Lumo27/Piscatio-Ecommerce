const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById("form")
form.addEventListener("submit",e=>{
    if(username.value.length <3){
        e.preventDefault()
        alert("Usuario Incorreto ")
    }
    if(password.value.length<4){
        e.preventDefault()
        alert("Contraseña tiene que tener 5 caracteres")
    }
});