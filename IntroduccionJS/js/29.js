// try catch
// solo se usa en situacaiones puntuales como error de inicio de sesion, conexiones perdidas como base de datos, servidor etc.
const num1 = 20;
const num3 = 30;

console.log(num1);

try { 
    console.log(num2);
} catch(error) {
    console.log(error)
}

console.log(num3);