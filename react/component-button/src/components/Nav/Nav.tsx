import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <h2 className={styles.text}>Navigation: </h2>
                <li className={styles.li}>
                    <Link className={styles.a} to="/">
                        Main page
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.a} to="/buttonsSettings">
                        Buttons settings
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.a} to="/Counter">
                        Counter
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.a} to="/employeeCard">
                        Employee Card
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.a} to="/controlledInput">
                        Controlled Input
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link className={styles.a} to="/progressBar">
                        Progress Bar
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
