window.onload = function init() {
    crearTablero();
    var paleta = document.querySelector("#paleta");
    var paletaColores = paleta.querySelectorAll("td");
    var tablero = document.querySelector("#tablero");
    var tableroCeldas = tablero.querySelectorAll("td");

    colorActivo = paletaColores[0].classList.item(0);

    paletaColores.forEach(function(celda) {
        celda.addEventListener("click", obtenerColor);
    });

    tableroCeldas.forEach(function(celda) {
        celda.addEventListener("click", activarPincel);
    });

    tableroCeldas.forEach(function(celda) {
        celda.addEventListener("mouseover", pintar);
    });
};

var colorActivo = "";
var pintarActivado = false;

function crearTablero() {
    var tabla = document.createElement("table");
    var captionTabla = document.createElement("caption");
    var tituloTabla = document.createTextNode("Haga click en cualquier celda para activar o desactivar el pincel");

    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tablero");
    tabla.setAttribute("class", "tablerodibujo");
    captionTabla.appendChild(tituloTabla);
    tabla.appendChild(captionTabla);

    for (var i = 1; i <= 30; i++) {
        var fila = document.createElement("tr");
        for (var j = 1; j <= 30; j++) {
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    document.querySelector("#zonadibujo").appendChild(tabla);
}

function obtenerColor() {
    console.log(this);
    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
        this.parentNode.querySelectorAll("td").forEach(function(el) {
            el.classList.remove("seleccionado");
        });
    }

    colorActivo = this.classList[0];
    this.classList.add("seleccionado");
}

function activarPincel() {
    if (pintarActivado) {
        document.querySelector("#pincel").innerHTML = "PINCEL DESACTIVADO...";
        pintarActivado = false;
    } else {
        document.querySelector("#pincel").innerHTML = "PINCEL ACTIVADO...";
        pintarActivado = true;
        this.classList.add(colorActivo);
    }
}

function pintar() {
    if (pintarActivado) {
        for (var i = 0; i < this.classList.length; i++) {
            this.classList.remove(this.classList[i]);
        }
        this.classList.add(colorActivo);
    }
}
