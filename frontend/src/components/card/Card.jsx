import { useContext } from "react";
import styles from "./Card.module.css";
import imageContext from "../../context/imageContext";

const Card = ({ image }) => {
	const [state, dispatch] = useContext(imageContext);

	const handleClickOpenDeleteModal = (e) => {
		e.preventDefault();
		localStorage.setItem("image", JSON.stringify(image));
		dispatch({ type: "TOGGLE_DELETE_MODAL", payload: true });
	};

	return (
		<div>
			<figure className={styles.card}>
				<button onClick={handleClickOpenDeleteModal}>delete</button>
				<img src={image.url} alt={image.label} />
				<figcaption>{image.label}</figcaption>
			</figure>
		</div>
	);
};

export default Card;
