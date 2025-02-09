import styles from "./EmployeeCard.module.css";

type Props = {
    employee: {
        id: string;
        img: string;
        name: string;
        age: number;
        address: string;
        phone: string;
    };
};

export const EmployeeCard = ({ employee }: Props) => {
    return (
        <div className={styles.container}>
            <img src={employee.img} alt="photo" />
            <div className={styles.info}>
                <p>number id: {employee.id}</p>
                <p>name: {employee.name}</p>
                <p>age: {employee.age}</p>
                <p>address: {employee.address}</p>
                <p>phone: {employee.phone}</p>
            </div>
        </div>
    );
};
