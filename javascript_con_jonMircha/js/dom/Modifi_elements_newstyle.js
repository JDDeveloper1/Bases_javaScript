/*
.insertAdjacent...
.inserAdjacentElement(position. element)
.insertAdjacentHTML(position, html)
.insertAdjacentText(position, text)

posiciones:
beforebegin(hermano anterio)
afterbegin(primer Hijo)
beforeend(ultimo Hijo)
afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
    <img src="https://placeimg.com/680/680/arch/sepia" class="card-img-top" alt="Imagen Any">
    <figcaption class="card-text"></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);//insertar html 
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "any")//insertar text

//$cards.insertAdjacentElement("afterbegin", $newCard) // antes del primer hijo nodo (la primera tarjeta)

//$cards.insertAdjacentElement("beforebegin", $newCard)// antes del nodo de referencia (en este ejemplo es la section de tarjetas) (hermano anterio)

//$cards.insertAdjacentElement("beforeend", $newCard) // despues del ultimo hijo nodo (ultima tarjeta)

//$cards.insertAdjacentElement("afterend", $newCard)// despues del nodo de refencia (en este ejemplo es la section de tarjetas)

$cards.prepend($newCard); // antes del primer hijo nodo (la primera tarjeta) formato ajax

//$cards.before($newCard); //(hermano anterior) formato ajax

//$cards.append($newCard); //(ultimo Hijo) formato ajax

//$cards.after($newCard); //(hermano siguiente) formato ajax