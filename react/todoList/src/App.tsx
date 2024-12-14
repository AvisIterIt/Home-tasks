import { useRef, useState } from "react";

type Task = {
    id: number;
    title: string | undefined;
    done: boolean;
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const input = useRef<HTMLInputElement | null>(null);
    const pushTasks = () => {
        if (!input.current?.value) return;
        const newTasks: Task = {
            id: Date.now(),
            title: input.current.value,
            done: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTasks]);
        input.current.value = "";
    };

    const handleClick = () => {
        pushTasks();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            pushTasks();
        }
    };

    const onDeleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const onDoneTask = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <>
            <div className="todo-list">
                <div className="todo-list__wrapper">
                    <h1 className="wrapper__title">ToDo list</h1>
                    <div className="wrapper__body">
                        <div className="body__todo">
                            <input
                                className="todo__input"
                                type="text"
                                maxLength={35}
                                ref={input}
                                onKeyDown={handleKeyDown}
                            />
                            <button
                                className="todo__button"
                                onClick={handleClick}
                            >
                                Добавить
                            </button>
                        </div>
                        <div className="body__list">
                            {tasks.length > 0 ? (
                                <ul className="list">
                                    {tasks.map((task) => (
                                        <li
                                            className={`list__item ${
                                                task.done ? "done" : ""
                                            }`}
                                            key={task.id}
                                        >
                                            <span className="item">
                                                {task.title}
                                            </span>
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        onDoneTask(task.id)
                                                    }
                                                >
                                                    ✅
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onDeleteTask(task.id)
                                                    }
                                                >
                                                    ❌
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <h2 className="list__placeholder">
                                    Список дел пока пуст
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
