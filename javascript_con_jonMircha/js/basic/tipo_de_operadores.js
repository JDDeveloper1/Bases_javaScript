/* operadores */

/* Aritmeticos : + - * / %  ()  : son suma, resta, multiplicacion, division, modulo, y agrupacion ( la agrupacion se define por unos parentesis() lo que esta en parentesis se ejecuta primero, despues iria raices y potencias (modulo), multiplicacion y diviosn por ultimo resta y suma,  de izquierda a derecha) */

/*let a = 5 + (5 - 10) * 3; // en este ejemplo primero se ejecuto (5 - 10) luego la multiplicacion *3 y despues +5, teniendo en cuenta que el valor ya va en negativo
let modulo = 5 % 2;

console.log(a);
console.log(modulo);// me devuelve el residuo sin la parte fracionaria de nuestra diviosion ejemplo 5 % 2 = 1 en una diviosn seria 2.5*/

/* operadores Relacionales:  >, <, >=, <=, ==, ===, !=, !==, */

/*console.log(8 > 9); // mayor = false porque 8 no es mayor que 9 y la condicion no se cumple
console.log(9 > 8); // en este casi si es true porque la condicion si la cumple.
console.log(8 >= 9); // operador conpuesto, este nos dice si es mayor o igual a nueve / false
console.log(9 >= 8); // en ese caso me retorna true porque 9 si es mayo o igual a 8
console.log(7 < 7); // es false porque 7 no es menor a 7
console.log(7 <= 7); // en este caso si da true, porque si bien no es menor, si es igual 7 a 7*/

/* = 1 igual  al lado izquiero es a asignacion de variable.
   == 2 iguales es comparacion de valores y con eso todo lo toma como un caracter
   === 3 iguales es la comparaion de tipo de dato y valor utilizar siempre la comparacion triple
*/

/*console.log(7 == 7); // ambos elementos son numeros 
console.log("7" == 7); // "7" cadena y 7 numero
console.log(0 == false); // 0 numero y el otro booleano

console.log(7 === 7); // ambos elementos son numeros 
console.log("7" === 7); // "7" cadena y 7 numero como aca hay uno cadena y el otro numero nos dara false
console.log(0 === false); // 0 numero y el otro booleano dara false */

// incremento y decremento son operadores con la capacidad de darle a una variable controlar mi flujo dentro la programacion de mi programa para aumentar su unidad o en mas

let i = 1;

//i = i + 2;  aca me sumaria y tendria una sumatoria donde i +2 = 3

/*i += 2; // con esto seria una expresion igual al ejemplo anteior donde el resultado es = 3
i /= 3;
i *= 4;*/


//operadores Unario: con esto hago que la variable o valor  se sume o reste de uno en 1
i++;
i--;
++i; // en estos casos son especiales porque puede influir en como se ejecuta el valor 
--i;
console.log(i)


/*Operadores Logicos
! - Not : Niega es decir que lo que es verdadero no lo vuelve falso y viceversa
|| - Or : cuando tengo 2 o mas condiciones, con que una se cumpla, es decir sea verdadera, el || (Or) sera true
&& - and : cuando tengo 2  o mas condidiciones, todas tienen que cumplirs, es decir ser verdaderas, para que && (And) se ejecute

 ejemplo necesito comparar 2 condiciones al mismo tiempo puedo utilizar el or( || ) o el and (&&)*/


console.log(!true) // esto me lo vuelve falso
console.log(!false) // esto me lo vuelve verdadero
console.log((9 === 9) || ("9" === 9)); // este ejemplo no deberia dar falso por que uno es nueve string y el otro numero por lo mismo no son iguales en dato y valor, pero  con or estamos diciendo que asi sea que en alguna de las 2 se cumpla valide y de como resultado true
console.log(9 === 9) && ("9" === 9); // aqui aplica el &&


