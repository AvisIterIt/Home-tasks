import styles from "./DownloadFile.module.css";

type Props = {
    image: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DownloadFile = (props: Props) => {
    return (
        <>
            <div className={styles.downloadFile_container}>
                <input type="file" accept="image/*" onChange={props.onChange} />
                {props.image && (
                    <img
                        className={styles.img}
                        src={props.image}
                        alt="Предпросмотр"
                    />
                )}
            </div>
        </>
    );
};
