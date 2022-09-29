console.log(this);
this.lugar = "contexto global"

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola","perro");

const objeto = {
    lugar: "contexto objeto"
}

saludar.call(objeto, "Hola", "david");
saludar.call(null,"hola", "soto");
saludar.call(this,"hola", "soto");
saludar.apply(objeto, ["adios", "jose"]);
saludar.apply(null, ["adios", "jose"]);
saludar.apply(this, ["adios", "jose"]);


const persona = {
    nombre: "david",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona)

}

otraPersona.saludar()