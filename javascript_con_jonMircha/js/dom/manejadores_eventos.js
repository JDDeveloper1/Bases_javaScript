

//Eventos con atrubutos html
function holaMundo() {
    alert("Hola Mundo");
    console.log(Event);
}

/*Evento con Manejador semantico - cuando se crea una nueva funcion, el valor cambia 
y solo se cumple la ultima funcion de la varible onclick*/
const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo; 
$eventoSemantico.onclick = function (e){
    alert("Nuevo Manejador semantico");
    console.log(e);// lamando el parametro
}

/* 
evento multiple
*/

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",  holaMundo);
$eventoMultiple.addEventListener("click",(e) => {
    alert("Manejador de Eventos Multiple");
    console.log(e);
    console.log(e.type);//tipo
    console.log(e.target);// donde proviene
});
