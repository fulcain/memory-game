import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import "./Card.scss"

import propTypes from "prop-types";

const Card = ({ item, idx }) => {
    // Context
	const { amountOfClickedCards, handleClickingCards } =
		useContext(CardContext);

	return (
		<>
			<button
				className={!item.showItem ? "card show" : "card"}
				onClick={() => {
					if (amountOfClickedCards !== 2) {
						handleClickingCards(idx);
					}
				}}
				disabled={item.showItem}
			>
				<img src={item.src} className="card-image" draggable="false" />
			</button>
		</>
	);
};

Card.propTypes = {
	idx: propTypes.number,
	item: propTypes.object,
};

export default Card;
