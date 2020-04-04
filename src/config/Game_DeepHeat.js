import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_DeepHeat = {
	id: 18,
	nameSafe: "deep-heat",
	name: "Deep Heat",
	status: GameStatus.MINI,
	descriptions: {
		oneLine: "Ten floors of flamethrowing mayhem!",
		full: [
			{ type: "p", text: "Five. Nope... TEN floors of mayhem!" },
			{ type: "p", text: "Don your flamethrower, your CO2 canisters, your dancing shoes - fire & flounce your way through the deepest, darkest, hottest, hungriest underground bunker in history." },
			{ type: "features" },
			{ type: "i", text: "Originally developed solo in < 48 hours for <a href='https://ldjam.com/events/ludum-dare/42/deep-heat' target='new'>Ludum Dare 42</a> compo (theme: \"Running out of Space\") in August 2018." },
			{ type: "p", text: "Developed further for its \"mini\" release - adding double the content, double the upgrades, double the bells & whistles. Kapow!" },
			{
				type: "list",
				name: "Ludum Dare Results",
				list: [
					"Graphics: 6th",
					"Audio: 7th"
				]
			}
		]
	},
	features: [
		"10 floors of mayhem - with 6 unique enemy types.",
		"15 upgrades - including sprinkers, big sacks, hot feet and night vision.",
		"Money, money, money! Fire! Money!"
	],
	platforms: [

	],
	links: [
		{
			url: "https://gamejolt.com/games/deep-heat/360277",
			text: "Play LD42 Compo Edition"
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
		frontpage: [1,2],
		all: [
			{
				key: "trailer",
				url: "https://www.youtube.com/embed/LzMBADv7T_Y",
				type: GameAssetType.YOUTUBE,
				thumbnail: "/_images/games/deep-heat/video-thumb.jpg"
			},
			{ key: 1, url: "/_images/games/deep-heat/1.gif", type: GameAssetType.IMAGE, size:"full" },
			{ key: 2, url: "/_images/games/deep-heat/2.gif", type: GameAssetType.IMAGE, size:"full" }
		]
	}
};
Game_DeepHeat.descriptions.short = Game_DeepHeat.descriptions.full;

export default Game_DeepHeat;
