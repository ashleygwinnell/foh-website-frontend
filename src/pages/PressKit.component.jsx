// ./src/Blog.component.jsx
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Route, Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player'
import ReactMarkdown from 'react-markdown/with-html';

import Page from './parts/Page.component.jsx'
import PressKit_Company from "./press/Company.component.jsx";
import PressKit_Game from "./press/Game.component.jsx";

import TitleBanner from "./parts/TitleBanner.component.jsx";

import CompanyData from '../config/Company.js'
import GamesData from '../config/Games.js'

class PressKit extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			company: CompanyData,
			game: null,
			loading: true,
			valid: true
		};
	}
	componentDidMount() {
		this.updateGame();
	 	this.setState({loading:false});
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate', this.props, this.state);
		this.updateGame();
	}
	updateGame() {
		
	}
	componentWillUnmount() {
		// this.state;
	}

	get currentGameName() {
		const games = GamesData.filter((game) => game.nameSafe == this.props.match.params.game);
		if (games.length > 0) {
			return games[0].name;
		}
		return "";
		//this.props.match.params.game
		//return ((this.state.game)?this.state.game.name:"");
	}
    render() {
    	if (this.state.loading) {
    		return null;
    	}
    	if (!this.state.valid) {
    		return <Redirect to="/press" />
    	}

    	return (<Page>
    				<Route exact path="/press">
    					<Helmet>
	                        <title>{__SITE_NAME} - Press Kit</title>
	                    </Helmet>
						<TitleBanner title="Press Kit" />
						<div className='top-banner-spacer'></div>
						<div className='top-banner-spacer visible-phone'></div>
						<PressKit_Company company={this.state.company}/>
					</Route>
					<Route exact path="/press/:game">
						<Helmet>
	                        <title>{__SITE_NAME} - Press Kit - {this.currentGameName}</title>
	                    </Helmet>
						<TitleBanner title={"Press Kit - " + this.currentGameName} />

						<div className='top-banner-spacer'></div>
						<div className='top-banner-spacer visible-phone'></div>

						{this.state.valid && <PressKit_Game company={this.state.company} game={this.props.match.params.game}/>}
					</Route>

				</Page>);
    }
}


// ... computed data from state and optionally ownProps
// const mapStateToProps = (state, ownProps) =>{
// 	// const p = GamesData[ownProps.game]
// 	const game = GamesData.filter(game => game.nameSafe == this.props.match.params.game);

// 	const c = {
// 		game: game
// 	};
// 	//console.log('mapStateToProps', state, ownProps);
// 	//console.log(state.blog.meta.loading, p);
// 	//console.log('result', c);
// 	return c;
// }

//export default connect()(PressKit);
export default PressKit;
