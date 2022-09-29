// Objeto math : el objeto math es estatico, eso quiere decir que cada vez que lo queramos utilizar, debemos invocar directamente al prototipo math. ya tiene algunos parametros ya generalizados como los es pi 3.1416


console.log(Math)
console.log(Math.PI)
// metodos de math

console.log(Math.abs(-7.8));// nos deveulve el Valor absoluto de un numero, eso quiere decir que nos toma el numero como tal, no marca si es + o - y tampoco los vuelve enteros.
console.log(Math.ceil(7.2)); // nos ayuda a redeondear el numero, para volverlo entero hacia arriba. ejemplo 7.2 = 8
console.log(Math.floor(7.8)); //nos ayuda a redeondear al numero, para volverlo entero hacia abajo. ejemplo 7.8 = 7
console.log(Math.round(7.5));// Nos ayuda a redondear al numero, para volverlo entero, en direccion al numero mas cercano. Ejemplo: 7.2 = 7 || 7.8 = 8. en el caso del (.5), no direcciona hacia arrib.
console.log(Math.sqrt(81)); // nos sirve para sacar las raiz cuadra de los numeros. Ejemplo: 81 Raiz = 9
console.log(Math.pow());// Nos ayuda a elevar potencias. Ejemplo (2,5) = 32 /    El primer numero es la base y el segundo el exponente.
console.log(Math.sign(-7.8))// nos sirve para saber si un numero es positvo || negativo || 0 . si es un (-1) = A Negativo / Un (1) = A Positvo / Un (0) = A 0. Ejmeplo -7.8 = -1 || 7.8 = 1 || 0 = 0
console.log(Math.random()); // esto nos da un numero aleatorio entre 0 y 1. Ejemplo: 0.38090874793978213
console.log(Math.random() * 1000);// en este caso al metodo ramdom le dijimos que nos diera un numero ramdom pero esta vez que fuera comprendido entre el 0 al 1000, el nos da el numero con decimales (No entero) Ejemplo: 16.799220246217715.
console.log(Math.round(Math.random()*1000));// En este ejemplo volvimos a decirle que nos diera un numero que  fuera comprendido entre el 0 al 1000 pero que me lo vuelva numero entero. Ejemplo: 940.
