function cuadradoPromise(value,) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un Numero`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    });

}

async function fcAsincronaDeclarada() {
    try {
        console.log('inicio Async Function');

        let Obj = await cuadradoPromise(0);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(1);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(2);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(3);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(4);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(5);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        console.log('fin Async Function')
    } catch (err) {
        console.error(err)
    }
}

fcAsincronaDeclarada();


const fcsAsincronaExpresada =  async () => {
    try {
        console.log('continuacion Async Function');

        let Obj = await cuadradoPromise(6);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(7);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(8);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(9);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        Obj = await cuadradoPromise(10);
        console.log(`Async Function: ${Obj.value}, ${Obj.result}`);

        console.log('fin Async Function')
    } catch (err) {
        console.error(err)
    }
}

fcsAsincronaExpresada();
