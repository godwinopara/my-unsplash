import { useContext } from "react";
import styles from "./Card.module.css";
import { useMutation } from "@tanstack/react-query";
import { deleteImage } from "../../services/service";
import imageContext from "../../context/imageContext";

const Card = ({ image }) => {
	const [state, dispatch] = useContext(imageContext);
	const mutation = useMutation(deleteImage, {
		onSuccess: () => {
			dispatch({ type: "DELETE_IMAGE", payload: image });
		},
	});

	const handleClickDeleteImg = (e) => {
		e.preventDefault();
		mutation.mutate(image);
	};

	return (
		<div>
			<figure className={styles.card}>
				<button onClick={handleClickDeleteImg}>delete</button>
				<img src={image.url} alt={image.label} />
				<figcaption>{image.label}</figcaption>
			</figure>
		</div>
	);
};

export default Card;
