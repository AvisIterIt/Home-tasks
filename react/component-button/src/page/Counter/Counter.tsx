import { useState } from "react";
import styles from "./Counter.module.css";

type Props = {
    maxValue: number;
    minValue: number;
};

export const Counter = (props: Props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prevCounter) =>
            prevCounter >= props.maxValue ? prevCounter : prevCounter + 1
        );
    };
    const decrement = () => {
        setCounter((prevCounter) =>
            prevCounter <= props.minValue ? prevCounter : prevCounter - 1
        );
    };

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={decrement}>
                -
            </button>
            <div className={styles.div}>{counter}</div>
            <button className={styles.button} onClick={increment}>
                +
            </button>
        </div>
    );
};
