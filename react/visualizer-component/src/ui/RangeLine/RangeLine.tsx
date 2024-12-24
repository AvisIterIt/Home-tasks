import { useState } from "react";
import styles from "./RangeLine.module.css";
import { Text } from "../text/Text";
import { OptionType } from "../../components/optionState";

type RangeLineProps = {
    onChange?: (value: OptionType) => void;
    title: string;
};

export const RangeLine: React.FC<RangeLineProps> = ({ onChange, title }) => {
    const [rangeValue, setRangeValue] = useState(18);

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        const stringValue = `${value}px`;
        setRangeValue(value);
        onChange?.({
            title,
            value: stringValue,
            className: `font-size-${value}`,
        });
    };

    return (
        <div className={styles.range}>
            <Text tag={"h3"} family="open-sans">
                {title}: {rangeValue}px
            </Text>

            <div className={styles.rangeContainer}>
                <span>0</span>
                <input
                    value={rangeValue}
                    className={styles.inputLine}
                    onChange={handleRangeChange}
                    max={100}
                    min={0}
                    type="range"
                />
                <span>100</span>
            </div>
        </div>
    );
};
