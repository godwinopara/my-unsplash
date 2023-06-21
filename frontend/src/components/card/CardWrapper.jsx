import Card from "./Card";
import styles from "./Card.module.css";

const CardWrapper = ({ images }) => {
	return (
		<div className={`container ${styles.card__wrapper}`}>
			{images.map((image) => {
				return <Card url={image.url} label={image.label} />;
			})}
		</div>
	);
};

export default CardWrapper;
