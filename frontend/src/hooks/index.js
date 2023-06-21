import { useState } from "react";
import axios from "axios";

export const useField = (type) => {
	const [value, setValue] = useState("");

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return { type, value, onChange };
};

export const useResource = () => {
	const [resources, setResources] = useState();

	const baseUrl = "http://localhost:3001/images";

	const getAllImages = async () => {
		const allImages = await axios.get(baseUrl);
		const data = await allImages.data;
		setResources(data);
	};

	const deleteImage = async (image) => {
		const imageToDelete = await axios.delete(`${baseUrl}/${image.id}`);
		const deleteImage = await imageToDelete.data;
		const newImages = resources.map((resource) => resource.id !== image.id);
		setResources(newImages);
	};

	const services = {
		getAllImages,
		deleteImage,
	};

	return { resources, services };
};
