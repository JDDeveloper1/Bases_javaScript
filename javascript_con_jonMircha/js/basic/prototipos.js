/* JavaScript es un lenguaje multiparadigma, eso quiere decir que se puede aplicar diferentes para paradigmas tales como programacion funcional, programacion orientada a objetos. 
el lengueje javascript con las clases es algo diferente a otros lenguejes. ya que javaScript es un lenguaje basado en prototipos y no en clases, entonces el sistema todo lo que yo haga con clases, me lo esta pasando a  funcion prototipal*/

/* P.O.O = programacion a objetos.
Clases - Es el modelo a seguir para para basarnos y poder generar instancias
Objetos - Es una instancia de una Clase: es una copia de ese modeloel cual lo estamos utilizando en el mundo real - es como una copia del modelo a seguir
 Atributos - Es una caracteristica o propiedad del objeto(Son variables dentro de un objeto )
 Metodos - son las acciones que un objeto puede realizar. son acciones / verbos ( son Funciones dentro de un objeto)
*/

/* los prototipos en javaScript es un mecanismo por el cual un objeto de un objeto Padre puede  heredar caracteristicas : Atributos - Metodos  es decir funciones.  */



/* Esto es un objeto, que contiene otro objeto de una manera sencilla
const animal = {
   nombre:"snoopy",
   sonar(){ 
       console.log("hago sonido por que estoy vivo");
   }
}

const animal2 = {
   nombre:"Lola Bunny",
   sonar(){ 
       console.log("hago sonido por que estoy vivo");
   }
}

console.log(animal);
console.log(animal2);
*/

/*Funcion Constructora: porque se contruye una sola vez y de ella se generan nuevas instancias - si yo quiero darle propiedas hay que darselos como para metros de la misma funcion  

// Animal es una clase : lo cual se escribe UpperCamelCase


// Funcion Constructora
function Animal(nombre,genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function () {
        console.log("hago sonido por que estoy vivo")
    }
}

 const snoopy = new Animal("Snoopy", "Macho"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
*/

// Funcion constructora optimizada donce asiganamos los metodos al prototipo y no a la funcion como tal. vamos a sacar la instacia sonar, con eso conseguimos que si hay mas variables, no todas tecan el metodo integrado y no ocupe memoria.
function Animal(nombre,genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;  
}

 //Metodos agregados al prototipo de la funcion constructora (Animal)
 Animal.prototype.sonar = function () {
    console.log("hago sonido por que estoy vivo")
}
Animal.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre}`)
}

 const snoopy = new Animal("Snoopy", "Macho"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();