import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_TheAgent = {
	id: 3,
	nameSafe: "the-agent-glory-to-moscow",
	name: "The Agent: Glory To Moscow",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "Fast-action game of cat and mouse designed to emulate a lost soviet arcade machine.",
		short: [],
		full: [
			{ type: "p", text: "The Agent: Glory To Moscow (агент: слава к Москве) is a fast-action two player game of cat and mouse designed to emulate a lost soviet arcade machine." },
			{ type: "p", text: "Players take it in turn to play as the Agent and the Target, to the best of 8 wins." },
			{ type: "p", text: "The game revolves around power-ups that are designed to affect the game without giving either player a significant advantage. There are no speed-bonus power-ups and no movement-restricting power-ups. The players are equal, the game is <i>pure</i>." },
			{ type: "p", text: "View the authentic <a href='/_images/games/the-agent/instructions.png' target='new'>instructions card</a> (and the <a href='/_images/games/the-agent/instructions-translated.png' target='new'>translated copy</a>)!" },
			{ type: "p", text: "For more information about the inspirations and processes behind this game, read our <a href='/blog/rezzed-the-making-of-the-agent/'>blog post</a>!" },
			{ type: "i", text: "A collaboration with <a href='http://clockworkcuckoo.co.uk/' target='new'>Clockwork Cuckoo</a>." },
			{ type: "i", text: "Developed in ~9 hours, an entry in to Creative Assembly's \"The 80s\" game jam as part of Rezzed (June 2013)." }
		]
	},
	platforms: [
		//{ type: GameStore.MAC, url: "/download/game/the-agent-glory-to-moscow/?os=mac" },
		//{ type: GameStore.WINDOWS, url: "/download/game/the-agent-glory-to-moscow/?os=windows" }
	],
	links: [
		{
			icon: "plus",
			text: "Development Blog Post",
			url: "/blog/rezzed-the-making-of-the-agent/"
		}
	],
	buttons: [
		{
			text: "Download Unavailable",
			url: "",
			type: "disabled"
		}
	],
	assets: {
		frontpage: ["1", "3"],
		all: [
			{ key: "1", url: "/_images/games/the-agent/1.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/the-agent/2.png", type: GameAssetType.IMAGE },
			{ key: "3", url: "/_images/games/the-agent/3.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_TheAgent.descriptions.short = Game_TheAgent.descriptions.full;
export default Game_TheAgent;
