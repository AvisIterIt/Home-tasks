import styles from "./Textarea.module.css";

type TextProps = {
    setValue: (value: string) => void;
    title: string;
    value: string;
};

export const Textarea = ({ setValue, value, title }: TextProps) => {
    const handleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const newValue = event.target.value;
        setValue(newValue);
    };
    return (
        <div>
            <h2>{title}</h2>
            <textarea
                maxLength={20}
                className={styles.textarea}
                value={value}
                onChange={handleTextChange}
                placeholder="Введите текст кнопки"
            />
        </div>
    );
};
