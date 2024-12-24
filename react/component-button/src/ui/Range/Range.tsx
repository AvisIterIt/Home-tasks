import styles from "./Range.module.css";

type RangeProps = {
    setValue: (value: number) => void;
    title: string;
    value: number;
};

export const Range: React.FC<RangeProps> = ({ setValue, title, value }) => {
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
    };
    return (
        <div className={styles.range}>
            <h2>
                {title}: {value}px
            </h2>

            <div className={styles.rangeContainer}>
                <span>0</span>
                <input
                    value={value}
                    className={styles.inputLine}
                    max={100}
                    min={0}
                    type="range"
                    onChange={handleRangeChange}
                />
                <span>100</span>
            </div>
        </div>
    );
};
