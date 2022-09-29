// tres metodos que son muy interesantes para interactuar con el usurio, y quw cuelgan del objeto padre window que es en los nevegadores.

console.log(window);
/*
window.alert("Esto es una alerta");// nos arroja un letrero que nos dice esto es una alerta. nos sirve solo para enviar un aviso 
window.confirm("Esto es una confirmacion");// nos arroja un letrero que nos dice esto es una confimacion y nos pide aceptar o cancelar. este nos puede dar un valor true o false
window.prompt("Esto es un prompt y le permite interactuar");//este ya le permite al usuario ingresar un valor, y almacenarlo si le da aceptar = true, pero en caso que le de cancel no da null = false
*/

//en forma de variable: en forma de variable te regresa un valor con el boton aceptar o cancelar.
let alerta = alert("Hola esto es una alerta"),
    confirmacion = confirm("Esto es una confirmacion"),
    interactuar = prompt("Esto es un prompt y le permite interactuar");

console.log(alerta);// indefinido 
console.log(confirmacion);//true || false
console.log(interactuar);// el valor que agregue el usuario




