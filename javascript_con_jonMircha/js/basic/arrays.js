// Array Simple

const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a); // contenido del variable a
console.log(b); // contenido del variable b
console.log(b.length); // La propiedad length especifica el número de argumentos esperados por la función.
console.log(b[2]); // llamdado al tercer cararter
console.log(b[3]); // array dentro de otro Array
console.log(b[3][2]); // especifidad dentro de un array  que esta en otro array
console.log(b[3][3][0]); // especifidad dentro de un array  que esta en otro array

const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(100).fill(false); // nos duplica el arrar primero por la cantidad y despues con la propiedad.
console.log(d);

/* estos metodos de llamado de Array ya no se acostrumbra a utilizar
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);*/


const colores = ["Rojo", "verde", "Azul"];
console.log(colores);

colores.push("Negro"); //con este se agrega al array un string (Elemento) mas al final.
console.log(colores);

colores.pop(); // este disminuye un Elemento al Array al final
console.log(colores);


// el parametro es el Elemento que se esta iterando( al que se le esta corriendo el metodo)
// el index seria Elemento dentro del parametro, es el que inidca el indice ocupa dentro de el arreglo 
colores.forEach(function (parametro, index) {
    console.log(`<li id="${index}">${parametro}</li>`);
})


