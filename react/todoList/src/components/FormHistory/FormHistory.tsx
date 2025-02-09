import clsx from "clsx";
import styles from "./FormHistory.module.css";
import { Task } from "../App/App";

type Props = {
    isOpenMenu: boolean;
    historyDoneTasks: Task[];
    onDeleteTask: (id: string) => void;
    onReturnTask: (id: string) => void;
};

export const FormHistory = (props: Props) => {
    return (
        <aside
            className={clsx(styles.container, {
                [styles.container_open]: props.isOpenMenu,
            })}
        >
            <form action="" className={styles.form}>
                <h2>История выполненных задач</h2>
                {props.historyDoneTasks.length > 0 ? (
                    <ul className={styles.list}>
                        {props.historyDoneTasks.map((task) => (
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

                                <div className={styles.itemContainer}>
                                    <span className={styles.item}>
                                        {task.title}
                                    </span>
                                    <div className={styles.buttonContainer}>
                                        <button
                                            onClick={() =>
                                                props.onReturnTask(task.id)
                                            }
                                        >
                                            🔄
                                        </button>
                                        <button
                                            onClick={() =>
                                                props.onDeleteTask(task.id)
                                            }
                                        >
                                            ❌
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.descriptionContainer}>
                                    <div className={styles.description}>
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
            </form>
        </aside>
    );
};
