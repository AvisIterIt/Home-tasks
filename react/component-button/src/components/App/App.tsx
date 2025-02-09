import { Route, Routes } from "react-router-dom";
import { ButtonsSettings } from "../../page/ButtonSettings/ButtonsSettings";
import { Nav } from "./../Nav/Nav";
import { Main } from "../../page/Main/Main";
import { Counter } from "../../page/Counter/Counter";
import { EmployeeCard } from "../../page/EmployeeCard/EmployeeCard";
import { EmployeeCardInfo } from "../defaultData";
import { ControlledInput } from "../../page/ControlledInput/ControlledInput";
import { ProgressBar } from "../../page/ProgressBar/ProgressBar";

export function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/buttonsSettings" element={<ButtonsSettings />} />
                <Route
                    path="/counter"
                    element={<Counter maxValue={10} minValue={0} />}
                />
                <Route
                    path="/employeeCard"
                    element={<EmployeeCard employee={EmployeeCardInfo} />}
                />
                <Route path="/controlledInput" element={<ControlledInput />} />
                <Route
                    path="/progressBar"
                    element={<ProgressBar max={100} value={40} />}
                />
            </Routes>
        </>
    );
}

//Разобрать "CSS Modules" - сравнить с БЭМ
{
    /* 
    БЭМ преимущества
    - Уникальность классов которая приводит к минимизации конфликтов стилей
    - Переиспользуемость кода
    - Единообразие и стандартизация
    БЭМ недостатки
    - Процесс нейминга классов стал более трудоемким
    - Название классов стало более длинным, что приводит к громоздкому внешнему виду самого кода
    - Элементы стали нести в себе больше смысла чем это необходимо (стала излишне семантической)

    CSS Modules преимущества
    - Изоляция стилей
    - Система автоматически генерирует уникальные имена классов
    - Стили автоматически ограничиваются конкретным компонентом
    - Возможность использования динамических классов
    CSS Modules недостатки
    - Большое количество CSS Modules в проекте
    - Большое кол-во импортов
    - Нельзя предугадать итоговое название класса, что может затруднить отладку в панели разработчика
    */
}
