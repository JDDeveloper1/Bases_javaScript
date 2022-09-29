/* 
expresiones regulares: 
son una secuencia de caracteres, 
que forman un patron de busqueda, 
que pincipalmente es utilizada para la busqueda de patrones de cadenas de texto.

Banderas(comodines) que me permiten una modificacion a nuestra expresion regular. 
Ejmeplo:
"i" = Busca la primera coincidencias sin importar mayucula o minuscula 
"ig" = Busca la ultila (todas) coincidencia sin importar mayuscula o minucula.
*/

let str = "Lorem ipsum dolor sit amet consectetur adipisicin doloramque lorem."

/*
let expReg = new RegExp("lorem","ig")
// Metodo de comprobacion a la expresion regular y me retorna true = si la encuentra || false = si no la encuentra
console.log(expReg.test(str));
// Metodo que comprueba y me saca un arreglo(array) de sus caracteristicas(palabra a buscar, grupo,posicion en el index,input(en todo el string que la busque),length) si encuentra la palabra, sino la encentra nos da null = negativo
console.log(expReg.exec(str));
*/

// expresiones regulares 

// saber si se encuntra la palabra 
let expReg2 = /lorem/ig;

console.log(expReg2.test(str));
console.log(expReg2.exec(str));

// Representa un dígito del 0 al 9.
let expReg3 = /\d/ig;
console.log(expReg3.test(str));
console.log(expReg3.exec(str));
//La función de los corchetes en el lenguaje de las expresiones regulares es representar "clases de caracteres", o sea, agrupar caracteres en grupos o clases. Son útiles cuando es necesario buscar uno de un grupo de caracteres.
let expReg4 = /[0-9]/ig;
console.log(expReg4.test(str));
console.log(expReg4.exec(str));
