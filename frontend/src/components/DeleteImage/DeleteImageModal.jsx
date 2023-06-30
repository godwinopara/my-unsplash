import { createPortal } from "react-dom";
import DeleteImageForm from "./DeleteImageForm";
import { useContext } from "react";
import imageContext from "../../context/imageContext";

const DeleteImageModal = () => {
	const [state, dispatch] = useContext(imageContext);

	return (
		<div>{state.displayDeleteImageForm && createPortal(<DeleteImageForm />, document.body)}</div>
	);
};

export default DeleteImageModal;
