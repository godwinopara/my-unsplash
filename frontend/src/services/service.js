import axios from "axios";

const baseUrl = "http://localhost:3001/images";

const getAllImages = async () => {
	const allImages = await axios.get(baseUrl);
	const data = await allImages.data;
	return data;
};

const deleteImage = async (image) => {
	const imageToDelete = await axios.delete(`${baseUrl}/${image.id}`);
	const deleteImage = await imageToDelete.data;
	return deleteImage;
};

export { getAllImages, deleteImage };
