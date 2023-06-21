import logo from "../../assets/my_unsplash_logo.svg";
import { useField } from "../../hooks";
import styles from "./Header.module.css";

const Header = () => {
	const search = useField("text");

	return (
		<header className="container">
			<div className={styles.header__container}>
				<div>
					<img src={logo} alt="logo" />
					<input className={styles.input} {...search} />
				</div>
				<button className={styles.btn}>Add Photo</button>
			</div>
		</header>
	);
};

export default Header;
