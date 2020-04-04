import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_ToastUp = {
	id: 15,
	nameSafe: "toast-up",
	name: "Toast Up!",
	status: GameStatus.EXPERIMENT,
	descriptions: {
		oneLine: "TERRY returns in Toast Up! This time, you have to find your way home...",
		full: [
			{ type: "p", text: "You are TERRY. Toast-Ejecting Recoil and Reload sYstem.<br/>A toaster, technically." },
			{ type: "p", text: "You wake up and find yourself in a strange place. Eerie… With many of your internal components missing. Salvaged for scrap! Oh no! You should probably try to get back home…. (Home… Ahh… Willy’s Wheat Farm… the idyllic pastures and solitude…)" },
			{ type: "p", text: "An experimental off-shoot of our debut release <a href='http://toasttime.co.uk/'>Toast Time</a>." },
			{ type: "i", text: "Developed solo in < 48 hours for <a href='https://ldjam.com/events/ludum-dare/39/toast-up' target='new'>Ludum Dare 39</a> compo (theme: \"Running out of Power\") in July 2017." },
			{ type: "list", name: "Ludum Dare Compo Results", list: [
				"Overall: 6th",
				"Fun: 8th",
				"Graphics: 6th",
				"Audio: 18th"
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
			url: "http://gamejolt.com/games/toast-up/273040"
		}
	],
	assets: {
		frontpage: [1,2,3,4],
		all: [
			{ key: 1, url: "/_images/games/toast-up/1.png", type: GameAssetType.IMAGE },
			{ key: 2, url: "/_images/games/toast-up/2.png", type: GameAssetType.IMAGE },
			{ key: 3, url: "/_images/games/toast-up/3.png", type: GameAssetType.IMAGE },
			{ key: 4, url: "/_images/games/toast-up/4.png", type: GameAssetType.IMAGE }
		]
	}
};
Game_ToastUp.descriptions.short = Game_ToastUp.descriptions.full;

export default Game_ToastUp;
