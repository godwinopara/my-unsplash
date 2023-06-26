import axios from "axios";

const baseUrl = "http://localhost:5000/api/images";

const getToken = () => {
	const userToken = JSON.parse(localStorage.getItem("userToken"));
	if (userToken) {
		return userToken.token;
	}
	return null;
};

axios.interceptors.request.use(
	function (config) {
		const token = getToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function error(error) {
		return Promise.reject(error);
	}
);

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
