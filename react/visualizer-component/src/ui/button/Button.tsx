import clsx from "clsx";
import { Text } from "../text/Text";
import styles from "./button.module.css";

type buttonProps = {
    title: string;
    onClick?: () => void;
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    type: "apply" | "clear";
};

export const Button = ({ title, onClick, htmlType, type }: buttonProps) => {
    return (
        <button
            className={clsx(
                styles.button,
                { [styles.button_apply]: type === "apply" },
                { [styles.button_clear]: type === "clear" }
            )}
            onClick={onClick}
            type={htmlType}
        >
            <Text tag="p" family="open-sans" size={24} weight={400}>
                {title}
            </Text>
        </button>
    );
};
