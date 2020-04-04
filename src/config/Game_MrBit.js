import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_MrBit = {
	id: 12,
	nameSafe: "mr-bit",
	name: "Mr. Bit: Vacuuming Extraordinaire",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "Mr. Bit is a vacuum cleaner that LOVES to clean. CLEAN UP THE HOUSE!",
		full: [
			{ type: "p", text: "Mr. Bit is a vacuum cleaner that LOVES to clean. Fortunately he lives with a hoarder and so has to clean in daily ritual. CLEAN UP THE HOUSE!" },
			{ type: "i", text: "Developed solo at <a href='https://globalgamejam.org/2016/games/mr-bit-vacuuming-extraordinaire'>Global Game Jam 2016</a>" }
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
		frontpage: [1,2,3,4],
		all: [
			{ key: 1, url: "/_images/games/mr-bit/1.png", type: GameAssetType.IMAGE },
			{ key: 2, url: "/_images/games/mr-bit/2.png", type: GameAssetType.IMAGE },
			{ key: 3, url: "/_images/games/mr-bit/3.png", type: GameAssetType.IMAGE },
			{ key: 4, url: "/_images/games/mr-bit/4.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_MrBit.descriptions.short = Game_MrBit.descriptions.full;

export default Game_MrBit;
