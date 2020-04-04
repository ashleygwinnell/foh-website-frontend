import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_Invasion = {
	id: 21,
	nameSafe: "invasion",
	name: "Invasion",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "Start with nothing… but a seed… of an invasive species!",
		full: [
			{ type: "p", text: "Start with nothing… but a seed… of an invasive species!" },
			{ type: "p", text: "Overcrowd the planet and take it over! Those native species won’t stand a chance!" },
			{ type: "i", text: "Developed solo in < ~16 hours for <a href='https://ldjam.com/events/ludum-dare/45/invasion' target='new'>Ludum Dare 45</a> compo (theme: \"Start with nothing\") and Fuse Jam 3 (theme: invasive species) in October 2019." }
		]
	},
	platforms: [

	],
	links: [
		{
			url: "https://www.youtube.com/watch?v=8mSHOofXIio",
			text: "Watch \"Making Of\" Video!"
		}
	],
	buttons: [
		{
			text: "Play Online",
			url: "https://gamejolt.com/games/invasion/443322",
			type: "",
		}
	],
	assets: {
		frontpage: ["makingof", 3, 4],
		all: [
			{
				key: "makingof",
				url: "https://www.youtube.com/embed/8mSHOofXIio",
				type: GameAssetType.YOUTUBE,
				thumbnail: "/_images/games/invasion/video-thumb.jpg"
			},
			{ key: 3, url: "/_images/games/invasion/3.png", type: GameAssetType.IMAGE },
			{ key: 4, url: "/_images/games/invasion/4.png", type: GameAssetType.IMAGE },
		]
	}
};
Game_Invasion.descriptions.short = Game_Invasion.descriptions.full;

export default Game_Invasion;
