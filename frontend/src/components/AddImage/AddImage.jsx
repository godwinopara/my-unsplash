import { useField } from "../../hooks";
import styles from "./AddImage.module.css";

const AddImage = ({ onClick, onSubmit }) => {
	const label = useField("text");
	const imageUrl = useField("text");

	const uploadImage = () => {};

	return (
		<div className={styles.form__wrapper}>
			<form>
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
					<button onClick={onClick}>Cancel</button>
					<button onSubmit={uploadImage}>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default AddImage;
