const cards = [
	{
		value: 0,
		showItem: false,
		src: "../src/assets/images/aot/Eren.webp",
	},
	{
		value: 1,
		showItem: false,
		src: "../src/assets/images/aot/Armin.webp",
	},
	{
		value: 2,
		showItem: false,
		src: "../src/assets/images/aot/Historia.webp",
	},
	{
		value: 3,
		showItem: false,
		src: "../src/assets/images/aot/levi.webp",
	},
	{
		value: 4,
		showItem: false,
		src: "../src/assets/images/aot/Mikasa.webp",
	},
	{
		value: 5,
		showItem: false,
		src: "../src/assets/images/aot/Reiner.webp",
	},
	{
		value: 6,
		showItem: false,
		src: "../src/assets/images/aot/Hange.webp",
	},
	{
		value: 7,
		showItem: false,
		src: "../src/assets/images/aot/Erwin.webp",
	},
];

export const duplicatedCards = cards
	.concat(cards)
	.sort(() => Math.random() - 0.5);
