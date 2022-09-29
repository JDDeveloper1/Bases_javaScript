/*
WeakSets 

const ws = new WeakSet();

let value1 = {"value1": 1}
let value2 = {"value2": 2}
let value3 = {"value3": 3}

ws.add(value1);
ws.add(value2);


console.log(ws);

console.log(ws.has(value1));
console.log(ws.has(value3));

ws.delete(value2);
console.log(ws);

ws.add(value2);
ws.add(value3);
console.log(ws);

setInterval(() => console.log(ws), 5000);

setTimeout(() => {
    value1 = null;
    value2 = null;
    value3 = null;
}, 2000); */

// WeakMap

const wm = new WeakMap();

let key1 = {}
let key2 = {}
let key3 = {}
let key4 = {}

wm.set(key1, 1);
wm.set(key2, 2);
console.log(wm);

console.log(wm.has(key1));
console.log(wm.has(key3));


console.log(wm.get(key1));
console.log(wm.get(key2));
console.log(wm.get(key3));

wm.delete(key2);
console.log(wm);

wm.set(key2, 4)
wm.set(key3, [("tres")] )
wm.set(key4, "cuatro" )

setInterval(() => console.log(wm), 1000);

setTimeout(() => {
    value1 = null;
    value2 = null;
    value3 = null;
}, 2000);