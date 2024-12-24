import { Button } from "../../ui/button/Button";
import { Text } from "../../ui/text/Text";
import styles from "./Article.module.css";

export const Article = () => {
    return (
        <article className={styles.article}>
            <Text
                tag="h1"
                children="Smash Mouth - All Star"
                size={36}
                weight={800}
                family="open-sans"
            />
            <iframe
                src="https://vkvideo.ru/video_ext.php?oid=2486294&id=456239133&hd=2&autoplay=1"
                width="853"
                height="480"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            ></iframe>

            <Text tag="p" size={18} weight={400} family="open-sans">
                'Шрек' стал лучшим мультфильмом детства, потому что он разрушил
                шаблоны сказок, сочетая юмор, искренность и глубокие темы.
                Персонажи — от Шрека до Осла — запоминаются своей уникальностью
                и человечностью, а их диалоги полны остроумия, понятного как
                детям, так и взрослым. История учит важности принятия себя,
                дружбы и любви, не зависящей от внешности. Саундтрек идеально
                передает настроение, делая мультфильм ещё более эмоциональным и
                ярким. Это был не просто мультфильм — это была революция,
                которая показывала, что героем может быть любой, независимо от
                его внешности или прошлого.
            </Text>
            <Button title="Нажми меня" />
        </article>
    );
};
