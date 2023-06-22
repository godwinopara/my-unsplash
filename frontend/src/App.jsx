import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CardWrapper from "./components/Card/CardWrapper";
import { useQuery } from "@tanstack/react-query";
import { getAllImages } from "./services/service";
import { createPortal } from "react-dom";
import AddImage from "./components/AddImage/AddImageForm";
import imageContext from "./context/imageContext";
import AddImageModal from "./components/AddImage/AddImageModal";

function App() {
	const [state, dispatch] = useContext(imageContext);

	return (
		<>
			<AddImageModal />
			<Header />
			<CardWrapper images={state.images} />
		</>
	);
}

export default App;
