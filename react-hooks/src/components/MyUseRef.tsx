import { useEffect, useRef, useState } from "react";

function MyUseRef() {
    // useRef нужен для прямого доступа к HTML-элементам
    // для сохранения значения между рендерами
    // для хранения предыдущего состояния

    // useRef
    // Изменение значения не вызывает ререндер
    // Используется для хранения мутабельных данных
    // Можно работать с DOM-элементами напрямую

    const [value, setValue] = useState("initial");
    const prevValue = useRef("");

    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current++;
    });
    const inputRef = useRef(null);
    useEffect(() => {
        prevValue.current = value;
    }, [value]);
    return (
        <>
            <h2>useRef</h2>
            <div>
                <h3>Количество рендеров: {renderCount.current}</h3>
                <h2>Предыдущее состояние: {prevValue.current}</h2>
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </div>
        </>
    );
}

export default MyUseRef;
