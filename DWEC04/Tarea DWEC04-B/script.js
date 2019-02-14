function Edificio(calle, numero, codigopostal) {
  // Propiedades

  this.calle = calle;

  this.numero = numero;

  this.codigoPostal = codigopostal;

  this.plantas = new Array();

  // Imprimimos el mensaje por defecto cada vez que se crea un objeto Edificio.

  document.write(
    "<br/>- Construido nuevo edificio en calle: " +
      calle +
      ", nº: " +
      numero +
      ", CP: " +
      codigopostal
  );

  // Métodos

  this.agregarPlantasYPuertas = function(numplantas, puertas) {
    var totalplantas = this.plantas.length;

    if (totalplantas <= 0) inicio = 0;
    else inicio = totalplantas - 1;

    for (i = inicio; i < totalplantas + numplantas; i++) {
      this.plantas[i] = new Array(puertas);

      for (j = 0; j < puertas; j++) this.plantas[i][j] = ""; // Propietario de esa puerta en blanco.
    }
  };

  this.modificarNumero = function(numero) {
    this.numero = numero;
  };

  this.modificarCalle = function(calle) {
    this.calle = calle;
  };

  this.modificarCodigoPostal = function(codigo) {
    this.codigoPostal = codigo;
  };

  this.imprimeCalle = function() {
    return this.calle;
  };

  this.imprimeNumero = function() {
    return this.numero;
  };

  this.imprimeCodigoPostal = function() {
    return this.codigoPostal;
  };

  this.agregarPropietario = function(nombre, planta, puerta) {
    this.plantas[planta - 1][puerta - 1] = nombre;

    document.write(
      "<br/>- " +
        nombre +
        " es ahora el propietario de la puerta " +
        puerta +
        " de la planta " +
        planta
    );
  };

  this.imprimePlantas = function() {
    // Imprimirá las plantas y nombres de propietarios de cada puerta de un edificio.

    document.write(
      "<h2>Listado de propietarios del edificio calle " +
        this.calle +
        " número " +
        this.numero +
        "</h2>"
    );

    for (i = 0; i < this.plantas.length; i++)
      for (j = 0; j < this.plantas[i].length; j++)
        document.write(
          "Propietario del piso " +
            (j + 1) +
            " de la planta " +
            (i + 1) +
            ": " +
            this.plantas[i][j] +
            "<br/>"
        );
  };
}

document.write("<h1>TRABAJANDO CON OBJETOS EN JAVASCRIPT</h1>");

document.write(
  "Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:"
);

var edificioA = new Edificio("Garcia Prieto", "58", 15706);

var edificioB = new Edificio("Camino Caneiro", "29", 32004);

var edificioC = new Edificio("San Clemente", "s/n", 15705);

document.write(
  "<br/><br/>El código postal del edificio A es: " +
    edificioA.imprimeCodigoPostal()
);

document.write("<br/>La calle del edificio C es: " + edificioC.imprimeCalle());

document.write(
  "<br/>El edificio B está situado en la calle " +
    edificioB.imprimeCalle() +
    " número " +
    edificioB.imprimeNumero()
);

document.write(
  "<br/><br/>Agregamos 2 plantas y 3 puertas por planta al edificio A..."
);

edificioA.agregarPlantasYPuertas(2, 3);

document.write("<br/>Agregamos 4 propietarios al edificio A...");

edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);

edificioA.agregarPropietario("Luisa Martinez", 1, 2);

edificioA.agregarPropietario("Marta Castellón", 1, 3);

edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();

document.write("<br/><br/>Agregamos 1 planta más al edificio A...");

edificioA.agregarPlantasYPuertas(1, 2);

document.write(
  "<br/>Agregamos 1 propietario más al edificio A planta 3, puerta 2..."
);

edificioA.agregarPropietario("Pedro Meijide", 3, 2);

edificioA.imprimePlantas();
