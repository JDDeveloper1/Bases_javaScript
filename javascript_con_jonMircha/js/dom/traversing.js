const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//podemos acceder al elemento hijo primero y ultimo
console.log($cards.children[2]);
console.log($cards.parentElement);// padre
console.log($cards.firstChild); //primer hijo nodo
console.log($cards.firstElementChild); //primer hijo html
console.log($cards.lastChild); //ultimo hijo nodo
console.log($cards.lastElementChild); //ultimo hijo html
console.log($cards.previousSibling); //hermano antes nodo
console.log($cards.previousElementSibling); // hermano antes html
console.log($cards.nextSibling); //hermano posterior nodo
console.log($cards.nextElementSibling); //Hermano posterior html
//console.log($cards.closest()); //el padre (ancestro) mas cercano del tipo de selector que queremos
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));