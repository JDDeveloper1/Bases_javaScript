/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/*
Ejercicio 1
Programa una función que cuente el número de 
caracteres de una cadena de texto, 
ejemplo. miFuncion("Hola Mundo") devolverá 10.

//funcion declarda
export function countCharacters(str = "") {
    if (!str){
        console.warn("No ingresaste ninguna cadena")
    }else {
        console.info(`la cadena ${str} tiene ${str.length} caracteres`);
    }
}
// expresada con arrow function
const countCharacters1 = (str = "") => 
    (!str) 
    ? console.warn("No ingrestaste ninguna cadena")
    :console.info(`la cadena ${str} tiene ${str.length} caracteres`);
export default countCharacters1;
*/

/* 
Ejercicio 2 
export const TRIM_A_TEXT = (str = " ", len = undefined) =>
    (!str)
        ? console.warn("No ingresaste una cadena texto")
        : (len === undefined)
            ? console.warn("No ingresaste la longitud para recortar el texto")
            : console.info(str.slice(0, len))
*/

/*
Ejercicio 3
export const strAArr = (str = " ", separetor = undefined) =>
    (!str)
        ? console.warn("No ingresaste una cadena texto")
        : (separetor === undefined)
            ? console.warn("No ingresaste el caracter separdor")
            : console.info(str.split(separetor));
*/

/*
ejercicio 4
*/

