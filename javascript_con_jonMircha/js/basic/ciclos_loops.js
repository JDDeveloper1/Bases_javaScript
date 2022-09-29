let contador = 0; //ya es inusual usarlo.  con este loops while le estoy diciendo a la maquina que me cuente 0 a 9 poque le argumento le dije que contador era menor a 10 y contador++ es la funcion de contar  de uno en uno con el operador  ++
while (contador < 10) {
  console.log("while" + contador);
  contador++;
}

do {
  console.log("do while" + contador); // con imprimiremos todo el bloque
  contador++;
} while (contador < 10);

/* for (inicializacion de varible;condicion;decremento o incremento) {
    sentecias que ejecuta el for
    sentecias que ejecuta el for
    sentecias que ejecuta el for
}*/

for (let i = 0; i < 10; i++) {
  console.log("for" + i);
}


let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


// es un loop especial que me va a permitir recorrer o iterar las propiedades de un objeto
const datos = {
    nombre: "david",
    apellido: "soto",
    edad: 35 
}
// for in mas como para objetos primitivos
for (const propiedad in datos) {
    console.log(propiedad),
    console.log(`Key:${propiedad},Value:${datos[propiedad]}`)
}
 // for of me va a permitir recorrer todos los elementos de cualquier objeto que sea iterable, por ejemplo puede ser un arreglo o cadena de texto
for (const elemento of numeros) { 
    console.log(elemento)
}

let cadena = " Hola mundo";

for (const caracter of cadena) {
    console.log(caracter)
    
}