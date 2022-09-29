
let nombre = "perro",
    edad = 7;

const gato = {
    nombre: nombre,
    edad: edad,
    ladrar: function (/*parametro*/) { // funcion
        console.log("Miau Miau!") // retorno
    }
}    

console.log(gato);
gato.ladrar();


//manera nueva y simplificada de los objetos literales
const cat = {
    nombre,
    edad,
    raza: "callejero",
    ladrar() {
        console.log("Miau Miau Miau!");
    }
}
console.log(cat);
cat.ladrar();