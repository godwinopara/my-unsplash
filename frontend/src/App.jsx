import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardWrapper from "./components/card/CardWrapper";
import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "./services/service";
function App() {
	const [images, setImages] = useState([]);

	const query = useQuery(["images"], getAllImages, {
		onSuccess: (images) => {
			setImages(images);
		},
	});

	return (
		<>
			<Header />
			<CardWrapper images={images} />
		</>
	);
}

export default App;
