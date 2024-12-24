import clsx from "clsx";
import { Text } from "../text/Text";
import styles from "./RadioGroup.module.css";
import { OptionType } from "../../components/optionState";

export type RadioGroupProps = {
    options: OptionType[];
    selected: OptionType;
    onChange?: (value: OptionType) => void;
    title: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
    options,
    selected,
    onChange,
    title,
}) => {
    const handleChange = (value: OptionType) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={styles.radioGroup}>
            <Text tag={"h2"} family="open-sans">
                {title}
            </Text>
            <div className={styles.optionsContainer}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={clsx(
                            styles.radioOption,
                            styles[option.className],
                            {
                                [styles.selected]:
                                    selected.value === option.value,
                            }
                        )}
                        onClick={() => handleChange(option)}
                    >
                        <Text tag={"h2"} family="open-sans">
                            {option.title}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
