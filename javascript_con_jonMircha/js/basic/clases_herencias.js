//Clases y Herencias

class Animal {
    constructor(nombre, genero) {
        //Atributos
        this.nombre = nombre;
        this.genero = genero;

        //Metodos 
        this.sonar = function () {
            console.log("hago  sonidos por que estoy vivo");
        };

        this.saludar = function () {
            console.log(`Hola me llamo ${this.nombre}`);
        };
    };
}

// herencias de clases
/*Con el método super se manda a llamar el constructor de la clase padre*/
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    // Sobre escritura de una herencia en metodos
    hola() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("guao guao")
    }
}

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.hola();
scooby.ladrar();