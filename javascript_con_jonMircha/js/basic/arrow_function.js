// Las Arrow functions solo funcionan con funciones anonimas expresadas. las arrow function tiene la capacidad de capturar los objetos o contextos (global,cuando creamos una function, cuando creo un objeto, cuando hay un juego de llave{}) como si fuera  (this). tener cuidado de de declarar arrow function con objetos literales.


// function declarada 
function saludar1() {
    console.log("hola1")
}

saludar1();



// function expresada

const saludar2 = function (/*parametro*/) {
    console.log("hola2");

}
saludar2();


// Arrow function


const saludar3 = (/*parametro*/) => {
    console.log("hola3")
}
saludar3();

// Arrow function con parametro declarado y retorn implicito

const saludar4 = (/*parametro*/) => console.log("hola4")


//Parametro (nombre)         // interpolado
const saludar5 = nombre => console.log(`hola${nombre}`);
saludar5("david");


// fucntion retorno normal
const sumar = function (a, b) {
    return a + b;
}

console.log(8, 9)


// retorn implicito 

// Parametro - en este caso si esta entre parentesis() porque lleva más de un parametro.
const sumar1 = (a, b) => a + b;

console.log(sumar1(9, 9));


// cuando una arrow function tiene varias lineas de codigo se respata la sintaxis normal

const funcionDeVariasLineas = () => {
    /* directrices de la funcion */
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

//  arrow functions con iteraciones en el metodo

const numeros = [1, 2, 3, 4, 5, 6]
/* directrices de la funcion */
numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));



// function declara con (this)
/*function perro() {
    console.log(this);
}

perro();*/


/* function Objeto con (this) que captura el objeto */

const perro = {
    nombre: "gato",
    ladrar:function(){
        console.log(this)
    }
}

perro.ladrar();

/* arrow function  Objeto  como si fuera (this). mala parctica porque es un objeto literal*/ 

const perro1 = {
    nombre: "gato1",
    ladrar1:() => {
        console.log(this)
    }
}

perro1.ladrar1();



