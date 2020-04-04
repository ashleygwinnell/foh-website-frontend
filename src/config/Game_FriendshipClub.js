import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_FriendshipClub = {
	id: 10,
	nameSafe: "friendship-club",
	name: "Friendship Club",
	status: GameStatus.RELEASED_BETA,
	website: "http://timmybibble.com/",
	descriptions: {
		oneLine: "Monsters! Mayhem! Imaginary friends do nightly battle for the favour of their creator! Who will endure? What will be left of them? Come with us as we venture into the mind of young Timmy Bibble in... Timmy Bibble's Friendship Club!",
		short: [
			{
				type: "p",
				text: "Monsters! Mayhem! Imaginary friends do nightly battle for the favour of their creator! Who will endure? What will be left of them? Come with us as we venture into the mind of young Timmy Bibble in..."
			},
			{
				type: "p",
				text: "TIMMY BIBBLE'S FRIENDSHIP CLUB!"
			},
			{
				type: "p",
				text: "Friendship Club is a local-multiplayer bullet-hell arena-shooter for PC and Mac."
			}
		],
		full: [
			{
				type: "p",
				text: "Imaginary friends battle for supremecy in the mind of young Timmy Bibble! Play as Chud - a beast from the mountains; Old Man Ricketts - a prospector driven mad by his lust for gold; Shakey Jake - a ninja, bandit, skeleton... thing; and The Canardinal - a duck from the Vatican!"
			},
			{
				type: "p",
				text: "Friendship Club is a local-multiplayer bullet-hell party-game for PC, Mac & Linux. Pit yourself against your friends (and enemies) in brutal combat, with finely-tuned controls, customisable game mechanics and procedurally generated levels in which bullets bounce forever!"
			}
		]
	},
	features: [
		"<b class='white'>Local Multiplayer</b><br/>\
		Friendship Club supports up to 8-players locally with any possible configuration of team members, ranging from all-against-all to 2v2, 3v2, 2v4v1v1...",
		"<b class='white'>Fully Customisable Game Modes</b><br/>\
		Players can choose from a selection of pre-made game modes or create their own with the advanced modifiers. This modular system of mechanics allows for a wide-range of gameplay styles and tactics. Friendship Club is designed as a sandbox for the discerning local-multiplayer fan.",
		"<b class='white'>Procedural Level Generation</b><br/>\
		Each round of combat occurs in procedurally generated levels and with unique content rules for each world,  meaning that players have to adapt very quickly if they want to be successful.",
		"<b class='white'>Adjustable Game Speed</b><br/>\
		Friendship Club can be played at different game speeds (25% / 50% / 100% / 150% / 200%), everything from super slo-mo to insanely fast. This has a dramatic effect on gameplay, and combined with the customisable game modes, means that Friendship Club supports a wide range of game types.",
		"<b class='white'>A World Made From Gibs</b><br/>\
		Nearly everything in Friendship Club is destructable. Charge through tables, chairs, TVs, or surprise a friend by smashing through a wall - just like you've always wanted to!"
	],
	buttons: [

	],
	platforms: [
		{ type: GameStore.STEAM, url: "http://store.steampowered.com/app/332760" },
		{ type: GameStore.GAMEJOLT, url: "http://timmybibble.com/buy/" }
	],

	links: [
		{
			url: "/press/friendship-club",
			text: "View Press Kit"
		}
	],
	assets: {
		frontpage: ["trailer", "greenlight", "1", "2", "3", "4"],
		all: [
			{
				key:"trailer",
				name: "Steam Early Access Trailer",
				url: "https://www.youtube.com/embed/e_ev5IWPTOk",
				thumbnail: "/_images/games/friendship-club/video-thumbs/trailer.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				key: "tww",
				name: "The Wonky Wagon - Release Trailer",
				url: "https://www.youtube.com/embed/Yck32fxfSNM",
				thumbnail: "/_images/games/friendship-club/video-thumbs/tww.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				key: "greenlight",
				name: "Steam Greenlight & Beta - Release Trailer",
				url: "https://www.youtube.com/embed/cHHfUlOROrM",
				thumbnail: "/_images/games/friendship-club/video-thumbs/annihilation.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				key: "interview",
				name: " Interview - EGX Rezzed 2015",
				url: "https://www.youtube.com/embed/50XPGeA6G-A",
				thumbnail: "/_images/games/friendship-club/video-thumbs/nick-interview.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/friendship-club/press-kit/1.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/friendship-club/press-kit/2.png", type: GameAssetType.IMAGE },
			{ key: "3", url: "/_images/games/friendship-club/press-kit/3.png", type: GameAssetType.IMAGE },
			{ key: "4", url: "/_images/games/friendship-club/press-kit/4.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/5.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/6.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/7.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/8.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/9.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/10.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/11.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/friendship-club/press-kit/xpressKit_team_large.jpg", type: GameAssetType.IMAGE, size:"full" },

			{ url: "/_images/games/friendship-club/logo.png", type: GameAssetType.LOGO }
		]
	},
	press: {
		releaseDates: [
			"24th March 2015 (Steam Early Access)",
			"1st May 2014 (Direct Alpha)"
		],
		prices: [
			{ currency: "GBP", value: "£7.99" },
			{ currency: "USD", value: "$11.99" },
		],
		histories: [
			{
				type: "p",
				text: "Friendship Club is a collaboration between <a href='http://forceofhab.it/'>Force Of Habit</a> (makers of Toast Time and winners of many a game jam) and <a href='http://clockworkcuckoo.co.uk/'>Clockwork Cuckoo</a> (art and animation contributors to indie magnates such as Size Five Games, Positech & The Tiniest Shark)."
			},
			{
				type: "p",
				text: "Friendship Club was initially developed in 24 hours by Force Of Habit and Clockwork Cuckoo, at the TIGA Game Hack in November 2013. It won the jam, receiving the \"Best Game\" award. The project lay dormant for a few months as we had other arrangements to complete Toast Time for iOS."
			},
			{
				type: "p",
				text: "We went into full-time development of the game for a few years, but when Nick left Force Of Habit in January 2016, he took the project with him to continue development once again on an ad-hoc basis. It is now on permanent hiatus."
			}
		],
		awards: [
			{
				description: "Official Selection, Indie Zone",
				info: "Insomnia 52"
			},
			{
				description: "Best Game Name",
				info: "Golden Teabag Awards @ Develop 2014"
			},
			{
				description: "People's Choice Indie Award",
				info: "GEEK 2014, February 2014",
				link: "https://www.facebook.com/349589158443436/posts/599105573491792"
			},
			{
				description: "Best Game Award",
				info: "TIGA Game Hack, November 2013"
			}
		],
		quotes: [
			{
				description: "I want to play it again. Right now. Bring it back to the office at once!",
				name: "Keith Stuart",
				website: "The Guardian",
				link: "http://www.theguardian.com/technology/2014/jun/05/bristol-games-hub-indie-games-live#block-539074eae4b0301c656d405f"
			},
			{
				description: "This is insane. I love it though, it’s great!",
				name: "Martyn",
				website: "The Yogscast",
				link: "http://www.youtube.com/watch?v=qMZwIOqOq-8&feature=youtu.be&t=13m46s"
			},
			{
				description: "It’s like Icaruga but weird.",
				name: "thekillerbits",
				website: "thekillerbits",
				link: "http://www.youtube.com/watch?v=kSTPEwaOt_w"
			},
			{
				description: "You'll be having plenty of fun for ages, just ask my sister!",
				name: "Neil Hidden",
				website: "INDIE RETRO NEWS",
				link: "http://www.indieretronews.com/2014/02/timmy-bibbles-friendship-club-2-4.html"
			},
			{
				description: "What's here right now is pretty darn good.",
				name: "Milo Troman-Taylor",
				website: "IND13.com",
				link: "http://ind13.com/geek-game-expo-east-kent-2014/"
			},
			{
				description: "Be prepared to lose a few friends when you trump them for the fifth round running before they can even move. Friendship Club is another 'I want it' game.",
				name: "Matt",
				website: "lordmatt.co.uk",
				link: "http://lordmatt.co.uk/item/2461/"
			}
		],
		socials: [
			{
				name: "Timmy Bibble (Twitter)",
				link: "http://twitter.com/timmybibble"
			}
		],
		additionals: [
			{
				title: "The \"Making of\" Timmy Bibble's Friendship Club (Blog Post)",
				description: "The blog-post written after the initial 24-hour development period!",
				link: "/blog/the-making-of-timmy-bibbles-friendship-club"
			}
		],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Programmer, Force Of Habit"
			},
			{
				person: "Nick Dymond",
				role: "Audio, Force Of Habit"
			},
			{
				person: "Sophie Humphries",
				role: "Art, Clockwork Cuckoo",
				website: "http://clockworkcuckoo.co.uk/"
			},
			{
				person: "Tom Boot",
				role: "Animation, Clockwork Cuckoo",
				website: "http://clockworkcuckoo.co.uk/"
			},
			{
				person: "\"The Comittee\"",
				role: "Design"
			}
		]
	}
};
//Game_FriendshipClub.descriptions.short = Game_FriendshipClub.descriptions.full;
export default Game_FriendshipClub;
