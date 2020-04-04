import GameAssetType from '../pages/game/GameAssetType.js'

import Description from './CompanyDescription.md';

const Company = {
	title: "Force Of Habit",
	foundingDate: "3 September, 2012",
	website: "https://forceofhab.it/",
	pressContact: "contact@forceofhab.it",
	basedIn: "Bristol, United Kingdom",
	analytics: "UA-34600531-1",
	socials: [
		{
			"name": "Twitter",
			"link": "http://twitter.com/forcehabit"
		},
		{
			"name": "Facebook",
			"link": "http://facebook.com/forcehabit"
		},
		{
			"name": "Instagram",
			"link": "http://instagram.com/forceofhabitgames"
		},
		{
			"name": "Discord",
			"link": "http://discord.gg/forceofhabit"
		},
		{
			"name": "YouTube",
			"link": "http://youtube.com/forcehabit"
		}
	],
	addressLines: [
		"16 Chatterton Green",
		"Whitchurch",
		"Bristol",
		"BS14 0DQ"
	],
	phone: "N/A",
	description: Description,
	histories: [
		{
			"history": {
				"header": "History",
				"text": {}
			}
		}
	],
	features: null,
	trailers: [
		{
			name: "Bristol TV - Neon Caves Interview",
			url: "https://www.facebook.com/BristolLocalTV/videos/860763450933747/",
			thumbnail: "/_images/press-kit/video-thumbs/neon-caves-interview.jpg",
			type: GameAssetType.FACEBOOK
		},
		{
			name: "EGX TV - Friendship Club Interview",
			url: "https://www.youtube.com/embed/3RC7o0uqiWo",
			thumbnail: "/_images/press-kit/video-thumbs/tbfc.jpg",
			type: GameAssetType.YOUTUBE
		},
		{
			name: "EGX Rezzed - Game Jam presentation (43:50)",
			url: "https://www.youtube.com/embed/ypykH8YBV0w?t=43m50s",
			thumbnail: "/_images/press-kit/video-thumbs/egx-rezzed-jam.jpg",
			type: GameAssetType.YOUTUBE
		},
		{
			name: "Explay 2012 - Nick Dymond interview",
			url: "https://www.youtube.com/embed/t4uY-U86_fw",
			thumbnail: "/_images/press-kit/video-thumbs/explay.jpg",
			type: GameAssetType.YOUTUBE
		}
	],
	awards: [
		{
			description: "Winner, Technical Achievement.",
			info: "Jamchester (Manchester). June, 2017.",
			visible: true
		},
		{
			description: "Second place for \"Mr. Bit: Vacuuming Extraordinaire\".",
			info: "Global Game Jam (Watershed, Bristol). January, 2016",
			visible: false
		},
		{
			description: "Nomination, Best Coder/Developer.",
			info: "TechSPARKies. October, 2014",
			visible: true
		},
		{
			description: "Nomination, Best New Studio.",
			info: "Develop Awards, 2014",
			visible: true
		},
		{
			description: "People's Choice Indie Award for \"Timmy Bibble's Friendship Club\".",
			info: "GEEK 2014. 23 February, 2014",
			visible: false
		},
		{
			description: "Best Game / Grand Prize for \"Timmy Bibble's Friendship Club\".",
			info: "TIGA Game Hack. 17 November, 2013",
			visible: false
		},
		{
			description: "Winner, Best New IP.",
			info: "TIGA Awards. 6 November, 2013",
			visible: true
		},
		{
			description: "Nomination, Best Start-Up.",
			info: "TIGA Awards. 14 October, 2013",
			visible: true
		},
		{
			description: "Game of the Show for \"Neon Caves\", Explay Festival.",
			info: "Assembly Rooms, Bath. 1 November, 2013",
			visible: false
		},
		{
			description: "Highly Commended, Explay Festival Game Jam.",
			info: "Assembly Rooms, Bath. 1 November, 2012",
			visible: false
		},
		{
			description: "Winner, 'Gamify Your PhD'.",
			info: "Wellcome Trust, London. 4 September, 2012",
			visible: true
		},
		{
			description: "Runner Up (2nd place), Explay Festival Game Jam.",
			info: "National Marine Aquarium, Plymouth. 3 November, 2011",
			visible: false
		}
	],
	quotes: [
		{
			"description": "Stalwarts of numerous jams who craft games of striking quality.",
			"name": "Martin Robinson",
			"website": "Eurogamer",
			"link": "http://www.eurogamer.net/articles/2013-07-03-rezzed-game-jam-2013"
		},
		{
			"description": "Force Of Habit & Clockwork Cuckoo win Wellcome Trust \"Gamify Your PhD\" game jam.",
			"name": "Paul Dean",
			"website": "IndieN",
			"link": "http://www.pcgamesn.com/indie/game-set-inside-colon-wins-wellcome-trusts-first-gamejam"
		},
		{
			"description_old": "Scientist and developer team wins Wellcome Trust dev contest",
			"description": "Intestinal immunology in the form of a tunnel shooter not dissimilar to Jeff Minter's iconic game 'Tempest'.",
			"name": "Will Freeman",
			"website": "Develop Online",
			"link": "http://www.develop-online.net/news/41882/Scientist-and-developer-team-wins-Wellcome-Trust-dev-contest"
		}
	],
	additionals: [
		{
			"title": "Ashley Gwinnell on Twitter",
			"description": "Personal twitter for Ashley Gwinnell (@ashleygwinnell) available at ",
			"link": "http://twitter.com/ashleygwinnell"
		}
	],
	credits: [
		{
			"person": "Ashley Gwinnell",
			"role": "Director. Art & Programming",
			"website": "http://forceofhab.it/"
		},
		{
			"person": "Nick Dymond",
			"role": "Former Director. Audio & Design (Left January 2016)",
			"website": "http://monomoon.co.uk/"
		}
	],
	contacts: [
		{
			"name": "Enquiries",
			"mail": "contact@forceofhab.it"
		},
		{
			"name": "Twitter",
			"link": "http://twitter.com/forcehabit"
		},
		{
			"name": "Facebook",
			"link": "http://facebook.com/forcehabit"
		},
		{
			"name": "Web",
			"link": "http://forceofhab.it/"
		}
	]
};

export default Company;
