import { useMutation, useQuery } from "@tanstack/react-query";
import { useField } from "../../hooks";
import styles from "./AddImage.module.css";
import { addImage } from "../../services/service";
import { useContext } from "react";
import imageContext from "../../context/imageContext";

const AddImage = ({ onClick, onSubmit }) => {
	const { reset: resetLabel, ...label } = useField("text");
	const { reset: resetImgUrl, ...imageUrl } = useField("text");

	const [state, dispatch] = useContext(imageContext);

	const mutation = useMutation(addImage, {
		onSuccess: (image) => {
			dispatch({ type: "ADD_IMAGE", payload: image });
			resetLabel();
			resetImgUrl();
		},
	});

	const uploadImage = (e) => {
		e.preventDefault();
		const imageData = { label: label.value, url: imageUrl.value };

		mutation.mutate(imageData);
	};

	const closeAddImageModal = () => {
		dispatch({ type: "TOGGLE_ADD_MODAL", payload: false });
	};

	return (
		<div className={styles.form__wrapper}>
			<form onSubmit={uploadImage}>
				<h1 className="text-center">Add a New Photo</h1>

				<div className={styles.input__wrapper}>
					<div>
						<label htmlFor="image-label">Label</label>
						<input {...label} />
					</div>
					<div>
						<label htmlFor="image-url">Photo Url</label>
						<input {...imageUrl} />
					</div>
				</div>
				<div className={styles.btn}>
					<button onClick={closeAddImageModal}>Cancel</button>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default AddImage;
