import { createPortal } from "react-dom";
import AddImage from "./AddImageForm";
import { useContext } from "react";
import imageContext from "../../context/imageContext";

const AddImageModal = () => {
	const [state, dispatch] = useContext(imageContext);

	return <>{state.displayAddImageForm && createPortal(<AddImage />, document.body)}</>;
};

export default AddImageModal;
