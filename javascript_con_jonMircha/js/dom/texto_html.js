
const $whatsIsDom = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objeto del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para
documentos HTML y XML.
</p>
<hr>
<p>
Éste proveé una representación estructural del documento, 
permitiendo modificar su contenido y presentacion visual mediante código JS.
</p>
<hr>
<p>
<mark>El DOM no es parte de la especificacion de javaScript, es una API para los Navegadores</mark>
</p>
`;

/* $whatsIsDom.innerText = text; // Creado para internet explorer ( ya no se utiliza) */
/* $whatsIsDom.textContent = text; // Nos Contiene la insercion de texto. */
/* $whatsIsDom.innerHTML = text; // remplaza el contenido html del elemento dom */
$whatsIsDom.outerHTML = text; // remplza el elemto del dom completo.