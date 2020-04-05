import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_EST100 = {
	id: 11,
	nameSafe: "est-100",
	name: "EST 100",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "A Tempest 2000-inspired arcade high-score combo blaster.",
		full: [
			{ type: "p", text: "A Tempest 2000-inspired arcade high-score combo blaster." },
			{ type: "p", text: "An experiment in linking movement mechanics to shooting mechanics. Each line segment is one bullet (you can see it recharge) and so to shoot more - while avoiding the enemies! - you have to keep moving!" },
			{ type: "i", text: "Developed solo for Game Jolt's <a href='http://jams.gamejolt.io/indiesvsgamers' target='new'>Indies VS Gamers</a> jam on 20th July 2015." }
		]
	},
	platforms: [

	],
	links: [

	],
	buttons: [
		{
			text: "Download on Game Jolt",
			url: "https://gamejolt.com/games/est-100/80931"
		}
	],
	assets: {
		frontpage: [1,2,3],
		all: [
			{ key: 1, url: "/_images/games/est-100/4.gif", type: GameAssetType.IMAGE, size:"full" },
			{ key: 2, url: "/_images/games/est-100/1.png", type: GameAssetType.IMAGE },
			{ key: 3, url: "/_images/games/est-100/3.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_EST100.descriptions.short = Game_EST100.descriptions.full;

export default Game_EST100;
