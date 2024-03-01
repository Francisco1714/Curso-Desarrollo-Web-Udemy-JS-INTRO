// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    } // Fin constructor

    formatearProducto(){
        return `El Producto ${this.nombre} tiene un precio de $${this.precio}`;
    }

} // Fin Class

const producto = new Producto('Monitor curvo de 49"', 800);
const producto2 = new Producto('Laptop', 300);

// Herencia
class Libro extends Producto {
   constructor(nombre, precio, isbn){
    super(nombre, precio);
    this.isbn = isbn;
   }

   formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }   

}

const libro = new Libro('JavaScript la Revolución', 120, '12323231321123123');
console.log(libro.formatearProducto() );

console.log(producto2.formatearProducto() );