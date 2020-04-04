import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_PollenPatrol = {
	id: 17,
	nameSafe: "pollen-patrol",
	name: "Pollen Patrol",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "Play as Fizz the Bee as you collect pollen to transmit back to the hive.",
		full: [
			{ type: "p", text: "Your queen needs your help! Play as Fizz the Bee as you collect pollen to transmit back to the hive." },
			{ type: "features" },
			{ type: "p", text: "Created with Tom Waterhouse (<a href='http://2dforever.com/'>2dforever</a>) and Jeremy Howard (<a href='https://twitter.com/SpicyJAudio>Spicy J Audio</a>) during <a href='https://globalgamejam.org/2018/games/pollen-patrol'>Global Game Jam 2018</a> (theme: \"Transmit\") in January 2018." },
			{ type: "i", text: "Winner of the \"Most Polished Game\" award!" }
		]
	},
	features: [
		"Pseudo-3D arcade action!",
		"Authentic yesteryear super-scaler graphics!",
		"Jazzy tunes!",
		"Bees!"
	],
	platforms: [

	],
	links: [

	],
	buttons: [
		{
			text: "Play Online",
			url: "https://gamejolt.com/games/pollen-patrol/315542"
		}
	],
	assets: {
		frontpage: [1,2],
		all: [
			{ key: 1, url: "/_images/games/pollen-patrol/0.png", type: GameAssetType.IMAGE, size:"full" },
			{ key: 1, url: "/_images/games/pollen-patrol/1.png", type: GameAssetType.IMAGE },
			{ key: 2, url: "/_images/games/pollen-patrol/2.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_PollenPatrol.descriptions.short = Game_PollenPatrol.descriptions.full;

export default Game_PollenPatrol;
