//Metodos console

console.log(console);
console.error("esto es un error");
console.warn("esto es una aviso");
console.info("Hola soy informacion");// es muy similar a log, pero  .info es un mensaje informativo
console.log("soy un registro de lo que ha pasado en nuestra aplicacion");//

let nombre = "David",
apellido = "Soto",
edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

// propiedad de print - cambiamos la interpolacion por una propiedad print, esta la llamaos con el signo % conjunto a una inicial, S = String || d = digito. ejemplo %s = string  
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre,apellido,edad);

// el metodo window abarca  todas las propiedad y atributos del navegador (la pagina que estamos usando  en el sistema)
console.log(window);

console.dir(window);
console.dir(document);// con dir me muestra todas las propiedad y atributos del sistema como window
//console.log(document); detecta todo el documento de HTML 

//grupo de metodos consola
console.group("los cursos que veo en youtube son de:")
console.log("curso JavaScript");
console.log("curso React.js");
console.log("curso Logica de Programacion");
console.log("curso Css")
console.groupEnd();
//grupo de metodos consola colapsado
console.groupCollapsed("los cursos que veo en youtube son de:")
console.log("curso JavaScript");
console.log("curso React.js");
console.log("curso Logica de Programacion");
console.log("curso Css")
console.groupEnd();

// cuando queramos analizar un metodo en forma de tabla
console.log(console);
console.table(Object.entries(console).sort());

// representar mis objetos o arreglos en forma de tablita

const numeros = [1,2,3,4,5],
vocales = ["A","E","I","O","u"];

console.table(numeros);
console.table(vocales);

const gato = {
    nombre: "Perro",
    raza: "Callejero",
    color: "Negro"
}
console.table(gato);


// Timepo que tarda nuestro codigo
console.time('Cuanto tiempo tarda mi codigo'); // etique le que colo para que empiece el conteo
const arr = Array(1000000);

for (let i = 0; i < arr.length; i++){
    arr[i] = i;
}

console.timeEnd('Cuanto tiempo tarda mi codigo') // etique para terminar el conteo, debe ser igual la etiqueta
//console.log(arr); lladamo de arr


// saber cuantas veces se a ajecutado ese pedaso de codigo
// le estoy diciendo que (i) empieza en 0, mientras sea menor o igual a 100 me aumente el valor de (i) en 1 / bucle
for (let i = 0; i <= 100; i++){
    console.count("codigo for")
    console.log(i);
}

//el metodo console tiene una variente para hacer pruebas como un texting// el solo se ejecuta cuado la prueba falla
let x = 3,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x<y,{x,y,pruebaXY})// al mandar el metodo assert nos pide una condicion y  le estamos diciendo  que la condicion a probar es  (x) es menor que (y), y luego las variables en juego x,y = variables que van a ser evaluadas y depues pruebaXY que es el mensaje donde se encuentra la prueba  

/*
esto limpia la consola 
console.clear(); 
*/

