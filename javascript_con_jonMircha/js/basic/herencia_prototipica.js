function Animal(nombre,genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;  
}


Animal.prototype.sonar = function () {
    console.log("hago sonido por que estoy vivo")
}
Animal.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre}`)
}
//Herencia Prototipica
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;

}
// perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = perro;

//Sobre escritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function(){
    console.log("guao guao guao")
}

 const snoopy = new Perro("Snoopy", "Macho", "mediano"),
    lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();



















