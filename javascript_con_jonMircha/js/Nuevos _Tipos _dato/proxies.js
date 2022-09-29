// manejador proxie

const objPersona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const valManejador = {
    set(objeto,propiedad,valor) {
        if(Object.keys(objeto).indexOf(propiedad) === -1){
            return console.warn(`La propiedad "${propiedad}" No existe en el objeto persona.`);
        }

        if(
            (propiedad === "nombre" || propiedad === "apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
        ){
            return console.warn(`La propiedad "${propiedad}" sólo acepta letras y espacios en blanco.`);
        }
        objeto[propiedad] = valor;
    }
}

const david = new Proxy(objPersona,valManejador);
david.nombre = "David";
david.apellido = "Soto";
david.edad = 30;
david.twitter = "@usarName";

console.log(david);