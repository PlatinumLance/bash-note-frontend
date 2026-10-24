import styles from "./LoginForm.module.css";
import {Button} from "../../../components/Button/Button.tsx";

function LoginForm() {
    return (
        <section className={styles.loginSection}>
            <form className={styles.loginForm}>
                <h1>Welcome To Bash Note</h1>
                <h2>Sign in to your account to continue to your notes</h2>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type={"email"} required={true} placeholder={"your@example.com"}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" required={true}
                           placeholder={"Enter your password here"}/>
                </div>
                <div>
                    <Button id={"loginButton"} text={"Sign in"}/>
                </div>
            </form>
        </section>
    );
}

export {LoginForm};