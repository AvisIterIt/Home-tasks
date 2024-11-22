// Falsy - null, undefined, NaN, '', 0, false
// Truthy - ' ', 1, [], {}

// && - Возвращает первую неправду или последнее значение

//const x = 11 && 22 && "hello";
//console.log(x);

// || - Возвращает первую правду или последнее значение

//console.log(NaN || 0 || "" || false || null);

console.log(
    ((10 && 20) || (30 && 40)) && "hello" && null && ((50 && 60) || (70 && 80))
);
