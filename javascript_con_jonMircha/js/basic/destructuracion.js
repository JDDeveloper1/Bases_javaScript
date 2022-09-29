const numeros = [1, 2, 3];

// sin destructuracion
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

// con destructuracion 
const [one, two, three] = numeros;

console.log(one, two, three);

const persona = {
    nombre: "david",
    apellido: "soto",
    edad: 35
}

let { apellido, nombre, edad } = persona;
console.log(nombre, apellido, edad);

/*let { nombre1, apellido, age } = persona;
console.log(nombre, apellido, age);*/