window.addEventListener("load", iniciar , false);

function iniciar(){ 
	document.getElementById("btn").addEventListener("click",validarCampos,false);
}

function validarCampos(e){

	limpiarError();
	
	if ( validarNombre() && validarApellido("campo_2") && validarApellido("campo_3") && validarTelefono() && validarEmail() && confirm("pulsa aceptar si deseas validar el formulario") ) {
		alert ("Los campos del formulario son correctos");
		return true;
	} else {
		e.preventDefault(); //evita el envío del formulario
		return false;
	}
	
}

function validarNombre(){
	var nombre = document.getElementById("campo_1");
	nombre.value = nombre.value.trim();
	

	if ( !nombre.checkValidity() ){
	    var mensaje = "";
		
		if ( nombre.validity.valueMissing ){
			mensaje = "El campo "+ nombre.name +" no puede estar vacio" ;
		}
		if ( nombre.validity.patternMismatch ){
			mensaje = "El campo "+ nombre.name +" no cumple las especificaciones";
		}	
		error2(nombre,mensaje);
		
		return false;
			
	} 
	
	return true;
	
}

function validarApellido(ape){
	var apellido;
	
	if  ( ape == "campo_2" ) {
		apellido = document.getElementById("campo_2");
	} else { 
		apellido = document.getElementById("campo_3");
	}
	apellido.value = apellido.value.trim();
	
	if ( !apellido.checkValidity() ){
		var mensaje="";
		if ( apellido.validity.patternMismatch ){
			mensaje = "El campo "+ apellido.name +" no cumple las especificaciones";
		}

		if ( apellido.validity.valueMissing ){
			mensaje = "El campo "+ apellido.name +" no puede estar vacio" ;
		}
			
		if ( apellido.validity.tooLong ){
			mensaje = "El campo "+ apellido.name  +" tiene demasiados caracteres";
		}
		
		error2(apellido,mensaje);
		
		return false;
	
	}
	return true;
}

function validarTelefono(){
	var telefono = document.getElementById("campo_4");
	
	if ( !telefono.checkValidity() ){
		var mensaje="";
		if ( telefono.validity.patternMismatch ){
		
			mensaje = "El campo "+ telefono.name +" no cumple las especificaciones";
		}
		error2(telefono,mensaje);
		return false;
			
	} else {
		return true;
	}
}

function validarEmail(){
	var email = document.getElementById("campo_5");
	if (!email.checkValidity()){
	
		var mensaje="";
		if ( email.validity.patternMismatch ){
			mensaje = "El campo "+ email.name +" no cumple las especificaciones";
		}
		if ( email.validity.valueMissing ){
			mensaje = "El campo "+ email.name +" no puede estar vacio" ;
		}
		
		error2(email,mensaje);
		return false;
			
	} else {
		
		return true;
	}
	
}


function error2(elemento,mensaje){
console.log("validando ... "+elemento.name + " " +elemento.validity.patternMismatch);		
	document.getElementById("mensaje").innerHTML = mensaje;
	elemento.className = "error";
	elemento.focus();

}

function limpiarError (){
	var formulario = document.forms[0];
	for(var i = 1; i<formulario.elements.length;i++){
		formulario.elements[i].className = ""
	}
}