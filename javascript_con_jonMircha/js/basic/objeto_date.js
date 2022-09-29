// es como un contructor date - con este obtenemos el dato de la fecha - hora y zona horaria.


console.log(Date());// Fri Jun 10 2022 22:52:45 GMT+0200 (hora de verano de Europa central)

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); // nos arroja el dia del mes
console.log(fecha.getDay()); // nos arroja el dia de la semana (Dom-Sab en el numero de acupacion en el array[0-6])
console.log(fecha.getMonth());// nos arroja el mes del año ( tambien en el numero de acupacion en el array[0-11])
console.log(fecha.getFullYear()); // nos arroja el año en el que estamos
console.log(fecha.getHours());// nos arroja  la hora en la hora exacta del llamado
console.log(fecha.getMinutes());// nos arroja  el minuto exacto del llamado
console.log(fecha.getSeconds());// nos arroja  el segundo exacto del llamado
console.log(fecha.getMilliseconds());// nos arroja  el millisegundo exacto del llamado
console.log(fecha.toDateString());//  Fri Jun 10 2022 nos arroja  casi el mismo pantallazo de date, pero esta vez solo la fecha en forma de string
console.log(fecha.toLocaleString());// 10/6/2022 22:52:04
console.log(fecha.toLocaleDateString());// 10/6/2022
console.log(fecha.toLocaleTimeString());// 22:55:03
console.log(fecha.getTimezoneOffset());// zona horaria por geografia -120 con respecto a la hora o que es grenguich
console.log(fecha.getUTCDate()); // si quisera obtener el horario de una zona 10
console.log(fecha.getUTCHours());// la hora cero 
console.log(Date.now());// con este vamos a ver cuantos segunditos han pasado desde "1970" 1654894875048 -- fecha time stam, se utiliza para la base de datos 

let birthDayDavid = new Date(1992,0,14);// se le dio unos parametros * una instancia - existen otros formatos
console.log(birthDayDavid);
