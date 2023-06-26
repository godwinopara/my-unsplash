import { useContext, useState } from "react";
import Header from "../components/Header/Header";
import imageContext from "../context/imageContext";
import AddImageModal from "../components/AddImage/AddImageModal";
import CardWrapper from "../components/Card/CardWrapper";

const Home = () => {
	const [state, dispatch] = useContext(imageContext);
	console.log(state);

	return (
		<>
			<AddImageModal />
			<Header />
			<CardWrapper images={state.images} />
		</>
	);
};

export default Home;
