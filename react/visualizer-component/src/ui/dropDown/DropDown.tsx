import { useRef, useState } from "react";
import styles from "./DropDown.module.css";
import { useClose } from "../../hooks/useClose";
import { Text } from "../text/Text";

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
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onSelect) {
            onSelect(option);
        }
    };

    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleClose = () => {
        setIsOpen(false);
    };
    useClose({ isOpen, onClose: handleClose, rootRef: dropdownRef });
    return (
        <div ref={dropdownRef} className={styles.container}>
            <button
                type="button"
                onClick={handleToggle}
                className={styles.button}
            >
                <Text tag={"p"} size={18} family="open-sans" align="center">
                    {selectedOption || placeholder || "Выберите..."}
                </Text>
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
