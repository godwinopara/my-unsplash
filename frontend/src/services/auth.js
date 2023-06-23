import axios from "axios";

const baseUrl = "http://localhost:5170/users";

const signUp = async (userData) => {
	const newUser = await axios.post(baseUrl, userData);
	const data = await newUser.data;
	return data;
};

const login = async (userData) => {
	const checkUser = await axios.get(`${baseUrl}/${userData.email}`);
	const validData = await checkUser.data;
	return validData;
};

export { signUp, login };
