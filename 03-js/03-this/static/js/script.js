// Obtenemos todas las imágenes con la clase 'imagenEliminar'
var imagenes = document.querySelectorAll(".imagenEliminar");

let eliminarFotos = document.getElementById("eliminarFotos");

eliminarFotos.addEventListener("click", () => {
    imagenes.forEach(function (imagen) {
        imagen.remove();
    });
});