import styles from "./Card.module.css";

const Card = ({ url, label }) => {
	return (
		<div>
			<figure className={styles.card}>
				<button>delete</button>
				<img src={url} alt={label} />
				<figcaption>{label}</figcaption>
			</figure>
		</div>
	);
};

export default Card;
