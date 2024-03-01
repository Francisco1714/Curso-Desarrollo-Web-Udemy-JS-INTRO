// Declarando funcion

function sumar() {
    console.log(10 + 10);
}

sumar();

// Exprension de la funcion 
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();


// IIFE
(function() {
    console.log('Esto es una función');
})();