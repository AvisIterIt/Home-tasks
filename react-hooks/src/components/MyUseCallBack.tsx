import { useCallback, useEffect, useState } from "react";

function MyUseCallBack() {
    // useCallBack
    // Нужна для кэширования определенных функций между повторными рендерингами

    interface ItemsListProps {
        getItems: () => string[];
    }

    const [countTwo, setCountTwo] = useState(0);
    const [color, setColor] = useState(false);

    const styles = {
        color: color ? "red" : "white",
    };

    const generateItemsFromAPI = useCallback(() => {
        return new Array(countTwo).fill("").map((_, i) => `Элемент ${i + 1}`);
    }, [countTwo]);

    const ItemsList: React.FC<ItemsListProps> = ({ getItems }) => {
        const [items, setItems] = useState<string[]>([]);

        useEffect(() => {
            const newItems = getItems();
            setItems(newItems);
            console.log("render");
        }, [getItems]);

        return (
            <ul>
                {items.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        );
    };
    return (
        <>
            <h2>useCallBack</h2>
            <div>
                <h3 style={styles}>Счетчик: {countTwo}</h3>
                <button onClick={() => setCountTwo((prev) => prev + 1)}>
                    Добавить
                </button>
                <button onClick={() => setColor((prev) => !prev)}>
                    Поменять цвет
                </button>
                <ItemsList getItems={generateItemsFromAPI} />
            </div>
        </>
    );
}

export default MyUseCallBack;
