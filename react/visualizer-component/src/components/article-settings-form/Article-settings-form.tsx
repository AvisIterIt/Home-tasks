import { CSSProperties, useRef, useState } from "react";
import { ButtonSetting } from "../../ui/buttonSetting/ButtonSetting";
import { Text } from "./../../ui/text/Text";
import styles from "./Article-settings-form.module.css";
import clsx from "clsx";
import { Dropdown } from "../../ui/dropDown/DropDown";
import { useClose } from "../../hooks/useClose";
import { RangeLine } from "../../ui/RangeLine/RangeLine";
import { colorOptions, defaultArticleState, OptionType } from "../optionState";
import { RadioGroup } from "../../ui/radioGroup/RadioGroup";
import { Button } from "../../ui/button/Button";

export const ArticleSettingsForm = ({
    onApply,
}: {
    onApply: (styles: CSSProperties) => void;
}) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleToggleClick = () => {
        setIsOpenMenu((prev) => !prev);
    };

    const handleSelect = (option: string) => {
        console.log("Выбрана опция:", option);
    };

    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useClose({
        isOpen: isOpenMenu,
        onClose: () => setIsOpenMenu(false),
        rootRef: sidebarRef,
    });

    const [selectedOption, setSelectedOption] = useState(colorOptions[0]);

    const handleOptionChange = (option: OptionType) => {
        setSelectedOption(option);
        console.log("Selected:", option);
    };

    const [selectedFontSize, setSelectedFontSize] = useState(
        defaultArticleState.fontSizeOption
    );

    const [selectedFontColor, setSelectedFontColor] = useState(
        defaultArticleState.fontSizeOption
    );

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        const styles = {
            "--font-size": selectedFontSize.value,
            "--font-color": selectedFontSize.value,
        } as React.CSSProperties;
        onApply(styles);
    };

    const handleReset = () => {
        setSelectedFontSize(defaultArticleState.fontSizeOption);
        setSelectedFontColor(defaultArticleState.fontColor);

        onApply({
            "--font-size": defaultArticleState.fontSizeOption.value,
            "--font-color": defaultArticleState.fontColor.value,
        } as CSSProperties);
    };

    return (
        <>
            <ButtonSetting isOpen={isOpenMenu} onClick={handleToggleClick} />
            <aside
                ref={sidebarRef}
                className={clsx(styles.container, {
                    [styles.container_open]: isOpenMenu,
                })}
            >
                <form action="" className={styles.form} onSubmit={handleApply}>
                    <Text tag="h2" family="open-sans" size={24} align="center">
                        Настройки
                    </Text>

                    <Dropdown
                        options={[
                            "Заголовок",
                            "Основной текст",
                            "Кнопка",
                            "Фон страницы",
                        ]}
                        placeholder="Выберите кнопку хотите изменить"
                        onSelect={handleSelect}
                    />

                    <RangeLine
                        title="Размер текста"
                        onChange={(opt) => setSelectedFontSize(opt)}
                    />

                    <RadioGroup
                        options={colorOptions}
                        selected={selectedOption}
                        onChange={handleOptionChange}
                        title="Цвет текста"
                    />

                    <Button title="Применить" htmlType="submit" type="apply" />

                    <Button
                        title="Сбросить"
                        htmlType="reset"
                        type="clear"
                        onClick={handleReset}
                    />
                </form>
            </aside>
        </>
    );
};
