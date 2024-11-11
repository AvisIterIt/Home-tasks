"use strict";
const firstColor = document.querySelector(".color-shades__color-input-first");
const lastColor = document.querySelector(".color-shades__color-input-last");
const quantity = document.querySelector(".color-shades__range-input");
const colorItemOne = document.querySelector(".background-color-one");
const colorItemTwo = document.querySelector(".background-color-two");
const colorItemThree = document.querySelector(".background-color-three");
const colorItemFour = document.querySelector(".background-color-four");
const challengeButton = document.querySelector(".color-shades__challenge-button");
// Перевод из HEX в RGB
function hexRgb(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}
// Получение цветового градиента
function getColorShades(firstColor, lastColor, quantity) {
    const shades = [];
    for (let i = 0; i < quantity; i++) {
        const r = firstColor[0] +
            ((lastColor[0] - firstColor[0]) * i) / (quantity - 1);
        const g = firstColor[1] +
            ((lastColor[1] - firstColor[1]) * i) / (quantity - 1);
        const b = firstColor[2] +
            ((lastColor[2] - firstColor[2]) * i) / (quantity - 1);
        shades.push([Math.round(r), Math.round(g), Math.round(b)]);
    }
    return shades;
}
// Установка градиентов в HTML
function challenge(result) {
    switch (result.length) {
        case 4: {
            colorItemOne.style.backgroundColor = `rgb(${result[0]})`;
            colorItemTwo.style.backgroundColor = `rgb(${result[1]})`;
            colorItemThree.style.backgroundColor = `rgb(${result[2]})`;
            colorItemFour.style.backgroundColor = `rgb(${result[3]})`;
            break;
        }
        case 3: {
            colorItemOne.style.backgroundColor = `rgb(${result[0]})`;
            colorItemTwo.style.backgroundColor = `rgb(${result[1]})`;
            colorItemThree.style.backgroundColor = `rgb(${result[2]})`;
            colorItemFour.style.backgroundColor = `rgb(255, 255, 255)`;
            break;
        }
        case 2: {
            colorItemOne.style.backgroundColor = `rgb(${result[0]})`;
            colorItemTwo.style.backgroundColor = `rgb(${result[1]})`;
            colorItemThree.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemFour.style.backgroundColor = `rgb(255, 255, 255)`;
            break;
        }
        case 1: {
            colorItemOne.style.backgroundColor = `rgb(${result[0]})`;
            colorItemTwo.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemThree.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemFour.style.backgroundColor = `rgb(255, 255, 255)`;
            break;
        }
        case 0: {
            colorItemOne.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemTwo.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemThree.style.backgroundColor = `rgb(255, 255, 255)`;
            colorItemFour.style.backgroundColor = `rgb(255, 255, 255)`;
            break;
        }
    }
}
// Сбор значений из input-ов и вызов функций
challengeButton.addEventListener("click", () => {
    const firstColorHex = firstColor.value;
    const lastColorHex = lastColor.value;
    const startColorRgb = hexRgb(firstColorHex);
    const endColorRgb = hexRgb(lastColorHex);
    const result = getColorShades(startColorRgb, endColorRgb, quantity.valueAsNumber);
    challenge(result);
});
//  0 0 0
//  100 100 100
// 4
// 100 200 4
// 1) 100
// 2) 133
// 3) 166
// 4) 200
// const step = (200 - 100) / (4 - 1)
// 0 - нач цвет
// 18 - кол-во оттенков
// 240 - кон цвет
// (240 - 0) / (18 - 1)
// Формула линейной интерполяции
// C shades = C start + (C end - C start)*i) / quantity - 1
//
