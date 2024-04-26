// Obtener el modal
var modal = document.getElementById("myModal");
var royalEnfield = document.getElementById("royalEnfield");

// Obtener la imagen y su contenido del modal
var modalImg = document.getElementById("imagenModalContenido");
var modalImg = document.getElementById("imagenModalContenidor");

// Función para abrir el modal y establecer la imagen
function abrirModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Cierra el modal haciendo clic en cualquier parte fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
modal.classList.add("fade-in");

