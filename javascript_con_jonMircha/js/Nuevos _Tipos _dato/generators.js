function* iterable(){
    yield "hola";
    console.log("hola Consola");
    yield "hola2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "hola3";
    yield "hola4";
}

let iterador = iterable();

/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

for (let yields of iterador) {
    console.log(yields)
}

console.log("hola si funciono el generator (*) y (yield) y el iterador for")

const arrysIterableYield = [...iterable()];
console.log(arrysIterableYield);

console.log("lo de arriba es recorrer los yields")

function cuadrado(valor){
    setTimeout(() => {
         return console.log({valor, resultado: valor * valor})
    }, Math.random() * 1000);

    
}

function* generator(){
    console.log("Inicia Generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator");
}

let gen = generator();

for(let yields of gen) {
    console.log(yields);
}