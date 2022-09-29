/* const utilizada en primitivos (string - number - boolean - null - indefined - NaN*/

const PI = 3.1416;
console.log(PI);

/*PI = 3.17
console.log(PI);*/

/* Como su nombre lo dice la constante no cambia en el flujo del programa - No se puede re-declar si  es en datos primitivos */

/* *******Separador****** */

/* const utilizada en compuestos ( object = {} - array = [] - function = () {} - class = () etc ) */
    

const objetos = {
    nombre: "david",
    edad: 30
}

const colores = ["blanco", "negro", "azul"];

console.log(objetos);
console.log(colores);

objetos.correo = "jodasos03@gmail.com";
colores.push("verde");

console.log(objetos);
console.log(colores);

/* si declaro objetos o arrglelos si puede re-declar con const*/