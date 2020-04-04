import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_TheButterflyEffect = {
	id: 14,
	nameSafe: "the-butterfly-effect",
	name: "The Butterfly Effect",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "A spiral of cause and effect. Arcade-action survival puncher.",
		full: [
			{ type: "p", text: "Arcade-action survival puncher set in a spiral of cause and effect. Not just how many days can you survive, but how many <i>butterflies</i>?!" },
			{ type: "p", text: "A game that changes based on your strategies and forces you adapt in turn." },
			{ type: "list", name: "Adaptations", list: [
				"Stand still, and the game will give you bombs!",
				"Move around, and the game will give you a charge-up punch glove which you have to stand still to use.",
				"Be aggressive / eliminate all of the enemies, and the game will spawn more powerful enemies.",
				"Be passive / collect all of the + symbols, and the game will spawn more static traps e.g. buzzsaws and arrow-firing blocks.",
				"Follow specific movement patterns, and the game will take note and trim down the play area."
			] },
			{ type: "p", text: "Cool, right?" },
			{ type: "i", text: "Developed solo in ~32 hours at <a href='https://jamchester-2017.devpost.com/submissions/' target='new'>Jamchester 2017</a> in June.<br/>Winner of the Technical Achievement award!" }
		]
	},
	platforms: [

	],
	links: [

	],
	buttons: [
		{
			text: "Download Unavailable",
			url: "",
			type: "disabled"
		}
	],
	assets: {
		frontpage: ["main",1,2],
		all: [
			{ key: "main", url: "/_images/games/the-butterfly-effect/2.png", type: GameAssetType.IMAGE, size:"full" },
			{ key: 1, url: "/_images/games/the-butterfly-effect/1.png", type: GameAssetType.IMAGE },
			{ key: 2, url: "/_images/games/the-butterfly-effect/3.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_TheButterflyEffect.descriptions.short = Game_TheButterflyEffect.descriptions.full;

export default Game_TheButterflyEffect;
