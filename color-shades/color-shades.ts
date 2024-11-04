function getColorShades(firstColor: number[], lastColor: number[], quantity: number): number[][] {
    const shades: number[][] = []

    for (let i = 0; i < quantity; i++) {
        const r: number = firstColor[0] + ((lastColor[0] - firstColor[0]) * i) / (quantity - 1)
        const g: number = firstColor[1] + ((lastColor[1] - firstColor[1]) * i) / (quantity - 1)
        const b: number = firstColor[2] + ((lastColor[2] - firstColor[2]) * i) / (quantity - 1)

        shades.push([Math.round(r), Math.round(g), Math.round(b)])
    }

    return shades
}

console.log(getColorShades([0, 0, 0], [120, 150, 190], 4))

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
