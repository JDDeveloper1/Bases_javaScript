

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className} `);
}

document.addEventListener("click",(e) => {
    console.log("Click en", e.target);

    if(e.target.matches(".evento-flujo div")){
        flujoEventos(e)
    }

    if(e.target.matches(".evento-flujo a")){
        alert("Hola este es un enlace a youtube");
        e.preventDefault();
    }
});





