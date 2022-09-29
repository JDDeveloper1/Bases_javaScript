let id = Symbol("id");

let id2 = Symbol("id2");

console.log(id === id2);
console.log(id,id2);
console.log(typeof id, typeof id2);

const NAME =  Symbol("nombre");
const SALUDAR = Symbol("saludar");

const personal = {
    [NAME]: "david",
    edad: 30
}

console.log(personal);

personal.NAME = "david Soto";

console.log(personal);
console.log(personal.NAME);
console.log(personal[NAME]);

personal[SALUDAR] = function() {
    console.log("hola")
}

console.log(personal);
personal[SALUDAR]();

for (let propiedad in personal) {
    console.log(propiedad);
    console.log(personal[propiedad]);
}

console.log(Object.getOwnPropertySymbols(personal));