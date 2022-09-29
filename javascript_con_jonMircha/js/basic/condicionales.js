/* ¿Que es una estructura de control? : una estructura de control es aquel que perimite controlar el flujo de tu programacion. dentro de la estructura de control encontramos las secuenciales, es decir que se ejecuta linea por linea, estructura condiconales, es decir que dependiento de la evaluacion de una condicion hacemos  ciertas occiones u otras, tambien estan los loops, que son secuencias de repeticion */

/* estructura condiconales
if - else : es una estructura de programacion que me perimite  tomar una desicion dependiento si su cumple o no ciertas condicione entonces mostrar en pantalla o  ejecutar ciertas acciones 
    
}*/

let edad = 18;

if (edad > 17) {
  // la condicional es la que esta entre parentesis
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

if (edad >= 17) {
  // la condicional es la que esta entre parentesis, en este caso el operador relacional no esta bien por que en logica nos esta diciendo que es mayor o igual a 17
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

if (edad < 18) {
  // la condicional es la que esta entre parentesis, ejemplo aca estamos diciendo que si es menor a 18 es menor de edad
  console.log("eres menor de edad");
} else {
  console.log("eres mayor de edad");
}

if (edad <= 17) {
  // en este caso le decimos que si es menor o igual a 17 es menor de edad
  console.log("eres menor de edad");
} else {
  console.log("eres mayor de edad");
}

/* if - else if - else  : es decir condicionales anidadas*/
/*dejame dormir 0hrs - 5hrs
buenos dias 6hrs - 11hrs
buenas tardes 12hrs - 18hrs
buenas noches 19hrs - 23hrs
*/
let hora = 5;
if (hora >= 0 && hora <=5) {
    console.log("dejame dormir")
} else if (hora >= 6 && hora <= 11) {
    console.log("buenos dias")
} else if (hora >= 12 && hora <= 18) {
    console.log("buenas tardes")
} else {
    console.log("buenas noches")
};


if (hora < 6) {
    console.log("dejame dormir")
} else if (hora > 5 && hora < 12) {
    console.log("buenos dias")
} else if (hora > 11 && hora < 19) {
    console.log("buenas tardes")
} else {
    console.log("buenas noches")
};

/* operador ternario : tiene 3 partes una condion que va entre parentesis, luego si la condicion se cumple a verdadero sigue un signo de interrogacion ? y la linea de codigo que quieres que se ejecute si es true y luego dos puntos : si la condicion es falsa 
(condicion)? verdadero : falsa   si quisiera ejecutar esta condiional con muchas lineas de codigo no seria posble por lo tamto tocaria anidar todas las lineas ( intriciones) de codigo en una funcion para colocarlas bien sea en linea verdadera o falsa*/
console.log("operador ternario")
let eresMayor = (edad >= 18)
    ? "eres mayor de Edad"
    : "eres menor de Edad";
console.log(eresMayor);


/* switch - case : este lo vamos a utilizar cuando tengamos que evaluar una situacion donde tengamos diferentes valores para una misma variable */

/*
domingo - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5
sabado - 6 */

let dia = 2

switch (dia) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  case 6:
    console.log("sabado");
    break;

    default:
        console.log("el dia no existe") // dado el caso que  no se cumpla en ninguna de las condiciones haga esto
    break;
}

