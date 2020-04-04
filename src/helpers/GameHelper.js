import GameAssetType from '../pages/game/GameAssetType.js'

class GameHelper {
	static getFrontpageAssets(game) {
		const keys = game.assets.frontpage;
		return game.assets.all.filter(f => keys.indexOf(f.key) >= 0);
	}
	static getAppIcon(game) {
		if (game == null) { return null; }
		const result = game.assets.all.filter(f => f.type == GameAssetType.APPICON);
		if (result == null || result.length == 0) {
			return null;
		}
		return result[0];
	}
	static getLogo(game) {
		if (game == null) { return null; }
		const result = game.assets.all.filter(f => f.type == GameAssetType.LOGO);
		if (result == null || result.length == 0) {
			return null;
		}
		return result[0];
	}
	static getImages(game) {
		if (game == null) { return []; }

		return game.assets.all.filter(f => f.type == GameAssetType.IMAGE);
	}
	static getVideos(game) {
		if (game == null) { return []; }
		return game.assets.all.filter(f => f.type == GameAssetType.YOUTUBE || f.type == GameAssetType.FACEBOOK);
	}
}

export default GameHelper;
