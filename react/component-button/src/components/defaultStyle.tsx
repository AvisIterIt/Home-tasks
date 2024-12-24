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

export const backgroundColorOptions: OptionType[] = [
    { title: "Белый", value: "#fff", className: "colorWhite" },
    { title: "Оранжевый", value: "#ffa500", className: "colorOrange" },
    { title: "Зеленый", value: "#008000", className: "colorGreen" },
];

export const button = ["Кнопка 1", "Кнопка 2", "Кнопка 3", "Кнопка 4"];

export const buttonDefaultStyle = {
    "Кнопка 1": {
        fontSize: 18,
        paddingX: 24,
        paddingY: 12,
        rounding: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
    "Кнопка 2": {
        fontSize: 18,
        paddingX: 24,
        paddingY: 12,
        rounding: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
    "Кнопка 3": {
        fontSize: 18,
        paddingX: 24,
        paddingY: 12,
        rounding: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
    "Кнопка 4": {
        fontSize: 18,
        paddingX: 24,
        paddingY: 12,
        rounding: 8,
        color: "#000",
        backgroundColor: "#fff",
    },
};
