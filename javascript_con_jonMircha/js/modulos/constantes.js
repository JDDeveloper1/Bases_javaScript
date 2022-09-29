export const PI = Math.PI;


export let user = 'david';

let password = 'qwerty';
//export default password;

/*
Que una funcion ó variable se importe por defecto, 
significa que cuando mandas a llamar en formato de modulo ese archivo, 
por default se va a implementar.
No puedes tener dos Variables o objetos llamdas por default en un  modulo.

//export default let *password = 'qwerty'; ERROR(*) nos da error porque de esta manera lo trata como una funcion expresada 
//export default *const password = 'qwerty'; ERROR(*) nos da error porque de esta manera lo trata como una funcion expresada 

// correcta sintaxis porque  expresion esta abajo de la asignacion de valor. 
let password = 'qwerty';
export default password;  

// funcion declarda = una funcion que se define como tal, 
con las funciones declardas independientemente en 
donde las declaremos se hace un joistink, 
es decir el codigo de la funcion es lo primero que lee el archivo y
eso permite que no imporque haga funciones abajo e invocaciones a arriba.

export function sayHi(){
    console.log("Hi Modulos +ES6
}

funcion expresada = son las que se guardan en varibale. si yo mando a ejecutar la funcion antes  de la expresion me da error  
const hello = () => console.log("hello")



*/

function hello() {
    return console.log("hello");
}

export default function sayhi() {
    console.log("Hi Modulos +ES6")
}

export class Sayhi {
    constructor() {
        console.log("Hi class  +ES6");
    }
}

/*export default function sayHi2(){
    console.log("Hi Modulos +ES6")
}*/