class AlumnoClase {
  constructor(nombre, apellidos, dni, modulos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.DNI = dni;
    this.modulos = modulos;
  }

  get getNombre() {
    return this.nombre;
  }
  get getApellidos() {
    return this.apellidos;
  }
  get getDNI() {
    return this.DNI;
  }
  get getModulos() {
    return this.modulos;
  }
  set setNombre(n) {
    this.nombre = n;
  }
  set setApellidos(a) {
    this.apellidos = a;
  }
  set setDNI(d) {
    this.DNI = d;
  }
  set setModulos(m) {
    this.modulos = m;
  }
}

var alumnoC = new AlumnoClase("juan", "perez", "11222333A", [
  "prog",
  "code",
  "dwcs",
  "dwcc"
]);

document.write(
  alumnoC.nombre +
    " " +
    alumnoC.apellidos +
    " " +
    alumnoC.DNI +
    " " +
    alumnoC.modulos
);
