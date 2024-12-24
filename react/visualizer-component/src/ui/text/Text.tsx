import { CSSProperties, ElementType, ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./text.module.css";
import stylesTextSize from "./TextSize.module.css";

type TextProps = {
    tag: ElementType;
    children: ReactNode;
    size?: number;
    weight?: 400 | 800;
    family: string;
    align?: "center" | "left";
};

export const Text = ({
    children,
    tag: Tag = "div",
    size,
    weight = 400,
    family = "open-sans",
    align = "left",
}: TextProps & { style?: CSSProperties }) => {
    const className = clsx(
        stylesTextSize[`size${size}`],
        styles[`weight${weight}`],
        styles[`${family}`],
        styles[`${align}`]
    );
    return <Tag className={className}>{children}</Tag>;
};
