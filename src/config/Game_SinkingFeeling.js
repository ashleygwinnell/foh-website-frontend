import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_SinkingFeeling = {
	id: 5,
	nameSafe: "sinking-feeling",
	name: "Sinking Feeling",
	status: GameStatus.RELEASED,
	descriptions: {
		oneLine: "Smash through time and space!",
		short: [],
		full: [
			{
				type: "p",
				text: "Sinking Feeling is a game about a head falling through time and space.<br/><br/>\
						Strategically smash and avoid panels of glass in risk/reward gameplay. Test your reflexes against intense - yet deliciously simple - minimalist action. Top-notch glass-shattering effects combined with a retro-style and chiptune soundtrack will keep you coming back for more."
			},
			{
				type: "p",
				text: "Just one more go..."
			}
		]
	},
	features: [
		"Increasingly challenging gameplay with 10 types of glass panels to smash through!",
		"Two unlockable game modes.",
		"Achievements and online leaderboards.",
		"An emphatic custom-composed chiptune soundtrack.",
		"A deep, honest and truly meaningful ending... probably."
	],
	buttons: [

	],
	platforms: [
		{ type: GameStore.IOS, url: "https://itunes.apple.com/us/app/sinking-feeling/id885916539" },
		{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=org.forceofhabit.sinkingfeeling" }
	],

	links: [
		{
			url: "/press/sinking-feeling/",
			text: "View Press Kit"
		}
	],
	assets: {
		frontpage: ["trailer", "1", "2"],
		all: [
			{
				key:"trailer",
				name: "Sinking Feeling - Release Trailer",
				url: "https://www.youtube.com/embed/GA98xqZIBEY",
				thumbnail: "/_images/games/sinking-feeling/trailer-thumb.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/sinking-feeling/press-kit/1.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/sinking-feeling/press-kit/4.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/sinking-feeling/press-kit/5.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/sinking-feeling/press-kit/3.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/sinking-feeling/press-kit/icon.png", type: GameAssetType.APPICON }
		]
	},
	press: {
		releaseDates: [
			"5th February 2015"
		],
		prices: [
			{ currency: "GBP", value: "£0.79" },
			{ currency: "USD", value: "$0.99" },
		],
		histories: [
			{
				type: "p",
				text: "Initially conceived for Ludum Dare 29 with the theme of \"Beneath The Surface\", we've since spent many weekends and evenings feeding it our spare time until - shock horror - it broke out of our studio and uploaded itself to the storefronts.<br/><br/>\
				  Released on the anniversary of <a href='http://toasttime.co.uk/'>Toast Time</a>'s iOS release."
			}
		],
		awards: [
			{
				description: "Featured in \"Best New Games\" in the US and Canada.",
				info: "iTunes, 5th - 12th February."
			}
		],
		quotes: [
			{
				description: "A knife-edge game of risk and reward. You can easily lose yourself in it for tens, if not hundreds, of retries.",
				name: "Harry Slater",
				website: "Pocket Gamer",
				link: ""
			},
			{
				description: "No ads, clean visual look, cool music, and the character is quite clearly one of the greatest video game heroes of our generation.",
				name: "Peter Willington",
				website: "AppSpy",
				link: ""
			},
			{
				description: "Once you hit fifty points, the 'harder' mode gets unlocked. It is a lot harder.",
				name: "Carter Dotson",
				website: "Touch Arcade",
				link: ""
			}
		],
		socials: [],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Designer & Developer, Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Moral Support, Force Of Habit"
			}
		]
	}
}
Game_SinkingFeeling.descriptions.short = Game_SinkingFeeling.descriptions.full;
export default Game_SinkingFeeling;
