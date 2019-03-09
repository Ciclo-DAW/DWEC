//definición variables
var campo = "";
var palabras = new Array();

//funciones
function validarCampo(campo){
	var correcto = true;
	var caracteres = new Set (["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ñ"]);
	if (campo.length != 0 && campo != null ) {
			var i = 0;
			while (caracteres.has(campo.charAt(i))) i++;
			if ( i != campo.length ) { 
				escribirMensaje ("Palabra no válida. Introduzca caracteres alfabéticos A-Z,Ñ");
				correcto = false;
			}
	
	} else {
			escribirMensaje("El campo no puede estar vacío ");
			correcto = false;
	}
	return correcto;

}

function escribirMensaje (cadena) {
	document.getElementById("mensaje").innerHTML =  cadena;
}

function anadirPalabra(){
	campo = document.getElementById("texto").value.toUpperCase();
	if (validarCampo(campo)){
		palabras.push(campo);
		escribirMensaje("Elemento "+ campo + " añadido correctamente <br> Has introducido "+ palabras.length + " palabras ");
	}

}

function visualizarLista(){
	var elementos = "Has introducido los siguientes elementos: <br>";
	palabras.sort();
	palabras.forEach( function (el) {
		elementos += el + "<BR>";
	});
	escribirMensaje (elementos);
}