import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_ToastTimeSmashUp = {
	id: 19,
	nameSafe: "toast-time-smash-up",
	name: "Toast Time: Smash Up!",
	status: GameStatus.RELEASED,
	descriptions: {
		oneLine: "Toast-based recoil/reload action - now with multiplayer!",
		short: [
			{
				type: "p",
				text: "Fresh from the oven, <i>Toast Time: Smash Up!</i>' brings the unique toast-based recoil/reload action from our cult smash hit <a href='/press/toast-time/'>Toast Time</a> to the multiplayer brawler/esports genre."
			},
			{
				type: "p",
				text: "Return as TERRY (Toast-Ejecting Recoil & Reload sYstem) with a multitude of new, breakfast-based, zany, over-the-top awesomeness, and start a competitive battle/smash up at a bakery near you!"
			},
		],
		full: [
			{
				type: "p",
				text: "Fresh from the oven, <i>Toast Time: Smash Up!</i>' brings the unique toast-based recoil/reload action from our cult smash hit <a href='/press/toast-time/'>Toast Time</a> to the multiplayer brawler/esports genre."
			},
			{
				type: "p",
				text: "Return as TERRY (Toast-Ejecting Recoil & Reload sYstem) with a multitude of new, breakfast-based, zany, over-the-top awesomeness, and start a competitive battle/smash up at a bakery near you!"
			},
			{
				type: "p",
				text: "<i>Includes the original Toast Time - a classic!</i>"
			}
		]
	},
	features: [
		"54 action-packed single player missions - each served warm with it's own choreographed soundtrack.",
		"16 exciting bread-based weapon upgrades - from crumpets to baguettes you'll never go hungry.",
		"2 - 4 Multiplayer SMASH UP Mode - garnished with all-configurable gameplay mix-ups.",
		"Loads of colourful pixel art hats and customisations - glazed to perfection, from pirate to pharaoh.",
		"Addictive and original gameplay - topped with intrigue and zealous delight.",
		"Iron man survival mode and bonus coffee time mode - the icing on the figurative cake. ",
		"n.b. Side dishes not included. Have your toast and eat it."
	],
	platforms: [
		{ type: GameStore.NINTENDOSWITCH, url: "http://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Toast-Time-Smash-Up--1466406.html" }
	],
	buttons: [
		{
			url: "https://www.nintendo.com/games/detail/toast-time-smash-up-switch",
			text: "Buy on Nintendo Switch eShop"
		}
	],
	links: [
		{
			url: "http://toasttime.co.uk/",
			text: "Visit Website"
		},
		{
			url: "/press/toast-time-smash-up",
			text: "View Press Kit"
		},
		{
			icon: "plus",
			url: "http://forcehabit.bandcamp.com/album/toast-time-ost",
			text: "Get Soundtrack"
		}
	],
	assets: {
		frontpage: ["trailer", "1", "2", "3", "4"],
		all: [
			{
				key: "trailer",
				name: "Nintendo Switch Trailer",
				url: "https://www.youtube.com/embed/iOM1lY5c7SM",
				thumbnail: "/_images/games/toast-time-smash-up/trailer-thumb.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/toast-time-smash-up/press-kit/1.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/toast-time-smash-up/press-kit/2.png", type: GameAssetType.IMAGE },
			{ key: "3", url: "/_images/games/toast-time-smash-up/press-kit/3.png", type: GameAssetType.IMAGE },
			{ key: "4", url: "/_images/games/toast-time-smash-up/press-kit/4-en.png", type: GameAssetType.IMAGE },

			{ url: "/_images/games/toast-time-smash-up/press-kit/powerup_overlay.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time-smash-up/press-kit/thinkyouvewon.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time-smash-up/press-kit/multiplayer_trim.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time-smash-up/press-kit/panic.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time-smash-up/press-kit/cheerios.gif", type: GameAssetType.IMAGE },

			{ url: "/_images/games/toast-time-smash-up/press-kit/1920x1080-hero.jpg", type: GameAssetType.IMAGE },
			//{ url: "/_images/games/toast-time-smash-up/press-kit/game-logo.png", type: GameAssetType.IMAGE },

			{ url: "/_images/games/toast-time-smash-up/press-kit/1000x1000.jpg", type: GameAssetType.APPICON }
		]
	},
	press: {
		releaseDates: [
			"16th November 2018 (Nintendo Switch)"
		],
		prices: [
			{ currency: "GBP", value: "£7.99" },
			{ currency: "USD", value: "$9.99" },
			{ currency: "EUR", value: "€8.99" }
		],
		histories: [

		],
		awards: [

		],
		quotes: [
			{
				description: "4.5/5 - I found my time with Toast Time to be extremely enjoyable",
				name: "HG Mike",
				website: "The Switch Effect",
				link: "http://theswitcheffect.net/2018/11/review-toast-time-smash-up-nintendo-switch/"
			},
			{
				description: "4/5 - Quirky, fun, and enthusiastic... the definitive version of the mobile title.",
				website: "Rapid Reviews UK",
				name: "Author",
				link: "https://rapidreviewsuk.com/toast-time-smash-up/"
			},
			{
				description: "7/10 - Toast Time: Smash Up! is definitely worth a look.",
				website: "Two Beard Gaming",
				name: "theflamey",
				link: "https://twobeardgaming.com/2018/12/04/toast-time-smash-up-nintendo-switch/"
			}
		],
		socials: [
			{
				name: "Force Of Habit (Twitter)",
				link: "http://twitter.com/forcehabit"
			},
			{
				name: "TERRY (Twitter)",
				link: "http://twitter.com/toasttimeterry"
			}
		],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Development, Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Sound Design, Freelance, Monomoon",
				link: "http://monomoon.co.uk/"
			},
			{
				person: "Thomas Faust",
				role: "Localisation Manager, Freelance, Indie Game Translations",
				link: "https://indiegametranslations.com/"
			}
		]
	}
};

export default Game_ToastTimeSmashUp;
