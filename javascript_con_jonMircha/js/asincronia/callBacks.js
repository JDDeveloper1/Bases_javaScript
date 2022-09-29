function cuadradoCallBack(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

cuadradoCallBack(0, (value, result) => {
    console.log("inicia Callback");
    console.log(`CallBack: ${value}, ${result}`);
    cuadradoCallBack(1, (value, result) => {
        console.log(`CallBack: ${value}, ${result}`);
        cuadradoCallBack(2, (value, result) => {
            console.log(`CallBack: ${value}, ${result}`);
            cuadradoCallBack(3, (value, result) => {
                console.log(`CallBack: ${value}, ${result}`);
                cuadradoCallBack(4, (value, result) => {
                    console.log(`CallBack: ${value}, ${result}`);
                    cuadradoCallBack(5, (value, result) => {
                        console.log(`CallBack: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});