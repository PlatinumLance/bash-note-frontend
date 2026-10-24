import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <a href={"http://localhost:5173/"}>
                    <img src={"logo.png"} alt={"Bash Note Logo"} width={80} height={80}/>
                    Bash Note
                </a>
            </nav>
        </header>
    );
}

export {Header};