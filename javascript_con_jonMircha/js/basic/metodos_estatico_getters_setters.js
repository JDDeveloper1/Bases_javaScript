class Animal {
    constructor(nombre, genero) {
        //Atributos
        this.nombre = nombre;
        this.genero = genero;

        //Metodos 
        this.sonar = () => {
            console.log("hago  sonidos por que estoy vivo");
        };

        this.saludar = () => {
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
        this.raza = null;
    }
    // Sobre escritura de una herencia en metodos
    hola() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("guao guao")
    }
    //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
    static queEres() {
        console.log("Los Perros somo animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre");
    }
    
    //Los Setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza
    }
    set setRaza(raza){
        this.raza = raza;
        }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.hola();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = " ";
console.log(scooby.getRaza);
