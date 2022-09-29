var hola = "Hola Mundo"; /* cuando declaramos una variable con var se vuelve de ambito global. ( var se volvio de mala practica)
*/


let Hello = "hello World";
/* cuando declaramos una variable con let se vuelve de ambito en bloque - con let tambien podemos declarar una variable vacia que depues con interaciiones del usuario o yo le asigene valor pueda ser llamda 
ejemplo : 
let a;

a = "kenai"

console.log(a);
*/


console.log(hola);
console.log(Hello);


console.log(window); /* con esto me mapea toda la pagina pero no me tiene en cuenta la varible  definidas con let*/


//Ambito de bloque 