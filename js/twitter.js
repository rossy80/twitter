var contenedor = 0;
var boton = document.getElementById("boton");
boton.addEventListener('click',agregarTwitt);

function agregarTwitt(){
  var contenedorTwitt = document.getElementById("contenedorTwitt").value;
  var twitero = document.getElementById("twitero").value;
  var guardaTwitt = document.getElementById("guardaTwitt");
  var twittGeneral = document.getElementById("twittGeneral");
  guardaTwitt.innerHTML += contenedorTwitt +"<br>"+ twitero +"<br>"
  var linea = document.createElement("hr");
  guardaTwitt.appendChild(linea);
  twittGeneral.appendChild(twittGeneral);
}

function contadorTwitt(){
  var contadorPalabrasEscritas = document.getElementById("contadorPalabrasEscritas");
  var contenedorTexto = document.getElementById("contenedorTwitt");
  contenedor++;
  if( contenedor >= 140){
    return false;
  }
}

contadorPalabrasEscritas.innerHTML = "Letras utilizadas " + contenedor + " de 140 letras";
