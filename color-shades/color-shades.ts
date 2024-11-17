const firstColor = document.querySelector(
    ".color-shades__color-input-first"
) as HTMLInputElement;
const lastColor = document.querySelector(
    ".color-shades__color-input-last"
) as HTMLInputElement;

const quantityInput = document.querySelector(
    ".color-shades__range-input"
) as HTMLInputElement;

const colorItemOne = document.querySelector(
    ".background-color-one"
) as HTMLDivElement;
const colorItemTwo = document.querySelector(
    ".background-color-two"
) as HTMLDivElement;
const colorItemThree = document.querySelector(
    ".background-color-three"
) as HTMLDivElement;
const colorItemFour = document.querySelector(
    ".background-color-four"
) as HTMLDivElement;

const challengeButton = document.querySelector(
    ".color-shades__challenge-button"
) as HTMLButtonElement;

const colorResult = document.querySelector(".color-result")!;

const valueColor = document.querySelector(
    ".color-shades__value-color"
) as HTMLDivElement;

quantityInput.addEventListener("input", () => {
    valueColor.innerHTML = `${quantityInput.value}`;
});

// Перевод из HEX в RGB
function hexToRgb(hex: string) {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}

// Получение цветового градиента

function getColorShades(
    firstColor: number[],
    lastColor: number[],
    quantity: number
): number[][] {
    const shades: number[][] = [];

    for (let i = 0; i < quantity; i++) {
        const r: number =
            firstColor[0] +
            ((lastColor[0] - firstColor[0]) * i) / (quantity - 1);
        const g: number =
            firstColor[1] +
            ((lastColor[1] - firstColor[1]) * i) / (quantity - 1);
        const b: number =
            firstColor[2] +
            ((lastColor[2] - firstColor[2]) * i) / (quantity - 1);

        shades.push([Math.round(r), Math.round(g), Math.round(b)]);
    }

    return shades;
}

challengeButton.addEventListener("click", () => {
    colorResult.innerHTML = "";

    const number = Number(quantityInput.value);

    const firstColorHex = firstColor.value;
    const lastColorHex = lastColor.value;

    const startColorRgb = hexToRgb(firstColorHex);
    const endColorRgb = hexToRgb(lastColorHex);

    const shades = getColorShades(startColorRgb, endColorRgb, number);

    shades.forEach((shade) => {
        const div = document.createElement("div");
        div.style.backgroundColor = `rgb(${shade})`;
        div.classList.add("color-result__item");
        colorResult.appendChild(div);
    });
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

function compareArrays<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1 == arr2) return true;
    if (arr1.length != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) return false;
    }

    return true;
}

// function compareArrays<T>(arr1: T[], arr2: T[]): boolean {
//     if (arr1 == arr2) {
//         return true;
//     } else if (arr1.length != arr2.length) {
//         return false;
//     } else {
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] != arr2[i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(compareArrays(arr1, arr1));
