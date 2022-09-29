const $divsEventos = document.querySelectorAll(".evento-flujo div");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className} `);
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos);
});

const $linkEventos = document.querySelector(".evento-flujo a");

$linkEventos.addEventListener("click",(e) =>{
    alert("Hola este es un enlace a youtube");
    e.preventDefault();
    
})