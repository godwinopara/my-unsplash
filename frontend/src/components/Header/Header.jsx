import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/my_unsplash_logo.svg";
import imagePlaceholder from "../../assets/image-placeholder.jpg";
import { useField } from "../../hooks";
import styles from "./Header.module.css";
import imageContext from "../../context/imageContext";

const Header = () => {
	const { reset: resetSearch, ...search } = useField("text");
	const [state, dispatch] = useContext(imageContext);
	const [showSettings, setShowSettings] = useState(false);

	const navigate = useNavigate();

	const showAddImageFormModal = () => {
		const token = JSON.parse(localStorage.getItem("userToken"));
		if (token) {
			dispatch({ type: "TOGGLE_ADD_MODAL", payload: true });
		} else {
			navigate("/login");
		}
	};

	const toggleSettings = () => {
		setShowSettings(!showSettings);
	};

	return (
		<header className={`container ${styles.header}`}>
			<div className={styles.header__container}>
				<div>
					<img src={logo} alt="logo" />
					<input className={styles.input} {...search} />
				</div>
				<div className={styles.btn__wrapper}>
					{state.user === "" && (
						<Link to="/login" className={` ${styles.btn} ${styles.transparent} `}>
							Log In
						</Link>
					)}

					<button onClick={showAddImageFormModal} className={styles.btn}>
						Add Photo
					</button>
					<div onClick={toggleSettings} className={styles.image__wrapper}>
						<img src={imagePlaceholder} alt="image placeholder" />

						{/* User settings */}
						{showSettings && (
							<ul className={styles.user__settings}>
								<li>
									<Link href="/profile">View Profile</Link>
								</li>
								<li>
									<Link href="">Settings</Link>
								</li>
								<li>
									<Link href="">Logout @{state.user}</Link>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
