//Los modulos son llamados de una seccion a otra.
import sayhi,{Sayhi,PI,user} from "./constantes.js"
import {ARITHMETIC} from "./aritmetica.js"


console.log("archivo modulos.js");
console.log(PI,user);
console.log(ARITHMETIC.add(7,5));
sayhi();
let sayhi = new Sayhi();
sayhi;
