// Tipos de datos

// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
const producto = "Monitor de 20\"";
const producto2 = String('Monitor de 30 Pulgadas');
const producto3 = new String('Monitor de 50 Pulgadas');
const email = 'correo@correo.com'

// length se utiliza para la extencion
console.log(tweet.length)
console.log(producto)
console.log(producto2)
console.log(producto3)

// IndexOf (retorna posición)
console.log(tweet.indexOf('JavaScript'))
console.log(producto2.indexOf('Tablet'))
console.log(email.indexOf('@'))

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript'))
console.log(producto2.includes('Tablet'))
console.log(email.includes('@'))