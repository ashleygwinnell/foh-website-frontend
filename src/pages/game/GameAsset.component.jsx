import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import './GameAssets.css'
import GameAssetType from './GameAssetType.js'

class GameAsset extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const asset = this.props.asset;
		if (asset.enabled === false) { return null; }

		if (asset.type == GameAssetType.YOUTUBE) {
			const light = asset.thumbnail?asset.thumbnail:"false";
			return (<div key={asset.url} className='player-wrapper'>
						<ReactPlayer url={asset.url} light={light} className='react-player' width='100%' height='100%'/>
					</div>);
		}
		else if (asset.type == GameAssetType.BANDCAMP) {
			return (<iframe key={asset.url} width="100%" style={{border: 0, height: 120}} src={asset.embed} seamless></iframe>);
		}
		else if (asset.type == GameAssetType.IMAGE) {
			var className = "game-image-main";
			if (asset.size != "full") {
				className = "span3p5 hidden-phone";
			}
			//const className = (countImages == 0)?"game-image-main":"span3p5 hidden-phone";
			//countImages++;
			return (<img key={asset.url}  className={className} src={asset.url} />);
			//return (<img class='span3p5 hidden-phone'  src='/press/toast_time/images/new-1.png'/>);
		}
		return null;
	}
}
export default GameAsset;
