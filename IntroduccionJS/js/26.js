// This
// Hace referencia a las propiedades del objeto
const reservacion = {
    nombre: 'Francisco',
    apellido: 'Sandoval',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y la cantidad a pagar es de ${this.total}`);
    }
    
}

const reservacion2 = {
    nombre: 'Armando',
    apellido: 'Casas Del Valle',
    total: 15000,
    pagado: false,
    informacion: function() {
        console.log(`El Cliente ${this.nombre} reservó y la cantidad a pagar es de ${this.total}`);
    }
    
}

reservacion.informacion();
reservacion2.informacion();

// Caso de resultado undefined con arrow function
const reservacion3 = {
    nombre: 'Leo',
    informacion: ()=> {
        console.log(`${this.nombre}`);
    }
}

reservacion3.informacion();