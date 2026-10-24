import {LoginForm} from "../../features/auth/components/LoginForm.tsx";
import styles from "./Login.module.css";
import {Header} from "../../components/Header/Header.tsx";

function Login() {
    return (
        <>
            <div className={styles.loginPage}>
                <Header/>
                <main className={styles.loginSection}>
					<LoginForm/>
                </main>
            </div>
        </>
    );
}

export {Login};