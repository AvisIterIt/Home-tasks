import styles from "./ChoiceColor.module.css";

type Props = {
    choiceColor: string;
    setChoiceColor: (value: string) => void;
};

export const ChoiceColor = (props: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setChoiceColor(e.target.value);
    };
    return (
        <>
            <div className={styles.ChoiceColorContainer}>
                <p className={styles.ChoiceColorText}>Выбор цвета задачи</p>
                <input
                    className={styles.ChoiceColorInput}
                    type="color"
                    name="ChoiceColor"
                    id=""
                    value={props.choiceColor}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};
