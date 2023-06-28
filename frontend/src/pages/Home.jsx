import { useContext, useState } from "react";
import Header from "../components/Header/Header";
import imageContext from "../context/imageContext";
import AddImageModal from "../components/AddImage/AddImageModal";
import CardWrapper from "../components/Card/CardWrapper";
import DeleteImageModal from "../components/DeleteImage/DeleteImageModal";

const Home = () => {
	const [state, dispatch] = useContext(imageContext);

	return (
		<>
			<AddImageModal />
			<DeleteImageModal />
			<Header />
			<CardWrapper images={state.images} />
		</>
	);
};

export default Home;
