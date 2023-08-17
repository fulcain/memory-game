import { createContext } from "react";
import { duplicatedCards } from "../data/cards";

export const CardContext = createContext({
	cards: duplicatedCards,
	setCards: () => {},
	prevClicked: undefined,
	setPrevClicked: () => {},
	amountOfClickedCards: 0,
	setAmountOfClicked: () => {},
	tries: 0,
	setTries: () => {},
	correctAnswers: 0,
	setCorrectAnswers: () => {},
	handleClickingCards: () => {},
	handleNewGame: () => {},
});
