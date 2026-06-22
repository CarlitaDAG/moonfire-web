
document.body.style.opacity = "0";

window.onload = function() {

    document.body.style.transition = "2s";

    document.body.style.opacity = "1";

};
const boton = document.getElementById("explorar");

boton.addEventListener("click", function() {

    alert("Bienvenido a MoonFire 🌙🐉");

});
setInterval(() => {

    const titulo = document.querySelector(".titulo-principal");

    titulo.style.opacity = "0.7";

    setTimeout(() => {

        titulo.style.opacity = "1";

    }, 500);

}, 1500);
window.addEventListener("scroll", function() {

    console.log("Explorando MoonFire...");

});
function abrirReino(
titulo,
escudo,
arbol,
mapa,
dragon
){

    document.getElementById("tituloReino").innerText = titulo;

    document.getElementById("escudoReino").src = escudo;

    document.getElementById("arbolReino").src = arbol;

    document.getElementById("mapaReino").src = mapa;

    document.getElementById("dragonReino").innerText = dragon;

    document.getElementById("ventanaReino").style.display = "block";

}
function cerrarModal(){

    document.getElementById("ventanaReino").style.display = "none";

}
function abrirLibroAmatista(){

    document.getElementById("libroAmatista").style.display = "block";

}

function cerrarLibro(){

    document.getElementById("libroAmatista").style.display = "none";

}
function abrirGuardian(
nombre,
titulo,
descripcion,
imagen
){

    document.getElementById("nombreGuardian").innerText = nombre;

    document.getElementById("tituloGuardian").innerText = titulo;

    document.getElementById("descripcionGuardian").innerText = descripcion;

    document.getElementById("imagenGuardian").src = imagen;

    document.getElementById("modalGuardian").style.display = "block";

}

function cerrarGuardian(){

    document.getElementById("modalGuardian").style.display = "none";

}
alert("MoonFire JS cargado correctamente");
