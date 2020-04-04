import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_Dysbiosis = {
	id: 4,
	nameSafe: "dysbiosis",
	name: "Dysbiosis",
	status: GameStatus.RELEASED,
	descriptions: {
		oneLine: "Intestinal-tract based shoot-'em-up...",
		short: [],
		full: [
			{
				type: "p",
				text: "An intestinal-tract based shoot-'em-up supported by <a href='http://www.wellcome.ac.uk/' target='new'>Wellcome Trust</a> as the winning entry into their \"<a href='http://www.wellcome.ac.uk/Funding/Public-engagement/Funded-projects/Major-initiatives/Broadcast-media-strategy/Gamify-Your-PhD/WTDV033972.htm' target='new'>Gamify Your PhD</a>\" game jam event."
			},
			{
				type: "p",
				text: "Fire antimicrobial peptides from the intestinal cell wall at oncoming bacteria. Use antibiotics and absorb vitamins. Maintain a healthy balance inside the gut!"
			},
			{
				type: "i",
				text: "A collaboration with <a href='http://clockworkcuckoo.co.uk/' target='new'>Clockwork Cuckoo</a> and Dr. Margherita Coccia."
			}
		]
	},
	features: [
		"3 game chapters -- Healthy, Inflamed & IBD/Crohn's Disease.",
		"3 enemy types -- E-coli, Salmonella & Campylobacter. ",
		"Play with Keyboard, Mouse or Game Controller.",
		"MUCUS PARTY bonus event",
		"Online Highscores",
		"Game designed around real intestinal immunology studies.",
		"Links to learn more about the specific scientific concepts featured in the game."
	],
	buttons: [
		{
			text: "Play Online",
			url: "http://www.kongregate.com/games/forcehabit/dysbiosis",
			type: "",
		}
	],
	platforms: [
		{ type: GameStore.WEB, url: "http://www.kongregate.com/games/forcehabit/dysbiosis" }
	],
	links: [
		{
			url: "https://www.youtube.com/watch?v=qglzvn-frMg",
			text: "View Trailer"
		},
		{
			url: "/press/dysbiosis/",
			text: "View Press Kit"
		}
	],
	assets: {
		frontpage: ["trailer", "1", "2"],
		all: [
			{
				key:"trailer",
				url: "https://www.youtube.com/embed/qglzvn-frMg",
				thumbnail: "/_images/games/dysbiosis/trailer-thumb.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/dysbiosis/1.jpg", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/dysbiosis/3.jpg", type: GameAssetType.IMAGE },
			{ url: "/_images/games/dysbiosis/2.jpg", type: GameAssetType.IMAGE }
		]
	},
	press: {
		releaseDates: [
			"27th August 2014 (Steam)"
		],
		prices: [
			{ currency: "GBP", value: "FREE" }
		],
		histories: [
			{
				type: "p",
				text: "The original version of this game was created during Wellcome Trust's \"Gamify Your PhD\" game jam event in September 2012."
			}
		],
		awards: [
			{
				description: "Winner in The Wellcome Trust's Gamify Your PhD jam.",
				info: "Wellcome Trust, London. 4 September, 2012"
			}
		],
		quotes: [
			{
				description: "Delight in the MUCUS PARTY bonus events, and attempt to swat away the harmful bacteria until the sun rises.",
				name: "Chris Priestman",
				website: "Indie Statik",
				link: "http://indiestatik.com/2013/08/27/dysbiosis/"
			},
			{
				description: "Force Of Habit & Clockwork Cuckoo win Wellcome Trust \"Gamify Your PhD\" game jam.",
				name: "Paul Dean",
				website: "IndieN",
				link: "http://www.pcgamesn.com/indie/game-set-inside-colon-wins-wellcome-trusts-first-gamejam"
			},
			{
				description: "Scientist and developer team wins Wellcome Trust dev contest",
				name: "Will Freeman",
				website: "Develop Online",
				link: "http://www.develop-online.net/news/41882/Scientist-and-developer-team-wins-Wellcome-Trust-dev-contest"
			}
		],
		socials: [],
		credits: [
			{
				person: "Margherita Coccia",
				role: "Original Concept & Science Advisor, University of Oxford"
			},
			{
				person: "Daniel Twomey",
				role: "Programmer, Independent"
			},
			{
				person: "Tom Boot",
				role: "Art & Animation, Clockwork Cuckoo"
			},
			{
				person: "Sophie Humphries",
				role: "Art & Animation, Clockwork Cuckoo"
			},
			{
				person: "Ashley Gwinnell",
				role: "Level Design, Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Music & Sfx, Force Of Habit"
			},
			{
				person: "Aaron Short",
				role: "Testing, Force Of Habit"
			},

		]
	}
};
Game_Dysbiosis.descriptions.short = Game_Dysbiosis.descriptions.full;

export default Game_Dysbiosis;
