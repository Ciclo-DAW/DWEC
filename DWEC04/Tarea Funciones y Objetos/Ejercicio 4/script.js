function pedirDatos() {
  var name = prompt("Introduzca un nombre");
  var apellidos = prompt("Introduzca los apellidos");
  var dni = prompt("Introduzca el dni");
  var modulos = prompt("Introduzca los modulos separados por comas").split(",");

  alumno = new Alumno(name, apellidos, dni, modulos);

  return alumno;
}

//console.log(pedirDatos());

function crearArrayAlumnos() {
  var size = prompt("Introduzca el tamaño del array de alumnos");
  var arrayAlumnos = [];
  for (let index = 0; index < size; index++) {
    arrayAlumnos.push(pedirDatos());
  }

  return arrayAlumnos;
}

var alumnos = crearArrayAlumnos();

var alumnosAscendente = alumnos.sort(function(a, b) {
  return a.apellidos.localeCompare(b.apellidos);
});

console.log(alumnosAscendente);

var alumnosDescendente = alumnosAscendente.slice().reverse(); //Por algun motivo me lo mutaba antes del primer log

console.log(alumnosDescendente);
