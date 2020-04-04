import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_CarlHatesChristmas = {
	id: 16,
	nameSafe: "carl-hates-christmas",
	name: "Carl Hates Christmas",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "You are Carl. Carl hates Christmas!",
		full: [
			{ type: "p", text: "You are Carl. Carl hates Christmas!" },
			{ type: "p", text: "Steal all twelve presents from flat-earth santa. Make the world a better place." },
			{ type: "p", text: "Developed solo in < 48 hours for <a href='http://ldjam.com/events/ludum-dare/40/carl-hates-christmas' target='new'>Ludum Dare 40</a> compo (theme: \"The more you have, the worse it is\") in December 2017." },
			{ type: "list", name: "Ludum Dare Results", list: [
				"Overall: 95th",
				"Fun: 38th",
				"Audio: 5th"
			] }
		]
	},
	platforms: [

	],
	links: [

	],
	buttons: [
		{
			text: "Play Online",
			url: "https://gamejolt.com/games/carl-hates-christmas/301230"
		}
	],
	assets: {
		frontpage: [1,2],
		all: [
			{ key: 1, url: "/_images/games/carl-hates-christmas/2.png", type: GameAssetType.IMAGE, size:"full" },
			{ key: 2, url: "/_images/games/carl-hates-christmas/1.png", type: GameAssetType.IMAGE, size:"full" }
		]
	}
};
Game_CarlHatesChristmas.descriptions.short = Game_CarlHatesChristmas.descriptions.full;

export default Game_CarlHatesChristmas;
