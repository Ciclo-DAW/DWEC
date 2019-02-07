var numeros = [2, 22, 36, 350, 12, 500];

var ordenadoMal = numeros.sort();
console.log(ordenadoMal);

//Con números no funciona porque los ordena casteados a strings y sólo se fija en el primer caracter de cada uno de ellos.

var ordenadoBien = numeros.sort(function(a, b) {
  return a - b;
});
console.log(ordenadoBien);
