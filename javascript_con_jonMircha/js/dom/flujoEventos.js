
const $divsEventos = document.querySelectorAll(".evento-flujo");

console.log($divsEventos);

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className} `);
}

$divsEventos.forEach(div => {
    /*  div.addEventListener("click", flujoEventos, false)// con el boolean lo capturo en caso de true. */
    /*  div.addEventListener("click", flujoEventos, true)// con el boolean lo capturo en caso de true. */
    div.addEventListener("click", flujoEventos, { // tambien como 3 parametro podria agregar un objeto
        capture: false,
        once:true, // con este solo se ejecuta una vez.
    })

});