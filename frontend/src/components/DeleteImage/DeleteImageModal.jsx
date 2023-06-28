import { createPortal } from "react-dom";
import DeleteImageForm from "./DeleteImageForm";
// useCont;

const DeleteImageModal = () => {
	return <div>{createPortal(<DeleteImageForm />, document.body)}</div>;
};

export default DeleteImageModal;
