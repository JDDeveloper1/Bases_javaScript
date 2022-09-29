/* Una funcion es un bloque de codigo autoconteniido, que se puede definir una vez y ejecutar en cualquier momento.
Opcionalamente, una funcion puede aceptar parametros y devolver un valor.

Las funciones en javaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase, porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno*/



// funcion declarada

/*function estoEsUnaFuncion() {
  //parametros (que queremos que nos haga la funcion)
  //return  invocacion de la funcion
}*/

// funciones con valores (ejmplos)
function saludar(nombre, edad) {
    console.log(`Hola Mi nombres ${nombre} y tengo${edad} años`);
}

saludar("David", 30) // con esto estoy llamando la funsion tambien


//Funciones declaradas Vs expresadas


function funcionDeclarada() {
    console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la funcion sea declarada")
}
funcionDeclarada()



// función anónima


//funcionExpresada(); Me dara error por que esta declarada antes de la funcion//


const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir, una función antes de una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
}

funcionExpresada();