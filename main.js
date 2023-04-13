document.addEventListener("DOMContentLoaded",() =>{
    var siguiente = document.getElementById("siguiente");
    siguiente.addEventListener("click", () => {
      var contenedorEjercicio = document.getElementById("contenedorEjercicio");
      
    var elementoActivo = contenedorEjercicio.querySelector(".activo");
    var idElementoActivo = elementoActivo.id;
    var descomposicionID = idElementoActivo.split("-");
    var numeroElementoSiguiente = Number(descomposicionID[1]) + 1;
    var elementoSiguiente = contenedorEjercicio.querySelector("#elemento-" + numeroElementoSiguiente);
    console.log(elementoSiguiente);
    if (elementoSiguiente === null) {
      elementoSiguiente = contenedorEjercicio.querySelector(".desactivo:first-of-type");
                                    }

      elementoActivo.classList.remove("activo");
      elementoActivo.classList.add("desactivo");

      elementoSiguiente.classList.add("activo");
      elementoSiguiente.classList.remove("desactivo");
    });

       var anterior = document.getElementById("anterior");
      anterior.addEventListener("click", () => {
      var contenedorEjercicio = document.getElementById("contenedorEjercicio");
      var elementoActivo = contenedorEjercicio.querySelector(".activo");
      var idElementoActivo = elementoActivo.id;
      var descomposicionID = idElementoActivo.split("-");
      var numeroElementoAnterior = Number(descomposicionID[1]) - 1;
      var elementoAnterior = contenedorEjercicio.querySelector("#elemento-" + numeroElementoAnterior);
      console.log(elementoAnterior);
      if (elementoAnterior === null) {
      elementoAnterior = contenedorEjercicio.querySelector(".desactivo:last-of-type");
      }

      elementoActivo.classList.add("desactivo");
      elementoActivo.classList.remove("activo");
    

    elementoAnterior.classList.remove("desactivo");
    elementoAnterior.classList.add("activo");
    
  });
});