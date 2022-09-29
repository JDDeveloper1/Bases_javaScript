/*funcionan poniendo 2 condiciones, bien sea poninedo el operador logico or || o and &&.

Cortocurcuito OR - Cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto.

Cortocircuito AND - cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto.

*/

/*
dandole un valor a un parametro de la funcion 
function saludar(nombre = "Desconocido") {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
console.log();

saludar("David");
saludar(); 
*/

//Cortocircuito OR  en este caso estamos usando || ejemplo si el valor de la derecha es true valida que es true (true||flase) = true - en este caso nombre = david = igual true (hola david) = entonces cuando el valor de la izquierda sea false nos mostrara le valor de la derecha pero cuando el valor de la izquierda sea true nos mostrara le valor de la izquierda
function saludar(nombre) {
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}
console.log();

saludar("David");//
saludar();// 

console.log("cadena" || "Valor de la derecha");//true
console.log("19" || "Valor de la derecha");//true
console.log(true || "Valor de la derecha");//true
console.log("[]" || "Valor de la derecha");//true
console.log("{}" || "Valor de la derecha");//true
console.log(false || "Valor de la derecha");//false
console.log(null || "Valor de la derecha");//false
console.log(undefined || "Valor de la derecha");//false
console.log("" || "Valor de la derecha");//false
console.log(-2 || "Valor de la derecha");//tru
console.log(0 || "Valor de la derecha");//false

//cortocurcuito con AND en este caso estamos usando && ejemplo si el valor de la derecha es false valida que es false (false && true) = false - en este caso nombre = david = igual false (hola indefinido) = entonces cuando el valor de la izquierda sea true nos mostrara le valor de la derecha pero cuando el valor de la izquierda sea false nos mostrara le valor de la izquierda

function saludar(nombre) {
    nombre = nombre && "Desconocido"
    console.log(`Hola ${nombre}`);
}
console.log();

saludar("David");//
saludar();// 

console.log(false && "Valor de la derecha");//false
console.log(null && "Valor de la derecha");//false
console.log(undefined && "Valor de la derecha");//false
console.log("" && "Valor de la derecha");//false
console.log(-2 && "Valor de la derecha");//tru
console.log(0 && "Valor de la derecha");//false

console.log("cadena" && "Valor de la derecha");//true
console.log("19" && "Valor de la derecha");//true
console.log(true && "Valor de la derecha");//true
console.log("[]" && "Valor de la derecha");//true
console.log("{}" && "Valor de la derecha");//true