import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardWrapper from "./components/card/CardWrapper";
import { useQuery } from "@tanstack/react-query";

function App() {
	const [images, setImages] = useState([]);

	return (
		<>
			<Header />
			<CardWrapper images={images} />
		</>
	);
}

export default App;
