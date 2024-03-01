// Switch

//Metodos de pago
const metodoPago = 'puntos';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'credito':
        console.log('Pagaste con credito');
        break;
    case 'puntos':
        console.log('Cangeaste los puntos de la tienda');
        break;
    default :
        console.log('Aun no has pagado');
        break;
}   

// Accesos para Administrador, Programador, diseñador , vetado
const accesoSistema = 'externo';
switch(accesoSistema) {
    case 'administrador':
        console.log('Acceso completo al sistema.');
        break;
    case 'programador':
        console.log('Acceso limitado solamente a Herramientas de desarrollo.');
        break;
    case 'vetado':
        console.log('Prohibido el acceso usted está vetado.');
    default:
        console.log('Acceso denegado, usted no pertenece a la organización.');
}

// Suma, resta, multiplicacion, division
const num1 = 20;
const num2 = 10;
const operador = 'multiplicacion';

switch (operador){
    case 'suma':
        console.log(`El resultado de la suma entre num1 y num2 es ${num1 + num2}`);
        break;
    case 'resta':
        console.log(`El resultado de la resta entre num1 y num2 es ${num1 - num2}`);
        break;
    case 'multiplicacion':
        console.log(`El resultado de la multiplicación entre num1 y num2 es ${num1 * num2}`);
        break;
    case 'division':
        console.log(`El resultado de la división entre num1 y num2 es ${num1 / num2}`);
        break;
    default :
        console.log('No se a solicitado ninguna operación.');
        break;
}


