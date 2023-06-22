import SignupForm from "../components/Signup/SignupForm";
import SignupImg from "../components/Signup/SignupImg";
import styles from "./Signup.module.css";

const Signup = () => {
	return (
		<div className={styles.signup__wrapper}>
			<SignupImg />
			<SignupForm />
		</div>
	);
};

export default Signup;
