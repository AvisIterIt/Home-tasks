import MyUseState from "./components/MyUseState";
import MyUseEffect from "./components/MyUseEffect";
import MyUseRef from "./components/MyUseRef";
import MyUseMemo from "./components/MyUseMemo";
import MyUseCallBack from "./components/MyUseCallBack";
import MyUseContext from "./components/MyUseContext";
import Trait from "./components/trait/Trait";
import "./App.css";

function App() {
    return (
        <>
            <div className="main-div">
                <MyUseState />
                <Trait />
                <MyUseEffect />
                <Trait />
                <MyUseRef />
                <Trait />
                <MyUseMemo />
                <Trait />
                <MyUseCallBack />
                <Trait />
                <MyUseContext />
            </div>
        </>
    );
}

export default App;
