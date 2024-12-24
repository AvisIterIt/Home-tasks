export type OptionType = {
    title: string;
    value: string;
    className: string;
};

export const colorOptions: OptionType[] = [
    { title: "Черный", value: "#000", className: "colorBlack" },
    { title: "Красный", value: "#ff0000", className: "colorRed" },
    { title: "Синий", value: "#0000ff", className: "colorBlue" },
];

export const fontSizeOptions: OptionType[] = Array.from(
    { length: 101 },
    (_, i) => ({
        title: `${i}px`,
        value: `${i}px`,
        className: `font-size-${i}`,
    })
);

export const defaultArticleState = {
    fontColor: colorOptions[0],
    fontSizeOption: fontSizeOptions[18],
};
