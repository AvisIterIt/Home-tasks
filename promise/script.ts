// Промис (Promise) — специальный объект JavaScript, который используется для написания и
// обработки асинхронного кода
// promise нужны для упрощения операций с асинхронными функциями
// resolve вызывается тогда, когда асинхронная операция завершена успешно, перевода промиса в состояние fulfilled
// reject вызывается тогда, когда асинхронная операция завершена с ошибкой, перевода промиса в состояние rejected
// методы
// fetch возвращает промис, к которому применяется метод then. Эта функция возвращает промис,
// который асинхронно предоставляет доступ к ответу сервера
// then - используют, чтобы выполнить код после успешного выполнения асинхронной операции
// catch - используют, чтобы выполнить код в случае ошибки при выполнении асинхронной операции
// finally - используют, чтобы выполнить код при завершении асинхронной операции.
// Он будет выполнен вне зависимости от того, была ли операция успешной или завершилась ошибкой

interface BackendResponse {
    server: string;
    port: number;
    status: string;
    modified?: boolean;
}

console.log("Request data...");

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...");
        const backendData = {
            server: "aws",
            port: 2000,
            status: "working",
        };
        resolve(backendData);
    }, 2000);
});

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (data as BackendResponse).modified = true;
            resolve(data);
        }, 2000);
    });
}).then((clientData) => {
    console.log("Data received...", clientData);
});
