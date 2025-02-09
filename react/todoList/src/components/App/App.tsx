import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import { Textarea } from "../Textarea/Textarea";
import { DownloadFile } from "../DownloadFile/DownloadFile";
import { ChoiceColor } from "../ChoiceColor/ChoiceColor";
import { ButtonHistory } from "../ButtonHistory/ButtonHistory";
import { FormHistory } from "../FormHistory/FormHistory";

export type Task = {
    id: string;
    title: string | undefined;
    done: boolean;
    description?: string;
    image?: string;
    choiceColor?: string;
};

export function AppWithAnime() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [value, setValue] = useState("");
    const [valueTextarea, setValueTextarea] = useState("");
    const [image, setImage] = useState("");

    const handleToggleClick = () => {
        setIsOpenMenu((prev) => !prev);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    };

    const pushTasks = () => {
        if (!value) return;

        const newTask: Task = {
            id: crypto.randomUUID(),
            title: value,
            done: false,
            description: valueTextarea,
            image: image,
            choiceColor: choiceColor,
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setValue("");
        setValueTextarea("");
        setImage("");
        setChoiceColor("");
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            pushTasks();
        }
    };

    const [historyDoneTasks, setHistoryDoneTasks] = useState<Task[]>([]);

    const onDeleteTask = (id: string) => {
        const filtered = tasks.filter((task) => task.id !== id);
        setTasks(filtered);
    };

    const onDoneToggleTask = (id: string) => {
        setTasks((prevTasks) => {
            const taskToMove = prevTasks.find((task) => task.id === id);
            if (!taskToMove) return prevTasks;

            const updatedTask = { ...taskToMove, done: true };

            setHistoryDoneTasks((prevHistory) => {
                if (prevHistory.some((task) => task.id === id)) {
                    return prevHistory;
                }
                return [...prevHistory, updatedTask];
            });

            return prevTasks.filter((task) => task.id !== id);
        });
    };

    const onReturnTask = (id: string) => {
        setHistoryDoneTasks((prevHistory) => {
            const taskToReturn = prevHistory.find((task) => task.id === id);
            if (!taskToReturn) return prevHistory;

            const updatedHistory = prevHistory.filter((task) => task.id !== id);

            setTasks((prevTasks) => [
                ...prevTasks,
                { ...taskToReturn, done: false },
            ]);

            return updatedHistory;
        });
    };

    const [choiceColor, setChoiceColor] = useState("");

    return (
        <>
            <FormHistory
                isOpenMenu={isOpenMenu}
                historyDoneTasks={historyDoneTasks}
                onDeleteTask={onDeleteTask}
                onReturnTask={onReturnTask}
            />
            <div className={styles.todoList}>
                <div className={styles.todoListWrapper}>
                    <h1 className={styles.wrapperTitle}>ToDo list</h1>
                    <div className={styles.wrapperBody}>
                        <div className={styles.bodyTodo}>
                            <input
                                className={styles.todoInput}
                                type="text"
                                maxLength={35}
                                onKeyDown={handleKeyDown}
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                            />
                            <button
                                className={styles.todoButton}
                                onClick={() => pushTasks()}
                            >
                                Добавить
                            </button>
                        </div>
                        <Textarea
                            name="description"
                            placeholder="Описание"
                            valueTextarea={valueTextarea}
                            setValueTextarea={setValueTextarea}
                        />
                        <ChoiceColor
                            choiceColor={choiceColor}
                            setChoiceColor={setChoiceColor}
                        />
                        <DownloadFile
                            image={image}
                            onChange={handleFileChange}
                        />
                        <ButtonHistory handleToggleClick={handleToggleClick} />

                        <div className={styles.bodyList}>
                            {tasks.length > 0 ? (
                                <ul className={styles.list}>
                                    {tasks.map((task) => (
                                        <li
                                            className={`${styles.listItem} ${
                                                task.done ? "done" : ""
                                            }`}
                                            key={task.id}
                                            style={{
                                                backgroundColor: `${task.choiceColor}`,
                                            }}
                                        >
                                            <div>
                                                {task.image ? (
                                                    <img
                                                        className={styles.img}
                                                        src={task.image}
                                                        alt="image"
                                                    />
                                                ) : (
                                                    <img
                                                        className={styles.img}
                                                        src="../src/assets/stub.jpg"
                                                        alt="stub"
                                                    />
                                                )}
                                            </div>

                                            <div
                                                className={styles.itemContainer}
                                            >
                                                <span className={styles.item}>
                                                    {task.title}
                                                </span>
                                                <div
                                                    className={
                                                        styles.buttonContainer
                                                    }
                                                >
                                                    <button
                                                        onClick={() =>
                                                            onDoneToggleTask(
                                                                task.id
                                                            )
                                                        }
                                                    >
                                                        ✅
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            onDeleteTask(
                                                                task.id
                                                            )
                                                        }
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                className={
                                                    styles.descriptionContainer
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.description
                                                    }
                                                >
                                                    Описание
                                                </div>
                                                {task.description}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <h2 className={styles.listPlaceholder}>
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
