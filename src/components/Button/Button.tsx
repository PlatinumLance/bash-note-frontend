import styles from "./Button.module.css";

type ButtonProps = {
    id?: string;
    text?: string;
};

function Button({ id, text }: ButtonProps) {
    return (
        <button id={id} className={styles.button}>
            {text}
        </button>
    );
}

export { Button };