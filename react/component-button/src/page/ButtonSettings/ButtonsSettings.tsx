import { useState } from "react";
import styles from "./ButtonSettings.module.css";
import { SettingForm } from "../../components/SettingsForm/SettingsForm";
import { buttonDefaultStyle } from "../../components/defaultData";

type buttonType = {
    fontSize: number;
    paddingX: number;
    paddingY: number;
    rounding: number;
    color: string;
    backgroundColor: string;
    text: string;
};

export function ButtonsSettings() {
    const [buttonStyles, setButtonStyles] =
        useState<Record<string, buttonType>>(buttonDefaultStyle);

    const updateButtonStyle = (button: string, newStyles: any) => {
        setButtonStyles((prev) => ({
            ...prev,
            [button]: {
                ...prev[button],
                ...newStyles,
            },
        }));
    };

    const [preImage, setPreImage] = useState("");
    const [postImage, setPostImage] = useState("");

    const handleFileChange =
        (setImage: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        };

    return (
        <>
            <SettingForm
                buttonStyles={buttonStyles}
                updateButtonStyle={updateButtonStyle}
                preImage={preImage}
                postImage={postImage}
                setPreImage={setPreImage}
                setPostImage={setPostImage}
                handleFileChange={handleFileChange}
            />
            <div className={styles.container}>
                {Object.keys(buttonStyles).map((buttonName) => (
                    <button
                        key={buttonName}
                        className={styles.button}
                        style={{
                            fontSize: `${buttonStyles[buttonName].fontSize}px`,
                            color: buttonStyles[buttonName].color,
                            backgroundColor:
                                buttonStyles[buttonName].backgroundColor,
                            padding: `${buttonStyles[buttonName].paddingY}px ${buttonStyles[buttonName].paddingX}px`,
                            borderRadius: buttonStyles[buttonName].rounding,
                        }}
                    >
                        {preImage && (
                            <img
                                className={styles.img}
                                src={preImage}
                                alt="Иконка перед текстом"
                            />
                        )}

                        {buttonStyles[buttonName].text || buttonName}
                        {postImage && (
                            <img
                                className={styles.img}
                                src={postImage}
                                alt="Иконка перед текстом"
                            />
                        )}
                    </button>
                ))}
            </div>
        </>
    );
}
