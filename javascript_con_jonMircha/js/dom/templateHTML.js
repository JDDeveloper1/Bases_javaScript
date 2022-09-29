const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tech",
        img: "https://placeimg.com/680/680/tech",
    },
    {
        title: "Animals",
        img: "https://placeimg.com/680/680/animals",
    },
    {
        title: "People",
        img: "https://placeimg.com/680/680/people",
    },
    {
        title: "Arch",
        img: "https://placeimg.com/680/680/arch",
    },
    {
        title: "Animals",
        img: "https://placeimg.com/680/680/nature",
    }
];

cardContent.forEach(elemens => {
    $template.querySelector("img").setAttribute("src", elemens.img);
    $template.querySelector("img").setAttribute("alt", elemens.title);
    $template.querySelector("figcaption").textContent = elemens.title;
    
    let $clone = document.importNode($template, true);// con false solo nos copiaria la etiqueta - con true nos copiamos la etiqueta y el contenido
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);