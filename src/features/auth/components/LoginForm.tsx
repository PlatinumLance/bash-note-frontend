import styles from "./LoginForm.module.css"

function LoginForm() {
	return (
		<form className={styles.loginForm}>
			<div>
				<label htmlFor="email">SIGN IN WITH EMAIL</label>
				<input id="email" name="email"/>
			</div>

			<div>
				<label htmlFor="password">PASSWORD</label>
				<input id="password" name="password" type="password"/>
			</div>
		</form>
	);
}

export {LoginForm};