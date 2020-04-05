import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_AlienLaserBunnies = {
	id: 2,
	nameSafe: "alien-laser-bunnies",
	name: "Alien Laser Bunnies",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "Mimickry and camouflage with recursive meta-deceptions",
		full: [
			{ type: "p", text: "Alien Laser Bunnies is a top-down multiplayer game of mimickry and camouflage with recursive meta-deceptions." },
			{ type: "p", text: "When the game starts, your aim as the player is to quickly figure which bunny you are controlling. Thereafter, outwit your opponent by blending in with other bunnies while hunting them down. When the time is right, blast them away with your GIANT LASER BEAM!" },
			{ type: "p", text: "Collecting flaming carrots and ducks will recharge your laser, but they will also give your position away to the other player -- hop carefully!" },
			{ type: "h", text: "THE DECEPTION:" },
			{ type: "p", text: "The regular earth-bunnies that inhabit the game playing field are not controlled by artificial intelligence systems as it would first seem. They are articles of a former self, movements of a player in a previous game." },
			{ type: "i", text: "A collaboration with Joe Williamson." },
			{ type: "i", text: "Developed in ~15 hours, an entry in to the Wellcome Trust's \"Deception\" game jam as part of Extended Play Festival (October 2012)." }
		]
	},
	platforms: [
		//{ type: GameStore.MAC, url: "/download/game/alien-laser-bunnies/?os=mac" },
		//{ type: GameStore.WINDOWS, url: "/download/game/alien-laser-bunnies/?os=windows" }
	],
	links: [

	],
	buttons: [
		// {
		// 	text: "Download Unavailable",
		// 	url: "",
		// 	type: "disabled"
		// }
		{
			text: "Play Online",
			url: "https://gamejolt.com/games/alien-laser-bunnies/482589"
		}
	],
	assets: {
		frontpage: [1,2,3],
		all: [
			{ key: 1, url: "/_images/games/alien-laser-bunnies/3.png", type: GameAssetType.IMAGE, size:"full" },
			{ key: 2, url: "/_images/games/alien-laser-bunnies/1.png", type: GameAssetType.IMAGE },
			{ key: 3, url: "/_images/games/alien-laser-bunnies/2.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_AlienLaserBunnies.descriptions.short = Game_AlienLaserBunnies.descriptions.full;

export default Game_AlienLaserBunnies;
