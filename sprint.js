

cotiza = document.getElementById("cotizar");
cotizar.addEventListener("click", 
() => {
    const brand = document.getElementById("marca").value;
    const year = document.getElementById("anio").value;
    let value;
    switch (year) {
        case "2022":
        case "2021":
        case "2020":
            value = 100000;
            break;
        case "2019":
        case "2018":
        case "2017":
            value = 50000;
            break;
        case "2016":
        case "2015":
        case "2014":
            value = 25000;
            break;
        default:
            value = "No se encontró valor para este año";
            break;
    }
    switch (brand) {
        case "Audi":
            value *= 1.5;
            break;
        case "Peugeot":
            value *= 1.7;
            break;
        case "Renault":
            value *= 0.8;
            break;
        case "Toyota":
            value *= 1.2;
            break;
        case "Honda":
            value *= 1.3;
            break;
        default:
            value = "No se encontró valor para esta marca";
            break;
    }
    const message = `El valor del auto marca ${brand} del año ${year} es de : $ ${value}`;
    ////document.getElementById("cotizacion").textContent = message;
    // Obtenemos la referencia del label donde vamos a imprimir el resultado
  /*var label = document.getElementById('total');*/
  // Accedemos a su text para plasmar lo que necesitamos.
  /*label.innerText = message;*/
  console.log(message);
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-info alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert(message)
  })
} 
  
    
});






