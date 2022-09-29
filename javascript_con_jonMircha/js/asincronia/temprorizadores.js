/*
Ejecutar a posterior acciones o funciones es posible con los temporizadores. 
inicialmente tenemos 2 setTimeout & setInterval, 
la diferencia del uno con el otro es que el setTimeout recibe una call back de la  funcion y 
se ejecuta una sola vez, pero si quisieras en un intervalo de tiempo ejecutar ciertas acciones, utilizariamos setInterval
*/

//setTimeout
/* console.log("inicio")
setTimeout(() => {
   console.log("Ejecutando un setTimeout, esto se ejecuta una sóla Vez") 
}, 1000);

//setIntervalS
setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta infeminidamente cada cierto intervalo de tiempo")
}, 3000); */

// reloj con setInterval
/* setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1100) */;


//Funcion que cancela setTImeout
/* let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());
},2100);

clearTimeout(temporizador);
console.log("despues del Clear") */

//fFuncion que cancela setInterval
/* let temporizador = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
},2100);

clearInterval(temporizador);
console.log("despues del Clear"); */