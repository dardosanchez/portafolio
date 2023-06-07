const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () =>{
        const ruta = imagen.querySelector('img').src;
        imagenModal.src = ruta;
    });
});

function enviarFormulario() {
    // Aquí puedes realizar cualquier acción adicional antes de mostrar el alert
    alert("Mensaje enviado correctamente!");
  }