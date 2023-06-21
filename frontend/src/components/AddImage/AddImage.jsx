import { useField } from "../../hooks";

const AddImage = () => {
	const label = useField("text");
	const imageUrl = useField("text");

	return (
		<form>
			<h1 className="text-center">Add a New Photo</h1>

			<div>
				<div>
					<label htmlFor="image-label">Label:</label>
					<input {...label} />
				</div>
				<div>
					<label htmlFor="image-url">Photo Url:</label>
					<input {...imageUrl} />
				</div>
			</div>
		</form>
	);
};

export default AddImage;
