import Card from "./Card";
import styles from "./Card.module.css";

const CardWrapper = ({ images }) => {
	return (
		<div className={`container ${styles.card__wrapper}`}>
			{images.map((image) => {
				return <Card key={image.id} image={image} />;
			})}
		</div>
	);
};

export default CardWrapper;
