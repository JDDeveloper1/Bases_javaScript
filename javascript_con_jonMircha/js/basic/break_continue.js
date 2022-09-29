/* break y continue
 con este declaraciones no se puede mezclar con prototypos como foraech , map etc, solo se puede mezclar con for o while, do while .*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (let i = 0; i < numeros.length; i++){
    if (i===5) {
        break;
    }
    console.log(numeros[i])
}

for (let i = 0; i < numeros.length; i++) { // continua desde el ultimo caracter que termino (termino en 5) y continua (en 7)
  if (i === 5) {
    continue;
  }
  console.log(numeros[i]);
}