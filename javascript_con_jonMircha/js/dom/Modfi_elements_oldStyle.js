const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://placeimg.com/680/680/nature/sepia" class="card-img-top" alt="Imagen Any">
    <figcaption class="card-text">Nature <span>2</span></figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[4])// despues del primer nodo [0]
$cards.insertBefore($newCard, $cards.firstElementChild); //insertar antes del primer nodo [0]

//Eliminar 
$cards.removeChild($cards.lastElementChild);// Eliminar el ultimo

//clonar
const $cloneCards = $cards.cloneNode(true);// me clona todo con true, con false solo clona las etiquetas.
document.body.appendChild($cloneCards);