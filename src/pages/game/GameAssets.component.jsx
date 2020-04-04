import React, { Component } from 'react';

import GameAsset from './GameAsset.component.jsx'

class GameAssets extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var countImages = 0;
		if (!this.props.assets) { return null }
		return this.props.assets.map((asset, index) => {
			return <GameAsset key={asset.url} asset={asset} />
		});
	}
};

export default GameAssets;
