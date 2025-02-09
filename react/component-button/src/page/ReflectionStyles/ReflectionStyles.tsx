import { useState } from "react";
import styles from "./ReflectionStyles.module.css";

type ReflectionStylesProps = {
    buttonStyles: any;
    selectedButton: string;
    header: string;
};

export const ReflectionStyles = ({
    buttonStyles,
    selectedButton,
    header,
}: ReflectionStylesProps) => {
    const [buttonText, setButtonText] = useState("Копировать");

    const handleCopyChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const styleText = `
            font-size: ${buttonStyles[selectedButton].fontSize};
            color: ${buttonStyles[selectedButton].color};
            background-color: ${buttonStyles[selectedButton].backgroundColor};
            padding: ${buttonStyles[selectedButton].paddingX}px ${buttonStyles[selectedButton].paddingY}px;
            border-radius: ${buttonStyles[selectedButton].rounding}px;
        `;

        navigator.clipboard
            .writeText(styleText.trim())
            .then(() => {
                setButtonText("Стили скопированы...");

                setTimeout(() => {
                    setButtonText("Копировать");
                }, 2000);
            })
            .catch((err) => {
                console.error("Ошибка копирования: ", err);
                setButtonText("Ошибка копирования...");
                setTimeout(() => {
                    setButtonText("Копировать");
                }, 2000);
            });
    };
    return (
        <div className={styles.container}>
            <h2>{header}</h2>
            <p className={styles.text}>
                font-size: {buttonStyles[selectedButton].fontSize};
                <br /> color: {buttonStyles[selectedButton].color};
                <br /> background-color:{" "}
                {buttonStyles[selectedButton].backgroundColor};
                <br /> padding: {buttonStyles[selectedButton].paddingX}px{" "}
                {buttonStyles[selectedButton].paddingY}px;
                <br /> border-radius: {buttonStyles[selectedButton].rounding}px;
                <br />
            </p>
            <button className={styles.button} onClick={handleCopyChange}>
                {buttonText}
            </button>
        </div>
    );
};
