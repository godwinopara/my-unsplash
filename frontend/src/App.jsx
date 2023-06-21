import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardWrapper from "./components/card/CardWrapper";

function App() {
	const [images, setImages] = useState([
		{
			url: "https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
			label: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, iusto.",
		},
	]);

	return (
		<>
			<Header />
			<CardWrapper images={images} />
		</>
	);
}

export default App;
