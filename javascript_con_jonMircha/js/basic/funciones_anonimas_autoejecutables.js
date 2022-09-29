/*Funciones anonimas Autoejecutables: 
es un patron para la ejecucion de codigo. 
significa que es una funcion donde englobas todas las funciones que quieres utilizar. 
las definimod, se ejecutan inmediatamnet, 
pero no tienen nombre, 
apenas carga el navegador carga el archivo. 
te permite pasar parametros de una manera mas amigable, 
y alias dentro de nuestra funcion. 
*/
/*
funcion nombrada:
alert:es una funcion que tiene nombre -  ("Hola"); Los parentesis indican que ejecucion.
alert("Hola");
*/
/*Funcion no Nombrada y que se auto ejecuta:
como es una funcion no nombrada,
toca crearle como una capsula,
dandole una referencia en memoria,
lo hacemos envolviendo todo en parentesi,
importante finalizar los parentesis con (); 
de no hacerlo podria haber una 
concatenacion de funciones
(function (){})()
function(){} = Alert funcion nombrada  - () Son los parentesis que indican ejecucion.

(function (d,w,c){}) : Pasos de parametros a la funcion con : 
d = document(documento html) / 
w = window() / 
c = console()
*/

(function(){
    console.log("Mi Primer IIFE")
})();
(function(d,w,c){
    console.log("Mi Segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document,window,console);

alert("Hola");

/* 
//Formas de escribir las funciones Anonimas Autoejecutables.
*/
//Clasica
(function (c){
    c.log("Version clasica")
})(console);

//La Crockford (JavaScript The Good Parts)
((function (c){
    c.log("Version Crockford")
})(console));

//Unaria
+function(c){
    c.log("Version Unaria")
}(console);

//Facebook
!function (c) {
    c.log("Version Facebook")
}(console);