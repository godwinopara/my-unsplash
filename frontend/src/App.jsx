import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardWrapper from "./components/Card/CardWrapper";
import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "./services/service";
import { createPortal } from "react-dom";
import AddImage from "./components/AddImage/AddImage";

function App() {
	const [images, setImages] = useState([]);
	const [showAddImageModal, setShowAddImageModal] = useState(true);

	const query = useQuery(["images"], getAllImages, {
		onSuccess: (images) => {
			setImages(images);
		},
	});

	const closeAddImageModal = () => {
		setShowAddImageModal(false);
	};

	const displayAddImageModal = () => {
		return createPortal(<AddImage onClick={closeAddImageModal} />, document.body);
	};

	return (
		<>
			{showAddImageModal && displayAddImageModal()}
			<Header />
			<CardWrapper images={images} />
		</>
	);
}

export default App;
