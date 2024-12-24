import { CSSProperties, useState } from "react";
import { ArticleSettingsForm } from "../article-settings-form/Article-settings-form";
import { Article } from "../article/Article";
import { defaultArticleState } from "../optionState";
import styles from "./App.module.css";

const defaultStyles = {
    "--font-size": defaultArticleState.fontSizeOption.value,
    "--font-color": defaultArticleState.fontColor.value,
} as CSSProperties;

export function App() {
    const [articleStyles, setArticleStyles] = useState(defaultStyles);
    return (
        <main className={styles.main} style={articleStyles}>
            <ArticleSettingsForm
                onApply={(newStyles) =>
                    setArticleStyles((prev) => ({ ...prev, ...newStyles }))
                }
            />
            <Article />
        </main>
    );
}
