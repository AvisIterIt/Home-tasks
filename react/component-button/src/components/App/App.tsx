import { useState } from "react";
import styles from "./App.module.css";
import { SettingForm } from "../SettingsForm/SettingsForm";
import { buttonDefaultStyle } from "../defaultStyle";

type buttonType = {
    fontSize: number;
    paddingX: number;
    paddingY: number;
    rounding: number;
    color: string;
    backgroundColor: string;
};

export function App() {
    const [buttonStyles, setButtonStyles] =
        useState<Record<string, buttonType>>(buttonDefaultStyle);

    const updateButtonStyle = (button: string, newStyles: any) => {
        setButtonStyles((prev) => ({
            ...prev,
            [button]: {
                ...prev[button],
                ...newStyles,
            },
        }));
    };

    return (
        <>
            <SettingForm
                buttonStyles={buttonStyles}
                updateButtonStyle={updateButtonStyle}
            />
            <div className={styles.container}>
                {Object.keys(buttonStyles).map((buttonName) => (
                    <button
                        key={buttonName}
                        className={styles.button}
                        style={{
                            fontSize: `${buttonStyles[buttonName].fontSize}px`,
                            color: buttonStyles[buttonName].color,
                            backgroundColor:
                                buttonStyles[buttonName].backgroundColor,
                            padding: `${buttonStyles[buttonName].paddingY}px ${buttonStyles[buttonName].paddingX}px`,
                            borderRadius: buttonStyles[buttonName].rounding,
                        }}
                    >
                        {buttonName}
                    </button>
                ))}
            </div>
        </>
    );
}

//Разобрать "CSS Modules" - сравнить с БЭМ
{
    /* 
    БЭМ преимущества
    - Уникальность классов которая приводит к минимизации конфликтов стилей
    - Переиспользуемость кода
    - Единообразие и стандартизация
    БЭМ недостатки
    - Процесс нейминга классов стал более трудоемким
    - Название классов стало более длинным, что приводит к громоздкому внешнему виду самого кода
    - Элементы стали нести в себе больше смысла чем это необходимо (стала излишне семантической)

    CSS Modules преимущества
    - Изоляция стилей
    - Система автоматически генерирует уникальные имена классов
    - Стили автоматически ограничиваются конкретным компонентом
    - Возможность использования динамических классов
    CSS Modules недостатки
    - Большое количество CSS Modules в проекте
    - Большое кол-во импортов
    - Нельзя предугадать итоговое название класса, что может затруднить отладку в панели разработчика
    */
}
