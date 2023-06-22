import { useField } from "../../hooks";
import styles from "./SignupForm.module.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
	const { reset: resetFirstname, ...firstname } = useField("text");
	const { reset: resetLastname, ...lastname } = useField("text");
	const { reset: resetEmail, ...email } = useField("email");
	const { reset: resetUsername, ...username } = useField("text");
	const { reset: resetPassword, ...password } = useField("password");

	return (
		<div className={styles.form__wrapper}>
			<div className={styles.form__heading}>
				<h1>Join MySplash</h1>
				<p>
					Aleardy have an account? <Link to="/login">Login</Link>
				</p>
			</div>
			<form>
				<div className={styles.user__details}>
					<div>
						<label htmlFor="firstname">FirstName</label>
						<input {...firstname} />
					</div>
					<div>
						<label htmlFor="lastname">LastName</label>
						<input {...lastname} />
					</div>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input {...email} />
				</div>
				<div>
					<label htmlFor="username">Username</label>
					<input {...username} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input {...password} />
				</div>
				<button>Join</button>
			</form>
		</div>
	);
};

export default SignupForm;
