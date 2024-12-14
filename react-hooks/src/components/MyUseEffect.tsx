import { useEffect, useState } from "react";

function MyUseEffect() {
    // useEffect принимает два параметра: 1-ый это функция колбек, в который будем выполнять побочные эффекты
    // (сайд-эффекты) и 2-ой параметр это массив зависимостей
    // useEffect нужен для выполнения дополнительных действий в React-компонентах, удаления слушателей событий

    const [type, setType] = useState("users");
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/${type}/1`
            );
            const json = await response.json();
            setData(json);
            return () => {
                console.log("Clean type");
            };
        };
        fetchData();
    }, [type]);
    return (
        <>
            <h2>useEffect</h2>
            <div>
                <h3>Ресурс: {type}</h3>
                <button onClick={() => setType("users")}>Пользователи</button>
                <button onClick={() => setType("todos")}>Todo</button>
                <button onClick={() => setType("posts")}>Посты</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </>
    );
}

export default MyUseEffect;
