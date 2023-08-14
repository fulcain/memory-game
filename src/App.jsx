// Import style
import { useState } from "react";
import { duplicatedCards } from "./data/cards";
import "./App.scss";
function App() {
	// Array of cards imported from route "./data/cards"
	const [cards, setCards] = useState(duplicatedCards);

	// State of previously which will contain clicked object + clicked object index
	// example: {value:0,src:"path/to/img",showItem:false}
	const [prevClicked, setPrevClicked] = useState();

	// Amount of clicked cards state
	let [amountOfClickedCards, setAmountOfClickedCards] = useState(0);

	// Total amounts of tries (including correct answers)
	let [tries, seTries] = useState(0);

	// Amount of correct answers
	let [correctAnswers, setCorrectAnswers] = useState(0);

	// Handle clicking cards
	const handleClickingCards = (itemIndex) => {
		// Add amount of
		setAmountOfClickedCards(++amountOfClickedCards);
		// Create a copy of the state so that we don't modify it directly
		const copyOfCards = [...cards];

		// Change the clicked object's "showItem" key of the card array
		copyOfCards[itemIndex] = {
			...copyOfCards[itemIndex],
			showItem: true,
		};

		// Update the state with the updated object value
		setCards(copyOfCards);

		// Declare the currentClicked
		const currentClicked = copyOfCards[itemIndex];

		// if prevClicked does not exists
		if (!prevClicked) {
			// Store the clicked card and index of clicked item in "prevClicked" state
			setPrevClicked({ ...currentClicked, index: itemIndex });
		} else {
			// if current clicked is equal to prevClicked
			if (currentClicked.value === prevClicked.value) {
				// Clear the prev clicked
				setPrevClicked(null);

				// Add to tries if correctAnswers are lesser than 6
				if (correctAnswers <= 8) seTries(++tries);

				// Add to correct answerers
				setCorrectAnswers(++correctAnswers);

				// Set the amount of clicked cards to 0 if they both match
				setAmountOfClickedCards(0);
			}
			// if current clicked is not equal to prevClicked
			else {
				// hide both currentClicked and prevClicked after 1 second
				setTimeout(() => {
					// Change the second clicked item state to false
					copyOfCards[itemIndex] = {
						...copyOfCards[itemIndex],
						showItem: false,
					};

					// Change the first clicked item state to false
					copyOfCards[prevClicked.index] = {
						...copyOfCards[prevClicked.index],
						showItem: false,
					};

					// Update the card state with new values
					setCards(copyOfCards);

					// Clears the prevClicked state
					setPrevClicked(null);

					// Adds one to tries state
					seTries(++tries);

					// Set the amount of clicked cards to 1 if they both match
					setAmountOfClickedCards(0);
				}, 1000);
			}
		}

		// If all are answered
		if (correctAnswers === 8) {
			// eslint-disable-next-line no-undef
			silverBox({
				theme: "dark",
				title: "You Won!",
				text: "Calculating results...",
				timer: 2000,
				position: "top-right",
				onClose: () => {
					// eslint-disable-next-line no-undef
					silverBox({
						theme: "dark",
						text: `Your Total tries(including correct ones): ${tries}`,
						onClose: () => {
							handleNewGame();
						},
						showCloseButton: true,
					});
				},
			});
		}
	};

	const handleNewGame = () => {
		seTries(0);
		setCards(duplicatedCards);
		setCorrectAnswers(0);
	};

	return (
		<div className="container text-2xl text-white">
			<div className="flex flex-col items-center gap-5">
				{/* App title */}
				<h1 className="text-center">Memory Game</h1>

				{/* New game button */}
				<button id="new-game-btn" onClick={handleNewGame}>
					New Game
				</button>

				{/* Game container */}
				<div className="game-container">
					{cards.map((item, idx) => (
						<button
							className={!item.showItem ? "card show" : "card"}
							key={idx}
							onClick={() => {
								if (amountOfClickedCards !== 2) {
									handleClickingCards(idx);
								}
							}}
							disabled={item.showItem}
						>
							<img
								src={item.src}
								className="card-image"
								draggable="false"
							/>
						</button>
					))}
				</div>
				<div className="tries">tries: {tries}</div>
			</div>
		</div>
	);
}

export default App;
