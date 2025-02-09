import { useState } from "react";
import { ButtonSetting } from "../../ui/ButtonSetting/ButtonSetting";
import styles from "./SettingsForm.module.css";
import clsx from "clsx";
import { Range } from "../../ui/Range/Range";
import { RadioGroup } from "../../ui/RadioGroup/RadioGroup";
import { backgroundColorOptions, button, colorOptions } from "../defaultData";
import { Dropdown } from "../../ui/DropDown/DropDown";
import { Textarea } from "../../ui/Textarea/Textarea";
import { DownloadFile } from "../../ui/DownloadFile/DownloadFile";
import { ReflectionStyles } from "../../page/ReflectionStyles/ReflectionStyles";

type SettingFormProps = {
    buttonStyles: any;
    updateButtonStyle: (button: string, newStyles: any) => void;
    setPreImage: React.Dispatch<React.SetStateAction<string>>;
    setPostImage: React.Dispatch<React.SetStateAction<string>>;
    preImage: string;
    postImage: string;
    handleFileChange: (
        setImage: React.Dispatch<React.SetStateAction<string>>
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SettingForm: React.FC<SettingFormProps> = ({
    buttonStyles,
    updateButtonStyle,
    preImage,
    postImage,
    setPreImage,
    setPostImage,
    handleFileChange,
}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleToggleClick = () => {
        setIsOpenMenu((prev) => !prev);
    };

    const [selectedButton, setSelectedButton] = useState(button[0]);

    const handleSelect = (option: string) => {
        setSelectedButton(option);
    };

    const handleFontSizeChange = (value: number) => {
        updateButtonStyle(selectedButton, { fontSize: value });
    };

    const handlePaddingXChange = (value: number) => {
        updateButtonStyle(selectedButton, { paddingX: value });
    };

    const handlePaddingYChange = (value: number) => {
        updateButtonStyle(selectedButton, { paddingY: value });
    };

    const handleRoundingChange = (value: number) => {
        updateButtonStyle(selectedButton, { rounding: value });
    };

    const handleColorChange = (value: string) => {
        updateButtonStyle(selectedButton, { color: value });
    };

    const handleBackgroundColorChange = (value: string) => {
        updateButtonStyle(selectedButton, { backgroundColor: value });
    };
    const handleTextChange = (value: string) => {
        updateButtonStyle(selectedButton, { text: value });
    };

    return (
        <>
            <ButtonSetting isOpen={isOpenMenu} onClick={handleToggleClick} />
            <aside
                className={clsx(styles.container, {
                    [styles.container_open]: isOpenMenu,
                })}
            >
                <form className={styles.form}>
                    <h2>Настройки</h2>
                    <Dropdown
                        options={button}
                        placeholder="Выберите какой компонент хотите изменить"
                        onSelect={handleSelect}
                    />
                    <Range
                        title="Размер шрифта"
                        setValue={handleFontSizeChange}
                        value={buttonStyles[selectedButton].fontSize}
                    />
                    <Range
                        title="Горизонтальные отступы"
                        setValue={handlePaddingXChange}
                        value={buttonStyles[selectedButton].paddingX}
                    />
                    <Range
                        title="Вертикальные отступы"
                        setValue={handlePaddingYChange}
                        value={buttonStyles[selectedButton].paddingY}
                    />
                    <Range
                        title="Скругление"
                        setValue={handleRoundingChange}
                        value={buttonStyles[selectedButton].rounding}
                    />
                    <RadioGroup
                        title="Цвет текста"
                        options={colorOptions}
                        selected={
                            colorOptions.find(
                                (option) =>
                                    option.value ===
                                    buttonStyles[selectedButton].color
                            ) || colorOptions[0]
                        }
                        onChange={(option) => handleColorChange(option.value)}
                    />
                    <RadioGroup
                        title="Цвет фона"
                        options={backgroundColorOptions}
                        selected={
                            backgroundColorOptions.find(
                                (option) =>
                                    option.value ===
                                    buttonStyles[selectedButton].backgroundColor
                            ) || colorOptions[0]
                        }
                        onChange={(option) =>
                            handleBackgroundColorChange(option.value)
                        }
                    />
                    <Textarea
                        title="Текст кнопки"
                        setValue={handleTextChange}
                        value={buttonStyles[selectedButton].text}
                    />
                    <DownloadFile
                        header="Иконка перед текстом"
                        image={preImage}
                        onChange={handleFileChange(setPreImage)}
                    />
                    <DownloadFile
                        header="Иконка после текста"
                        image={postImage}
                        onChange={handleFileChange(setPostImage)}
                    />
                    <ReflectionStyles
                        header="Копирование стилей кнопки"
                        buttonStyles={buttonStyles}
                        selectedButton={selectedButton}
                    />
                </form>
            </aside>
        </>
    );
};
