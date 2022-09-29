/* rest:  los paramertros rest son una forma de virtualmente ir agregando parametros infinitos dentro de una funcion o una variable, imaginate que tiene un arreglo pero no sabes cuantos parametros vas a recibir ahi seria bueno utilizar rest  este solo se puede escribir en funciones */

function sumar(a, b, ...c) {
    const resultado = a + b;

    c.forEach(function (n) { /* todo  lo que llegue despues de c lo voy a tratar como un arreglo*/
      resultado += n; /* en este ejemplo le estoy diciendo que despues del c me lo sume dinamicamente */
    })

    return resultado;
}

console.log(sumar(1, 2)); //  = 3
console.log(sumar(1, 2, 3, 4, 5)); //   = 15  esto quiere decir que despues del paramertro rest le estoy diciendo que dinamicamente me sume los valores acumulando el resultado 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 = 15.
console.log(sumar(1, 2, 3, 4, 5, 6)); // = 21
console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8)); // = 36


/* spread operation : tambien nos permite que una expresion la tengamos que expandir en situaciones donde tengas que almacenar multiples elemnetos. se puede ejecutar en cualquier sentencia de nuestro codigo, nos concatena tambien  */

const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2]; // con esta expresion estamos juntando los 2 arrays
console.log(arr3);
