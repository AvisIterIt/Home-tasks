import { useState } from "react";
import styles from "./DropDown.module.css";

type DropdownProps = {
    options: string[];
    placeholder: string;
    onSelect: (option: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    placeholder,
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (!onSelect) return;
        onSelect(option);
    };

    return (
        <div className={styles.container}>
            <button
                type="button"
                onClick={handleToggle}
                className={styles.button}
            >
                <h2>{selectedOption || placeholder}</h2>
            </button>
            {isOpen && (
                <ul className={styles.ul}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={styles.li}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
