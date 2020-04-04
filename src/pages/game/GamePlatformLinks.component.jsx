import React, { Component } from 'react';
import GameStore from './GameStore.js'

class GamePlatformLinks extends React.Component {
	constructor(props) {
		super(props);
		this.iconPaths = {};
		this.iconPaths[GameStore.STEAM] = "/_images/icons/icon-steam.png";
		this.iconPaths[GameStore.ANDROID] = "/_images/icons/icon-android.png";
		this.iconPaths[GameStore.IOS] = "/_images/icons/icon-ios.png";
		this.iconPaths[GameStore.WINDOWS] = "/_images/icons/icon-windows.png";
		this.iconPaths[GameStore.MAC] = "/_images/icons/icon-osx.png";
		this.iconPaths[GameStore.WEB] = "/_images/icons/icon-web.png";
		this.iconPaths[GameStore.OUYA] = "/_images/icons/icon-ouya.png";
		this.iconPaths[GameStore.NINTENDOSWITCH] = "/_images/icons/icon-switch.png";
		this.iconPaths[GameStore.GAMEJOLT] = "/_images/icons/icon-web.png";
	}
	render() {
		return this.props.links.map((link) => {
			return (<a key={link.type} href={link.url} target='new'>
						<div className='platform'>
							<div className='icon'><img src={this.iconPaths[link.type]}/></div>
							{link.type}
						</div>
					</a>);
		});
	}
};
export default GamePlatformLinks
