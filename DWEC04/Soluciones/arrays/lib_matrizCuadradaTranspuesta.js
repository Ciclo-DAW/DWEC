//variables
var numeros = new Array(),n;
var transpuesta = new Array();

//programa principal
function main () {
	crearArray();
	document.getElementById("mensaje").innerHTML += mostrarArray(numeros);
	document.getElementById("mensaje").innerHTML += "numero de elementos "+ contarElementos() + "<br>";
	var resultado = realizarSuma();
	document.getElementById("mensaje").innerHTML += "La suma de los elementos de las columnas pares es:  "+ resultado[0] + "<br>";
	document.getElementById("mensaje").innerHTML += "La suma de los elementos de las columnas impares es:  "+ resultado[1]+ "<br>";
	document.getElementById("mensaje").innerHTML += "La suma de los elementos de la diagonal es:  "+ resultado[2]+ "<br>";
	document.getElementById("mensaje").innerHTML += "La matriz transpuesta correspondiente es: <br>";
	crearMatrizTranspuesta();
	document.getElementById("mensaje").innerHTML += mostrarArray(transpuesta);

}

//funciones
function crearArray (){
	n = Number(prompt ("Introduce un valor: "));
	if (!isNaN(n)){
		for(var i = 0; i < n; i++ ){
			numeros[i] = new Array();
			for(var j = 0; j < n; j++ ){
				numeros[i].push(parseInt(Math.floor(Math.random() * 10) + 1));
			}
		}

	}
}

function mostrarArray(vector){
	var cadenaNumeros = "";
	vector.forEach(
		function (elemento,i) {
			cadenaNumeros += elemento + "<br>" ;
		}
	
	);
	return cadenaNumeros;

}
function contarElementos(){
	var numeroElementos = 0;
	numeros.forEach( //cada elemento de numeros es un array. con elemento.length recuperamos el número de elementos de cada uno de los arrays que conforman "numeros"
		function (elemento,i) {
			numeroElementos += elemento.length
		}
	
	);
	return numeroElementos;
}

function realizarSuma () {
	var sumaPares = 0, sumaImpares = 0, sumaDiagonal = 0;
	for (var i =0; i< numeros.length; i++){
		console.log(numeros[i]);
		numeros[i].forEach(sumar);
	}
	
	function sumar (elemento,indicej) { //suma columnas pares, impares y diagonal
	//console.log("i: "+ indicej+ "elemento: "+elemento);
		if  ((indicej % 2) == 0 ) sumaPares += elemento;
		else sumaImpares += elemento;
		if (indicej == i )  sumaDiagonal += elemento; 
					
	}
	
	return (new Array (sumaPares,sumaImpares,sumaDiagonal)); //devuelve un array con los resultados
		
}

function crearMatrizTranspuesta(){
	transpuesta = new Array();
	for (var j = 0; j< n; j++){
		transpuesta[j] = new Array();
		for (var i = 0; i < n ; i++ ){
			transpuesta[j].push(numeros[i][j]);
		}
		
	}
	return transpuesta;
	
}

