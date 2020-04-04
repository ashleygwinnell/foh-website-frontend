import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_ToastTime = {
	id: 9,
	nameSafe: "toast-time",
	name: "Toast Time",
	status: GameStatus.RELEASED,
	descriptions: {
		oneLine: "Appetising breakfast-defense bread blaster!",
		short: [
			{
				type: "p",
				text: "Toast Time is a throwback to the golden age of video games where old-school homebrew titles fused arcade action with a distinctly British sense of humour."
			},
			{
				type: "p",
				text: "An appetising arena shoot-em-up garnished with tower-defence elements and served warm with awesome-sauce (probably syrup)."
			}
		],
		full: [
			{
				type: "p",
				text: "Toast Time is a throwback to the golden age of video games where old-school homebrew titles fused arcade action with a distinctly British sense of humour."
			},
			{
				type: "p",
				text: "---"
			},
			{
				type: "p",
				text: "An appetising arena shoot-em-up garnished with tower-defence elements and served warm with awesome-sauce (probably syrup)."
			},
			{
				type: "p",
				text: "Inter-dimensional time-blob beasties have sailed the cosmos in pursuit of spare time, and now they've found it, tasted it, on an idyllic Monday morning."
			},
			{
				type: "p",
				text: "Assume the role of TERRY (toast-ejecting recoil &amp; reload system), a humble and solitary toaster with an uncontrollable love for English breakfasts, hats and scheduling."
			},
			{
				type: "p",
				text: "Tap to launch toast, crumpets and magnitudes of other breakfast paraphernalia at the beasties. Bounce around and crush them with your hot metallic mass. Tip over bins, and use the environments to your advantage. Drink a little coffee and go a little crazy. Do everything it takes to defend toast time – you are Monday morning's final hope. Have your toast and eat it."
			}
		]
	},
	features: [
		"54 action-packed missions.",
		"16 exciting bread-based weapons.",
		"Iron man survival mode.",
		"Bonus COFFEE TIME mode.",
		"Loads of colourful hats and customisations.",
		"Addictive and original gameplay specifically designed for touch.",
		"Achievements and online high-scores.",
		"Super-slick audio and calibrated soundtrack -- each level has its own track!"
	],
	platforms: [
		{ type: GameStore.STEAM, url: "http://store.steampowered.com/app/316660/" },
		{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=org.forceofhabit.toasttime" },
		{ type: GameStore.IOS, url: "https://itunes.apple.com/us/app/toast-time/id722232991?ls=1&mt=8" }
	],
	links: [
		{
			url: "http://toasttime.co.uk/",
			text: "Visit Website"
		},
		{
			url: "/press/toast-time/",
			text: "View Press Kit"
		},
		{
			icon: "plus",
			url: "http://forcehabit.bandcamp.com/album/toast-time-ost",
			text: "Get Soundtrack"
		}
	],
	assets: {
		frontpage: ["steam", "1", "2"],
		all: [
			{
				key: "steam",
				name: "Steam Announcement Trailer",
				url: "https://www.youtube.com/embed/Zp7bBWR0AwE",
				thumbnail: "/_images/games/toast-time/video-thumb-steam.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				name: "iOS Release Trailer",
				url: "https://www.youtube.com/embed/liEGGWVRVjo",
				thumbnail: "/_images/games/toast-time/video-thumb-ios.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				name: "Android Release Trailer",
				url: "https://www.youtube.com/embed/3xI5W9lo8tE",
				thumbnail: "/_images/games/toast-time/video-thumb-android.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/toast-time/press-kit/new-2.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/toast-time/press-kit/new-4.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/new-1.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/new-3.png", type: GameAssetType.IMAGE },

			{ url: "/_images/games/toast-time/press-kit/steam-1.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/steam-2.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/steam-3.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/steam-4.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/steam-5.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/toast-time/press-kit/steam-6.png", type: GameAssetType.IMAGE }
		]
	},
	press: {
		releaseDates: [
			"27th August 2014 (Steam)",
			"6th February 2014 (iOS)",
			"5th September 2013 (Android)"
		],
		prices: [
			{ currency: "GBP (Steam)", value: "£3.99" },
			{ currency: "USD (Steam)", value: "$4.99" },
			{ currency: "EUR (Steam)", value: "€4.99" },

			{ currency: "GBP (iOS/Android)", value: "£1.99" },
			{ currency: "USD (iOS/Android)", value: "$2.99" },
			{ currency: "EUR (iOS/Android)", value: "€2.69" }
		],
		histories: [
			{
				type: "p",
				text: "Toast Time was in development since Force Of Habit began in September 2012. The Android version was released in September 2013; the iOS version took a further 6 months (part-time) to develop and was released in February 2014.<br/><br/>\
						\
						At almost a year since the initial release (and almost two years since development started), the game won an Intel Level Up award and was subsequently released on Steam for PC & Mac."
			}
		],
		awards: [
			{
				description: "Selected, Leftfield Collection",
				info: "EGX, NEC Birmingham. September 2017"
			},
			{
				description: "Winner, Best Art Design",
				info: "Intel Level Up, 2014",
				link: "https://software.intel.com/en-us/blogs/2014/08/22/2014-intel-level-up-game-developer-contest-and-the-winners-are"
			},
			{
				description: "Game of the Week",
				info: "TouchArcade, February 2014",
				link: "http://toucharcade.com/2014/02/07/game-of-the-week-toast-time/"
			},
			{
				description: "Featured on iOS App Store",
				info: "February 2014",
			},
			{
				description: "#3 Best Android Arcade Game.",
				info: "GameWoof, January 2014",
				link: "http://gamewoof.com/best-of/5-best-android-arcade-games/"
			},
			{
				description: "#5 Best Paid Android Game of 2013.",
				info: "GameWoof, December 2013",
				link: "http://gamewoof.com/best-of/5-best-paid-android-games-of-2013/"
			},
			{
				description: "Winner, Best New IP.",
				info: "TIGA Awards, 6 November 2013",
			},
			{
				description: "Nomination, Best Debut Game.",
				info: "TIGA Awards, 14 October 2013",
			},
			{
				description: "Featured on Google Play.",
				info: "October 2013",
			},
			{
				description: "Showcased, Explay Festival.",
				info: "Assembly Rooms, Bath. 1 November 2012",
			}
		],
		quotes: [
			{
				description: "5/5 - Toast Time controls, looks, and plays perfectly on the platform. Toast Time is for you.",
				name: "Chris Carter",
				website: "Touch Arcade",
				link: "http://toucharcade.com/2014/02/11/toast-time-review/"
			},
			{
				description: "9/10 - A game with more style than you can shake a baguette at. Attention to detail is something that  sets Toast Time apart from the crowd.",
				name: "Daniel Charnock",
				website: "Game Debate",
				link: "http://www.game-debate.com/news/?news=8593&game=Toast%20Time&title=Toast%20Time%20Review"
			},
			{
				description: "5/5 - Toast Time‘s happy facade helps mask a tough, unforgiving, challenging reflex shooter where levels need to be solved.",
				// The satisfaction of clearing a level, that when starting, seemed almost impossible, is the joyful, rewarding sense of triumph that good video games are made of.
				// While it is a game that is built around a shooting mechanic, the end result is  almost more akin to a puzzle game.
				name: "Tim Hibbs",
				website: "Big Red Barrel",
				link: "http://www.bigredbarrel.com/blog/2013/09/review-toast-time/"
			},
			{
				description: "87/100 - A heavy emphasis on humour in the game, not just any humour, it's this kind of over-zealous, over-the-top, nonsensical awesomeness.",
				// <!-- Levels so intricately created that they are evil. -->
				// <!-- Another amazing element... is the level of polish that we find here. -->
				// <!-- Clearly the developers have taken their time to do the little teeny details that make a game really great. -->
				// <!-- If you like arcade nostalgic experiences, you have to look no further than this game. -->
				// <!-- You'll get to see what indie games on smart phones should feel like. -->
				name: "Chris W",
				website: "Pixel Freak",
				link: "http://www.youtube.com/watch?v=SZ_QOXaqDn0"
			},
			{
				description: "4.5/5 - A retro experience like no other.",
				name: "Patrick Garde",
				website: "GameWoof",
				link: "http://gamewoof.com/game-reviews/toast-time-sink-teeth-slice-brilliance/"
			},
			{
				description: "4/5 - Cute, creative, and entertaining. I say fire it up!",
				name: "Stacy Barnes",
				website: "148Apps",
				link: "http://www.148apps.com/reviews/toast-time-review/"
			},
			{
				description: "7.5/10 - Feel like a real god, scoring points like rain during a downpour.",
				name: "Writer",
				website: "PocketGamer France",
				link: "http://www.pocketgamer.fr/test-jeu-android/16767-toast-time.html"
			},
			{
				description: "7/10 -  From its gorgeous pixellated backdrops, to the bouncy music and the funny one-liners, Toast Time is one of the more stylish games you can pick up for mobile.",
				name: "Mike Rose",
				website: "PocketGamer",
				link: "http://www.pocketgamer.co.uk/r/Android/Toast+Time/review.asp?c=53656"
			},
			{
				description: "A blindingly intense mash up of retro visuals, shoot-’em-up action and homebrew style.",
				name: "Spanner Spencer",
				website: "100% Indie",
				link: "http://www.100percentindie.com/2013/12/30/toast-time-pops-up-on-samsung-apps/"
			},
			{
				description: "Unabashedly silly, crazy, bonkers. I think I may be in love.",
				name: "Tim Hibbs",
				website: "Big Red Barrel",
				link: "http://www.bigredbarrel.com/blog/2013/03/tiga-discovery-day-2-revenge-of-the-tiga/"
			},
			{
				description: "Very strange, a little bizarre. Toast Time looks amazing and is certainly one to watch for.",
				name: "Editor",
				website: "Girl Gamers UK",
				link: "http://www.girlgamersuk.com/2013/03/tiga-discovery-afternoon-the-sequel/"
			},
			{
				description: "A perfect showcase for what can be achieved on the mobile platforms.",
				name: "Chris Evans",
				website: "The Reticule",
				link: "http://thereticule.com/wales-games-development-show-report/"
			},
			{
				description: "The snack choice of the discerning muncher.",
				name: "Harry Slater",
				website: "Pocket Gamer",
				link: "http://www.pocketgamer.co.uk/r/Android/Toast+Time/news.asp?c=52579"
			},
			{
				description: "To truly appreciate the marvel of this toast science you have to see the result in explosive motion.",
				name: "Chris Priestman",
				website: "Indie Statik",
				link: "http://indiestatik.com/2013/07/25/toast-time/"
			}
		],
		socials: [],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Art & Development, Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Audio & Level Design, Force Of Habit"
			}
		]
	}
};

export default Game_ToastTime;
