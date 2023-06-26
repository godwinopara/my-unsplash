import { useEffect } from "react";
import Logo from "../assets/my_unsplash_logo.svg";
import { useField } from "../hooks/index";
import { login } from "../services/auth";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const { reset: resetEmail, ...email } = useField("text");
	const { reset: resetPassword, ...password } = useField("password");

	const navigate = useNavigate();

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const userData = { email: email.value, password: password.value };
		const data = await login(userData);
		if (data) {
			localStorage.setItem("userToken", JSON.stringify(data));
			navigate("/");
		}
	};

	return (
		<div className={styles.login__wrapper}>
			<div>
				<div className={styles.login__heading}>
					<img src={Logo} alt="My Unsplash" />
					<h1>Login</h1>
					<p>Welcome Back</p>
				</div>
				<form onSubmit={handleSubmitForm}>
					<div>
						<label htmlFor="email">Email</label>
						<input {...email} />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input {...password} />
					</div>
					<button type="submit">Login</button>
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
