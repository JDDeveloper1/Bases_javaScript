// es adecuado y se procura trabajar con "const" para arreglos o objetos. esto evitara que otro objeto con const ocupe la referencia que en memoria tiene mi objeto

let a = new String("hola"); // este es un metodo antiguo para declarar que es un String
//console.log(a)
const b = {}; // con este juego de llaves al final identificamos que es un objeto - - un objeto es una colecion de llaves y valores. un objeto puede tener diferentes propiedades o valore, incluso una function o un array
console.log(b);

const c = new Object(); // esta estructura ya no se utiliza

// en este ejemplo nombre es la llave y el valor seria jose. // en este caso estamos dandole internamente diferentes valores diferentes valores un array, un booleano, un objeto dentro del objeto, y una function
const datos = {
  nombre: "jose",
  apellido: "soto",
  edad: 30,
  pasatimepo: ["correr", "ver peliculas", "programar"], // es es en forma de array
  soltero: true, // un booleano
  contacto: { // objeto dentro de un objeto
    email: "jodasos03@gmail.com",
    telefono: 623490662,
    direccion: "calle la traba 7",
  },
  saludar: function () {
    /// delcaracion de una funcion
    console.log(`Hola`); // parametro ( en este caso seria el parametro y el retorno)
    },
    decirMiNombre: function () {
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y te puedes contactar conmigo en ${this.contacto.email} como correo electronico`); // con esto lo estamos concatenando todo con this, para hacer referencia al mismo objeto y asi poder llamarlo, hace referencia al mismo objeto
    }
};
console.log(datos["nombre"]);
console.log(datos["apellido"]);//con estos ejemplos estaria extrayendo la informacion del objeto. es mas aceptable el siguiente ejemplo.
console.log(datos.nombre) // cuando ponemos un (.) como anotacion le estamos diciendo al programa que a este objeto variable queremos acceder a ciertas propiedades o metodos que tiene( atributos: son la variables que tiene adentro un objeto, ojo saludar ya no es un atributo, ya aparece como un metodo (funcion)) dentro de un objeto a las varibles se le van a llamar atrubutos/propiedades y a las funciones se les llama metodos 
console.log(datos.apellido);
console.log(datos.edad);
console.log(datos.soltero);
console.log(datos.pasatimepo);
console.log(datos.pasatimepo[1]);// con esto doy especifidad en el array
console.log(datos.contacto);
console.log(datos.contacto.email);// de esta manera doy especifidad llamando un objeto dentro de un objetos
datos.saludar(); // como la funsion saludar ya tiene un retorno  como metodo, para llamarla solo debo declararla ( esto lo podria meter en un const).
datos.decirMiNombre();

console.log(Object.keys(datos)); //esto es un metodo dentro de un objeto que son utiles para programacion funcional. este me daras las llaves en forma de array
console.log(Object.values(datos)); // me forma un arrglo pero esta vez con los valores y no las llaves.
console.log(datos.hasOwnProperty("nombre")); //con hasOwnProperty colocamos una propiedad y con eso nos retorna un valor booleano False o True dependiendo si en su lista de llaves hay una que se llame asi
console.log(datos.hasOwnProperty("nacimiento")); //false