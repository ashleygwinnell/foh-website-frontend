import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_makenines = {
	id: 13,
	nameSafe: "makenines",
	name: "makenines",
	status: GameStatus.RELEASED,
	descriptions: {
		oneLine: "Use your brain in this ambient logic-puzzle game",
		short: [
			{
				type: "p",
				text: "'makenines' is an ambient logic-puzzle game where you clear grids of numbers by making nines."
			},
			{
				type: "p",
				text: "It requires careful thought and is solved using process of elimination similar to world-renowned puzzle game Sudoku. Think you're good with numbers? Think you're great at solving puzzles? Put your brain-skills to the test!"
			}
		],
		full: [
			{
				type: "p",
				text: "'makenines' is an ambient logic-puzzle game where you clear grids of numbers by making nines."
			},
			{
				type: "p",
				text: "It requires careful thought and is solved using process of elimination similar to world-renowned puzzle game Sudoku. Think you're good with numbers? Think you're great at solving puzzles? Put your brain-skills to the test!"
			}
		]
	},
	features: [
		"80 * handcrafted fun &amp; increasingly challenging puzzles!",
		"18 * new procedurally-generated puzzles each and every day.",
		"5 * interesting ways of manipulating numbers: slides, pushers, exchangers, rotators, stacks.",
		"Smooth, ambient sound palette comprised of 9 unique tones."
	],
	platforms: [
		{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=org.forceofhabit.makenines" },
		{ type: GameStore.IOS, url: "https://itunes.apple.com/us/app/makenines/id1143920874" }
	],
	links: [
		{
			url: "/press/neon-caves",
			text: "View Press Kit"
		}
	],
	assets: {
		frontpage: ["trailer", "1", "2"],
		all: [
			{
				key: "trailer",
				name: "makenines - 9-second Release Trailer",
				url: "https://www.youtube.com/embed/GI3O9DSaMOw",
				thumbnail: "/_images/games/makenines/trailer-thumb.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/makenines/press-kit/0.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/makenines/press-kit/1.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/makenines/press-kit/2.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/makenines/press-kit/3.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/makenines/press-kit/4.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/makenines/press-kit/5.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/makenines/press-kit/announcement.png", type: GameAssetType.IMAGE, size:"full" },

			{ url: "/_images/games/makenines/press-kit/icon.png", type: GameAssetType.APPICON }
		]
	},
	press: {
		releaseDates: [
			"9th September 2016"
		],
		prices: [
			{ currency: "GBP", value: "FREE" },
			{ currency: "USD", value: "FREE" },
			{ currency: "EUR", value: "FREE" }
		],
		histories: [
			{
				type: "p",
				text: "The idea for 'makenines' came to Ashley in a dream during the Christmas and New Year holidays. Originally based on the premature joke \"Why doesn't 6 like 7? ...because 7 ate 9!\", the main mechanic was to arrange 7s, 8s and 9s on a grid so that no 6s were adjacent to 7s. It later dream-morphed into making / resolving 9s from the grid. 9 <i>was</i> eaten by 7, afterall. Later that day, in roughly 9 hours, a 'makenines' prototype was born."
			},
			{
				type: "p",
				text: "A month or so on, Ashley realises he's been reading David Mitchell's <a href='https://en.wikipedia.org/wiki/Number9dream'>number9dream</a> novel - <i>subconscious inspiration!"
			},
			{
				type: "p",
				text: "After approximately 9 months since the initial prototype, and shortly after Force Of Habit's 4th birthday, 'makenines' was released to the public on 9th September 2016."
			}
		],
		awards: [
			{
				description: "Nomination, Best Educational Game.",
				info: "TIGA Awards, 2016"
			},
			{
				description: "Featured on iOS App Store.",
				info: "September 2016."
			}
		],
		quotes: [
			{
				description: "A gorgeous, minimalistic look and feel. Fantastic animations as you go through the game's menus. Buttery smooth and fluid. A captivating, atmospheric soundtrack that is rather calming. Overall, I’m impressed.",
				name: "Christine Chan",
				website: "App Advice",
				link: "http://appadvice.com/review/makenines"
			},
			{
				description: "Impressive in its incredible sound and visual design. Aesthetically beautiful, with fantastic ambient sounds that accompany the manipulation of the blocks. A title that any puzzle fans should definitely download.",
				name: "Robert Funnell",
				website: "Touch Arcade",
				link: "http://toucharcade.com/2016/09/09/makenines-out-now/"
			},
			{
				description: "Considering the fun games the studio has made so far, this could prove to be a fun puzzler to check out.",
				name: "Carter Dotson",
				website: "Touch Arcade",
				link: "http://toucharcade.com/2016/08/09/makenines-is-the-next-game-from-the-developer-of-toast-time/"
			}
		],
		socials: [],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Project Lead, Art, Design, Development. Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Sound design. Monomoon",
				link: "http://monomoon.co.uk/"
			},
			{
				person: "Sophie Humphries",
				role: "Icons. Clockwork Cuckoo",
				link: "http://clockworkcuckoo.co.uk/"
			}
		]
	}
};

export default Game_makenines;
