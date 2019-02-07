var ciudades = new Set([
  "Madrid",
  "Sevilla",
  "París",
  "Munich",
  "Berlin",
  "Roma"
]);

var capitales = new Set(["Madrid", "Berlin", "Roma", "Otawa", "Atenas"]);

console.log("----------------Listado de ciudades-----------------");

ciudades.forEach(function(item) {
  console.log(item);
});

function mostrarCiudadesCapitales() {
  ciudades.forEach(function(item) {
    if (capitales.has(item)) {
      console.log(item);
    }
  });
}

console.log(
  "------------Listado de ciudades que son capitales----------------"
);
mostrarCiudadesCapitales();

console.log(
  "------------Conjunto de ciudades que son capitales----------------"
);
function createCiudadesCapitales() {
  resultado = new Set();
  ciudades.forEach(function(item) {
    if (capitales.has(item)) {
      resultado.add(item);
    }
  });
  console.log(resultado);
}

createCiudadesCapitales();

console.log("------------Listado de todas las ciudades----------------");

function mostrarTodasCiudades() {
  ciudades.forEach(function(item) {
    console.log(item);
  });
  capitales.forEach(function(item) {
    if (!ciudades.has(item)) {
      console.log(item);
    }
  });
}
mostrarTodasCiudades();

console.log("------------Ciudades que no son capitales----------------");

var ciudadesNoCapitales = () => {
  resultado = new Set();
  ciudades.forEach(item => {
    if (!capitales.has(item)) {
      resultado.add(item);
    }
  });
  return resultado;
};

console.log(ciudadesNoCapitales());
