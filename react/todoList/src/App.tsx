import React from "react";
import { useRef, useState } from "react";

type Task = {
    id: number;
    title: string | undefined;
    done: boolean;
};

// let t = [];
// function setTasks(newValues: Task[]) {
//     t = newValues;
//     rerender();
// }

//const names = ["A", "B", "C"];
// const a = names[0]
// const b = names[1]
// const c = names[2]
//const [a, b, c, thereIsUndefined] = names;

//type Numbers = [number, number, number];
//const ns: Numbers = [1, 2, 3];

// Переписать setState вызовы без setTasks(() => ...) type SetStateAction<S> = S | ((prevState: S) => S);
// Разобрать "CSS Modules" - сравнить с БЭМ
// Создать свой компонент - визуализатор кнопки
// Создать свой компонент - выпадающий список

// Почему useState не возвращает объект, а кортеж ?
// function useMyState() {
//     return {
//         state: 1,
//         setState: () => {},
//     };
// }

// const { state, setState } = useMyState();

export function AppWithAnime() {
    const [tasks, setTasks] = useState<Task[]>([]);
    // const x = useState([1, 2, 3, 4, 5]);
    // const nums = x[0];
    // const setNums = x[1];
    // console.log(nums, setNums);

    // const [test, setTest] = useState<{ name: string }>({ name: "" });
    // setTest({ name: "Артем" });

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
        // setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        const filtered = tasks.filter((task) => task.id !== id);
        setTasks(filtered);
    };

    const onDoneTask = (id: number) => {
        const filtered = tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
        );
        setTasks(filtered);
    };

    //const flag = true;

    //const text = <p>Text</p>;

    //console.log(text);

    // Какие типы данны может отрисовывать реакт ? string, number, JSX.Element[]

    return (
        <>
            <div className="todo-list">
                {/* {React.createElement("h1", { className: "greeting" }, "Hello")}
                <h1 className="greeting">Hello</h1> */}
                {/* {text()} */}
                {/* {[text, text, text]}
                <p>
                    True = {true} {1}
                </p>
                <p>
                    False = {false} {"Hello"}
                </p> */}
                {/* {flag ? <p>123</p> : undefined}
                {flag && <p>123</p>} */}

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

// Не использовать дефолтные экспорты
// export default App;
