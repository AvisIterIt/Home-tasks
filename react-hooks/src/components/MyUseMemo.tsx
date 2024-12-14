import { useMemo, useState } from "react";

function complexCompute(num: number) {
    for (let i = 0; i < 1000000000; i++) {
        return num * 2;
    }
}

function MyUseMemo() {
    // useMemo
    // нужен для оптимизации сложных процессов

    const [number, setNumber] = useState(42);
    const computed = useMemo(() => complexCompute(number), [number]);

    return (
        <>
            <h2>useMenu</h2>
            <div>
                <h3>Вычисляемое свойство: {computed}</h3>
                <button onClick={() => setNumber(number + 1)}>Добавить</button>
                <button onClick={() => setNumber(number - 1)}>Убавить</button>
            </div>
        </>
    );
}

export default MyUseMemo;
