import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";

const signUp = async (userData) => {
	const newUser = await axios.post(baseUrl, userData);
	const data = await newUser.data;
	return data;
};

const login = async (userData) => {
	const checkUser = await axios.post(`${baseUrl}/login`, userData);
	const data = await checkUser.data;
	return data;
};

export { signUp, login };
