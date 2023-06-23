import { useField } from "../../hooks";
import { signUp } from "../../services/auth";
import styles from "./SignupForm.module.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
	const { reset: resetFirstname, ...firstname } = useField("text");
	const { reset: resetLastname, ...lastname } = useField("text");
	const { reset: resetEmail, ...email } = useField("email");
	const { reset: resetUsername, ...username } = useField("text");
	const { reset: resetPassword, ...password } = useField("password");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userDetails = {
			firstname: firstname.value,
			lastname: lastname.value,
			email: email.value,
			username: username.value,
			password: password.value,
		};

		try {
			const adduser = await signUp(userDetails);
			resetFirstname();
			resetLastname();
			resetEmail();
			resetUsername();
			resetPassword();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={styles.form__wrapper}>
			<div className={styles.form__heading}>
				<h1>Join MySplash</h1>
				<p>
					Aleardy have an account? <Link to="/login">Login</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className={styles.user__details}>
					<div>
						<label htmlFor="firstname">FirstName</label>
						<input {...firstname} required />
					</div>
					<div>
						<label htmlFor="lastname">LastName</label>
						<input {...lastname} required />
					</div>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input {...email} required />
				</div>
				<div>
					<label htmlFor="username">Username</label>
					<input {...username} required />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input {...password} required />
				</div>
				<button type="submit">Join</button>
			</form>
		</div>
	);
};

export default SignupForm;
