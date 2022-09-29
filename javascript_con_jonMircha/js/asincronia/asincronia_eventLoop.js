/* Antes de explicar como funciona el modelo de 
javascript es importante entender algunos conceptos:

procesamiento single thread y Multi thread:
Operaciones de CPU y Operaciones de I/o.
Operaciones Concurrentes y paralelas.
Operaciones Bloqueantes y No Bloqueantes.
Operaciones Sincronicas Y Asincronicas

Javascript usa un Modelo asincrono y No bloqueante,
con un loop de eventos implementados en un solo
hilo,(single thread) para opreciones de entrada y salida(input/output).
  */


/*Codigo sincrono Bloqueante*/
/* 
(()=>{
console.log("Codigo Sincrono");
console.log("inicio")

function dos() {
    console.log("Dos");
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Tres");
}
uno();
console.log("Fin")
})(); 
*/



/*Codigo Asincrono No Bloqueante*/
(()=>{
    console.log("Codigo Asincrono");
    console.log("inicio")
    
    function dos() {
        setTimeout(() => {
            console.log("Dos");
        }, 1000);
        
    }
    
    function uno(){
        setTimeout(() => {
            console.log("Uno");
        },3000);
        dos();
        console.log("Tres");
    }
    uno();
    console.log("Fin")
})();


