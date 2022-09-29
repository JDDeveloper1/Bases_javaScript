console.log(this);
console.log(window);
console.log(window === this);

this.nombre = "Contexto Global";
console.log(this.nombre);


//funcion declarada
function imprimir() {
    console.log(this.nombre);
}

imprimir();

const objetoimprimir ={
    nombre: "Contexto Objeto",
    imprimir: function(){
        console.log(this.nombre);
    }

}

objetoimprimir.imprimir();

const objetoimprimir2 = {
    nombre: "Contexto Objeto 2",
    imprimir // funcion ya declarada 
}

objetoimprimir2.imprimir();


// con la arrow funcion no podras crear un scope indiviadual "bloque" y nos tomara un scope global. heredan 
const objetoimprimir3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
}

objetoimprimir3.imprimir();

class Persona {
    constructor(nombre) {
        this.nombre = nombre;

        //return console.log(this.nombre);
       /*  return function () {
            console.log(this.nombre, 4);
        }; */
        return () => console.log(this.nombre, 4)
    }
}

let nombres = new Persona("David"); 

nombres();