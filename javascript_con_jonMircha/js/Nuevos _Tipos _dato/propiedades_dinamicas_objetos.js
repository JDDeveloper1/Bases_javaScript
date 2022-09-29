
let aleatorio = Math.round(Math.random() * 100 + 5);

const objetoUsuarios  = {
    propeidad: "valor",// porpiedad estatica.
    [`id_${aleatorio}`]: "Valor Aleatorio"
}

console.log(objetoUsuarios);

const usuario = ["david","lucy","jose","andrea"];

usuario.forEach((usuario,index) => objetoUsuarios[`id_${index}`] = usuario);

console.log(objetoUsuarios);