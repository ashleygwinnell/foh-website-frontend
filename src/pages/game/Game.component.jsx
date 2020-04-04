// ./src/game/Game.component.jsx
import React, { Component } from 'react';

import Games from '../../config/Games.js'

import GameStatus from './GameStatus.js'
import GameStore from './GameStore.js'
import GameAssetType from './GameAssetType.js'

import GameHelper from '../../helpers/GameHelper.js'

import GamePlatformLinks from './GamePlatformLinks.component.jsx'
import GameExtraLinks from './GameExtraLinks.component.jsx'
import GameAssets from './GameAssets.component.jsx'
import GameAsset from './GameAsset.component.jsx'
import GameDescription from './GameDescription.component.jsx'

class Game extends React.Component {
	constructor(props) {
		super(props);
		if (props.latest) {
			this.state = Games[0];
		}
		else if (props.game) {
			this.state = props.game;
		}
	}

	getButtons() {
		if (this.state.buttons && this.state.buttons.length > 0) {
			var b = this.state.buttons[0];
			if (b.type == "disabled") {
				return (<div className='download-button not-available'>{b.text}</div>);
			}
			return (<a className='download-button-a' href={b.url} target='new'>
						<div className='download-button'>{b.text}</div>
					</a>);
		}
		return <div className='no-button'></div>;
	}
	hasFeaturesInDescription(desc) {
		for(var i = 0; i < desc.length; i++) {
			if (desc[i].type == "features") {
				return true;
			}
		}
		return false;
	}
    render() {
        return (<div id={this.state.nameSafe} className='game-container' game-type={this.state.status} game-id={this.state.id}>
					<div className='container'>
						<div className='row'>
							<div className='span7'>
								<GameAssets assets={GameHelper.getFrontpageAssets(this.state)}/>
							</div>
							<div className='span5'>
								<h1 className='prehead'>{this.state.status}</h1>
								<h1 className='plain'>{this.state.name}</h1>
								<div className='spacer'></div>
								<div className='platforms'>
									<GamePlatformLinks links={this.state.platforms}/>
								</div>
								{this.getButtons()}
								<div className='spacer'></div><br/>


								<GameDescription data={this.state.descriptions.short} game={this.state} />

								{this.state.features && this.state.features.length > 0 && !this.hasFeaturesInDescription(this.state.descriptions.short) &&
									<div>
										<h2 className='pretitle'>Features</h2>
										<ul className='myul'>
										{this.state.features.map(feature =>
											(<li key={feature} dangerouslySetInnerHTML={{__html:feature}}></li>)
										)}
										</ul>
										<br/><br/>
									</div>
								}

								{this.state.links && this.state.links.length > 0 &&
									<div>
										<div className='spacer'></div>
										<GameExtraLinks links={this.state.links}/>
									</div>
								}


							</div>
						</div>
					</div>
				</div>);
    }
}

export default Game
