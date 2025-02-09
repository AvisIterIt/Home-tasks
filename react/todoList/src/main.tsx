import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppWithAnime } from "./components/App/App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppWithAnime />
    </StrictMode>
);
