import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useReducer } from "react";
import { getAllImages } from "../services/service";

// IMAGE REDUCER

const imageReducer = (state, action) => {
	switch (action.type) {
		case "SET_IMAGE": {
			return { ...state, images: action.payload };
		}
		case "ADD_IMAGE": {
			return { ...state, images: state.images.concat(action.payload) };
		}
		case "DELETE_IMAGE": {
			const updatedImages = state.images.filter((image) => image.id !== action.payload.id);
			return { ...state, images: updatedImages };
		}
		case "TOGGLE_ADD_MODAL": {
			return { ...state, displayAddImageForm: action.payload };
		}
		case "TOGGLE_DELETE_MODAL": {
			return { ...state, displayDeleteImageForm: action.payload };
		}
		case "SET_USER": {
			return { ...state, user: action.payload };
		}
		default: {
			return state;
		}
	}
};

/* =================================== */
//Context Provider

const imageContext = createContext();

/* =================================== */

export const ImageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(imageReducer, {
		images: [],
		user: "",
		displayAddImageForm: false,
		displayDeleteImageForm: false,
	});

	useEffect(() => {
		const userToken = JSON.parse(localStorage.getItem("userToken"));
		if (userToken) {
			dispatch({ type: "SET_USER", payload: userToken.username });
		}
	}, []);

	// Query database for all images and store it on state

	const query = useQuery(["images"], getAllImages, {
		onSuccess: (images) => {
			dispatch({ type: "SET_IMAGE", payload: images.images });
		},
	});

	return <imageContext.Provider value={[state, dispatch]}>{children}</imageContext.Provider>;
};

export default imageContext;
