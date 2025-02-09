import { useCallback, useRef, useState } from "react";
import styles from "./ControlledInput.module.css";

export const ControlledInput = () => {
    const [value, setValue] = useState("");
    console.log(value);
    const ref = useRef<HTMLInputElement | null>(null);
    const clickHandler = useCallback(() => {
        if (!ref.current) return;
        console.log(ref.current.value);
    }, [ref]);
    return (
        <>
            <h1 className={styles.header}>
                Контролируемые и неконтролируемые компоненты в React
            </h1>
            <h2 className={styles.header}>Контролируемый компонент</h2>
            <div className={styles.containerInput}>
                <input
                    className={styles.input}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className={styles.btn}>Отправить</button>
            </div>
            <h2 className={styles.header}>Неконтролируемый компонент</h2>
            <div className={styles.containerInput}>
                <input className={styles.input} type="text" ref={ref} />
                <button className={styles.btn} onClick={clickHandler}>
                    Отправить
                </button>
            </div>
            <div className={styles.containerTable}>
                <table>
                    <thead>
                        <tr>
                            <th>Вопрос</th>
                            <th>Controlled Components</th>
                            <th>Uncontrolled Components</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Определение</td>
                            <td>
                                Компонент, который сохраняет свое состояние в
                                state
                            </td>
                            <td>
                                Компонент, который хранит свое состояние в DOM,
                                доступ осуществляет через ref
                            </td>
                        </tr>
                        <tr>
                            <td>Назначение</td>
                            <td>
                                Если требуется строгий контроль за вводом –
                                лучше использовать управляемые компоненты
                            </td>
                            <td>
                                Если важна работа с DOM напрямую и минимизация
                                ререндеров – неуправляемые
                            </td>
                        </tr>
                        <tr>
                            <td>Примеры</td>
                            <td>Формы, элементы ввода, чекбоксы, селекты</td>
                            <td>
                                `input type="file"`, интеграция с jQuery,
                                анимации
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};
