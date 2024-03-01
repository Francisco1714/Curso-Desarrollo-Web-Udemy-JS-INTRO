// "use strict"; // Correr JS en modo estricto
// Objects
const producto = {
    nombreProducto : 'Televisor 20 Pulgadas',
    precio : 300,
    disponible : true, 
}

Object.freeze(producto); // .freeze .seal

producto.imagen = 'imagen.jpg';

console.log(producto);
