import { useState } from "react";
import styles from "./Textarea.module.css";

type Props = {
    placeholder: string;
    maxLength?: number;
    minLength?: number;
    name: string;
    value?: string;
    valueTextarea: string;
    setValueTextarea: (value: string) => void;
};

export const Textarea = (props: Props) => {
    const [value, setValue] = useState(props.valueTextarea);
    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const textarea = event.target;
        if (!textarea) return;
        textarea.style.height = `${40}px`;
        if (textarea.value !== "") {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
        setValue(event.target.value);
        props.setValueTextarea(event.target.value);
    };
    return (
        <>
            <textarea
                className={styles.textarea}
                name={props.name}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                minLength={props.minLength}
                onInput={handleInputChange}
                value={value}
                onChange={handleInputChange}
            ></textarea>
        </>
    );
};
