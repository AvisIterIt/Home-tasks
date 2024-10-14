const black: number[] = [0, 0, 0];

function getColorShades(
  firstColor: number[],
  lastColor: number[],
  quantity: number
): number[][] {
  const shades = [];

  for (let i = 0; i < quantity; i++) {
    const r: number = (lastColor[0] - firstColor[0]) / (quantity - 1);
    const g: number = (lastColor[1] - firstColor[1]) / (quantity - 1);
    const b: number = (lastColor[2] - firstColor[2]) / (quantity - 1);

    // Округляем значения до целых
    shades.push([r, g, b]);
  }

  return shades;
}

//console.log(getColorShades([0, 0, 0], [120, 150, 190], 4));

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
