import styles from "./Button.module.css";
// Текст
// Цвет фона
// Цвет текста
// Скругление

type Props = {
    text: string;
    backgroundColor: string;
    color: string;
    borderRadius: number;
};

export const Button = (props: Props) => {
    return (
        <>
            <button
                style={{
                    backgroundColor: props.backgroundColor,
                    color: props.color,
                    fontSize: 10,
                    borderRadius: props.borderRadius,
                }}
            >
                {props.text}
            </button>
        </>
    );
};
