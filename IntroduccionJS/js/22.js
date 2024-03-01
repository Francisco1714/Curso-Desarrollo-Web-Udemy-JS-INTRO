// Estructura de control

//  const puntaje = 1000;
 
//  if(puntaje !== 1000){
//     console.log('No es igual');
// } else {
//     console.log('Si es igual a 1000')
// }

// const efectivo = 1000;
// const carrito = 800;

// if( efectivo > carrito ) {
//     console.log('El usuario puede pagar');
// } else {
//     console.log('Fondos insuficientes');
// }

const rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR'){
    console.log('Acceso parcial del sistema');
}else {
    console.log('No tienes acceso');
}