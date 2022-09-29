/* cada cadena de texto tiene un  valor (un dato), valga la rebundacia  sus propias propiedades que son caracteristicas atributos y tambien tiene metodos que son accion o funciones que me van permitir ejucutar algo pues con la variable o tipo de dato */

// Cadenas de texto aka string

let nombre = "david";
let apellido = "soto";
let saludo = new String("Hola mundo"); /* new(operador) string me separa de una vez por caracteres, no se usa mucho porque es una manera muy formal)*/  
let lorem = "lorem espero entender este lenguaje de programacion llamado javascript" 

console.log(nombre, apellido, saludo);

console.log(
    nombre.length,
    apellido.length,
    saludo.length,// length me permite contar los caracteres

    nombre.toLocaleUpperCase(), // este ya seria un metodo por ende se cierra con cadenas.
    apellido.toLocaleLowerCase(),
    lorem.includes("lenguaje"), // en este caso includes me busca si la palabra  (lenguaje) esta en mi declaracion , le dimos con " palabra" la que deseamos encontrar y nos muestra en consola true.
    lorem.includes("david"), // en este caso buscamos una palabra que no esta en nuestro texto lorem, y nos muestra en consola false
    lorem.trim(), // nos quita los espacios en nuestro texto

    lorem.split(",") // esto ya seria un metodo con array , un array (arreglo) es algo que dentro de si tiene varios valores. Split nos separa el texto en los espacios con el valor que le hayamos dado en esta caso fue ( , )
)