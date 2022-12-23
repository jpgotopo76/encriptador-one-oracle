const nuevoArreglo = [];
function changeLetter(caracter) {
  if (caracter === "a") {
    caracter = "ai";
  } else if (caracter === "e") {
    caracter = "enter";
  } else if (caracter === "i") {
    caracter = "imes";
  } else if (caracter === "o") {
    caracter = "ober";
  } else if (caracter === "u") {
    caracter = "ufat";
  }
  nuevoArreglo.push(caracter);
  str = nuevoArreglo.join("");
}

function mostrarLetras(texto) {
  nuevoArreglo.splice(0, nuevoArreglo.length);
  console.log(nuevoArreglo);
  const textEnc = document.getElementById("enc");
  var contenido = "";
  var tiempo = 0;

  for (var i = 0; i < texto.length; i++) {
    tiempo += 50; // Incrementa el tiempo en 50 milisegundos por cada letra
    (function (i) {
      setTimeout(function () {
        contenido += texto[i];

        textEnc.innerHTML = contenido;
        return contenido;
      }, tiempo);
    })(i);
  }
  var desencrip = document.getElementById("enc");

  var prog = document.getElementById("encrypt");
  hacerZoom(prog, 0, 100, tiempo);
}

function encript() {
  // Obtener el elemento input
  const input = document.querySelector("input");

  // Leer el valor del input
  const valor = input.value;
  const caracteres = valor.split("");
  // Usar forEach para iterar sobre el array
  caracteres.forEach(function (char) {
    changeLetter(char);
  });

  mostrarLetras(str);
}

function desencript() {
  const texto = document.querySelector("input");
  const valor = texto.value;
  const caracteres = valor
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  mostrarLetras(caracteres);
}

function verificarInput() {
  var input = document.querySelector("input");

  var div = document.getElementById("msj");

  if (input.value !== "") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

document.querySelector("input").addEventListener("input", verificarInput);

function hacerZoom(imagen, inicio, fin, duracion) {
  var tiempoInicio = null;

  function paso(timestamp) {
    if (!tiempoInicio) tiempoInicio = timestamp;
    var progreso = timestamp - tiempoInicio;
    var tamaño = inicio + (fin - inicio) * easeOutQuad(progreso / duracion);
    imagen.style.width = tamaño + "%";
    if (progreso < duracion) {
      requestAnimationFrame(paso);
    }
  }

  function easeOutQuad(t) {
    return t * (2 - t);
  }

  requestAnimationFrame(paso);
}

var miImagen = document.getElementById("lg");
hacerZoom(miImagen, 0, 100, 500);

function copiarTextoDiv() {
  var div = document.getElementById("enc");
  var seleccion = document.getSelection();
  seleccion.selectAllChildren(div);
  document.execCommand("copy");
}
