import { CardContext } from "../../context/CardContext";
import { useContext } from "react";
import "./NewGameButton.scss";
const NewGameButton = () => {
	const { handleNewGame } = useContext(CardContext);
	return (
		<>
			<button id="new-game-btn" onClick={handleNewGame}>
				New Game
			</button>
		</>
	);
};

export default NewGameButton;
