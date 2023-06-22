import { useContext } from "react";
import logo from "../../assets/my_unsplash_logo.svg";
import { useField } from "../../hooks";
import styles from "./Header.module.css";
import imageContext from "../../context/imageContext";

const Header = () => {
	const { reset: resetSearch, ...search } = useField("text");
	const [state, dispatch] = useContext(imageContext);

	const showAddImageFormModal = () => {
		dispatch({ type: "TOGGLE_ADD_MODAL", payload: true });
	};
	return (
		<header className="container">
			<div className={styles.header__container}>
				<div>
					<img src={logo} alt="logo" />
					<input className={styles.input} {...search} />
				</div>
				<button onClick={showAddImageFormModal} className={styles.btn}>
					Add Photo
				</button>
			</div>
		</header>
	);
};

export default Header;
