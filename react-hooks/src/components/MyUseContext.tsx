import { createContext, useContext } from "react";

const MyContext = createContext("Provider");

const External = () => {
    return (
        <MyContext.Provider value="Артем">
            <Intermediate />
        </MyContext.Provider>
    );
};

const Intermediate = () => {
    return <Internal />;
};

const Internal = () => {
    const context = useContext(MyContext);

    return (
        <>
            <h2>useContext</h2>
            <h3>Привет, {context}!</h3>
        </>
    );
};

function MyUseContext() {
    // useContext
    // Нужен для того, чтобы не прокидывать пропсы через компонент, которому они не нужны

    return (
        <>
            <External />
        </>
    );
}

export default MyUseContext;
