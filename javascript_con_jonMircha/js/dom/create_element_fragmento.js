const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");


$img.setAttribute("src", "https://placeimg.com/640/480/animals");
$img.setAttribute("alt", "Image Animals");

$img.classList.add("card-img-top");
$figure.classList.add("card");//insertar clases html
$figcaption.classList.add("card-text"); 

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="https://placeimg.com/640/480/people" class="card-img-top" alt="Imagen People">
<figcaption class="card-text">People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera", "verano", "Otoño", "Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(elements => {
    const $li = document.createElement("li");
    $li.textContent = elements;
    $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

//$ul2.innerHTML = "";

continentes.forEach(elements => ($ul2.innerHTML += `<li>${elements}</li>`))


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Noviembre",
    "Diciembre"
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(elements => {
    const $li = document.createElement("li");
    $li.textContent = elements;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);