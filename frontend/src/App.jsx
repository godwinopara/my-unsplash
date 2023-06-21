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

	const query = useQuery(["images"], getAllImages, {
		onSuccess: (images) => {
			setImages(images);
		},
	});

	const displayAddImageModal = (second) => {
		return createPortal(<AddImage />, document.body);
	};

	return (
		<>
			{displayAddImageModal()}
			<Header />
			<CardWrapper images={images} />
		</>
	);
}

export default App;
