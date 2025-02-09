import clsx from "clsx";
import styles from "./RadioGroup.module.css";
import { OptionType } from "../../components/defaultData";

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
        if (!onChange) return;
        onChange(value);
    };

    return (
        <div className={styles.radioGroup}>
            <h2>{title}</h2>
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
                        <h2>{option.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};
