var alumno = {
  nombre: "Brais",
  apellidos: "Cao Gonzalez",
  DNI: "44497522C",
  ModulosMatriculados: ["DAW", "DIW", "DWEC", "DWES", "FOL", "EIE"]
};

function Alumno(nombre, apellidos, dni, modulos) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.DNI = dni;
  this.modulos = modulos;
}

var alumno2 = new Alumno("Brais", "Cao", "44497522C", [
  "DAW",
  "DIW",
  "DWEC",
  "DWES",
  "FOL",
  "EIE"
]);
console.log(alumno2);
