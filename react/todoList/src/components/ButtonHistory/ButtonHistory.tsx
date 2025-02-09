import styles from "./ButtonHistory.module.css";

type Props = {
    handleToggleClick: () => void;
};

export const ButtonHistory = (props: Props) => {
    return (
        <>
            <button onClick={props.handleToggleClick}>
                История выполненных задач
            </button>
        </>
    );
};
