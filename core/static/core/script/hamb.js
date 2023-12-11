const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.classList.add("invisible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    abrir.classList.remove("invisible");
})

//Validación formulario//

function validarFormulario(){
    let nombre = document.getElementById("name").value.trim();

    if(nombre === ""){
        alert("Por favor complete todos los espacios requeridos")
        return false
    }
}
function validarFormulario(){
    let email = document.getElementById("email").value.trim();

    if(email === ""){
        alert("Por favor complete todos los espacios requeridos")
        return false
    }
}
function validarFormulario(){
    let mensaje = document.getElementById("mensaje").value.trim();

    if(mensaje === ""){
        alert("Por favor complete todos los espacios requeridos")
        return false
    }
}
