// Objects
const producto = {
    nombreProducto : 'Televisor 20 Pulgadas',
    precio : 300,
    disponible : true, 
}

// const nombreProducto = producto.nombreProducto;
// const precioProducto = producto.precio;

// console.log(nombreProducto);
// console.log(precioProducto);


// Destructuring
const { nombreProducto, precio } = producto;

console.log(nombreProducto);
console.log(precio);