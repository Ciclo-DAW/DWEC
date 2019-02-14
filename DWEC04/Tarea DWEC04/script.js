class Edificio {
  //Constructor de la clase Edificio
  constructor(calle, numero, cp) {
    this.calle = calle;

    this.numero = numero;

    this.codigoPostal = cp;

    this.plantas = new Array();

    // Mensaje cuando creamos un nuevo edificio
    document.write(
      "<li>Construido nuevo edificio en calle: " +
        calle +
        ", Nº: " +
        numero +
        ", CP: " +
        cp +
        "</li>"
    );
  }

  agregarPlantasYPuertas(plantas, puertas) {
    var numPlantas = this.plantas.length;
    var ultimaPlanta;

    //Según el número de plantas que ya existan en el edificio, asignamos la planta a partir de la cual añadiremos las nuevas
    if (numPlantas <= 0) {
      ultimaPlanta = 0;
    } else {
      ultimaPlanta = numPlantas - 1;
    }

    for (let i = ultimaPlanta; i < numPlantas + plantas; i++) {
      //Para cada planta creamos un array del tamaño del número de puertas
      this.plantas[i] = new Array(puertas);

      //Para cada puerta, creamos un propietario vacío
      for (let j = 0; j < puertas; j++) this.plantas[i][j] = "";
    }
  }

  //Getters
  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigoPostal;
  }

  //Setters
  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  agregarPropietario(nombre, planta, puerta) {
    //Validamos que la planta y la puerta existan
    if (
      this.plantas.length < planta ||
      this.plantas[planta - 1].length < puerta
    ) {
      document.write(
        "<li>" +
          nombre +
          " no puede ser propietario de la puerta " +
          puerta +
          " de la planta " +
          planta +
          " porque no existe </li>"
      );
    } else {
      this.plantas[planta - 1][puerta - 1] = nombre;
      document.write(
        "<li>" +
          nombre +
          " es ahora el propietario de la puerta " +
          puerta +
          " de la planta " +
          planta +
          "</li>"
      );
    }
  }

  imprimePlantas() {
    document.write(
      "<h2>Listado de propietarios del edificio calle " +
        this.calle +
        " número " +
        this.numero +
        "</h2>"
    );

    document.write("<ul>");

    var propietario;
    for (let i = 0; i < this.plantas.length; i++) {
      for (let j = 0; j < this.plantas[i].length; j++) {
        if (this.plantas[i][j] === "") {
          propietario = "Sin propietario";
        } else {
          propietario = this.plantas[i][j];
        }
        document.write(
          "<li>Propietario del piso " +
            (j + 1) +
            " de la planta " +
            (i + 1) +
            ": " +
            propietario +
            "</li>"
        );
      }
    }

    document.write("</ul>");
  }
}

document.write(
  "Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:"
);

document.write("<ul>");

var edificioA = new Edificio("Marcelo Macias", "58", 32004);

var edificioB = new Edificio("Juan XXIII", "45", 32004);

var edificioC = new Edificio("Calle del Progreso", "76", 32007);

document.write("</ul>");

document.write("<ul>");

document.write(
  "<li>El código postal del edificio A es: " +
    edificioA.imprimeCodigoPostal() +
    "</li>"
);

document.write(
  "<li>La calle del edificio C es: " + edificioC.imprimeCalle() + "</li>"
);

document.write(
  "<li>El edificio B está situado en la calle " +
    edificioB.imprimeCalle() +
    " número " +
    edificioB.imprimeNumero() +
    "</li>"
);

document.write("</ul>");

document.write("Agregamos 3 plantas y 4 puertas por planta al edificio A");

edificioA.agregarPlantasYPuertas(3, 4);

document.write("<br/>Agregamos 7 propietarios al edificio A");

document.write("<ul>");

edificioA.agregarPropietario("Brais Cao Gonzalez", 1, 1);

edificioA.agregarPropietario("Maria Gonzalez", 1, 2);

edificioA.agregarPropietario("Jesus Rodriguez", 1, 3);

edificioA.agregarPropietario("Antonio Jiménez", 1, 5);

edificioA.agregarPropietario("Manuel Ordoñez", 6, 2);

edificioA.agregarPropietario("Paco Alvarez", 3, 2);

edificioA.agregarPropietario("Ruben Dominguez", 2, 2);

document.write("</ul>");

edificioA.imprimePlantas();

document.write("<br/>Agregamos 1 planta más al edificio A");

edificioA.agregarPlantasYPuertas(1, 5);

document.write(
  "<br/>Agregamos 1 propietario más al edificio A planta 4, puerta 5"
);

document.write("<ul>");

edificioA.agregarPropietario("Pedro Meijide", 4, 5);

document.write("</ul>");

edificioA.imprimePlantas();
