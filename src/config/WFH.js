import GameStatus from '../pages/game/GameStatus.js'
import GameStore from '../pages/game/GameStore.js'
import GameAssetType from '../pages/game/GameAssetType.js'

// Serve this data from a backend?
const WFH = [
	{
		id: 8,
		nameSafe: "minus-miners",
		name: "Minus Miners",
		status: "MANGAHIGH",
		descriptions: {
			oneLine: "Use your expertise with negative numbers to mine resources and save your village.",
			short: [
				{ type: "p", text: "Working with the team at <a href='https://www.mangahigh.com/' target='new'>Mangahigh</a> to develop an educational web/mobile game to help school children learn all about negative numbers in Mathematics." },
				{ type: "i", text: "\"Use your expertise with negative numbers to mine resources and save your village.\"" },
				{ type: "list", name: "Tools", list: [ "HTML5", "Phaser", "JavaScript (ES6, Node, Webpack)", "DragonBones" ]}
			]
		},
		platforms: [
			{ type: GameStore.WEB, url: "https://www.mangahigh.com/en-gb/games/minusminers" }
		],
		assets: {
			frontpage: [1,2,3],
			all: [
				{ key: 1, url: "/_images/wfh/minusminers/minusminers.png", type: GameAssetType.IMAGE, size:"full" },
				{ key: 2, url: "/_images/wfh/minusminers/1.jpg", type: GameAssetType.IMAGE },
				{ key: 3, url: "/_images/wfh/minusminers/2.jpg", type: GameAssetType.IMAGE }
			]
		}
	},
	{
		id: 7,
		nameSafe: "bing-camping",
		name: "Bing Camping",
		status: "AARDMAN ANIMATIONS / BBC/ ACAMAR",
		descriptions: {
			oneLine: "Learning about emotions and needs on a camping trip with Bing and his friends!",
			short: [
				{ type: "p", text: "Working with the team at <a href='https://www.aardman.com/' target='new'>Aardman Animations</a> to develop a game to help teach children about emotions and behaviours." },
				{ type: "p", text: "Go camping with Bing and his friends!" },
				{ type: "list", name: "Tools", list: [ "HTML5", "PIXI.js (custom fork)", "JavaScript (TypeScript, Node, Grunt)", "Spine", "Custom PWA Wrapper" ]}
			]
		},
		platforms: [
			{ type: GameStore.IOS, url: "https://itunes.apple.com/gb/app/go-explore-from-cbeebies/id1444626898?mt=8" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=uk.co.bbc.cbeebiesgoexplore" }
		],
		assets: {
			frontpage: [1,2],
			all: [
				{ key: 1, url: "https://www.youtube.com/embed/HqYhxBBZ-WI", type: GameAssetType.YOUTUBE, size:"full", thumbnail: "/_images/wfh/bingcamping/2v2.png" },
				{ key: 2, url: "/_images/wfh/bingcamping/3.png", type: GameAssetType.IMAGE, size:"full" },
				{ key: 3, url: "/_images/wfh/bingcamping/4.png", type: GameAssetType.IMAGE, size:"full" }
			]
		}
	},
	{
		id: 6,
		nameSafe: "cbeebies-go-explore",
		name: "CBeebies Go Explore",
		status: "AARDMAN ANIMATIONS / BBC",
		descriptions: {
			oneLine: "A pack filled with fun games that help your little one learn and discover with their CBeebies friends!",
			short: [
				{ type: "p", text: "Working with the interactive team at <a href='https://www.aardman.com/' target='new'>Aardman Animations</a> to produce a mobile app to help little ones develop life skills and prepare them for primary school and beyond." },
				{ type: "p", text: "CBeebies Go Explore is packed with fun games that help your little one learn and discover with their CBeebies friends!" },
				{ type: "p", text: "Each game in Go Explore draws on the Early Years curriculum, helping children as they grow, building up their skills and understanding ready to start school. Games cover a range of topics from exploring different geographical habitats with the Go Jetters, to helping guests at the Furchester Hotel make healthy choices." },
				{ type: "p", text: "You can also visit the Den area to discover what games your child has been playing and find out more about the subjects covered in the games." },
				{ type: "list", name: "Tools", list: [ "HTML5", "PIXI.js (custom fork)", "JavaScript (TypeScript, Node, Grunt)", "Spine", "Custom PWA Wrapper" ]}
			]
		},
		platforms: [
			{ type: GameStore.IOS, url: "https://itunes.apple.com/gb/app/go-explore-from-cbeebies/id1444626898?mt=8" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=uk.co.bbc.cbeebiesgoexplore" }
		],
		assets: {
			frontpage: [1,2,3,4],
			all: [
				{ key: 1, url: "https://www.youtube.com/embed/z2fZtzEFRJ4", type: GameAssetType.YOUTUBE, size:"full", thumbnail: "/_images/wfh/goexplore/title.png" },
				{ key: 3, url: "/_images/wfh/goexplore/2.jpg", type: GameAssetType.IMAGE, size:"full" },
				{ key: 4, url: "/_images/wfh/goexplore/3.jpg", type: GameAssetType.IMAGE, size:"full" }
			]
		}
	},
	{
		id: 5,
		nameSafe: "earlymanrun",
		name: "Early Man Run",
		status: "AARDMAN ANIMATIONS",
		descriptions: {
			oneLine: "Help Dug, Hognob and Goona escape the clutches of dastardly Lord Nooth and his giant Bronze Age mammoths!",
			short: [
				{ type: "p", text: "Working with the interactive team at <a href='https://www.aardman.com/' target='new'>Aardman Animations</a> to produce the \"Early Man\" Official Movie Game!" },
				{ type: "p", text: "Help Dug, Hognob and Goona escape the clutches of dastardly Lord Nooth and his giant Bronze Age mammoths!" },
				{ type: "p", text: "Race through prehistoric landscapes straight from the film, grabbing bronze coins and football cards to unlock power ups! Defeat Nooth in a penalty shoot-out at the end of each stage for bonus coins!" },
				{ type: "list", name: "Tools", list: [ "HTML5", "Phaser", "JavaScript (TypeScript, Node, Grunt)", "Apache Cordova (PhoneGap)" ]}
			]
		},
		platforms: [
			{ type: GameStore.WEB, url: "https://www.earlymanmovie.com/games.php?lang=en" },
			{ type: GameStore.IOS, url: "https://apps.apple.com/gb/app/early-man-run/id1328282955" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=com.aardman.earlymanrun" }
		],
		assets: {
			frontpage: [1,2, 3,4],
			all: [
				{ key: 1, url: "https://www.youtube.com/embed/tIlF3NLVqqk", type: GameAssetType.YOUTUBE, size:"full", thumbnail: "/_images/wfh/earlymanrun/video-thumb.jpg" },
				{ key: 2, url: "/_images/wfh/earlymanrun/1.jpg", type: GameAssetType.IMAGE, size:"full" },
				{ key: 3, url: "/_images/wfh/earlymanrun/2.jpg", type: GameAssetType.IMAGE },
				{ key: 4, url: "/_images/wfh/earlymanrun/3.png", type: GameAssetType.IMAGE }
			]
		}
	},
	{
		id: 4,
		nameSafe: "pantosaurus",
		name: "Playtime with Pantosaurus",
		status: "AARDMAN ANIMATIONS / NSPCC",
		descriptions: {
			oneLine: "Helping keep children safe, starring Pantosaurus!",
			short: [
				{ type: "p", text: "Working with the interactive team at <a href='https://www.aardman.com/' target='new'>Aardman Animations</a> to produce a mobile game to help keep children safe from sexual abuse." },
				{ type: "p", text: "Playtime with Pantosaurus features four fun mini-games where players can test their skills against Pantosaurus and his friends whilst learning the <a href='https://www.nspcc.org.uk/preventing-abuse/keeping-children-safe/underwear-rule/'>PANTS</a> rules to keep themselves safe." },
				{ type: "p", text: "In between each mini-game children are quizzed on the PANTS rules to help reinforce their understanding of how to stay safe." },
				{ type: "list", name: "Tools", list: [ "Unity (C#)", "Puppet 2D", "MasterAudio" ]}
			]
		},
		platforms: [
			{ type: GameStore.IOS, url: "https://itunes.apple.com/gb/app/playtime-with-pantosaurus/id1258635349?mt=8" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=uk.org.nspcc.pantosaurus" }
		],
		assets: {
			frontpage: [1,2,3,4,5],
			all: [
				{ key: 1, url: "/_images/wfh/pantosaurus/3.png", type: GameAssetType.IMAGE, size:"full" },
				{ key: 2, url: "/_images/wfh/pantosaurus/5.png", type: GameAssetType.IMAGE },
				{ key: 3, url: "/_images/wfh/pantosaurus/4.png", type: GameAssetType.IMAGE },
				{ key: 4, url: "/_images/wfh/pantosaurus/2.png", type: GameAssetType.IMAGE },
				{ key: 5, url: "/_images/wfh/pantosaurus/6.png", type: GameAssetType.IMAGE }
			]
		}
	},
	{
		id: 3,
		nameSafe: "attenboroughs-adventures",
		name: "Attenborough's Adventures / Storytime",
		status: "BBC NATURAL HISTORY UNIT",
		descriptions: {
			oneLine: "Follow Sir David at various stages of his life, from his early days filming Zoo Quest, right up to his debut in virtual reality in 2016.",
			short: [
				{ type: "p", text: "Working with the <a href='https://www.bbcstudios.com/teams/the-natural-history-unit/' target='new'>BBC Natural History Unit</a> and artist <a href='http://wilbojonson.tumblr.com/' target='new'>Will Rose</a> to produce a set of 5 interactive stories inspired by David Attenborough's natural history documentaries." },
				{ type: "p", text: "Attenborough’s Adventures follows Sir David at various stages of his life, from his early days filming Zoo Quest in the 1950s right up to his debut in virtual reality for 2016’s Attenborough And The Giant Dinosaur." },
				{ type: "p", text: "Children read and play along with the stories by, for example, helping Sir David to pack his adventure kit, moving jungle plants aside for him and by tracking the gorillas’ path through the jungle." },
				{ type: "list", name:"STORIES:", list: [ "Attenborough's Adventures: David and the Gorilla Quest", "Attenborough's Adventures: David and the Giant Dinosaur",  "Attenborough's Adventures: David and the Hidden City",  "Attenborough's Adventures: David and the Dragon", "Attenborough's Adventures: David the Treasure Hunter" ]},
				{ type: "list", name:"Tools", list: [ "Adobe Animate (Flash)", "Adobe Air", "Adobe Photoshop", "Custom" ]}
			]
		},
		platforms: [
			{ type: GameStore.IOS, url: "https://itunes.apple.com/gb/app/bbc-cbeebies-storytime/id891730883" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=air.uk.co.bbc.cbeebiesstorytime" }
		],
		assets: {
			frontpage: [1,2],
			all: [
				{ key: 1, url: "/_images/wfh/attenborough/1.jpg", type: GameAssetType.IMAGE, size:"full" },
				{ key: 1, url: "/_images/wfh/attenborough/2.jpg", type: GameAssetType.IMAGE, size:"full" }
			]
		}
	},
	{
		id: 2,
		nameSafe: "sustainable-shaun",
		name: "Sustainable Shaun",
		status: "AARDMAN ANIMATIONS / BRISTOL 2015 / EUROPEAN COMMISSION",
		descriptions: {
			oneLine: "Help Shaun the Sheep build his own sustainable settlement for the strays of the Big City",
			short: [
				{ type: "p", text: "Working with the interactive team at <a href='https://www.aardman.com/' target='new'>Aardman Animations</a> to produce a mobile game to teach children how to create a cleaner, healthier and more sustainable future." },
				{ type: "p", text: "Help Shaun the Sheep build his own sustainable settlement for the strays of the Big City." },
				{ type: "list", name:"Players must keep the strays happy by:", list: [ "Collecting recycled materials in a fun match-three game.", "Building and upgrading one of ten sustainable creations in a creative crafting game.", "Planning and managing their settlement in a city building/management game." ]},
				{ type: "list", name:"Tools", list: [ "HTML5", "Phaser", "JavaScript (Closure)", "Apache Cordova (PhoneGap)" ]}
			]
		},
		platforms: [
			{ type: GameStore.WEB, url: "http://ec.europa.eu/environment/sustainableshaun/game_en.htm" },
			{ type: GameStore.IOS, url: "https://itunes.apple.com/us/app/sustainable-shaun/id1244060240" },
			{ type: GameStore.ANDROID, url: "https://play.google.com/store/apps/details?id=com.aardman.susshaun" }
		],
		assets: {
			frontpage: [1,2,3,4,5],
			all: [
				{ key: 1, url: "/_images/wfh/sustainableshaun/SusShaun_CaseStudyImage.png", type: GameAssetType.IMAGE, size:"full" },
				{ key: 2, url: "/_images/wfh/sustainableshaun/sustainableshaun1.jpg", type: GameAssetType.IMAGE },
				{ key: 3, url: "/_images/wfh/sustainableshaun/sustainableshaun2.jpg", type: GameAssetType.IMAGE },
				{ key: 4, url: "/_images/wfh/sustainableshaun/sustainableshaun3.jpg", type: GameAssetType.IMAGE },
				{ key: 5, url: "/_images/wfh/sustainableshaun/sustainableshaun4.jpg", type: GameAssetType.IMAGE }
			]
		}
	},
	{
		id: 1,
		nameSafe: "ballot-bots",
		name: "Ballot Bots",
		status: "AUROCH DIGITAL / BBC TASTER",
		descriptions: {
			oneLine: "A fun political-puzzle quiz-game!",
			short: [
				{ type: "p", text: "Working with the Game the News team at <a href='https://www.aurochdigital.com/' target='new'>Auroch Digital</a> to produce a web & mobile game aimed at engaging an audience facing it's first election." },
				{ type: "p", text: "Ballot Bots is a fun, puzzle-style game in which you have to pair up the Politician bots with their respective Voters. Collecting bonuses along the way allows you more moves, and answering political quiz questions gives you bonus points. These questions both inform and challenge the player to take up an interest in the world of politics." },
				{ type: "p", text: "The player works their way towards Downing Street through various different zones which have been highlighted as key points within this election. They are: Education, Immigration, Housing, Cost of Living, The NHS." },
				{ type: "list", name:"Tools", list: [ "HTML5", "Phaser", "JavaScript (Closure)" ]}
			]
		},
		platforms: [
			{ type: GameStore.WEB, url: "https://www.bbc.co.uk/taster/pilots/ballotbots" }
		],
		assets: {
			frontpage: [1,2,3,4,5],
			all: [
				{ key: 1, url: "/_images/wfh/ballotbots/1.png", type: GameAssetType.IMAGE, size:"full" },
				{ key: 2, url: "/_images/wfh/ballotbots/2.png", type: GameAssetType.IMAGE },
				{ key: 3, url: "/_images/wfh/ballotbots/3.png", type: GameAssetType.IMAGE },
				{ key: 4, url: "/_images/wfh/ballotbots/4.png", type: GameAssetType.IMAGE },
				{ key: 5, url: "/_images/wfh/ballotbots/5.png", type: GameAssetType.IMAGE }
			]
		}
	}
];

export default WFH;
