import { useState } from "react";

function MyUseState() {
    // useState - изолированная функция, которые позволяют взаимодействовать со State
    // 1-ая переменная отвечает за состояние, 2-я переменная является функцией,
    // которая позволяет изменять это состояние. В скобках указывается начальное значение (0)
    // Хук работает асинхронно, параллельный вызов useState не будет работать
    // Нельзя писать Хуки внутри условий (if/else) и циклов

    // useState
    // Любое изменение вызывает ререндер
    // Используется для управления состоянием
    // Не предназначен для работы с DOM

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        // может принимать предыдущие состояние
        // setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // Работа с объектаки состояния

    type taskType = {
        id: number;
        title: string;
        done: boolean;
    };

    const [tasks, setTasks] = useState<taskType[]>([
        {
            id: 1,
            title: "Купить хлеб",
            done: false,
        },
    ]);

    const updateTask = () => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === 1 ? { ...task, title: "Новое задание" } : task
            )
        );
    };
    return (
        <>
            <h2>useState</h2>
            <div>
                <h2>Счетчик: {count}</h2>
                <button onClick={increment}>Добавить</button>
                <button onClick={decrement}>Убавить</button>
            </div>
            <div>
                <button onClick={updateTask}>Новое задание</button>
                <pre>{JSON.stringify(tasks, null, 2)}</pre>
            </div>
        </>
    );
}

export default MyUseState;
