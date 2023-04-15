/*let name = prompt ("Ingrese su nombre y apellido");
let edad = prompt ("Ingrese su edad");
let email = prompt ("Ingrese su email");
alert ("Bienvenido/a " + name + " es un placer para Lyon Cars contar con su prsenciaesencia" )*/

function Auto(marca , anio) 
{
    this.marca = marca;
    this.anio = anio; 
}
//cotizar
Auto.prototype.cotizarAuto = function () {
        let cantidad;
        const base = 200000;
    
        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
                case '4':
                cantidad = base * 1.35;
                break;
        }
    
        //leer el año
        const diferencia = new Date().getFullYear() - this.anio;
        //cada año de diferencia resta 10 %
        cantidad -= ((diferencia*10) * cantidad ) / 100;
      console.log(cantidad)
      return cantidad;
    }
    
    //parte visual HTML
    function Interfaz(){}
    
    //Mensaje en HTml
    Interfaz.prototype.mostarMensaje = function(mensaje, tipo) {
      const div = document.createElement("div");
    
      if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
      } else {
        div.classList.add("mensaje", "correcto");
      }
    
      div.innerHTML = `${mensaje}`;
      formulario.insertBefore(div, document.querySelector(".form-group"));
    
      setTimeout(function() {
          document.querySelector('.mensaje').remove();
      }, 2000);
    };
    
    //imprime resultado de cotización
    Interfaz.prototype.mostrarResultado = function (auto, total) {
        const resultado = document.getElementById('resultado');
        let marca;
    
        switch (auto.marca) {
            case '1':
                marca = 'PEUGEOT';            
                break;
            case '2':
                marca = 'RENAULT';
                break;
            case '3':
                marca = 'TOYOTA';
                break; 
            case '4':
                marca = 'AUDI';
                break;   
        }
    
        //crear un div
        const div = document.createElement('div');
        //insertar la información
        div.innerHTML = `
           <p class="header">Tu resumen:</p>
           <p>Marca: ${marca}</p>
           <p> Año: ${auto.anio}</p>
           <p>Total: $ ${total}</p>   
        `;
        
    }
    
    //capturar datops del formulario
    const formulario = document.getElementById('cotizar');
    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        //leer la marca seleccionada
        const marca = document.getElementById('marca');
        const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
        //leer año seleccionado
        const anio = document.getElementById("anio");
        const anioSeleccionado = anio.options[anio.selectedIndex].value; 
    
        //crear instancia de interfaz
        const interfaz = new Interfaz();
        //revisamos que los campos no estén vacíos
    
        if (marcaSeleccionada === '' || anioSeleccionado === '') {
            //interfaz imprimiendo error
            interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
        } else {
            //limpiar resultados anteriores
            const resultados = document.querySelector('#resultado div');
            if (resultados != null) {
                resultados.remove();
            }
    
            const auto = new Auto(marcaSeleccionada, anioSeleccionado);
            //Cotizar el seguro
            const cantidad = auto.cotizarAuto(auto);
            //mostrar resultado
      interfaz.mostrarResultado(auto, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');
    
        }
    
    });