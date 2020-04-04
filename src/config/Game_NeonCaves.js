import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

const Game_NeonCaves = {
	id: 20,
	nameSafe: "neon-caves",
	name: "Neon Caves",
	status: GameStatus.MINI,
	descriptions: {
		oneLine: "A fragile ecosystem lost to the world for centuries!",
		short: [
			{
				type: "p",
				text: "Explore the Neon Caves, a fragile ecosystem lost to the world for centuries. Recently rediscovered by your research team, use your ship's anchor ability and elite implements to stabilise the cave while keeping the hostile inhabitants at bay."
			}
		],
		full: [
			{
				type: "p",
				text: "Explore the Neon Caves, a fragile ecosystem lost to the world for centuries. Recently rediscovered by your research team, use your ship's anchor ability and elite implements to stabilise the cave while keeping the hostile inhabitants at bay."
			},
			{
				type: "p",
				text: "An experimental off-shoot of our debut game Toast Time, with graphics by <a href='http://rottentater.com/' target='new'>Terra Lauterbach</a> (@rotten_tater) and music by <a href='https://joecreates.co.uk/' target='new'>Joe Williamson</a> (@joecreates)."
			}
		]
	},
	features: [
		"Endless arcade-action gameplay. How long can you survive?",
		"9 unique enemy types: including historically accurate giant crustaceans!",
		"4 awesome power-ups: rapid fire, bombs, invincibility and ghost ship!",
		"28 hard-as-nails achievements.",
		"Nintendo Switch & OUYA-exclusive Online Leaderboards",
	],
	platforms: [
		{ type: GameStore.NINTENDOSWITCH, url: "https://www.nintendo.co.uk/Games/Nintendo-Switch-download-software/Neon-Caves-1528050.html" },
		{ type: GameStore.OUYA, url: "https://www.ouya.tv/game/Neon-Caves/" }
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
				name: "Release Trailer (Nintendo Switch)",
				url: "https://www.youtube.com/embed/zm7VSlFmiJE",
				thumbnail: "/_images/games/neon-caves/trailer-thumb.jpg",
				type: GameAssetType.YOUTUBE
			},
			{
				name: "Early Teaser Trailer (November 2013)",
				url: "https://www.youtube.com/embed/rE3bgI5-q-o",
				thumbnail: "/_images/games/neon-caves/trailer-thumb-2.jpg",
				type: GameAssetType.YOUTUBE
			},
			{ key: "1", url: "/_images/games/neon-caves/press-kit/4.png", type: GameAssetType.IMAGE },
			{ key: "2", url: "/_images/games/neon-caves/press-kit/3.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/1.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/2.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/5.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/6.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/7.png", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/hero.jpg", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/gameplay.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/gameplay-outro.gif", type: GameAssetType.IMAGE },
			{ url: "/_images/games/neon-caves/press-kit/square.jpg", type: GameAssetType.IMAGE, size:"full" },
			{ url: "/_images/games/neon-caves/press-kit/banner-2x1.jpg", type: GameAssetType.IMAGE, size:"full" }
		]
	},
	press: {
		releaseDates: [
			"27th March 2019 (Nintendo Switch)",
			"14th August 2014 (OUYA)"
		],
		prices: [
			{ currency: "GBP (Steam)", value: "£3.99" },
			{ currency: "USD (Steam)", value: "$3.99" },
			{ currency: "EUR (Steam)", value: "€3.99" }
		],
		histories: [
			{
				type: "p",
				text: "In July 2013 we were approached by <a href='http://indiestatik.com/' target='new'>Indie Statik</a> to create a game exclusively for their Kickstarter <a href='https://www.kickstarter.com/projects/877458309/indie-statik' target='new'>Game Pack</a>. We like making games, and we like Indie Statik, so we said yes! The game was ready in October 2013 and was released to the backers in January 2014.<br/><br/>In August of the same year, after upgrading the game resolution and polishing it up for a TV experience, Neon Caves released worldwide on the OUYA Android micro-console. <br/><br/>\
\
		Five years on, after a life of relative solitude, it's now coming to Nintendo Switch. Can you top the leaderboard?"
			}
		],
		awards: [
			{
				description: "PAX Playlist, Ouya Booth",
				info: "PAX Prime, 2014"
			},
			{
				description: "Game of the Show!",
				info: "Extended Play Festival, 2013"
			}
		],
		quotes: [
			{
				description: "An insane new spiritual successor that aims to outdo its predecessor in sheer retro-infused craziness alone. If you’re looking for an awesome new shooter with a killer art style and a bit of depth, you’ll definitely want to check out Neon Caves.",
				name: "Craig Forshey",
				website: "Super Game Droid",
				link: "http://www.supergamedroid.com/2014/08/15/psychedelic-new-shooter-neon-caves-arrives-exclusively-on-ouya/"
			},
			{
				description: "Neon Caves doesn’t just have crabs you can fight. No, these crabs are ancient, monstrous things. They are… giant enemy crabs. Yeah.",
				name: "Connor Selinske",
				website: "Indie Game Mag",
				link: "http://indiegamemag.com/neon-caves-lighting-up-ouya-next-week/"
			},
			{
				description: "I wanted to jump on the announcement for Neon Caves' release because I like the studio involved.",
				name: "Chris Carter",
				website: "Destructoid",
				link: "http://www.destructoid.com/neon-caves-is-out-today-on-ouya-279604.phtml"
			},
			{
				description: "An eclectic mix of retro shooter and modern twin-stick shooters. The game has an achievement called \"Nic Cage\". Just remember that.",
				name: "Andres Ruiz",
				website: "Twinfinite",
				link: "http://www.twinfinite.net/2014/08/14/neon-caves-arrives-exclusively-ouya-today-complete-nic-cage-achievement/"
			},
			{
				description: "Neon Caves is a very odd shooter. It’s a bit tricky to get the hang of, but it’s fun. It’s worth picking up.",
				name: "Jeremy Peeples",
				website: "Hardcore Gamer",
				link: "http://www.hardcoregamer.com/2014/08/14/neon-caves-released-on-the-ouya/98976/"
			},
			{
				description: "Friendship Club developers Force Of Habit have just announced that their new shoot-em-up, Neon Caves.",
				name: "Tim Wee",
				website: "Siliconera",
				link: "http://www.siliconera.com/2014/08/13/endless-shooter-neon-caves-arriving-exclusively-ouya/"
			}
		],
		socials: [],
		credits: [
			{
				person: "Ashley Gwinnell",
				role: "Designer & Developer, Force Of Habit"
			},
			{
				person: "Terra Lauterbach",
				role: "Art & Animation, Freelance",
				link: "https://rottentater.com/"
			},
			{
				person: "Joe Williamson",
				role: "Music, Freelance",
				link: "https://joecreates.co.uk/"
			},
			{
				person: "Ashley Gwinnell",
				role: "SFX, Force Of Habit"
			}
		]
	}
};

export default Game_NeonCaves;
