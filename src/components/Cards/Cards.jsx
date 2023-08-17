import { useContext } from "react";

import { CardContext } from "../../context/CardContext";
import Card from "../Card/Card";
import "./Cards.scss"
const Cards = () => {
	const { cards } = useContext(CardContext);

	return (
		<>
			<div className="Cards-container">
				{cards.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} />
				))}
			</div>
		</>
	);
};

export default Cards;
