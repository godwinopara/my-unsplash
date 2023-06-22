import Logo from "../assets/my_unsplash_logo.svg";
import { useField } from "../hooks/index";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
	const { reset: resetEmail, ...email } = useField("text");
	const { reset: resetPassword, ...password } = useField("password");

	return (
		<div className={styles.login__wrapper}>
			<div>
				<div className={styles.login__heading}>
					<img src={Logo} alt="My Unsplash" />
					<h1>Login</h1>
					<p>Welcome Back</p>
				</div>
				<form>
					<div>
						<label htmlFor="email">Email</label>
						<input {...email} />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input {...password} />
					</div>
					<button>Login</button>
				</form>

				<div>
					<p>
						Don't have an account? <Link to="/signup">Join MySplash</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
