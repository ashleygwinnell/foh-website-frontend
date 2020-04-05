import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';

import GameHelper from '../../helpers/GameHelper.js'
import GameAsset from '../game/GameAsset.component.jsx'
import GameDescription from '../game/GameDescription.component.jsx'
import GamesData from '../../config/Games.js'

class PressKit_Game extends React.Component {
	constructor(props) {
		super(props);

		let game;
		let valid = false;
 		const games = GamesData.filter((game) => game.nameSafe == this.props.game);
 		if (games.length > 0) {

			if (games[0].press != null) { // must have press data  to  be in the press kit...
				game = games[0];
				valid = true;
			}

	 	}

		this.state = {
			game: game,
			valid: valid,
			icon: GameHelper.getAppIcon(game),
			logo: GameHelper.getLogo(game),
			images: GameHelper.getImages(game),
			videos: GameHelper.getVideos(game)
		};
	}
	getMailToLink() {
		var mailtoLink = "mailto:" + this.props.company.pressContact;
		mailtoLink += "?subject=Request Press Copy - " + this.game.name;
		mailtoLink += "&body=My name is [              ], my email address is [              ] and I write for or make videos for [              ]. Thanks!";
		return mailtoLink;
	}
	get game() {
		return this.state.game; // this.game;
	}
	render() {
		if (!this.state.valid ){
			return <Redirect to="/press" />
		}
		// console.log(this.state.game);
		return (<div className='container presskit'>
					<div className='row post'>
						<div className='span4'>
							<h2 className="pretitle">Navigate</h2>
							<ul className='presskit'>
								<li><Link to='/press'>Back</Link></li>
							</ul>
							<br/><br/>

							<h2 className='pretitle'>Developer:</h2>
							<p><Link to='/press'>{this.props.company.title}</Link><br/>
							Based in {this.props.company.basedIn}</p><br/>

							{this.game.press.releaseDates &&
								<div>
									<h2 className='pretitle'>Release date:</h2>
									<ul className='presskit'>
										{this.game.press.releaseDates && this.game.press.releaseDates.map(date =>
											(<li key={date}>{date}</li>)
										)}
									</ul>
									<br/>
								</div>}

							{this.game.platforms &&
								<div>
									<h2 className='pretitle'>Platforms:</h2>
									<ul className='presskit'>
										{this.game.platforms.map(platform =>
											(<li key={platform.type}><a href={platform.url}>{platform.type}</a></li>)
										)}
									</ul>
									<br/>
								</div>}


							{this.game.website &&
								<div>
									<h2 className='pretitle'>Website:</h2>
									<p><a href={this.game.website}>{this.game.website}</a></p><br/>
								</div>}


							{this.game.press.prices && this.game.press.prices.length > 0 &&
								<div>
									<h2 className='pretitle'>Regular Price:</h2>
									<table className="presskit table">
										<tbody>
											{this.game.press.prices.map(price =>
												(<tr key={price.currency}><td>{price.currency}</td><td>{price.value}</td></tr>)
											)}
										</tbody>
									</table>
									<br/>
								</div>}

							{this.game.press.socials && this.game.press.socials.length > 0 &&
								<div>
									<h2 className='pretitle'>Social:</h2>
									<ul className='presskit'>
										{this.game.press.socials.map(social =>
											(<li key={social.link}><a href={social.link}>{social.name}</a></li>)
										)}
									</ul>
								</div>}

						</div>
						<div className='span8 content'>
							<img src={"/_images/games/" + this.game.nameSafe + "/press-kit/header.png"} title={this.game.name} alt={this.game.name} /><br/><br/>

							<h2 className='pretitle'>Description</h2>
							<GameDescription data={this.game.descriptions.full}/><br/>

							{this.game.features && this.game.features.length > 0 &&
								<div>
									<h2 className='pretitle'>Features</h2>
									<ul className='presskit'>
									{this.game.features.map(feature =>
										(<li key={feature} dangerouslySetInnerHTML={{__html:feature}}></li>)
									)}
									</ul>
									<br/><br/>
								</div>
							}

							{this.game.press.histories && this.game.press.histories.length > 0 &&
								<div>
									<h2 className='pretitle'>History</h2>
									<GameDescription data={this.game.press.histories}/>
									<br/>
								</div>
							}

							{this.state.videos.length > 0 &&
								<div>
									<h2 className='pretitle'>Videos</h2>
									<div className='row'>
										{this.state.videos.map((video, index) =>{
											return (<div key={video.url} className="span8">
												<p><a href={video.url} target='new'>{video.name}</a></p>
												<GameAsset asset={video} />
											</div>)
										})}
									</div><br/>
								</div>
							}

							{this.state.images.length > 0 &&
								<div>
									<h2 className='pretitle'>Screenshots</h2>
									<div className='row'>
										{this.state.images.map((image) => {
											return (<div key={image.url} className="span4" style={{marginBottom:16}}><a href={image.url}><img src={image.url} /></a></div>)
										})}
									</div>
									<br/>
								</div>
							}

							{this.state.logo != null &&
								<div>
									<h2 className='pretitle'>Logo</h2>
									<div className='row'>
										<div className="span4">
											<img src={this.state.logo.url}/>
										</div>
									</div>
									<br/><br/>
								</div>
							}

							{this.state.icon != null &&
								<div>
									<h2 className='pretitle'>Icon</h2>
									<div className='row'>
										<div className="span4">
											<img src={this.state.icon.url}/>
										</div>
									</div>
									<br/><br/>
								</div>
							}


							{
								// fonts todo
							}

							{
								// soundcloud clips todo?
							}

							{this.game.press.awards && this.game.press.awards.length > 0 &&
								<div>
									<h2 className='pretitle'>Awards &amp; Recognition</h2>
									<ul className='presskit'>
									{this.game.press.awards.map(award =>
										<li key={award.info}>"{award.description}" <cite>- {award.info}</cite></li>
									)}
									</ul><br/><br/>
								</div>
							}


							{this.game.press.quotes && this.game.press.quotes.length > 0 &&
								<div>
									<h2 className='pretitle'>Selected Articles</h2>
									<ul className='presskit'>
									{this.game.press.quotes.map(quote =>
										<li key={quote.description} style={{paddingBottom:10}}>"{quote.description}"<br/><cite>- {quote.name}, <a href={quote.link}>{quote.website}</a></cite></li>
									)}
									</ul><br/><br/>
								</div>
							}


							<h2 className='pretitle'>Request A Press Copy</h2>
							<a href={this.getMailToLink()}><button className='btn btn-large btn-default' style={{width:'100%'}}>Make Request!</button></a><br/>
							<br/><br/>

							<div className='row'>
								{this.game.press.credits && this.game.press.credits.length > 0 &&
									<div className='span4'>
										<h2 className='pretitle'>{this.game.name} Credits</h2>
										<ul className='presskit'>
										{this.game.press.credits.map((credit,index) => {
											if (!credit.website || credit.website.length == 0) {
												return <li key={index}><b className="white">{credit.person}</b><br/><i>{credit.role}</i></li>
											} else {
												return <li key={index}><a href={credit.website}><b>{credit.person}</b></a><br/><i>{credit.role}</i></li>
											}
										})}
										</ul>
										<br/>
									</div>}

								{this.props.company.contacts && this.props.company.contacts.length > 0 &&
									<div className='span4'>
										<h2 className='pretitle'>Contact</h2>
										{this.props.company.contacts.map((contact,index) => {
											contact.link = contact.link || ""
											contact.mail = contact.mail || ""
											if (contact.link.length == 0 && contact.mail.length > 0) {
												return (<p key={index}><strong>{contact.name}</strong><br/><a href={"mailto:" + contact.mail}>{contact.mail}</a></p>)
											}
											if( contact.link.length > 0 && contact.mail.length == 0 ) {
												return (<p key={index}><strong>{contact.name}</strong><br/><a href={contact.link}>{contact.link}</a></p>)
											}
											return null;
										})}
									</div>}
							</div>

						</div>
					</div>
				</div>);
	}
}
export default PressKit_Game;

