const PARAR_ANIMACION = document.getElementById("parar-animacion");
const TODAS_LAS_IMAGENES = document.querySelectorAll(".img-de-prueba-fps");

let animacionesPausadas = false;

PARAR_ANIMACION.addEventListener("click", () => {
  // Si estan quietas se mueven
  if (animacionesPausadas) {
    TODAS_LAS_IMAGENES.forEach((imagen) => {
      imagen.style.animationPlayState = "running";
    });
    animacionesPausadas = false;
  } else {
    // en caso contrario se pausan
    TODAS_LAS_IMAGENES.forEach((imagen) => {
      imagen.style.animationPlayState = "paused";
    });
    animacionesPausadas = true;
  }
});
