// function readFile(path: string, onSuccess: (data: string) => void) {
//     setTimeout(() => {
//         const data = "Hello, Typescript";
//         onSuccess(data);
//     }, 1000);
// }
//
// readFile("./file.txt", data => {
//     console.log(`Получены данные: ${data}`);
// });

// console.log(1);
//
// setTimeout(() => {
//     const data = "Hello, Typescript";
//     console.log(`Получены данные: ${data}`);
// }, 0);
//
// console.log(2);

// pending - незаконченный
// fulfilled - завершенный с положительным исходом
// rejected - завершенный с отрицательным исходом

// resolve: pending -> fulfilled
// reject: pending -> rejected

const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const data = 10;

        if (data > 0) {
            resolve(data);
            // reject({ message: "Что-то пошло не так" });
        }

    }, 1000);

});

promise.then((data) => {
    console.log("промис перешел в состояние fulfilled, поэтому этот колбэк вызывается, data = ", data);

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({ message: "Что-то пошло не так2" });
        }, 500);
    });

    return promise2;
}).then(() => {
    console.log("promise2 перешел в состояние fulfilled, поэтому этот колбэк вызывается");
}).catch((data) => {
    console.log("Произошла ошибка", data.message);
});

// promise.catch(() => {
//     console.log("промис перешел в состояние rejected, поэтому этот колбэк вызывается");
// });

