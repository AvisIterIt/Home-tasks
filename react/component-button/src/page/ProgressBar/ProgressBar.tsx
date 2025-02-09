import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
    max: number;
    value: number;
};

export const ProgressBar = ({ max, value }: ProgressBarProps) => {
    return (
        <div className={styles.container}>
            <progress
                className={styles.progress}
                max={max}
                value={value}
            ></progress>
        </div>
    );
};
