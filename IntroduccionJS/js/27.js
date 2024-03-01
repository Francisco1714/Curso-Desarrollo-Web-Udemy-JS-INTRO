// POO - Programación orientada a objetos

/** Object Literal **/
const producto = {
    nombre: 'tablet',
    precio: 500,
}

// Object Constructor

//Producto
function Producto(nombre, precio, cantidad, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.cantidad = cantidad;
}

// Prototyte - Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de $ ${this.precio} y se posee una cantidad de ${this.cantidad} existencias.`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, 30);
const producto3 = new Producto('Laptop', 1000, 15);
const producto4 = new Producto('Audifonos', 400, 0);
const producto5 = new Producto('Celular', 700, 0);
const producto6 = new Producto('Nientendo Switch',500, 20);

console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );


// Cliente
function Cliente(nombre, apellido){
    this.nombre =  nombre;
    this.apellido = apellido;
}

const cliente1 = new Cliente('Francisco', 'Sandoval');

// Prototyte - Crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function(){
    return `El nombre del cliente es ${this.nombre} y su apellido ${this.apellido}`;
}

console.log(cliente1.formatearCliente() );

