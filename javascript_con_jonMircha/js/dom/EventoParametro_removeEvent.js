
//Evento con parametro
function saludar(nombre = "desconocid@") {
    alert(`Hola ${nombre}`);

}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("david");
});

//Evento Remover * este tiene que tener la funcion declarada o expresada, no puede ser con una function anonima 

const $eventoRemover = document.getElementById("evento-remover");

const removerDbClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDbClick);
    $eventoRemover.disabled = true; // desahabilita
};

$eventoRemover.addEventListener("dblclick", removerDbClick);