import axios from "axios";

const baseUrl = "http://localhost:3001/images";

const getAllImages = async () => {
	const allImages = await axios.get(baseUrl);
	const data = await allImages.data;
	return data;
};

const addImage = async (image) => {
	const newImage = await axios.post(baseUrl, image);
	const data = await newImage.data;
	return data;
};

const deleteImage = async (image) => {
	const imageToDelete = await axios.delete(`${baseUrl}/${image.id}`);
};

export { getAllImages, deleteImage, addImage };
