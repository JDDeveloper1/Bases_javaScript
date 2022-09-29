const mapa = new Map();
mapa.set("nombre", "david");
mapa.set("apellido", "Soto");
mapa.set("edad", 30);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "jose Soto")
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19,"dicininueve");
mapa.set(false,"false");
mapa.set({
    nombre: "lucy"
},{
    nombre: "David soto"
});
console.log(mapa);


for(let[key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`)
}

const mapas = new Map([
    ["nombre", "perro"],
    ["edad",7],
    ["animal", "gato"],
    [null,"null"]
]);

console.log(mapas);

const keysMaps = [...mapas.keys()];

const valuesMaps = [...mapas.values()];

console.log(keysMaps);
console.log(valuesMaps);