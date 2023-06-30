import { useContext, useState } from "react";
import { useField } from "../../hooks";
import styles from "./DeleteImage.module.css";
import imageContext from "../../context/imageContext";
import { useMutation } from "@tanstack/react-query";
import { deleteImage } from "../../services/service";
import { confirmUser } from "../../services/auth";

const DeleteImageForm = ({ onSubmit }) => {
	const [state, dispatch] = useContext(imageContext);
	const image = JSON.parse(localStorage.getItem("image"));

	const { reset: resetPasswordField, ...password } = useField("password");

	const mutation = useMutation(deleteImage, {
		onSuccess: () => {
			dispatch({ type: "DELETE_IMAGE", payload: image });
			dispatch({ type: "TOGGLE_DELETE_MODAL", payload: false });
			resetPasswordField();
		},
	});

	const handleCloseModal = (e) => {
		e.preventDefault();
		dispatch({ type: "TOGGLE_DELETE_MODAL", payload: false });
	};

	const handleDeleteImage = async (e) => {
		e.preventDefault();

		const checkPassword = await confirmUser({ username: state.user, password: password.value });
		if (checkPassword.success) {
			mutation.mutate(image);
		}
	};

	return (
		<div className={styles.form__wrapper}>
			<form onSubmit={handleDeleteImage}>
				<h1>Are you sure?</h1>
				<label htmlFor="password">Password</label>
				<input {...password} />
				<div className={styles.btn}>
					<button onClick={handleCloseModal}>Cancel</button>
					<button type="sumbit">Delete</button>
				</div>
			</form>
		</div>
	);
};

export default DeleteImageForm;
