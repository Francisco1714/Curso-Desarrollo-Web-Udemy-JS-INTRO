// Arreglos - Arrays

const numeros = [10,20,30,40,50];

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Francisco", trabajo: "Programador"}, [1,2,3]];
// console.table(arreglo);

// Acceder al valor de un Array
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero) {
//    console.log(numero);
// });

// Añadir elementos
numeros.push(60,70,80); // Al final del arreglo
numeros.unshift(-10,-20,-30); // Al inicio del arreglo
console.table(numeros)

// Eliminar elementos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

// meses.splice(2, 1);
// console.table(meses);

// Rest Operator - Spread Operator

const nuevoArreglo = [...meses, 'Junio'];
console.log(nuevoArreglo);


