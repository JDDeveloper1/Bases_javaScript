//alert("Alerta");
//confirm("confirmacion");
//prompt("Aviso");


const $btnAbrir = document.getElementById("abrir-ventana"); // ventana emergente
const $btnCerrar = document.getElementById("cerrar-ventana"); // cerrar ventana emergente
const $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
   ventana = window.open("https://www.youtube.com/");
});

$btnCerrar.addEventListener("click", (e) => {
    //window.close()// Me cierra la venta propia sino le paso alguna parametro o propiedad(variable)
    ventana.close();// ya pasandole la varible me cierra la ventana emergente.
});

$btnImprimir.addEventListener("click", (e) => {
    window.print();// nos imrpime la pantalla.
});