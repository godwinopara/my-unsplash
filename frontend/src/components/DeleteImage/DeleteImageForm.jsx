import { useContext, useState } from "react";
import { useField } from "../../hooks";
import styles from "./DeleteImage.module.css";

const DeleteImageForm = ({ handleDeleteImage, handleCloseModal }) => {
	const { reset: resetPasswordField, ...password } = useField("password");

	return (
		<div className={styles.form__wrapper}>
			<form>
				<h1>Are you sure?</h1>
				<label htmlFor="password">Password</label>
				<input type="text" />
				<div className={styles.btn}>
					<button onClick={handleCloseModal}>Cancel</button>
					<button onClick={handleDeleteImage}>Delete</button>
				</div>
			</form>
		</div>
	);
};

export default DeleteImageForm;
